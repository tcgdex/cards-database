import { Card } from '../../../interfaces'
import Set from '../Unleashed'

const card: Card = {
	name: {
		en: "Seadra",
		fr: "Hypocean",
		de: "Seemon"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		117,
	],

	hp: 80,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Horsea",
		fr: "Hypotrempe",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Muddy Water",
				fr: "Ocroupi",
				de: "Lehmbrühe"
			},
			effect: {
				en: "Does 10 damage to 1 of your opponent’s Benched Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Inflige 10 dégâts à l’un des Pokémon se trouvant sur le Banc de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				de: "Dieser Angriff fügt 1 Pokémon auf der Bank deines Gegners 10 Schadenspunkte zu. (Wende Schwäche und Resistzenz bei Pokémon auf der Bank nicht an.)"
			},
			damage: 20,

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Razor Fin",
				fr: "Aileron-rasoir",
				de: "Rasierflosse"
			},

			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		en: "Its fin tips leak poison. Its fins and bones are highly valued as ingredients in herbal medicine."
	},

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 279196
	}
}

export default card
