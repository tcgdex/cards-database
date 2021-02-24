import { Card } from '../../../interfaces'
import Set from '../Shining Legends'

const card: Card = {
	name: {
		en: "Incineroar",
		fr: "Félinferno",
	},
	illustrator: "Emi Ando",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		727,
	],
	hp: 170,
	types: [
		"Fire",
	],
	evolveFrom: {
		en: "Torracat",
		fr: "Matoufeu",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				en: "Profane Punch",
				fr: "Poing Vulgaire",
			},
			effect: {
				en: "If your Benched Pokémon have any damage counters on them, this attack does 80 more damage.",
				fr: "Si des marqueurs de dégâts sont placés sur vos Pokémon de Banc, cette attaque inflige 80 dégâts supplémentaires.",
			},
			damage: 50,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				en: "Flare Blitz",
				fr: "Boutefeu",
			},
			effect: {
				en: "Discard all Fire Energy from this Pokémon.",
				fr: "Défaussez toute l’Énergie Fire de ce Pokémon.",
			},
			damage: 180,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
