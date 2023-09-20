import connectMongoDb from "@/libs/mongodb";
import SnippetModel from "@/model/snippet";
import { NextResponse } from "next/server";

export async function POST(request) {
    const {title, language, code} = await request.json();
    await connectMongoDb();
    await SnippetModel.create({title,language,code});
    return NextResponse.json({message: "Snippet Stored"}, {status: 201});
}

export async function GET() {
    await connectMongoDb();
    const snippets = await SnippetModel.find();
    return NextResponse.json({snippets},{status: 200});
}

export async function PATCH() {
    await connectMongoDb();
    const snippet = await SnippetModel.find();
    return NextResponse.json({snippet},{status: 200});
}

export async function DELETE(request) {
    await connectMongoDb();
    const {id} = await request.json();
    const snippet = await SnippetModel.findByIdAndDelete(id);
    return NextResponse.json({message: "Snippet deleted!"},{status: 200});
}

