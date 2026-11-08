import { Card } from 'models/database/card'
import Set from '../Fates Collide'

const card: Card = {
	name: {
		'en-us': "Wormadam",
		'fr-fr': "Cheniselle",
		'es-es': "Wormadam",
		'it-it': "Wormadam",
		'pt-br': "Wormadam",
		'de-de': "Burmadame"
	},

	illustrator: "kawayoo",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		413,
	],

	hp: 120,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Burmy",
		'fr-fr': "Cheniti",
		'es-es': "Burmy",
		'it-it': "Burmy",
		'pt-br': "Burmy",
		'de-de': "Burmy"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Solar Ray",
				'fr-fr': "Rayonnement Solaire",
				'es-es': "Centello Solar",
				'it-it': "Raggiosolare",
				'pt-br': "Clarão Solar",
				'de-de': "Sonnenstrahlen"
			},
			effect: {
				'en-us': "Heal 20 damage from each of your Pokémon.",
				'fr-fr': "Soignez 20 dégâts à chacun de vos Pokémon.",
				'es-es': "Cura 20 puntos de daño a cada uno de tus Pokémon.",
				'it-it': "Cura ciascuno dei tuoi Pokémon da 20 danni.",
				'pt-br': "Cure 20 de danos de cada um dos seus Pokémon.",
				'de-de': "Heile 20 Schadenspunkte bei jedem deiner Pokémon."
			},
			damage: 20,

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Leaf Cutter",
				'fr-fr': "Coupe Feuille",
				'es-es': "Hoja Cortante",
				'it-it': "Verdetaglio",
				'pt-br': "Folha Cortante",
				'de-de': "Blattschere"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 30 more damage.",
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts supplémentaires.",
				'es-es': "Lanza 1 moneda. Si sale cara, este ataque hace 30 puntos de daño más.",
				'it-it': "Lancia una moneta. Se esce testa, questo attacco infligge 30 danni in più.",
				'pt-br': "Jogue uma moeda. Se sair cara, este ataque causará 30 de danos adicionais.",
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" fügt dieser Angriff 30 weitere Schadenspunkte zu."
			},
			damage: "60+",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "When Burmy evolved, its cloak became a part of this Pokémon's body. The cloak is never shed.",
	},

	thirdParty: {
		cardmarket: 289829,
		tcgplayer: 117766
	}
}

export default card
