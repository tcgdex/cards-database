import {Card} from "../../../interfaces"
import Set from "../ADV4"

const card: Card = {
	set: Set,
	name: {
		ja: "registeel ex",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [379],
	hp: 90,
	types: ["Metal"],
	stage: "Basic",

	abilities: [
		{
			name: {
				ja: "外骨格",
			},
			effect: {
				ja: "攻撃によってRegisteel Exに与えられた損傷は10倍に減少します（脱力と抵抗を適用した後）。",
			},
		}],

	attacks: [
		{
			cost: ["Metal", "Metal", "Colorless"],
			name: {
				ja: "鋼波",
			},
			effect: {
				ja: "防御ポケモンと同じタイプの対戦相手のベンチポケモンのそれぞれに20のダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
			},
			damage: 50,
		},
	],

	retreat: 2,

	variants: [
		{
			type: "holo",
		},
		{
			type: "holo",
			stamp: ["1st edition"],
		},
	],
};

export default card
