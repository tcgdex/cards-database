import { Card } from "models/database/card"
import Set from "../SV7s"

const card: Card = {
	set: Set,

	name: {
		'th-th': "ลำแสงมหาภัย",
		'id-id': "Sinar Berbahaya"
	},

	illustrator: "inose yukie",
	category: "Trainer",

	effect: {
		'th-th': "ทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[ไหม้]และ[สับสน]",
		'id-id': "Ubah kondisi Pokémon Bertarung lawan menjadi Luka Bakar dan Pusing."
	},

	trainerType: "Item",
	regulationMark: "H"
}

export default card