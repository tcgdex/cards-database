import { Card } from '../../../interfaces'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		en: "Lombre",
		fr: "Lombre",
	},
	illustrator: "Atsuko Nishida",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		271,
	],
	hp: 80,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Lotad",
		fr: "Nénupiot",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Aqua Lift",
				fr: "Aqua-Élévation",
			},
			effect: {
				en: "If this Pokémon has any Water Energy attached to it, it has no Retreat Cost.",
				fr: "Si de l’Énergie Water est attachée à ce Pokémon, il n’a pas de coût de Retraite.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Ambush",
				fr: "Embuscade",
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 20 more damage.",
				fr: "Lancez une pièce. Si c’est face, cette attaque inflige 20 dégâts supplémentaires.",
			},
			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
