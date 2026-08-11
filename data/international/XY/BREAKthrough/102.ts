import { Card } from 'models/database/card'
import Set from '../BREAKthrough'

const card: Card = {
	name: {
		'en-us': "Floette",
		'fr-fr': "Floette",
		'es-es': "Floette",
		'it-it': "Floette",
		'pt-br': "Floette",
		'de-de': "Floette"
	},

	illustrator: "Midori Harada",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		670,
	],

	hp: 70,

	types: [
		"Fairy",
	],

	evolveFrom: {
		'en-us': "Flabébé",
		'fr-fr': "Flabébé",
		'es-es': "Flabébé",
		'it-it': "Flabébé",
		'pt-br': "Flabébé",
		'de-de': "Flabébé"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fairy",
			],
			name: {
				'en-us': "Aromatherapy",
				'fr-fr': "Aromathérapie",
				'es-es': "Aromaterapia",
				'it-it': "Aromaterapia",
				'pt-br': "Aromaterapia",
				'de-de': "Aromakur"
			},
			effect: {
				'en-us': "Heal 30 damage from each of your Pokémon.",
				'fr-fr': "Soignez 30 dégâts à chacun de vos Pokémon.",
				'es-es': "Cura 30 puntos de daño a cada uno de tus Pokémon.",
				'it-it': "Cura ciascuno dei tuoi Pokémon da 30 danni.",
				'pt-br': "Cura 30 de danos de cada um dos seus Pokémon.",
				'de-de': "Heile 30 Schadenspunkte bei jedem deiner Pokémon."
			},

		},
		{
			cost: [
				"Fairy",
				"Fairy",
			],
			name: {
				'en-us': "Magical Leaf",
				'fr-fr': "Feuille Magik",
				'es-es': "Hoja Mágica",
				'it-it': "Fogliamagica",
				'pt-br': "Folha Mágica",
				'de-de': "Zauberblatt"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 20 more damage and heal 20 damage from this Pokémon.",
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts supplémentaires et vous soignez 20 dégâts à ce Pokémon.",
				'es-es': "Lanza 1 moneda. Si sale cara, este ataque hace 20 puntos de daño más y cura 20 puntos de daño a este Pokémon.",
				'it-it': "Lancia una moneta. Se esce testa, questo attacco infligge 20 danni in più e curi questo Pokémon da 20 danni.",
				'pt-br': "Jogue uma moeda. Se sair cara, este ataque causará 20 de danos adicionais e curará 20 de danos deste Pokémon.",
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" fügt dieser Angriff 20 weitere Schadenspunkte zu. Heile 20 Schadenspunkte bei diesem Pokémon."
			},
			damage: "20+",

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Darkness",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "When the flowers of a well-tended flower bed bloom, it appears and celebrates with an elegant dance.",
	},

	thirdParty: {
		cardmarket: 286348,
		tcgplayer: 107221
	}
}

export default card
