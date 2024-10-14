import mongoose, { Document, Schema } from "mongoose";

// User Interface
interface IUser extends Document {
  name?: string;
  email?: string;
  password?: string;
  emailVerified?: Date;
  image?: string;
  accounts?: mongoose.Types.ObjectId[]; 
  sessions?: mongoose.Types.ObjectId[];  
}

// Account Interface
interface IAccount extends Document {
  userId: mongoose.Types.ObjectId;
  type: string;
  provider: string;
  providerAccountId: string;
  refreshToken?: string;
  accessToken?: string;
  expiresAt?: number;
  tokenType?: string;
  scope?: string;
  idToken?: string;
  sessionState?: string;
}

// Session Interface
interface ISession extends Document {
  sessionToken: string;
  userId: mongoose.Types.ObjectId;
  expires: Date;
}

// Verification Token Interface
interface IVerificationToken extends Document {
  identifier: string;
  token: string;
  expires: Date;
}

// User Schema
const UserSchema: Schema = new Schema(
  {
    name: { type: String },
    email: { type: String, unique: true },
    password: { type: String },
    emailVerified: { type: Date },
    image: { type: String },
    accounts: [{ type: mongoose.Schema.Types.ObjectId, ref: "Account" }],
    sessions: [{ type: mongoose.Schema.Types.ObjectId, ref: "Session" }],
  },
  { timestamps: true }
);

// Account Schema
const AccountSchema: Schema = new Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    type: { type: String, required: true },
    provider: { type: String, required: true },
    providerAccountId: { type: String, required: true },
    refreshToken: { type: String },
    accessToken: { type: String },
    expiresAt: { type: Number },
    tokenType: { type: String },
    scope: { type: String },
    idToken: { type: String },
    sessionState: { type: String },
  },
  { timestamps: true }
);

// Session Schema
const SessionSchema: Schema = new Schema(
  {
    sessionToken: { type: String, required: true, unique: true },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    expires: { type: Date, required: true },
  },
  { timestamps: true }
);

// Verification Token Schema
const VerificationTokenSchema: Schema = new Schema(
  {
    identifier: { type: String, required: true },
    token: { type: String, required: true },
    expires: { type: Date, required: true },
  },
  { timestamps: true }
);

// Mongoose Models
const User = mongoose.models.User || mongoose.model<IUser>("User", UserSchema);
const Account =
  mongoose.models.Account || mongoose.model<IAccount>("Account", AccountSchema);
const Session =
  mongoose.models.Session || mongoose.model<ISession>("Session", SessionSchema);
const VerificationToken =
  mongoose.models.VerificationToken ||
  mongoose.model<IVerificationToken>(
    "VerificationToken",
    VerificationTokenSchema
  );


// Export Models
export { User, Account, Session, VerificationToken };
