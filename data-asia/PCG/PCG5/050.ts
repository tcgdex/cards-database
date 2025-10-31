import { Card } from "../../../interfaces"
import Set from "../PCG5"

const card: Card = {
	set: Set,
	name: {
		ja: "ジオドード",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [74],
	hp: 50,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Fighting", "Colorless"],
			name: {
				ja: "セルフデストラクト",
			},
			effect: {
				ja: "各ベンチポケモン（あなたと対戦相手の両方）に10ダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）Geodudeはそれ自体に50のダメージを与えます。",
			},
			damage: 50,
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
			subtype: "unlimited",
		},
		{
			type: "normal",
			stamp: ["1st edition"],
		},
	],
};

export default card
