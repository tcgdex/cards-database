import { Card } from '../../../interfaces'
import Set from '../Dark Explorers'

const card: Card = {
	name: {
		en: "Torkoal",
		fr: "Chartor",
		es: "Torkoal",
		it: "Torkoal",
		pt: "Torkoal",
		de: "Qurtel"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		324,
	],

	hp: 90,

	types: [
		"Fire",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Flame Cloak",
				fr: "Manteau de Feu",
				de: "Flammenumhang"
			},
			effect: {
				en: "Flip a coin. If heads, attach a Fire Energy card from your discard pile to this Pokémon.",
				fr: "Lancez une pièce. Si c'est face, attachez une carte Énergie  de votre pile de défausse à ce Pokémon.",
				de: "Wirf 1 Münze. Nimm bei „Kopf“ 1 {R}-Energiekarte von deinem Ablagestapel und lege sie an dieses Pokémon an."
			},
			damage: 10,

		},
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Heat Blast",
				fr: "Explosion de Chaleur",
				de: "Hitzestoß"
			},

			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		en: "It burns coal inside its shell for energy. It blows out black soot if it is endangered.",
		de: "In seinem Panzer verbrennt es Kohle und gewinnt daraus Energie. Bei Gefahr sondert es Ruß ab."
	},

	thirdParty: {
		cardmarket: 280346,
		tcgplayer: 89973
	}
}

export default card
