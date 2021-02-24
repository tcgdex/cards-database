import { Card } from '../../../interfaces'
import Set from '../Secret Wonders'

const card: Card = {
	name: {
		en: "Wormadam Plant Cloak",
		fr: "Cheniselle Cape Plante",
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		413,
	],
	hp: 80,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Burmy Plant Cloak",
		fr: "Cheniti Cape Plante",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Plant Cloak",
				fr: "Cape Plante",
			},
			effect: {
				en: "If Wormadam Plant Cloak has 2 or more Grass Energy attached to it, Wormadam Plant Cloak gets +40 HP.",
				fr: "Si Cheniselle Cape Plante possède au moins 2 Énergies Grass, il obtient 40 PV de plus.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Leaf Hurricane",
				fr: "Feuille ouragan",
			},
			effect: {
				en: "If the Defending Pokémon has fewer remaining HP than Wormadam Plant Cloak, the Defending Pokémon is now Confused.",
				fr: "S'il reste au Pokémon Défenseur moins de PV qu'à Cheniselle Cape Plante, le Pokémon Défenseur est maintenant Confus.",
			},
			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "+20"
		},
	],

	retreat: 1,



}

export default card
