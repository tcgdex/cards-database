import { Card } from '../../../interfaces'
import Set from '../Team Rocket'

const card: Card = {
	name: {
		en: "Dark Charizard",
		fr: "Dracaufeu obscur",
		de: "Dunkles Glurak"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		6,
	],

	hp: 80,

	types: [
		"Fire",
	],

	evolveFrom: {
		en: "Charmeleon",
		fr: "Reptincel obscur"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Nail Flick",
				fr: "Chiquenaude",
				de: "Nagelschnipp"
			},

			damage: 10,

		},
		{
			cost: [
				"Fire",
				"Fire",
			],
			name: {
				en: "Continuous Fireball",
				fr: "Boules de feu continues",
				de: "Dauerfeuerball"
			},
			effect: {
				en: "Flip a number of coins equal to the number of Energy cards attached to Dark Charizard. This attack does 50 damage times the number of heads. Discard a number of Energy cards attached to Dark Charizard equal to the number of heads.",
				fr: "Lancez un nombre de pièces égal au nombre d'Énergies  attachées à Dracaufeu obscur. Cette attaque inflige 50 dégâts multipliés par le nombre de faces. Défaussez autant de cartes Énergies  attachées à Dracaufeu obscur que le nombre de faces.",
				de: "Wirf eine Anzahl Münzen gleich der Anzahl  Energiekarten auf Dunkles Glurak. Dieser Angriff fügt jedesmal, wenn die Münze Kopf zeigt, 50 Schadenspunkte zu. Entferne soviele  Energiekarten von Dukles Glurak wie Kopf geworfen wurde."
			},
			damage: "50x",

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	retreat: 3,

	description: {
		fr: "Comme possédé, il crache du feu tel un volcan, essayant de brûler tout ce qu'il voit."
	},

	thirdParty: {
		cardmarket: 274057,
		tcgplayer: 84573
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "normal",
			stamp: ["1st-edition"]
		}
	]
}

export default card
