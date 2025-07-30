import { Card } from '../../../interfaces'
import Set from '../HeartGold SoulSilver'

const card: Card = {
	name: {
		en: "Slowbro",
		fr: "Flagadoss",
		de: "Lahmus"
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		80,
	],

	hp: 90,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Slowpoke",
		fr: "Ramoloss",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Big Yawn",
				fr: "Gros bâillement",
				de: "Großer Gähner"
			},
			effect: {
				en: "Both Slowbro and the Defending Pokémon are now Asleep.",
				fr: "Flagadoss et le Pokémon Défenseur sont maintenant Endormis.",
				de: "Lahmus und das Verteidigende Pokémon schlafen jetzt."
			},
			damage: 30,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Madkinesis",
				fr: "Mentalisme",
				de: "Irrkinese"
			},
			effect: {
				en: "Does 30 damage plus 20 more damage for each Psychic Energy attached to Slowbro.",
				fr: "Inflige 30 dégâts plus 20 dégâts supplémentaires pour chaque carte Énergie Psychic attachée à Flagadoss.",
				de: "Dieser Angriff fügt 30 Schadenspunkte plus 20 weitere Schadenspunkte für jede an Lahmus angelegte -Energie zu."
			},
			damage: "30+",

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		en: "If the tail-biting Shellder is thrown off in a harsh battle, it reverts to being an ordinary Slowpoke."
	},

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 279024
	}
}

export default card
