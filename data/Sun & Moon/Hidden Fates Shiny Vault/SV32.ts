import { Card } from '../../../interfaces'
import Set from '../Hidden Fates Shiny Vault'

const card: Card = {
	name: {
		en: "Celesteela",
		fr: "Bamboiselle",
		de: "Kaguron"
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
				en: "Moon Raker",
				fr: "Ratissage Lunaire",
				de: "Mondharke"
			},
			effect: {
				en: "If the total of both players' remaining Prize cards is exactly 6, this attack can be used for Metal.",
				fr: "S’il reste exactement 6 cartes Récompense aux deux joueurs réunis, cette attaque peut être utilisée pour Metal.",
				de: "Wenn die Summe der verbleibenden Preiskarten beider Spieler genau 6 ist, kann diese Attacke für {M} eingesetzt werden."
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
		en: "One kind of Ultra Beast. Witnesses have seen it burn down a forest by expelling gas from its two arms.",
		de: "Diese Ultrabestie wurde dabei gesichtet, wie sie mithilfe des Gases, das aus ihren beiden Armen strömt, große Waldflächen niederbrannte."
	},
}

export default card
