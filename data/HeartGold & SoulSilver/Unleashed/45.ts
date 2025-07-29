import { Card } from '../../../interfaces'
import Set from '../Unleashed'

const card: Card = {
	name: {
		en: "Buizel",
		fr: "Mustébouée",
		de: "Bamelin"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		418,
	],

	hp: 60,

	types: [
		"Water",
	],

	stage: "Basic",

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
				de: "Dieser Angriff fügt 1 Pokémon auf der Bank deines Gegners 10 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},
			damage: 10,

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
		en: "It inflates its flotation sac, keeping its face above water in order to watch for prey movement."
	},

	variants: {
		normal: true,
		reverse: false,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 279201
	}
}

export default card
