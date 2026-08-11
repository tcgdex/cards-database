import { Card } from 'models/database/card'
import Set from '../Crystal Guardians'

const card: Card = {
	name: {
		'en-us': "Manectric",
		'fr-fr': "Elecsprint",
		'de-de': "Voltenso"
	},

	illustrator: "Hisao Nakamura",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		310,
	],

	hp: 80,

	types: [
		"Lightning",
	],

	evolveFrom: {
		'en-us': "Electrike",
		'fr-fr': "Dynavolt"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				'en-us': "Kick Away",
				'fr-fr': "Coud'pied éjecteur",
				'de-de': "Wegkicken"
			},
			effect: {
				'en-us': "Your opponent switches the Defending Pokémon with 1 of his or her Benched Pokémon, if any.",
				'fr-fr': "Votre adversaire échange le Pokémon Défenseur avec 1 de ses Pokémon de Banc, s'il en a.",
				'de-de': "Dein Gegner tauscht das Verteidigende Pokémon gegen 1 Pokémon auf seiner Bank aus."
			},
			damage: 30,

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				'en-us': "Strong Current",
				'fr-fr': "Courant fort",
				'de-de': "Starke Strömung"
			},
			effect: {
				'en-us': "If Manectric has a Pokémon Tool card attached to it, this attack does 20 damage to each of your opponent's Benched Pokémon-ex. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Si Elecsprint possède une carte Outil Pokémon, cette attaque inflige 20 dégâts à chacun des Pokémon-ex de Banc de votre adversaire. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
				'de-de': "Wenn an Voltenso eine Pokémon-Ausrüstung angelegt ist, fügt dieser Angriff jedem Pokémon-ex auf der Bank deines Gegners 20 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Metal",
			value: "-30"
		},
	],


	retreat: 1,

	thirdParty: {
		cardmarket: 277089,
		tcgplayer: 87159
	},

	variants: [
		{
			type: "holo"
		},
		{
			type: "holo",
			stamp: ["set-logo"]
		}
	]
}

export default card
