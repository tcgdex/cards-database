import { Card } from "../../../interfaces"
import Set from "../PCG10"

const card: Card = {
	set: Set,
	name: {
		ja: "ウォブバフェット",
	},

	rarity: "Rare",
	category: "Pokemon",
	dexId: [202],
	hp: 80,
	types: ["Psychic"],
	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "保護",
			},
			effect: {
				ja: "対戦相手のPokã©Mon-ExによってWobbuffetに行われた損害を含む攻撃のすべての影響を防ぎます。",
			},
		}],

	attacks: [
		{
			cost: ["Psychic", "Colorless", "Colorless"],
			name: {
				ja: "ひっくり返します",
			},
			effect: {
				ja: "Wobbuffetはそれ自体に10ダメージを与え、この損傷に衰弱と抵抗を適用しないでください。",
			},
			damage: 50,
		},
	],

	retreat: 2,

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
