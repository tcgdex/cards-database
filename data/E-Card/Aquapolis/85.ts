import { Card } from '../../../interfaces'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		en: "Horsea",
		fr: "Hypotrempe",
		de: "Seeper"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		116,
	],

	hp: 50,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Reverse Thrust",
				fr: "Poussée inverse",
				de: "Umkehrschub"
			},
			effect: {
				en: "Switch Horsea with 1 of your Benched Pokémon, if any.",
				fr: "Échangez Hypotrempe contre l'un des Pokémon de votre Banc, si vous en avez.",
				de: "Tausche Seeper mit 1 der Pokémon auf deiner Bank, falls du dort mindestens eins hast."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	thirdParty: {
		cardmarket: 275158,
		tcgplayer: 86187
	}
}

export default card
