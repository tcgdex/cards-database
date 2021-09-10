import { Card } from '../../../interfaces'
import Set from '../Evolutions'

const card: Card = {
	name: {
		en: "Mewtwo EX",
		fr: "Mewtwo EX",
		es: "Mewtwo EX",
		it: "Mewtwo EX",
		pt: "Mewtwo EX",
		de: "Mewtu EX"
	},
	illustrator: "Eske Yoshinob",
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
				en: "Energy Absorption",
				fr: "Absorption d’énergie",
				es: "Absorción de Energía",
				it: "Assorbienergia",
				pt: "Absorção de Energia",
				de: "Energieaufnahme"
			},
			effect: {
				en: "Attach an Energy card from your discard pile to this Pokémon.",
				fr: "Attachez une carte Énergie de votre pile de défausse à ce Pokémon.",
				es: "Une 1 carta de Energía de tu pila de descartes a este Pokémon.",
				it: "Assegna a questo Pokémon una carta Energia dalla tua pila degli scarti.",
				pt: "Ligue um card de Energia da sua pilha de descarte a este Pokémon.",
				de: "Nimm 1 Energiekarte von deinem Ablagestapel und lege sie an dieses Pokémon an."
			},

		},
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Regeneration",
				fr: "Rétablissement",
				es: "Reanimación",
				it: "Rigenerazione",
				pt: "Regeneração",
				de: "Regeneration"
			},
			effect: {
				en: "Heal 60 damage from this Pokémon.",
				fr: "Soignez 60 dégâts à ce Pokémon.",
				es: "Cura 60 puntos de daño a este Pokémon.",
				it: "Cura questo Pokémon da 60 danni.",
				pt: "Cure 60 de danos deste Pokémon.",
				de: "Heile 60 Schadenspunkte bei diesem Pokémon."
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
				en: "Psyburn",
				fr: "Brûlure Psy",
				es: "Psicoquemadura",
				it: "Psicobrucia",
				pt: "Queimadura Psíquica",
				de: "Psychoverbrennung"
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



}

export default card
