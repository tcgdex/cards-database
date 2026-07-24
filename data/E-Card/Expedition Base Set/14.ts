import { Card } from '../../../interfaces'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		en: "Houndoom",
		fr: "Grolem",
		de: "Geowaz"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [229],

	hp: 80,

	types: [
		"Fire"
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
				en: "Rock Body",
				fr: "Corps roc",
				de: "Rock Body"
			},
			effect: {
				en: "All Damage done by attacks to Golem is reduced by 10 (after applying Weakness and Resistance).",
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
				en: "Smokescreen",
				fr: "Roule-pierre",
				de: "Rock Tumble"
			},
			effect: {
				en: "If the Defending Pokémon tries to attack during your opponent's next turn, your opponent flips a coin. If tails, that attack does nothing.",
				fr: "N'appliquez pas la Résistance.",
				de: "Don't apply Resistance."
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "x2"
		},
	],
	retreat: 1,


	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 85821,
				cardmarket: 274889
			},
		},
		{
			type: "reverse",
		}
	],
}

export default card
