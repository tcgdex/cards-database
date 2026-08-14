import { Card } from '../../../interfaces'
import Set from '../POP Series 1'

const card: Card = {
	name: {
		en: "Armaldo ex",
		fr: "Armaldo ex",
		de: "Armaldo ex"
	},

	illustrator: "Hikaru Koike",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [348],

	hp: 160,

	types: [
		"Fighting"
	],

	evolveFrom: {
		en: "Anorith",
		fr: "Anorith",
		de: "Anorith"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Twin-blade",
				fr: "Double épée",
				de: "Doppelklinge"
			},
			effect: {
				en: "Does 30 damage to each Defending Pokémon.",
				fr: "Inflige 30 dégâts à chacun des Pokémon Défenseurs.",
				de: "Dieser Angriff fügt allen Verteidigenden Pokémon 30 Schadenspunkte zu."
			},

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Supersonic Claws",
				fr: "Griffes supersoniques",
				de: "Überschallklauen"
			},
			effect: {
				en: "This attack's damage is not affected by Resistance.",
				fr: "Les dégâts de cette attaque ne sont pas affectés par la Résistance.",
				de: "Der Schaden dieses Angriffs wird durch die Resistenz des Verteidigenden Pokémon nicht verringert."
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Grass"
		},
		{
			type: "Water"
		},
	],

	suffix: "EX",
	retreat: 3,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 83623,
				cardmarket: 277430
			},
		},
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 97806,
				cardmarket: 277430
			},
		},
	],

}

export default card
