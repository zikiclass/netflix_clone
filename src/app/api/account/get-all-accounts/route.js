import connectToDB from "@/database";
import Account from "@/models/Account";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(req) {
  try {
    await connectToDB();

    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json({
        success: false,
        message: "User ID is required.",
      });
    }

    const getAllAccounts = await Account.find({ uid: id });

    if (getAllAccounts.length > 0) {
      return NextResponse.json({
        success: true,
        data: getAllAccounts,
      });
    } else {
      return NextResponse.json({
        success: false,
        message: "No accounts found.",
      });
    }
  } catch (e) {
    console.error("Error fetching accounts:", e);
    return NextResponse.json({
      success: false,
      message: "Something went wrong.",
    });
  }
}
