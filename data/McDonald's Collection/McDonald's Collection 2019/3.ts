import { Card } from '../../../interfaces'
import Set from '../McDonald\'s Collection 2019'

const card: Card = {
	set: Set,
	illustrator: "Yumi",
	category: "Pokemon",

	dexId: [126],

	description: {
		en: "When angered, it spouts brilliant fire from all over its body. It doesn’t calm down until its opponent has burned to ash.",
		de: "Ist es wütend, stößt es glühend heiße Flammen aus. Es hört damit erst auf, wenn von seinem Gegner nur noch Asche übrig ist."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Controlled Burn",
			de: "Brandrodung"
		},

		effect: {
			en: "Discard the top card of your opponent’s deck.",
			de: "Lege die oberste Karte vom Deck deines Gegners auf seinen Ablagestapel."
		}
	}, {
		name: {
			en: "Flamethrower",
			de: "Flammenwurf"
		},

		damage: 80,

		effect: {
			en: "Discard an Energy from this Pokémon.",
			de: "Lege 1 Energie von diesem Pokémon auf deinen Ablagestapel."
		}
	}],

	name: {
		en: "Magmar",
		de: "Magmar"
	},

	rarity: "None",
	hp: 80,
	types: ["Fire"],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		}
	],

	retreat: 2,

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 412859,
				tcgplayer: 200963
			}
		}
	]
}

export default card

