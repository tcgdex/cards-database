import { Card } from "../../../interfaces"
import Set from "../PCG8"

const card: Card = {
	set: Set,
	name: {
		ja: "バネット",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [354],
	hp: 70,
	types: ["Psychic"],
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "保護",
			},
			effect: {
				ja: "対戦相手のPokã©Mon-ExによってBanetteに行われた損害を含む攻撃のすべての影響を防ぎます。",
			},
		}],

	attacks: [
		{
			cost: ["Psychic", "Colorless"],
			name: {
				ja: "夜のつぶやき",
			},
			effect: {
				ja: "防御ポケモンが基本的なポケモンである場合、そのポケモンは混乱しています。",
			},
			damage: 30,
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
