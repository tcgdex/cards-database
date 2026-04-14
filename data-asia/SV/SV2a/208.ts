import { Card } from "../../../interfaces"
import Set from "../SV2a"

const card: Card = {
	set: Set,

	name: {
		ja: "ミュウex"
	},

	illustrator: "aky CG Works",
	category: "Pokemon",
	hp: 180,
	types: ["Psychic"],
	stage: "Basic",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			ja: "リスタート"
		},

		effect: {
			ja: "自分の番に1回使える。自分の手札が3枚になるように、山札を引く。"
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			ja: "ゲノムハック"
		},

		effect: {
			ja: "相手のバトルポケモンが持っているワザを1つ選び、このワザとして使う。"
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "－30"
	}],

	retreat: 0,

	thirdParty: {
		cardmarket: 719604
	}
}

export default card