import { Card } from "../../../interfaces"
import Set from "../S5R"

const card: Card = {
	evolveFrom: { ja: "ヘイガニ" },
	dexId: [342],
	rarity: "Common",
	set: Set,

	name: {
		ja: "シザリガー",
		'zh-tw': "鐵螯龍蝦",
		th: "ชิซาริเกอร์"
	},

	illustrator: "Hasegawa Saki",
	category: "Pokemon",
	hp: 130,
	types: ["Water"],

	description: {
		ja: "戦いを 好む 性格。 すみかに 近づく 相手を 容赦なく 叩きのめす。",
		'zh-tw': "有著熱愛戰鬥的性格。當遇到靠近自己領地的對手，會毫不留情地將之打倒。",
		th: "มีนิสัยชอบต่อสู้ จะตีศัตรูที่เข้ามาใกล้รังจนล้มตึงอย่างไม่ปรานี"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			ja: "はたきおとす",
			'zh-tw': "拍落",
			th: "ตบร่วง"
		},

		effect: {
			ja: "相手の手札からオモテを見ないで1枚選び、トラッシュする。",
			'zh-tw': "在不看正面的情況下，選擇1張對手的手牌，將其丟棄。",
			th: "เลือกการ์ดบนมือฝ่ายตรงข้าม 1 ใบโดยไม่ดูหน้าการ์ด ทิ้งที่ตำแหน่งทิ้งการ์ด"
		},

		damage: 60,
		cost: ["Water", "Colorless", "Colorless"]
	}, {
		name: {
			ja: "クラブハンマー",
			'zh-tw': "蟹鉗錘",
			th: "ค้อนก้ามปู"
		},

		damage: 140,
		cost: ["Water", "Water", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "E",
	variants: [
		{ type: "normal", thirdParty: { cardmarket: 533697, tcgplayer: 569066, cardtrader: 240030 } }
	]
}

export default card