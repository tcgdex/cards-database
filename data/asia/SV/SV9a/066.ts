import { Card } from "../../../interfaces"
import Set from "../SV9a"

const card: Card = {
	set: Set,

	name: {
		ja: "シェイミ",
		'zh-tw': "謝米",
		'zh-cn': "謝米"
	},

	illustrator: "Heisuke Kitazawa",
	rarity: "None",
	category: "Pokemon",
	dexId: [492],
	hp: 80,
	types: ["Grass"],

	description: {
		ja: "グラシデアの花が 咲く 季節 感謝の 心を 届けるために 飛び立つと 言われている。",
		'zh-tw': "葛拉西蒂亞花盛開的季節裡， 據說牠會為了傳遞感謝之情 而飛向天空。",
		'zh-cn': "葛拉西蒂亞花盛開的季節裡， 據說牠會為了傳遞感謝之情 而飛向天空。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			ja: "はなのカーテン",
			'zh-tw': "花之帷幔",
			'zh-cn': "花之帷幔"
		},

		effect: {
			ja: "このポケモンがいるかぎり、自分のベンチポケモン（「ルールを持つポケモン」をのぞく）全員は、相手のワザのダメージを受けない。",
			'zh-tw': "只要這隻寶可夢在場上，自己的所有備戰寶可夢（「擁有規則的寶可夢」除外）不會受到對手的招式的傷害。",
			'zh-cn': "只要這隻寶可夢在場上，自己的所有備戰寶可夢（「擁有規則的寶可夢」除外）不會受到對手的招式的傷害。"
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "けとばす",
			'zh-tw': "踢飛",
			'zh-cn': "踢飛"
		},

		damage: 30
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "I"
}

export default card