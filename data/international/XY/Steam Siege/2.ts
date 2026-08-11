import { Card } from 'models/database/card'
import Set from '../Steam Siege'

const card: Card = {
	name: {
		'en-us': "Tangrowth",
		'fr-fr': "Bouldeneu",
		'es-es': "Tangrowth",
		'it-it': "Tangrowth",
		'pt-br': "Tangrowth",
		'de-de': "Tangoloss"
	},

	illustrator: "kirisAki",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		465,
	],

	hp: 130,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Tangela",
		'fr-fr': "Saquedeneu",
		'es-es': "Tangela",
		'it-it': "Tangela",
		'pt-br': "Tangela",
		'de-de': "Tangela"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Leaf Storm",
				'fr-fr': "Tempête Verte",
				'es-es': "Lluevehojas",
				'it-it': "Verdebufera",
				'pt-br': "Tempestade de Folhas",
				'de-de': "Blättersturm"
			},
			effect: {
				'en-us': "Heal 40 damage from each of your Grass Pokémon.",
				'fr-fr': "Soignez 40 dégâts à chacun de vos Pokémon Grass.",
				'es-es': "Cura 40 puntos de daño a cada uno de tus Pokémon Grass.",
				'it-it': "Cura ciascuno dei tuoi Pokémon Grass da 40 danni.",
				'pt-br': "Cure 40 de danos de cada um dos seus Pokémon Grass.",
				'de-de': "Heile 40 Schadenspunkte bei jedem deiner Grass-Pokémon."
			},
			damage: 80,

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Flog",
				'fr-fr': "Martinet",
				'es-es': "Azotar",
				'it-it': "Scudiscio",
				'pt-br': "Fustigar",
				'de-de': "Auspeitscher"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 30 more damage.",
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts supplémentaires.",
				'es-es': "Lanza 1 moneda. Si sale cara, este ataque hace 30 puntos de daño más.",
				'it-it': "Lancia una moneta. Se esce testa, questo attacco infligge 30 danni in più.",
				'pt-br': "Jogue uma moeda. Se sair cara, este ataque causará 30 de danos adicionais.",
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" fügt dieser Angriff 30 weitere Schadenspunkte zu."
			},
			damage: "110+",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 4,

	description: {
		'en-us': "Its vines grow so profusely that, in the warm season, you can't even see its eyes.",
	},

	thirdParty: {
		cardmarket: 291509,
		tcgplayer: 120991
	}
}

export default card
