import { Card } from '../../../interfaces'
import Set from '../Noble Victories'

const card: Card = {
	name: {
		en: "Audino",
		fr: "Nanméouïe",
		es: "Audino",
		it: "Audino",
		pt: "Audino",
		de: "Ohrdoch"
	},

	illustrator: "Naoki Saito",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		531,
	],

	hp: 90,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Do the Wave",
				fr: "Faites la Vague",
				de: "Wellenreiten"
			},
			effect: {
				en: "Does 10 damage times the number of your Benched Pokémon.",
				fr: "Inflige 10 dégâts multipliés par le nombre de vos Pokémon de Banc.",
				de: "Dieser Angriff fügt 10 Schadenspunkte mal der Anzahl der Pokémon auf deiner Bank zu."
			},
			damage: 10,

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
		en: "It touches others with the feelers on its ears, using the sound of their heartbeats to tell how they are feeling.",
		de: "Berührt es jemanden mit den Fühlern an seinen Ohren, erfährt es durch den Herzschlag der Person, wie es ihr geht."
	},

	thirdParty: {
		cardmarket: 280208,
		tcgplayer: 83662
	}
}

export default card
