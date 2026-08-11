import { Card } from 'models/database/card'
import Set from '../BREAKthrough'

const card: Card = {
	name: {
		'en-us': "Zorua",
		'fr-fr': "Zorua",
		'es-es': "Zorua",
		'it-it': "Zorua",
		'pt-br': "Zorua",
		'de-de': "Zorua"
	},

	illustrator: "Hitoshi Ariga",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		570,
	],

	hp: 60,

	types: [
		"Darkness",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				'en-us': "Whiny Voice",
				'fr-fr': "Voix Suppliante",
				'es-es': "Voz Quejica",
				'it-it': "Moine",
				'pt-br': "Voz Chorosa",
				'de-de': "Jammerstimme"
			},
			effect: {
				'en-us': "Choose a random card from your opponent's hand. Your opponent reveals that card and shuffles it into his or her deck.",
				'fr-fr': "Choisissez une carte au hasard de la main de votre adversaire. Votre adversaire montre la carte choisie et la mélange avec son deck.",
				'es-es': "Elige 1 carta aleatoria de la mano de tu rival. Tu rival enseña esa carta, la pone en su baraja y las baraja todas.",
				'it-it': "Scegli una carta a caso dalla mano del tuo avversario. Il tuo avversario mostra quella carta e la rimischia nel suo mazzo.",
				'pt-br': "Escolha um card aleatório da mão do seu oponente. Seu oponente revela aquele card e o embaralha de volta no próprio baralho.",
				'de-de': "Wähle 1 zufällige Karte aus der verdeckten Hand deines Gegners. Dein Gegner zeigt diese Karte und mischt sie zurück in sein Deck."
			},

		},
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
				'en-us': "Dark Edge",
				'fr-fr': "Lame Obscurité",
				'es-es': "Filo Siniestro",
				'it-it': "Lama Oscura",
				'pt-br': "Gume Sombrio",
				'de-de': "Dunkelklinge"
			},
			effect: {
				'en-us': "Discard an Energy attached to this Pokémon.",
				'fr-fr': "Défaussez une Énergie attachée à ce Pokémon.",
				'es-es': "Descarta 1 Energía unida a este Pokémon.",
				'it-it': "Scarta un'Energia assegnata a questo Pokémon.",
				'pt-br': "Descarte uma Energia ligada a este Pokémon.",
				'de-de': "Lege 1 an dieses Pokémon angelegte Energie auf deinen Ablagestapel."
			},
			damage: 30,

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
		'en-us': "To protect themselves from danger, they hide their true identities by transforming into people and Pokémon.",
	},

	thirdParty: {
		cardmarket: 286335,
		tcgplayer: 107209
	}
}

export default card
