import { Card } from '../../../interfaces'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		en: "Gloom",
		fr: "Grolem",
		de: "Geowaz"
	},

	illustrator: "Kyoko Umemoto",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [44],

	hp: 70,

	types: [
		"Grass"
	],

	evolveFrom: {
		en: "Graveler",
		fr: "Gravalanch"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Enervating Pollen",
				fr: "Corps roc",
				de: "Rock Body"
			},
			effect: {
				en: "As long as Gloom is in play, Resistance on each player's Active Pokémon only reduces damage by 10.",
				fr: "Tous les dégâts infligés par des attaques sur Grolem sont réduits de 10 (après application de la Faiblesse et de la Résistance).",
				de: "All damage done by attacks to Golem is reduced by 10 (after applying Weakness and Resistance.)"
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Sleep Sap",
				fr: "Roule-pierre",
				de: "Rock Tumble"
			},
			effect: {
				en: "Both the Defending Pokémon and Gloom are now Asleep (after doing damage).",
				fr: "N'appliquez pas la Résistance.",
				de: "Don't apply Resistance."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "x2"
		},
	],
	retreat: 2,


	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 85824,
				cardmarket: 274889
			},
		},
		{
			type: "reverse",
		}
	],
}

export default card
