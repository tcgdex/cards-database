import {Card} from "../../../interfaces"
import Set from "../ADV3"

const card: Card = {
	set: Set,
	name: {
		ja: "ウィスカッシュ",
	},

	rarity: "Rare",
	category: "Pokemon",
	dexId: [340],
	hp: 90,
	types: ["Water"],
	stage: "Stage1",

	abilities: [
		{
			name: {
				ja: "水没",
			},
			effect: {
				ja: "Wiscashがベンチにある限り、相手の攻撃によってWISCASHに与えられたすべての損害を防ぎます。",
			},
		}],

	attacks: [
		{
			cost: ["Water", "Colorless"],
			name: {
				ja: "サーフィン",
			},
			damage: 30,
		},
		{
			cost: ["Fighting", "Colorless", "Colorless", "Colorless"],
			name: {
				ja: "大きさ",
			},
			effect: {
				ja: "各ベンチポケモン（あなたと対戦相手の両方）に10ダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
			},
			damage: 60,
		},
	],

	retreat: 2,

	variants: [
		{
			type: "normal",
			stamp: ["1st edition"],
		},
	],
};

export default card
