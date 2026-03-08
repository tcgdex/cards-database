import { Card } from '../../../interfaces'
import Set from '../HeartGold SoulSilver'

const card: Card = {
	name: {
		en: "Donphan",
		fr: "Donphan",
		de: "Donphan"
	},

	illustrator: "Kent Kanetsuna",
	rarity: "Rare PRIME",
	category: "Pokemon",
	set: Set,

	dexId: [
		232,
	],

	hp: 120,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Phanpy",
		fr: "Phanpy",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Exoskeleton",
				fr: "Exosquelette",
				de: "Exoskelett"
			},
			effect: {
				en: "Any damage done to Donphan by attacks is reduced by 20 (after applying Weakness and Resistance).",
				fr: "Tout dégât infligé à Donphan par des attaques est réduit de 20 (après application de la Faiblesse et de la Résistance).",
				de: "Schaden, der Donphan durch Angriffe zugefügt wird, wird um 20 Schadenspunkte reduziert (nachdem Schwäche und Resistenz verrechnet wurden)."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Earthquake",
				fr: "Séisme",
				de: "Erdbeben"
			},
			effect: {
				en: "Does 10 damage to each of your Benched Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Inflige 10 dégâts à chacun des Pokémon de votre Banc. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon du Banc.)",
				de: "Dieser Angriff fügt jedem Pokémon auf deiner Bank 10 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},
			damage: 60,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Fighting",
			],
			name: {
				en: "Heavy Impact",
				fr: "Gros impact",
				de: "Schwerer Einschlag"
			},

			damage: 90,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Lightning",
			value: "-20"
		},
	],

	retreat: 4,
	suffix: "Prime",

	variants: [
		{
			type: "holo"
		},
		{
			type: "holo",
			stamp : ["ross-cawthorn"],
		},
	],

	thirdParty: {
		cardmarket: 279012,
		tcgplayer: 84878
	}
}

export default card
