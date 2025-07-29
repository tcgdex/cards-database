import { Card } from '../../../interfaces'
import Set from '../Base Set'

const card: Card = {
	name: {
		en: "Kadabra",
		fr: "Kadabra",
		de: "Kadabra"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		64,
	],

	hp: 60,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Abra",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Psychic",
				"Psychic",
			],
			name: {
				en: "Recover",
				fr: "Soin",
				de: "Erholung"
			},
			effect: {
				en: "Discard 1 Energy card attached to Kadabra in order use this attack. Remove all damage counters from Kadabra.",
				fr: "Défaussez 1 carte Énergie  attachée à Kadabra pour pouvoir utiliser cette attaque. Retirez tous les marqueurs de dégâts sur Kadabra.",
				de: "Entferne eine auf kadabra abgelegte  Energiekarte, um diesen Angriff auszuführen. Entferne alle Schadensmarken von Kadabra."
			},

		},
		{
			cost: [
				"Psychic",
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Super Psy",
				fr: "Super Psy",
				de: "Super-Psychoschlag"
			},

			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	description: {
		fr: "Son corps émet des ondes alpha provoquant des migraines à ceux qui se trouvent à proximité."
	},

	thirdParty: {
		cardmarket: 273727
	}
}

export default card
