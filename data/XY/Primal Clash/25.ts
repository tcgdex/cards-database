import { Card } from '../../../interfaces'
import Set from '../Primal Clash'

const card: Card = {
	name: {
		en: "Torchic",
		fr: "Poussifeu",
		es: "Torchic",
		it: "Torchic",
		pt: "Torchic",
		de: "Flemmli"
	},

	illustrator: "sui",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		255,
	],

	hp: 60,

	types: [
		"Fire",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Ember",
				fr: "Flammèche",
				es: "Ascuas",
				it: "Braciere",
				pt: "Ember",
				de: "Glut"
			},
			effect: {
				en: "Flip a coin. If tails, discard a Fire Energy attached to this Pokémon.",
				fr: "Lancez une pièce. Si c'est pile, défaussez une Énergie Fire attachée à ce Pokémon.",
				es: "Lanza 1 moneda. Si sale cruz, descarta 1 Energía Fire unida a este Pokémon.",
				it: "Lancia una moneta. Se esce croce, scarta un'Energia Fire assegnata a questo Pokémon.",
				pt: "Jogue uma moeda. Se sair coroa, descarte uma Energia Fire ligada a este Pokémon.",
				de: "Wirf 1 Münze. Lege bei \"Zahl\" 1 an dieses Pokémon angelegte Fire-Energie auf deinen Ablagestapel."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 273556,
		tcgplayer: 95909
	}
}

export default card
