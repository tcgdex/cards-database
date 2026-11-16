import { Card } from "../../../interfaces"
import Set from "../S10D"

const card: Card = {
	set: Set,

	name: {
		ja: "ニョロゾ",
		'zh-tw': "蚊香君"
	},

	illustrator: "Scav",
	rarity: "Common",
	category: "Pokemon",
	dexId: [61],
	hp: 90,
	types: ["Water"],

	evolveFrom: {
		ja: "ニョロモ"
	},

	description: {
		ja: "お腹の 渦は ずっと 見ていると 眠くなる。 子守唄がわりに 子どもを 寝つかせるのにも 使う。",
		'zh-tw': "一直盯著牠肚子上的漩渦看，就會想睡覺。牠會利用這花紋 來代替搖籃曲去哄孩子睡覺。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			ja: "なぐる",
			'zh-tw': "打擊"
		},

		damage: 30,
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			ja: "ダブルスマッシュ",
			'zh-tw': "雙重粉碎"
		},

		effect: {
			ja: "コインを2回投げ、オモテの数×50ダメージ。",
			'zh-tw': "擲2次硬幣，造成正面出現的次數×50點傷害。"
		},

		damage: "50×",
		cost: ["Water", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "F",
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 650972,
				tcgplayer: 569767,
				cardtrader: 234078,
			},
		},
	]
}

export default card