import { Card } from "../../../interfaces"
import Set from "../SV1a"

const card: Card = {
	set: Set,

	name: {
		ja: "シシコ",
		'zh-tw': "小獅獅",
		th: "ชิชิโกะ",
		id: "Litleo"
	},

	illustrator: "Yuu Nishida",
	rarity: "Common",
	category: "Pokemon",
	dexId: [667],
	hp: 70,
	types: ["Fire"],

	description: {
		ja: "幼いうちに メスの カエンジシに 狩りを 教わるが 成長すると 群れを 離れて 独り立ちする。",
		'zh-tw': "年幼時雌性的火炎獅會教導自己如何狩獵， 長大後就會離群索居。",
		th: "ตอนยังเล็กจะเรียนรู้วิธีล่าจากคาเอ็นจิชิตัวเมีย พอโตขึ้นจะแยกออกจากฝูงไปอยู่ตามลำพัง",
		id: "Litleo diajarkan cara berburu oleh Pyroar betina sejak kecil. Ketika tumbuh, Pokémon ini berpisah dari kelompoknya dan hidup mandiri."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "まるやけ",
			'zh-tw': "燒光",
			th: "เผาเตียน",
			id: "Bakar Bulat-bulat"
		},

		effect: {
			ja: "場に出ているスタジアムをトラッシュする。",
			'zh-tw': "將場上的競技場卡丟棄。",
			th: "ทิ้งการ์ดสเตเดียมที่วางอยู่บนกระดานที่ตำแหน่งทิ้งการ์ด",
			id: "Buang Stadium yang ada di Arena ke Trash."
		}
	}, {
		cost: ["Fire"],

		name: {
			ja: "ひだね",
			'zh-tw': "火種",
			th: "เชื้อไฟ",
			id: "Nyala Api"
		},

		damage: 10
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G",

	thirdParty: {
		cardmarket: 701063
	}
}

export default card