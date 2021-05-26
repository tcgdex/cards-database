import { Card } from '../../../interfaces'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		en: "Celesteela",
		fr: "Bamboiselle",
	},
	illustrator: "kawayoo",
	rarity: "Rare",
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
				en: "Moon Raker",
				fr: "Ratissage Lunaire",
			},
			effect: {
				en: "If the total of both players' remaining Prize cards is exactly 6, this attack can be used for Metal.",
				fr: "S’il reste exactement 6 cartes Récompense aux deux joueurs réunis, cette attaque peut être utilisée pour Metal.",
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



}

export default card
