import { Card } from 'models/database/card'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		'en-us': "Absol",
		'fr-fr': "Absol",
		'es-es': "Absol",
		'it-it': "Absol",
		'pt-br': "Absol",
		'de-de': "Absol"
	},

	illustrator: "Mizue",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		359,
	],

	hp: 100,

	types: [
		"Darkness",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Ominous News",
				'fr-fr': "Mauvais Augure",
				'es-es': "Noticias Aciagas",
				'it-it': "Notizie Allarmanti",
				'pt-br': "Mau Agouro",
				'de-de': "Unheilsbote"
			},
			effect: {
				'en-us': "Discard a Special Energy from 1 of your opponent’s Pokémon.",
				'fr-fr': "Défaussez une Énergie spéciale de l’un des Pokémon de votre adversaire.",
				'es-es': "Descarta 1 Energía Especial de 1 de los Pokémon de tu rival.",
				'it-it': "Scarta un’Energia speciale assegnata a uno dei Pokémon del tuo avversario.",
				'pt-br': "Descarte 1 Energia Especial de 1 dos Pokémon do seu oponente.",
				'de-de': "Lege 1 Spezial-Energie von 1 Pokémon deines Gegners auf seinen Ablagestapel."
			},

		},
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
				'en-us': "Dirty Throw",
				'fr-fr': "Vilain Lancer",
				'es-es': "Lanzamiento Injusto",
				'it-it': "Brutto Tiro",
				'pt-br': "Jogada Suja",
				'de-de': "Schmutziger Wurf"
			},
			effect: {
				'en-us': "Discard a card from your hand. If you can’t discard a card, this attack does nothing.",
				'fr-fr': "Défaussez une carte de votre main. Si vous ne pouvez pas défausser de carte, cette attaque ne fait rien.",
				'es-es': "Descarta 1 carta de tu mano. Si no puedes descartar 1 carta, este ataque no hace nada.",
				'it-it': "Scarta una delle carte che hai in mano. Se non puoi scartare una carta, questo attacco non ha effetto.",
				'pt-br': "Descarte 1 carta da sua mão. Se não puder descartar 1 carta, este ataque não fará nada.",
				'de-de': "Lege 1 Karte aus deiner Hand auf deinen Ablagestapel. Wenn du keine Karte ablegen kannst, hat diese Attacke keine Auswirkungen."
			},
			damage: 70,

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

	retreat: 1,

	description: {
		'en-us': "The only thing unlucky about Absol is its appearance. It protects fields and warns people of disaster, so one ought to be grateful for it.",
	},

	thirdParty: {
		cardmarket: 408314,
		tcgplayer: 201177
	}
}

export default card
