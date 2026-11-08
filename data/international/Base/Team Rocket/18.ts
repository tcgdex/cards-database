import { Card } from 'models/database/card'
import Set from '../Team Rocket'

const card: Card = {
	name: {
		'en-us': "Dark Alakazam",
		'fr-fr': "Alakazam obscur",
		'de-de': "Dunkles Simsala"
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
		'en-us': "Kadabra",
		'fr-fr': "Kadabra obscur"
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
				'en-us': "Teleport Blast",
				'fr-fr': "Téléportation instantanée",
				'de-de': "Teleport Blast"
			},
			effect: {
				'en-us': "You may switch Dark Alakazam with 1 of your Benched Pokémon (Do the damage before switching the Pokémon).",
				'fr-fr': "Vous pouvez échanger Alakazam obscur avec 1 des Pokémon de votre Banc. (Infligez les dégâts avant d'échanger les Pokémon.)",
				'de-de': "You may switch Dark Alakazam with 1 of your Benched Pokémon. (Do the damage before switching the Pokémon.)"
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
				'en-us': "Mind Shock",
				'fr-fr': "Choc mémoriel",
				'de-de': "Mind Shock"
			},
			effect: {
				'en-us': "Don't apply Weakness and Resistance for this attack. (Any other effects that would happen after applying Weakness and Resistance still happen.)",
				'fr-fr': "N'appliquez pas la Faiblesse et la Résistance pour cette attaque. (Tous les autres effets ayant lieu après application de la Faiblesse et la Résistance subsistent.)",
				'de-de': "Don't apply Weakness and Resistance for this attack. (Any other effects that would happen after applying Weakness and resistance still happen.)"
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
	retreat: 3,


	description: {
		'en-us': "Almost as if it were being controlled by something else, it never changes expressions, even in the middle of battle.",
		'fr-fr': "Il ne change jamais d'expression, même en plein cœur d'une bataille, comme s'il était sous le contrôle d'une force inconnue."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274054,
				tcgplayer: 84560
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274054,
				tcgplayer: 84560
			}
		}
	]
}

export default card
