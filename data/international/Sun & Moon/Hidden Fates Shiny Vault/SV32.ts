import { Card } from 'models/database/card'
import Set from '../Hidden Fates Shiny Vault'

const card: Card = {
	name: {
		'en-us': "Celesteela",
		'fr-fr': "Bamboiselle",
	},
	illustrator: "Kouki Saitou",
	rarity: "Shiny rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		797,
	],
	hp: 140,
	types: [
		"Metal",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Moon Raker",
				'fr-fr': "Ratissage Lunaire",
			},
			effect: {
				'en-us': "If the total of both players' remaining Prize cards is exactly 6, this attack can be used for Metal.",
				'fr-fr': "S’il reste exactement 6 cartes Récompense aux deux joueurs réunis, cette attaque peut être utilisée pour Metal.",
			},
			damage: 160,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],
	retreat: 4,




	description: {
		'en-us': "One kind of Ultra Beast. Witnesses have seen it burn down a forest by expelling gas from its two arms.",
	},
}

export default card
