import { Card } from 'models/database/card'
import Set from '../Emerald'

const card: Card = {
	name: {
		'en-us': "Regirock ex",
		'fr-fr': "Regirock ex",
		'de-de': "Regirock ex"
	},

	illustrator: "Hikaru Koike",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		377,
	],

	hp: 110,

	types: [
		"Fighting",
	],

	suffix: "ex",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Mend",
				'fr-fr': "Réparation",
				'de-de': "Mend"
			},
			effect: {
				'en-us': "Search your discard pile for a Fighting Energy card and attach it to Regirock ex. If you do, remove 1 damage counter from Regirock ex.",
				'fr-fr': "Choisissez dans votre pile de défausse une carte Énergie  et attachez-la à Regirock ex. Retirez alors à Regirock ex 1 marqueur de dégât.",
				'de-de': "Search your discard pile for a  Energy card and attach it to Regirock ex. If you do, remove 1 damage counter from Regirock ex."
			},

		},
		{
			cost: [
				"Colorless",
				"Fighting",
				"Fighting",
			],
			name: {
				'en-us': "Metal Crush",
				'fr-fr': "Broyage métallique",
				'de-de': "Metal Crush"
			},
			effect: {
				'en-us': "If Registeel ex is in play, this attack does 40 damage plus 20 more damage.",
				'fr-fr': "Si Registeel ex est en jeu, cette attaque inflige 40 dégâts plus 20 dégâts supplémentaires.",
				'de-de': "If Registeel ex is in play, this attack does 40 damage plus 20 more damage."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	
	retreat: 3,

	thirdParty: {
		tcgplayer: 88675,
		cardmarket: 276610
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 88675,
				cardmarket: 276610
			},
		},
	],
}

export default card
