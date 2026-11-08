import { Card } from 'models/database/card'
import Set from '../Great Encounters'

const card: Card = {
	name: {
		'en-us': "Sceptile",
		'fr-fr': "Jungko",
		'de-de': "Gewaldro"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Rare Holo",
	category: "Pokemon",
	set: Set,

	dexId: [
		254,
	],

	hp: 100,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Grovyle",
		'fr-fr': "Massko",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Wild Growth",
				'fr-fr': "Luxuriance",
				'de-de': "Wildes Wachstum"
			},
			effect: {
				'en-us': "Each basic Grass Energy card attached to your Grass Pokémon provides Grass Grass Energy instead. You can't use more than 1 Wild Growth Poké-Body each turn.",
				'fr-fr': "Chaque carte Énergie Grass attachée à vos Pokémon Grass fournit maintenant de l'Énergie Grass Grass. Vous ne pouvez pas utiliser plus d'1 Poké-Body Luxuriance par tour.",
				'de-de': "Jede -Basis-Energiekarte, die an deine -Pokémon angelegt ist, liefert -Energie. Du kannst nicht mehr als 1 Wildes Wachstum Poké-Body pro Zug einsetzen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Leaf Blade",
				'fr-fr': "Lame-feuille",
				'de-de': "Laubklinge"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 50 damage plus 20 more damage.",
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 50 dégâts plus 20 dégâts supplémentaires.",
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" fügt dieser Angriff 50 Schadenspunkte plus 20 weitere Schadenspunkte zu."
			},
			damage: "50+",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+30"
		},
	],

	resistances: [
		{
			type: "Water",
			value: "-20"
		},
	],

	retreat: 3,

	description: {
		'en-us': "The leaves that grow on its arms can slice down thick trees. It is without peer in jungle combat.",
	},

	thirdParty: {
		cardmarket: 277910,
		tcgplayer: 88949
	},

	variants: [
		{
			type: "holo"
		},
		{
			type: "reverse"
		}
	]
}

export default card
