import { Card } from "../../../interfaces"
import Set from "../PCG3"

const card: Card = {
	set: Set,
	name: {
		ja: "ドロージー",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [96],
	hp: 50,
	types: ["Psychic"],
	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "不眠症",
			},
			effect: {
				ja: "Drowzeeは眠ることができません。",
			},
		}],

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "なだめる波",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、防御するポケモンはそれぞれ眠っています。",
			},
			damage: 10,
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
