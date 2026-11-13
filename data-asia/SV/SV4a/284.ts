import { Card } from "../../../interfaces"
import Set from "../SV4a"

const card: Card = {
	set: Set,

	name: {
		ja: "ジオヅム",
		'zh-tw': "鹽石壘",
		id: "Naclstack"
	},

	illustrator: "otumami",
	rarity: "Shiny rare",
	category: "Pokemon",
	dexId: [933],
	hp: 100,
	types: ["Fighting"],

	evolveFrom: {
		ja: "コジオ"
	},

	description: {
		ja: "塩を 噴き出して 獲物に 浴びせ 塩漬けにしてしまう。 体内の 水分を 奪ってしまうのだ。",
		'zh-tw': "會將鹽噴向獵物，將其做成醃漬物。獵物體內的水分 會在醃漬過程中被奪走。",
		id: "Naclstack menyemburkan garam dan menggaramkan mangsanya. Garam tersebut membuat lawan menderita dengan cara merenggut cairan dalam tubuhnya."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			ja: "しおキャノン",
			'zh-tw': "鹽加農炮",
			id: "Meriam Garam"
		},

		effect: {
			ja: "コインを3回投げ、オモテの数×60ダメージ。",
			'zh-tw': "擲3次硬幣，造成正面出現的次數×60點傷害。",
			id: "Lempar koin 3 kali. Serangan ini memberikan kerusakan sejumlah 60 untuk tiap lemparan dengan hasil sisi depan."
		},

		damage: "60×",
		cost: ["Fighting", "Fighting"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "G",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 747638,
				tcgplayer: 567685,
				cardtrader: 270322,
			},
		},
	]
}

export default card