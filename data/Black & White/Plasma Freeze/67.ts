import { Card } from '../../../interfaces'
import Set from '../Plasma Freeze'

const card: Card = {
	name: {
		en: "Absol",
		fr: "Absol",
		es: "Absol",
		it: "Absol",
		pt: "Absol",
		de: "Absol"
	},

	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		359,
	],

	hp: 100,

	types: [
		"Darkness",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Mind Jack",
				fr: "Emprise Mentale",
				de: "Gedankenstoß"
			},
			effect: {
				en: "Does 20 more damage for each of your opponent's Benched Pokémon.",
				fr: "Inflige 20 dégâts supplémentaires pour chaque Pokémon de Banc de votre adversaire.",
				de: "Dieser Angriff fügt 20 weitere Schadenspunkte für jedes Pokémon auf der Bank deines Gegners zu."
			},
			damage: 20,

		},
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Fearsome Shadow",
				fr: "Ombre Redoutable",
				de: "Furchtbarer Schatten"
			},
			effect: {
				en: "Your opponent reveals his or her hand.",
				fr: "Votre adversaire montre sa main.",
				de: "Dein Gegner deckt seine Handkarten auf."
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

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		en: "It appears from deep in the mountains to warn people about upcoming disasters it has sensed with its horn.",
		de: "Es steigt von den Bergen herab, um die Menschen vor Unheil zu warnen, das es mit seinem Horn vorhergesehen hat."
	},

	thirdParty: {
		cardmarket: 280945,
		tcgplayer: 83455
	}
}

export default card
