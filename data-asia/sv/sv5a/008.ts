import { Card } from "../../../interfaces"
import Set from "../sv5a"

const card: Card = {
	set: Set,

	name: {
		ja: "チャデス",
		'zh-tw': "斯魔茶"
	},

	illustrator: "MINAMINAMI Take",
	rarity: "Common",
	category: "Pokemon",
	dexId: [1012],
	hp: 30,
	types: ["Grass"],

	description: {
		ja: "ヤバチャの リージョンフォームに 見えるが まったく 関係のない ポケモンと 最近 判明した。",
		'zh-tw': "雖然這種寶可夢看起來像是 來悲茶的地區型態，但最近 被發現其實兩者毫無關係。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			ja: "くらがくれ",
			'zh-tw': "藏隱"
		},

		effect: {
			ja: "このポケモンは、ベンチにいるかぎり、相手のポケモンからワザのダメージや効果を受けない。",
			'zh-tw': "只要這隻寶可夢在備戰區，不會受到對手的寶可夢招式的傷害與效果的影響。"
		}
	}],

	attacks: [{
		cost: ["Grass"],

		name: {
			ja: "ひっかける",
			'zh-tw': "鉤住"
		},

		damage: 10
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card