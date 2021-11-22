import { Card } from '../../../interfaces'
import Set from '../Roaring Skies'

const card: Card = {
	name: {
		en: "Shedinja",
		fr: "Munja",
	},
	illustrator: "Aya Kusube",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		292,
	],
	hp: 30,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Nincada",
		fr: "Ningale",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Cursed Rain",
				fr: "Pluie Ensorcelée",
			},
			effect: {
				en: "Put 1 damage counter on each of your opponent's Pokémon. Switch this Pokémon with 1 of your Benched Pokémon.",
				fr: "Placez 1 marqueur de dégâts sur chacun des Pokémon de votre adversaire. Échangez ce Pokémon avec l'un de vos Pokémon de Banc.",
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Hopeless Scream",
				fr: "Cri de Désespoir",
			},
			effect: {
				en: "This attack does 50 damage times the number of damage counters on this Pokémon.",
				fr: "Cette attaque inflige 50 dégâts multipliés par le nombre de marqueurs de dégâts placés sur ce Pokémon.",
			},
			damage: "50×",

		},
	],


	retreat: 1,



}

export default card
