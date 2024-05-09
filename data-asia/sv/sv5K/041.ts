import { Card } from "../../../interfaces"
import Set from "../sv5K"

const card: Card = {
	set: Set,

	name: {
		ja: "セキタンザン"
	},

	illustrator: "Shiburingaru",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [839],
	hp: 180,
	types: ["Fighting"],

	description: {
		ja: "体を 大きく 振り動かし 燃え上がる 背中から 石炭を あたりに ばら撒いて 威嚇する。"
	},

	stage: "Stage2",

	attacks: [{
		cost: ["Fighting"],

		name: {
			ja: "ガトリングタール"
		},

		damage: "40＋",

		effect: {
			ja: "このポケモンについているエネルギーの数×80ダメージ追加。"
		}
	}, {
		cost: ["Fighting", "Colorless", "Colorless", "Colorless"],

		name: {
			ja: "やまなだれ"
		},

		damage: 150,

		effect: {
			ja: "相手の山札を上から2枚トラッシュする。"
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 4
}

export default card