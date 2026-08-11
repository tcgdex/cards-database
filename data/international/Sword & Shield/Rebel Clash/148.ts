import { Card } from 'models/database/card'
import Set from '../Rebel Clash'

const card: Card = {
	dexId: [701],

	name: {
		'en-us': "Hawlucha",
		'fr-fr': "Brutalibré",
		'es-es': "Hawlucha",
		'it-it': "Hawlucha",
		'pt-br': "Hawlucha",
		'de-de': "Resladero"
	},

	illustrator: "tetsuya koizumi",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Windfall",
				'fr-fr': "Rafale de Vent",
				'es-es': "Maná",
				'it-it': "Manna",
				'pt-br': "Maná",
				'de-de': "Warmer Regen"
			},
			effect: {
				'en-us': "Shuffle your hand into your deck. Then, draw 5 cards.",
				'fr-fr': "Mélangez votre main avec votre deck. Ensuite, piochez 5 cartes.",
				'es-es': "Pon las cartas de tu mano en tu baraja y barájalas todas. Después, roba 5 cartas.",
				'it-it': "Rimischia le carte che hai in mano nel tuo mazzo. Poi pesca cinque carte.",
				'pt-br': "Embaralhe a sua mão no seu baralho. Em seguida, compre 5 cartas.",
				'de-de': "Mische deine Handkarten in dein Deck. Ziehe anschließend 5 Karten."
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Speed Attack",
				'fr-fr': "Attaque Rapide",
				'es-es': "Ataque Fugaz",
				'it-it': "Attacco Veloce",
				'pt-br': "Ataque em Velocidade",
				'de-de': "Tempoangriff"
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	retreat: 1,
	hp: 90,
	types: ["Colorless"],
	regulationMark: "D",


	stage: "Basic",

	description: {
		'en-us': "It drives its opponents to exhaustion with its agile maneuvers, then ends the fight with a flashy finishing move."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 458138,
				tcgplayer: 213248
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 458138,
				tcgplayer: 213248
			}
		},
	],
}

export default card
