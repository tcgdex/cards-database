import { Card } from '../../../interfaces'
import Set from '../Noble Victories'

const card: Card = {
	name: {
		en: "Bisharp",
		fr: "Scalproie",
		es: "Bisharp",
		it: "Bisharp",
		pt: "Bisharp",
		de: "Caesurio"
	},

	illustrator: "Kouki Saitou",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		625,
	],

	hp: 90,

	types: [
		"Darkness",
	],

	evolveFrom: {
		en: "Pawniard",
		fr: "Scalpion",
		de: "Gladiantri"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				en: "Finishing Blow",
				fr: "Coup de Grâce",
				de: "Finalhieb"
			},
			effect: {
				en: "If the Defending Pokémon already has any damage counters on it, this attack does 50 more damage.",
				fr: "Si le Pokémon Défenseur a déjà des marqueurs de dégâts, cette attaque inflige 50 dégâts supplémentaires.",
				de: "Wenn auf dem Verteidigenden Pokémon bereits mindestens 1 Schadensmarke liegt, fügt dieser Angriff 50 weitere Schadenspunkte zu."
			},
			damage: 20,

		},
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Night Slash",
				fr: "Tranche-Nuit",
				de: "Nachthieb"
			},
			effect: {
				en: "Switch this Pokémon with 1 of your Benched Pokémon.",
				fr: "Échangez ce Pokémon avec 1 de vos Pokémon de Banc.",
				de: "Tausche dieses Pokémon gegen 1 Pokémon auf deiner Bank aus."
			},
			damage: 30,

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
		en: "Bisharp pursues prey in the company of a large group of Pawniard. Then Bisharp finishes off the prey.",
		de: "Es rückt seinen Opfern mit einer Schar von Gladiantri im Gefolge auf den Pelz. Den letzten Hieb übernimmt es selbst."
	},

	thirdParty: {
		cardmarket: 280199,
		tcgplayer: 83842
	}
}

export default card
