import connectMongoDb from "@/libs/mongodb";
import SnippetModel from "@/model/snippet";
import { NextResponse } from "next/server";

export async function GET(request, {params}) {
    const {id} = await params;
    await connectMongoDb();
    const snippet = await SnippetModel.findById(id);
    return NextResponse.json({snippet}, {status: 200});
}

export async function PUT(request, {params}) {
    const {id} = await params;
    const {title, language, code} = await request.json();

    await connectMongoDb();
    const snippet = await SnippetModel.findByIdAndUpdate(id, {title, language, code});
    return NextResponse.json({message: "Snippet Updated Successfully"}, {status: 200});
}