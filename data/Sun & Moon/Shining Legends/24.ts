import { Card } from '../../../interfaces'
import Set from '../Shining Legends'

const card: Card = {
	name: {
		en: "Palkia",
		fr: "Palkia",
		es: "Palkia",
		it: "Palkia",
		pt: "Palkia",
		de: "Palkia"
	},

	illustrator: "Eske Yoshinob",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		484,
	],

	hp: 130,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Spiral Drain",
				fr: "Spirale Épuisante",
				es: "Drenaje Espiral",
				it: "Assorbimento Spirale",
				pt: "Dreno Espiral",
				de: "Spiralsauger"
			},
			effect: {
				en: "Heal 30 damage from this Pokémon.",
				fr: "Soignez 30 dégâts à ce Pokémon.",
				es: "Cura 30 puntos de daño a este Pokémon.",
				it: "Cura questo Pokémon da 30 danni.",
				pt: "Cure 30 pontos de dano deste Pokémon.",
				de: "Heile 30 Schadenspunkte bei diesem Pokémon."
			},
			damage: 30,

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				en: "Aqua Blade",
				fr: "Hydrolame",
				es: "Hoja Agua",
				it: "Idrolama",
				pt: "Lâmina de Água",
				de: "Aquaklinge"
			},

			damage: 100,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 302162,
		tcgplayer: 146678
	}
}

export default card
