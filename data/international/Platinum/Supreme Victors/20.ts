import { Card } from 'models/database/card'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		'en-us': "Charizard G",
		'fr-fr': "Dracaufeu ",
		'de-de': "Glurak G"
	},
	illustrator: "Wataru Kawahara",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [6],
	hp: 100,
	types: [
		"Fire"
	],

	stage: "Basic",
	suffix: "SP",

	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Flame Jet",
				'fr-fr': "Jet de flamme",
				'de-de': "Flammenstrahl"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 40 damage to 1 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 40 dégâts à 1 des Pokémon de votre adversaire. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
				'de-de': "Wirf 1 Münze. Dieser Angriff fügt 1 Pokémon deines Gegners 40 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},

		},
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Heat Blast",
				'fr-fr': "Explosion de chaleur",
				'de-de': "Hitzestoß"
			},

			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "x2"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],
	retreat: 3,

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 278711,
				tcgplayer: 84200
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278711,
				tcgplayer: 84200
			}
		},
	],

}

export default card
