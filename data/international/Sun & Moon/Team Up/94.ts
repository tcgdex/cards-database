import { Card } from 'models/database/card'
import Set from '../Team Up'

const card: Card = {
	name: {
		'en-us': "Pangoro",
		'fr-fr': "Pandarbare",
		'es-es': "Pangoro",
		'it-it': "Pangoro",
		'pt-br': "Pangoro",
		'de-de': "Pandagro"
	},

	illustrator: "Satoshi Shirai",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		675,
	],

	hp: 140,

	types: [
		"Darkness",
	],

	evolveFrom: {
		'en-us': "Pancham",
		'fr-fr': "Pandespiègle",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Tighten Up",
				'fr-fr': "Resserrage",
				'es-es': "Apretar",
				'it-it': "Torchio",
				'pt-br': "Espremer",
				'de-de': "Zudrücken"
			},
			effect: {
				'en-us': "Your opponent discards 2 cards from their hand.",
				'fr-fr': "Votre adversaire défausse 2 cartes de sa main.",
				'es-es': "Tu rival descarta 2 cartas de su mano.",
				'it-it': "Il tuo avversario scarta due carte che ha in mano.",
				'pt-br': "Seu oponente descarta 2 cartas da própria mão.",
				'de-de': "Dein Gegner legt 2 Karten aus seiner Hand auf seinen Ablagestapel."
			},
			damage: 60,

		},
		{
			cost: [
				"Darkness",
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Tantrum",
				'fr-fr': "Mauvaise Humeur",
				'es-es': "Rabieta",
				'it-it': "Collera",
				'pt-br': "Petulância",
				'de-de': "Rappel"
			},
			effect: {
				'en-us': "This Pokémon is now Confused.",
				'fr-fr': "Ce Pokémon est maintenant Confus.",
				'es-es': "Este Pokémon pasa a estar Confundido.",
				'it-it': "Questo Pokémon viene confuso.",
				'pt-br': "Este Pokémon agora está Confuso.",
				'de-de': "Dieses Pokémon ist jetzt verwirrt."
			},
			damage: 170,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 4,

	description: {
		'en-us': "From the slight twitches of its bamboo leaf, it deduces its opponent's movements. It's eager to tussle but kindhearted toward its companions.",
	},

	thirdParty: {
		cardmarket: 369024,
		tcgplayer: 183872
	}
}

export default card
