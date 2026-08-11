import { Card } from 'models/database/card'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		'en-us': "Larvitar",
		'fr-fr': "Embrylex",
		'de-de': "Larvitar"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		246,
	],

	hp: 50,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				'en-us': "Mountain Bite",
				'fr-fr': "Morsure des montagnes",
				'de-de': "Berghappen"
			},
			effect: {
				'en-us': "You may discard the top card of your deck. If you do, this attack does 10 damage plus 10 more damage and Larvitar is now Asleep.",
				'fr-fr': "Vous pouvez défausser la carte du dessus de votre deck. Cette attaque inflige alors 10 dégâts plus 10 dégâts supplémentaires et Embrylex est maintenant Endormi.",
				'de-de': "Du kannst die oberste Karte deines Decks auf deinen Ablagestapel legen. Wenn du das machst, fügt dieser Angriff 10 Schadenspunkte plus 10 weitere Schadenspunkte zu und Larvitar schläft jetzt."
			},
			damage: "10+",

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Hammer In",
				'fr-fr': "Enfoncer",
				'de-de': "Einhämmern"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "+10"
		},
	],

	resistances: [
		{
			type: "Lightning",
			value: "-20"
		},
	],
	retreat: 1,


	description: {
		'en-us': "A Pokémon that eats soil. Once it has eaten a large mountain, it goes to sleep so it can grow.",
		'fr-fr': "Un Pokémon qui se nourrit de terre. Après avoir dévoré une montagne, il s'endort pour grandir."
	},

	thirdParty: {
		cardmarket: 277716,
		tcgplayer: 86642
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
