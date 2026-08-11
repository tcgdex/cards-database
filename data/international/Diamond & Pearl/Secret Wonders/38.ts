import { Card } from 'models/database/card'
import Set from '../Secret Wonders'

const card: Card = {
	name: {
		'en-us': "Sunflora",
		'fr-fr': "Heliatronc",
		'de-de': "Sonnflora"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		192,
	],

	hp: 80,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Sunkern",
		'fr-fr': "Tournegrin",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				'en-us': "Grass Whistle",
				'fr-fr': "Sifflet herbe",
				'de-de': "Grasflöte"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), you may remove 1 damage counter from each of your Grass Pokémon. You can't use more than 1 Grass Whistle Poké-Power each turn. This power can't be used if Sunflora is affected by a Special Condition.",
				'fr-fr': "Une seule fois lors de votre tour (avant votre attaque), vous pouvez retirer 1 marqueur de dégât à chacun de vos Pokémon Grass. Vous ne pouvez pas utiliser plus d'1 Poké-Power Sifflet herbe par tour. Ce pouvoir ne peut pas être utilisé si Heliatronc est affecté par un État Spécial.",
				'de-de': "Einmal während deines Zuges (vor deinem Angriff) kannst du 1 Schadensmarke von jedem deiner -Pokémon entfernen. Du kannst nicht mehr als 1 Grasflöte Poké-Power pro Zug einsetzen. Diese Poké-Power kann nicht eingesetzt werden, wenn Sonnflora von einem Speziellen Zustand betroffen ist."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
				"Grass",
			],
			name: {
				'en-us': "Petal Dance",
				'fr-fr': "Danse-fleur",
				'de-de': "Blättertanz"
			},
			effect: {
				'en-us': "Flip 3 coins. This attack does 30 damage times the number of heads. If you get 2 or more heads, Sunflora is now Confused.",
				'fr-fr': "Lancez 3 pièces. Cette attaque inflige 30 dégâts multipliés par le nombre de faces. Si vous obtenez 2 faces ou plus, Heliatronc est maintenant Confus.",
				'de-de': "Wirf 3 Münzen. Dieser Angriff fügt 30 Schadenspunkte mal der Anzahl \"Kopf\" zu. Wenn mindestens 2 der Münzen \"Kopf\" zeigen, ist Sonnflora jetzt verwirrt."
			},
			damage: "30x",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+20"
		},
	],

	resistances: [
		{
			type: "Water",
			value: "-20"
		},
	],

	retreat: 2,

	description: {
		'en-us': "It gets energy from warm sunlight and is known for its habit of moving in pursuit of it.",
	},

	thirdParty: {
		cardmarket: 277791,
		tcgplayer: 89615
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse",
		}
	]
}

export default card
