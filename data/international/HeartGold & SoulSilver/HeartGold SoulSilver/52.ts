import { Card } from 'models/database/card'
import Set from '../HeartGold SoulSilver'

const card: Card = {
	name: {
		'en-us': "Slowbro",
		'fr-fr': "Flagadoss",
		'de-de': "Lahmus"
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [80],

	hp: 90,

	types: [
		"Water"
	],

	evolveFrom: {
		'en-us': "Slowpoke",
		'fr-fr': "Ramoloss"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Big Yawn",
				'fr-fr': "Gros bâillement",
				'de-de': "Großer Gähner"
			},
			effect: {
				'en-us': "Both Slowbro and the Defending Pokémon are now Asleep.",
				'fr-fr': "Flagadoss et le Pokémon Défenseur sont maintenant Endormis.",
				'de-de': "Lahmus und das Verteidigende Pokémon schlafen jetzt."
			},
			damage: 30,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Madkinesis",
				'fr-fr': "Mentalisme",
				'de-de': "Irrkinese"
			},
			effect: {
				'en-us': "Does 30 damage plus 20 more damage for each Psychic Energy attached to Slowbro.",
				'fr-fr': "Inflige 30 dégâts plus 20 dégâts supplémentaires pour chaque carte Énergie Psychic attachée à Flagadoss.",
				'de-de': "Dieser Angriff fügt 30 Schadenspunkte plus 20 weitere Schadenspunkte für jede an Lahmus angelegte -Energie zu."
			},
			damage: "30+",

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "If the tail-biting Shellder is thrown off in a harsh battle, it reverts to being an ordinary Slowpoke."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 89307,
				cardmarket: 279024
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 89307,
				cardmarket: 279024
			}
		},
	],

}

export default card
