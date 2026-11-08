import { Card } from 'models/database/card'
import Set from '../Unleashed'

const card: Card = {
	name: {
		'en-us': "Ursaring",
		'fr-fr': "Ursaring",
		'de-de': "Ursaring"
	},

	illustrator: "Wataru Kawahara",
	rarity: "Rare PRIME",
	category: "Pokemon",
	set: Set,

	dexId: [217],

	hp: 110,

	types: [
		"Colorless"
	],

	evolveFrom: {
		'en-us': "Teddiursa",
		'fr-fr': "Teddiursa"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Berserk",
				'fr-fr': "Fou-furieux",
				'de-de': "Berserker"
			},
			effect: {
				'en-us': "If Ursaring has any damage counters on it, each of Ursaring's attacks does 60 more damage (before applying Weakness and Resistance).",
				'fr-fr': "Si Ursaring a des marqueurs de dégât, chacune de ses attaques inflige 60 dégâts supplémentaires (avant application de la Faiblesse et de la Résistance).",
				'de-de': "Wenn auf Ursaring mindestens 1 Schadensmarke liegt, fügen sämtliche Angriffe Ursarings 60 weitere Schadenspunkte zu (bevor Schwäche und Resistenz verrechnet werden)."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Hammer Arm",
				'fr-fr': "Marto-Poing",
				'de-de': "Hammerarm"
			},
			effect: {
				'en-us': "Discard the top card from your opponent's deck.",
				'fr-fr': "Défaussez la première carte du dessus du deck de votre adversaire.",
				'de-de': "Lege die oberste Karte vom Deck deines Gegners auf seinen Ablagestapel."
			},
			damage: 30,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Megaton Lariat",
				'fr-fr': "Lasso titanesque",
				'de-de': "Megatonnenlasso"
			},

			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 3,
	suffix: "Prime",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 279183,
				tcgplayer: 90255
			}
		},
	],

}

export default card
