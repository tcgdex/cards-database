import { Card } from 'models/database/card'
import Set from '../Evolutions'

const card: Card = {
	name: {
		'en-us': "Mewtwo EX",
		'fr-fr': "Mewtwo EX",
		'es-es': "Mewtwo EX",
		'it-it': "Mewtwo EX",
		'pt-br': "Mewtwo EX",
		'de-de': "Mewtu EX"
	},

	illustrator: "Ryo Ueda",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		150,
	],

	hp: 180,

	types: [
		"Psychic",
	],

	suffix: "EX",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Energy Absorption",
				'fr-fr': "Absorption d'énergie",
				'es-es': "Absorción de Energía",
				'it-it': "Assorbienergia",
				'pt-br': "Absorção de Energia",
				'de-de': "Energieaufnahme"
			},
			effect: {
				'en-us': "Attach an Energy card from your discard pile to this Pokémon.",
				'fr-fr': "Attachez une carte Énergie de votre pile de défausse à ce Pokémon.",
				'es-es': "Une 1 carta de Energía de tu pila de descartes a este Pokémon.",
				'it-it': "Assegna a questo Pokémon una carta Energia dalla tua pila degli scarti.",
				'pt-br': "Ligue um card de Energia da sua pilha de descarte a este Pokémon.",
				'de-de': "Nimm 1 Energiekarte von deinem Ablagestapel und lege sie an dieses Pokémon an."
			},

		},
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Regeneration",
				'fr-fr': "Rétablissement",
				'es-es': "Reanimación",
				'it-it': "Rigenerazione",
				'pt-br': "Regeneração",
				'de-de': "Regeneration"
			},
			effect: {
				'en-us': "Heal 60 damage from this Pokémon.",
				'fr-fr': "Soignez 60 dégâts à ce Pokémon.",
				'es-es': "Cura 60 puntos de daño a este Pokémon.",
				'it-it': "Cura questo Pokémon da 60 danni.",
				'pt-br': "Cure 60 de danos deste Pokémon.",
				'de-de': "Heile 60 Schadenspunkte bei diesem Pokémon."
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Psyburn",
				'fr-fr': "Brûlure Psy",
				'es-es': "Psicoquemadura",
				'it-it': "Psicobrucia",
				'pt-br': "Queimadura Psíquica",
				'de-de': "Psychoverbrennung"
			},

			damage: 110,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,
	stage: "Basic",

	thirdParty: {
		cardmarket: 293476,
		tcgplayer: 124116
	}
}

export default card
