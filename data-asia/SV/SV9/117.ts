import { Card } from "../../../interfaces"
import Set from "../SV9"

const card: Card = {
	set: Set,

	name: {
		ja: "Nのゾロアークex"
	},

	illustrator: "takuyoa",
	rarity: "None",
	category: "Pokemon",
	hp: 280,
	types: ["Darkness"],
	stage: "Stage1",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			ja: "とりひき"
		},

		effect: {
			ja: "自分の番に、自分の手札を1枚トラッシュするなら、1回使える。自分の山札を2枚引く。"
		}
	}],

	attacks: [{
		cost: ["Darkness", "Darkness"],

		name: {
			ja: "ナイトジョーカー"
		},

		effect: {
			ja: "自分のベンチの「Nのポケモン」が持つワザを1つ選び、このワザとして使う。"
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2
}

export default card