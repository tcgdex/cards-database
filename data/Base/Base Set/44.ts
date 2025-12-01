import { Card } from '../../../interfaces'
import Set from '../Base Set'

const card: Card = {
	name: {
		en: "Bulbasaur",
		fr: "Bulbizarre",
		de: "Bisasam"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		1,
	],

	hp: 40,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Grass",
				"Grass",
			],
			name: {
				en: "Leech Seed",
				fr: "Vampigraine",
				de: "Schmarotzer"
			},
			effect: {
				en: "Unless all damage from this attack is prevented, you may remove 1 damage counter from Bulbasaur.",
				fr: "À moins que tous les dégâts infligés par cette attaque ne soient prévenus, vous pouvez retirer 1 marqueur de dégâts de Bulbizarre.",
				de: "Falls das verteidigende Pokémon den Schaden dieses Angriffs nicht abwehren kann, kannst du eine Schadensmarke von Bisasam entfernen."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	description: {
		fr: "Il a une étrange graine plantée sur son dos. Elle grandit avec lui depuis la naissance."
	},

	thirdParty: {
		cardmarket: 273739,
		tcgplayer: 42387
	},
	variants: [
		{
			type: "normal",
			subtype: "unlimited",
		},
		{
			type: "normal",
			subtype: "shadowless",
			stamp: ["1st-edition"]
		},
		{
			type: "normal",
			subtype: "shadowless",
		},
		{
			type: "normal",
			subtype: "1999-2000-copyright",
		}
	],

	related: [
		{
			type: "translation",
			cardPath: "data-asia/PMCG/PMCG1/001.ts"
		}
	]
}

export default card
