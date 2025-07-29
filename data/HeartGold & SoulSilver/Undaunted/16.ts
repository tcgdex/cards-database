import { Card } from '../../../interfaces'
import Set from '../Undaunted'

const card: Card = {
	name: {
		en: "Honchkrow",
		fr: "Corboss",
		de: "Kramshef"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		430,
	],

	hp: 90,

	types: [
		"Darkness",
	],

	evolveFrom: {
		en: "Murkrow",
		fr: "Cornebre",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Shadow Bind",
				fr: "Étreinte d’ombre",
				de: "Schattenbindung"
			},
			effect: {
				en: "The Defending Pokémon can’t retreat during your opponent’s next turn.",
				fr: "Le Pokémon Défenseur ne peut pas battre en retraite durant le prochain tour de votre adversaire.",
				de: "Das Verteidigende Pokémon kann sich im nächsten Zug deines Gegners nicht zurückziehen."
			},
			damage: 30,

		},
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Vengeance",
				fr: "Vengeance",
				de: "Rache"
			},
			effect: {
				en: "Does 10 damage plus 10 more damage for each Darkness Pokémon in your discard pile.",
				fr: "Inflige 10 dégâts plus 10 dégâts supplémentaires pour chacun des Pokémon Darkness de votre pile de défausse.",
				de: "Dieser Angriff fügt 10 Schadenspunkte plus 10 weitere Schadenspunkte für jedes -Pokémon in deinem Ablagestapel zu."
			},
			damage: "10+",

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

	retreat: 2,

	description: {
		en: "It is merciless by nature. It is said that it never forgives the mistakes of its Murkrow followers."
	},

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 279268
	}
}

export default card
