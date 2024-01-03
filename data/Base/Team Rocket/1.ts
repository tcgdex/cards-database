import { Card } from '../../../interfaces'
import Set from '../Team Rocket'

const card: Card = {
	name: {
		en: "Dark Alakazam",
		fr: "Alakazam obscur",
		de: "Dunkles Simsala"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		65,
	],

	hp: 60,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Kadabra",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Psychic",
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Teleport Blast",
				fr: "Téléportation instantanée",
				de: "Teleport Blast"
			},
			effect: {
				en: "You may switch Dark Alakazam with 1 of your Benched Pokémon (Do the damage before switching the Pokémon).",
				fr: "Vous pouvez échanger Alakazam obscur avec 1 des Pokémon de votre Banc. (Infligez les dégâts avant d'échanger les Pokémon.)",
				de: "You may switch Dark Alakazam with 1 of your Benched Pokémon. (Do the damage before switching the Pokémon.)"
			},
			damage: 30,

		},
		{
			cost: [
				"Psychic",
				"Psychic",
				"Psychic",
			],
			name: {
				en: "Mind Shock",
				fr: "Choc mémoriel",
				de: "Mind Shock"
			},
			effect: {
				en: "Don't apply Weakness and Resistance for this attack. (Any other effects that would happen after applying Weakness and Resistance still happen.)",
				fr: "N'appliquez pas la Faiblesse et la Résistance pour cette attaque. (Tous les autres effets ayant lieu après application de la Faiblesse et la Résistance subsistent.)",
				de: "Don't apply Weakness and Resistance for this attack. (Any other effects that would happen after applying Weakness and resistance still happen.)"
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	description: {
		fr: "Il ne change jamais d'expression, même en plein cœur d'une bataille, comme s'il était sous le contrôle d'une force inconnue."
	}
}

export default card
