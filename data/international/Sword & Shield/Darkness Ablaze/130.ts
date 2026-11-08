import { Card } from 'models/database/card'
import Set from '../Darkness Ablaze'

const card: Card = {
	name: {
		'en-us': "Melmetal",
		'fr-fr': "Melmetal",
		'es-es': "Melmetal",
		'it-it': "Melmetal",
		'pt-br': "Melmetal",
		'de-de': "Melmetal"
	},

	illustrator: "NC Empire",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [809],
	set: Set,
	hp: 150,

	types: [
		"Metal",
	],

	evolveFrom: {
		'en-us': "Meltan",
		'fr-fr': "Meltan",
		'es-es': "Meltan",
		'it-it': "Meltan",
		'pt-br': "Meltan",
		'de-de': "Meltan"
	},

	attacks: [
		{
			cost: [
				"Metal",
			],
			name: {
				'en-us': "Energy Link",
				'fr-fr': "Chaîne d'Énergie",
				'es-es': "Vínculo de Energía",
				'it-it': "Legame Energetico",
				'pt-br': "Elo de Energia",
				'de-de': "Energie-Verbindung"
			},
			effect: {
				'en-us': "Attach an Energy card from your discard pile to this Pokémon.",
				'fr-fr': "Attachez une carte Énergie de votre pile de défausse à ce Pokémon.",
				'es-es': "Une 1 carta de Energía de tu pila de descartes a este Pokémon.",
				'it-it': "Assegna a questo Pokémon una carta Energia dalla tua pila degli scarti.",
				'pt-br': "Ligue 1 carta de Energia da sua pilha de descarte a este Pokémon.",
				'de-de': "Lege 1 Energiekarte aus deinem Ablagestapel an dieses Pokémon an."
			},
			damage: 30,

		},
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Heavy Impact",
				'fr-fr': "Gros Impact",
				'es-es': "Impacto Pesado",
				'it-it': "Impatto Pesante",
				'pt-br': "Impacto Pesado",
				'de-de': "Schwerer Einschlag"
			},

			damage: 130,

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
			type: "Grass",
			value: "-30"
		},
	],

	retreat: 4,
	regulationMark: "D",


	stage: "Stage1",

	description: {
		'en-us': "At the end of its life-span, Melmetal will rust and fall apart. The small shards left behind will eventually be reborn as Meltan."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 483529,
				tcgplayer: 219392
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 483529,
				tcgplayer: 219392
			}
		},
	],
}

export default card
