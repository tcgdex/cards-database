import { Card } from 'models/database/card'
import Set from '../Fossil'

const card: Card = {
	name: {
		'en-us': "Magneton",
		'fr-fr': "Magneton",
		'de-de': "Magneton"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		82,
	],

	hp: 80,

	types: [
		"Lightning",
	],

	evolveFrom: {
		'en-us': "Magnemite",
		'fr-fr': "Magnéti"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				'en-us': "Sonicboom",
				'fr-fr': "Sonicboom",
				'de-de': "Überschallknall"
			},
			effect: {
				'en-us': "Don't apply Weakness and Resistance for this attack. (Any other effects that would happen after applying Weakness and Resistance still happen.)",
				'fr-fr': "Ne pas appliquer la Faiblesse et la Résistance à cette attaque. (Tout autre effet se produisant après application de la Faiblesse et de la Résistance est toujours valide.)",
				'de-de': "Schwäche und Resistenz für diesen Angriff nicht anwenden. (Alle anderen Auswirkungen nach der Anwendung von Schwäche und Resistenz finden immer noch statt.)"
			},
			damage: 20,

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Lightning",
				"Lightning",
			],
			name: {
				'en-us': "Selfdestruct",
				'fr-fr': "Destruction",
				'de-de': "Finale"
			},
			effect: {
				'en-us': "Does 20 damage to each Pokémon on each player's Bench. (Don't apply Weakness and Resistance for Benched Pokémon.) Magneton does 100 damage to itself.",
				'fr-fr': "Inflige 20 dégâts à chacun des Pokémon du Banc de chaque joueur. (Ne pas appliquer la Faiblesse et la Résistance aux Pokémon du Banc.) Magneton s'inflige 100 dégâts.",
				'de-de': "Fügt jedem Pokémon auf der Bank einees jeden Spielers 20 Scahdenspunkte zu. (Schwäche und Resistenz für Pokémon auf der Bank nicht anwenden)Magneton fügt sich selbst 100 Schadenspunkte zu."
			},
			damage: 100,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],
	retreat: 2,


	description: {
		'en-us': "Formed by several Magnemites linked together. They frequently appear when sunspots flare up.",
		'fr-fr': "Constitué de Magneti reliés les uns aux autres, il apparaît lorsque le soleil brille."
	},


	variants: [
		{
			type: "normal",
			foil: "galaxy",
			thirdParty: {
				cardmarket: 273872,
				tcgplayer: 106528
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			foil: "galaxy",
			thirdParty: {
				cardmarket: 273872,
				tcgplayer: 106528
			}
		},
		{
			type: "normal",
			subtype: "1999-2000-copyright"
		}
	]
}

export default card
