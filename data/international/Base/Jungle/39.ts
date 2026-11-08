import { Card } from 'models/database/card'
import Set from '../Jungle'

const card: Card = {
	name: {
		'en-us': "Marowak",
		'fr-fr': "Ossatueur",
		'de-de': "Knogga"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		105,
	],

	hp: 60,

	types: [
		"Fighting",
	],

	evolveFrom: {
		'en-us': "Cubone",
		'fr-fr': "Osselait"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fighting",
				"Fighting",
			],
			name: {
				'en-us': "Bonemerang",
				'fr-fr': "Osmerang",
				'de-de': "Knochmerang"
			},
			effect: {
				'en-us': "Flip 2 coins. This attack does 30 damage times the number of heads.",
				'fr-fr': "Lancez 2 pièces. Cette attaque inflige 30 dégâts multipliés par le nombre de faces.",
				'de-de': "Wirf zwei Münzen. Dieser Angriff fügt jedesmal, wenn die Münze 'Kopf' zeigt, 30 Schadenspunkte zu."
			},
			damage: "30x",

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Call for Friend",
				'fr-fr': "À la rescousse !",
				'de-de': "Freundesruf"
			},
			effect: {
				'en-us': "Search your deck for a Fighting Basic Pokémon card and put it onto your Bench. Shuffle your deck afterward. (You can't use this attack if your Bench is full.)",
				'fr-fr': "Cherchez dans votre deck une carte Pokémon  de base et placez-la sur votre Banc. Mélangez ensuite votre deck. (Vous ne pouvez pas utiliser cette attaque si votre Banc est plein.)",
				'de-de': "Suche in deinem Deck nach einer  Basis-Pokémon-Karte und lege sie auf deine Bank. Mische dein Deck danach. (Du kannst diesen Angriff nicht einsetzen, wenn deine Bank voll ist.)"
			},

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Lightning",
			value: "-30"
		},
	],
	retreat: 1,


	description: {
		'en-us': "The bone it holds is its key weapon. It throws the bone skillfully like a boomerang to K.O. targets.",
		'fr-fr': "L'os qu'il tient dans sa main est une arme. Il peut le lancer avec adresse pour assommer sa proie."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 273836,
				tcgplayer: 45142
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 273836,
				tcgplayer: 45142
			}
		}
	],
}

export default card
