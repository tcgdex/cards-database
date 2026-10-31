import { Card } from "../../../interfaces"
import Set from "../S5R"

const card: Card = {
	evolveFrom: { ja: "イワーク" },
	dexId: [208],
	rarity: "Rare",
	set: Set,

	name: {
		ja: "ハガネール",
		'zh-tw': "大鋼蛇",
		th: "ฮากาเนล"
	},

	illustrator: "NC Empire",
	category: "Pokemon",
	hp: 190,
	types: ["Metal"],

	description: {
		ja: "土と 一緒に 飲みこんだ 鉄分が 溜まっていって 体が 変化したとも 考えられる。",
		'zh-tw': "人們認為牠的身體是因為堆積了和泥土一起吞下的鐵質，才會發生變化的。",
		th: "เชื่อกันว่าร่างกายเปลี่ยนรูปไปเนื่องมาจากธาตุเหล็กที่กินเข้าไปพร้อมกับดิน"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			ja: "こうてつスイング",
			'zh-tw': "鋼鐵橫掃",
			th: "สวิงเหล็ก"
		},

		effect: {
			ja: "コインを2回投げ、オモテの数×80ダメージ。",
			'zh-tw': "擲2次硬幣，造成正面出現的次數×80點傷害。",
			th: "ทอยเหรียญ 2 ครั้ง แดเมจจะเท่ากับจำนวนครั้งที่ออกหัว x80"
		},

		damage: "80×",
		cost: ["Colorless", "Colorless", "Colorless"]
	}, {
		name: {
			ja: "ヘビーインパクト",
			'zh-tw': "重磅衝擊",
			th: "เฮวี่อิมแพ็คท์"
		},

		damage: 200,
		cost: ["Metal", "Metal", "Metal", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 4,
	regulationMark: "E",
	variants: [
		{ type: "holo", thirdParty: { cardmarket: 533832, tcgplayer: 569093, cardtrader: 240063 } }
	]
}

export default card