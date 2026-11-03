import { Card } from "../../../interfaces"
import Set from "../SV4a"

const card: Card = {
	set: Set,

	name: {
		ja: "ミライドンex"
	},

	illustrator: "5ban Graphics",
	rarity: "Secret Rare",
	category: "Pokemon",
	dexId: [1008],
	hp: 220,
	types: ["Lightning"],
	stage: "Basic",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			ja: "タンデムユニット"
		},

		effect: {
			ja: "自分の番に1回使える。自分の山札から{L}タイプのたねポケモンを2枚まで選び、ベンチに出す。そして山札を切る。"
		}
	}],

	attacks: [{
		cost: ["Lightning", "Lightning", "Colorless"],

		name: {
			ja: "フォトンブラスター"
		},

		damage: 220,

		effect: {
			ja: "次の自分の番、このポケモンはワザが使えない。"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	regulationMark: "G",
	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 747712,
				tcgplayer: 567755,
				cardtrader: 270350,
			},
		},
	],

	retreat: 1
}

export default card