import { Card } from "../../../interfaces"
import Set from "../S12"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "洛奇亞V",
		th: "ลูเกียV",
		ja: "ルギアV"
	},

	illustrator: "Mitsuhiro Arita",
	category: "Pokemon",
	hp: 220,
	types: ["Colorless"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		name: {
			'zh-tw': "讀風",
			th: "อ่านทิศทางลม",
			ja: "かぜよみ"
		},

		effect: {
			'zh-tw': "將自己的1張手牌丟棄。然後，從自己的牌庫抽出3張卡。",
			th: "ทิ้งการ์ดบนมือฝ่ายเรา 1 ใบที่ตำแหน่งทิ้งการ์ด หลังจากนั้น จั่วการ์ด 3 ใบจากสำรับการ์ดฝ่ายเรา",
			ja: "自分の手札を1枚トラッシュする。その後、自分の山札を3枚引く。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "氣旋俯衝",
			th: "แอโรไดฟ์",
			ja: "エアロダイブ"
		},

		effect: {
			'zh-tw': "若希望，將場上的競技場卡丟棄。",
			th: "หากต้องการ ทิ้งการ์ดสเตเดียมบนกระดานที่ตำแหน่งทิ้งการ์ด",
			ja: "のぞむなら、場に出ているスタジアムをトラッシュする。"
		},

		damage: 130,
		cost: ["Colorless", "Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "－30"
	}],

	retreat: 2,
	regulationMark: "F",
	rarity: "Double rare"
}

export default card