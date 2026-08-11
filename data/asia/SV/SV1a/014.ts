import { Card } from "models/database/card"
import Set from "../SV1a"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "シシコ",
		'zh-tw': "小獅獅",
		'th-th': "ชิชิโกะ",
		'id-id': "Litleo"
	},

	illustrator: "Yuu Nishida",
	rarity: "Common",
	category: "Pokemon",
	dexId: [667],
	hp: 70,
	types: ["Fire"],

	description: {
		'ja-jp': "幼いうちに メスの カエンジシに 狩りを 教わるが 成長すると 群れを 離れて 独り立ちする。",
		'zh-tw': "年幼時雌性的火炎獅會教導自己如何狩獵， 長大後就會離群索居。",
		'th-th': "ตอนยังเล็กจะเรียนรู้วิธีล่าจากคาเอ็นจิชิตัวเมีย พอโตขึ้นจะแยกออกจากฝูงไปอยู่ตามลำพัง",
		'id-id': "Litleo diajarkan cara berburu oleh Pyroar betina sejak kecil. Ketika tumbuh, Pokémon ini berpisah dari kelompoknya dan hidup mandiri."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'ja-jp': "まるやけ",
			'zh-tw': "燒光",
			'th-th': "เผาเตียน",
			'id-id': "Bakar Bulat-bulat"
		},

		effect: {
			'ja-jp': "場に出ているスタジアムをトラッシュする。",
			'zh-tw': "將場上的競技場卡丟棄。",
			'th-th': "ทิ้งการ์ดสเตเดียมที่วางอยู่บนกระดานที่ตำแหน่งทิ้งการ์ด",
			'id-id': "Buang Stadium yang ada di Arena ke Trash."
		}
	}, {
		cost: ["Fire"],

		name: {
			'ja-jp': "ひだね",
			'zh-tw': "火種",
			'th-th': "เชื้อไฟ",
			'id-id': "Nyala Api"
		},

		damage: 10
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 701063,
				tcgplayer: 568137,
			},
		},
	],

	retreat: 1,
	regulationMark: "G",
}

export default card