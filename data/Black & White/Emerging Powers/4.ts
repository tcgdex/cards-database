import { Card } from '../../../interfaces'
import Set from '../Emerging Powers'

const card: Card = {
	name: {
		en: "Sewaddle",
		fr: "Larveyette",
		es: "Sewaddle",
		it: "Sewaddle",
		pt: "Sewaddle",
		de: "Strawickl"
	},

	illustrator: "Naoki Saito",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		540,
	],

	hp: 50,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Gnaw",
				fr: "Ronge",
				de: "Nagen"
			},

			damage: 10,

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Razor Leaf",
				fr: "Tranch'Herbe",
				de: "Rasierblatt"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		en: "This Pokémon makes clothes for itself. It chews up leaves and sews them with sticky thread extruded from its mouth.",
		de: "Schneidert sich ein Kleid, indem es sich Blätter zurechtbeißt und sie mit Klebefäden aus seinem Mund zusammennäht."
	},

	thirdParty: {
		cardmarket: 279968,
		tcgplayer: 89090
	}
}

export default card
