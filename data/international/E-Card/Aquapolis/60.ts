import { Card } from 'models/database/card'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		'en-us': "Skiploom",
		'fr-fr': "Floravol",
		'de-de': "Hubelupf"
	},

	illustrator: "Yuka Morii",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [188],

	hp: 60,

	types: [
		"Grass"
	],

	evolveFrom: {
		'en-us': "Hoppip",
		'fr-fr': "Granivol"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Lightweight",
				'fr-fr': "Poids-plume",
				'de-de': "Leichtgewicht"
			},
			effect: {
				'en-us': "You pay Colorless less to retreat Skiploom for each Grass Energy attached to it.",
				'fr-fr': "Vous payez  de moins pour faire battre Floravol en retraite pour chaque Énergie  qui lui est attachée.",
				'de-de': "Für jede an Hubelupf angelegte -Energie zahlst du  weniger, wenn du es zurückziehst."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Break Powder",
				'fr-fr': "Poudre cassante",
				'de-de': "Pausenpuder"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 10 damage plus 20 more damage. If tails, this attack does 10 damage and the Defending Pokémon is now Asleep.",
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 10 dégâts plus 20 dégâts supplémentaires. Si c'est pile, cette attaque inflige 10 dégâts et le Pokémon Défenseur est maintenant Endormi.",
				'de-de': "Wirf eine Münze. Bei 'Kopf' fügt dieser Angriff 10 Schadenspunkte plus 20 weitere Schadenspunkte zu. Bei 'Zahl' fügt dieser Angriff 10 Schadenspunkte zu und das Verteidigende Pokémon ist jetzt gelähmt."
			},
			damage: "10+",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "x2"
		},
	],
	resistances: [
		{
			type: "Water",
			value: "-30"
		},
	],
	retreat: 1,


	variants: [
		{
			type: 'normal',
			thirdParty: {
				tcgplayer: 89254,
				cardmarket: 275133
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				tcgplayer: 89254,
				cardmarket: 275133
			}
		},
	]
}

export default card
