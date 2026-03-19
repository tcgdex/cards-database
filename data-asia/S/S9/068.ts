import { Card } from "../../../interfaces"
import Set from "../S9"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "席多藍恩",
		ja: "ヒードラン"
	},

	illustrator: "Yuya Oka",
	category: "Pokemon",
	hp: 140,
	types: ["Metal"],

	description: {
		'zh-tw': "體內流著如熔岩般滾燙的血液。棲息在火山的洞穴裡。",
		ja: "マグマのように 燃えたぎる 血液が 体を 流れている。 火山の 洞穴に 生息する。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "防守利爪",
			ja: "ガードクロー"
		},

		effect: {
			'zh-tw': "在下個對手的回合，這隻寶可夢受到招式的傷害「-30」點。",
			ja: "次の相手の番、このポケモンが受けるワザのダメージは「-30」される。"
		},

		damage: 30,
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "熨燙錘",
			ja: "アイロンハンマー"
		},

		effect: {
			'zh-tw': "若這隻寶可夢身上附有【火】能量，則增加80點傷害。",
			ja: "このポケモンにエネルギーがついているなら、80ダメージ追加。"
		},

		damage: "80＋",
		cost: ["Metal", "Metal", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "－30"
	}],

	retreat: 4,
	regulationMark: "F",
	rarity: "Uncommon",
	dexId: [485],

	thirdParty: {
		cardmarket: 605919
	}
}

export default card