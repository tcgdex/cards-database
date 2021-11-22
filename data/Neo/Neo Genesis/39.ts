import { Card } from '../../../interfaces'
import Set from '../Neo Genesis'

const card: Card = {
	name: {
		en: "Ledian",
		fr: "Coxyclaque"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		166,
	],

	hp: 60,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Ledyba",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Grass",
				"Grass",
			],
			name: {
				en: "Baton Pass",
				fr: "Relais"
			},
			effect: {
				en: "If you have any Pokémon on your Bench, remove all Energy cards from Ledian and attach them to 1 of those Pokémon, then switch Ledian with that Pokémon.",
				fr: "Si vous avez un ou plusieurs Pokémon  sur votre Banc, retirez toutes les cartes Énergie  sur Coxyclaque et attachez-les à l'un de ces Pokémon, échangez ensuite Coxyclaque avec ce Pokémon."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	description: {
		fr: "Lorsque les étoiles scintillent dans le ciel nocturne, Ledian voltige en répandant une poudre brillante."
	}
}

export default card
