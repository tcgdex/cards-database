import { Card } from 'models/database/card'
import Set from '../XY'

const card: Card = {
	name: {
		'en-us': "Rhyhorn",
		'fr-fr': "Rhinocorne",
		'es-es': "Rhyhorn",
		'it-it': "Rhyhorn",
		'pt-br': "Rhyhorn",
		'de-de': "Rihorn"
	},

	illustrator: "MAHOU",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		111,
	],

	hp: 80,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				'en-us': "Dig Out",
				'fr-fr': "Excavation",
				'es-es': "Cavar",
				'it-it': "Scavata",
				'pt-br': "Escavar",
				'de-de': "Freischaufeln"
			},
			effect: {
				'en-us': "Discard the top card of your deck. If that card is a Fighting Energy card, attach it to this Pokémon.",
				'fr-fr': "Défaussez la carte du dessus de votre deck. Si c'est une carte Énergie Fighting, attachez-la à ce Pokémon.",
				'es-es': "Descarta la primera carta de tu baraja. Si es una carta de Energía Fighting, únela a este Pokémon.",
				'it-it': "Scarta la carta in cima al tuo mazzo. Se è una carta Energia Fighting, assegnala a questo Pokémon.",
				'pt-br': "Descarte o card de cima do seu baralho. Se esse card for um card de Energia Fighting, ligue-o a este Pokémon.",
				'de-de': "Lege die oberste Karte deines Decks auf deinen Ablagestapel. Handelt es sich um eine Fighting-Energiekarte, lege sie an dieses Pokémon an."
			},
			damage: 10,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Horn Drill",
				'fr-fr': "Empal'Korne",
				'es-es': "Perforador",
				'it-it': "Perforcorno",
				'pt-br': "Chifre Broca",
				'de-de': "Hornbohrer"
			},

			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		'en-us': "Strong, but not too bright, this Pokémon can shatter even a skyscraper with its charging Tackles.",
	},

	thirdParty: {
		cardmarket: 281397,
		tcgplayer: 88744
	}
}

export default card
