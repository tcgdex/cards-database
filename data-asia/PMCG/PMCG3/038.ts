import { Card } from "../../../interfaces"
import Set from "../PMCG3"

const card: Card = {
	set: Set,
	name: {
		ja: "ゴーレム",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [76],
	hp: 80,
	types: ["Fighting"],
	stage: "Stage2",

	attacks: [
		{
			cost: ["Fighting", "Fighting", "Fighting", "Colorless"],
			name: {
				ja: "雪崩",
			},
			damage: 60,
		},
		{
			cost: ["Fighting", "Fighting", "Fighting", "Fighting"],
			name: {
				ja: "セルフデストラクト",
			},
			effect: {
				ja: "各プレイヤーのベンチで各ポケモンに20のダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）Golemはそれ自体に100のダメージを与えます。",
			},
			damage: 100,
		},
	],

	retreat: 4,

	variants: [
		{
			type: "normal",
		},
	],
};

export default card
