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
		fr: "Kadabra obscur",
		de: "Kadabra"
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
				de: "Teleportstoß"
			},
			effect: {
				en: "You may switch Dark Alakazam with 1 of your Benched Pokémon (Do the damage before switching the Pokémon).",
				fr: "Vous pouvez échanger Alakazam obscur avec 1 des Pokémon de votre Banc. (Infligez les dégâts avant d'échanger les Pokémon.)",
				de: "Du kannst Dunkles Simsala mit einem Pokémon auf deiner Bank austauschen. (Füge die Schadenspunkte vor dem Auswechseln der Pokémon zu.)"
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
				de: "Verstandesschock"
			},
			effect: {
				en: "Don't apply Weakness and Resistance for this attack. (Any other effects that would happen after applying Weakness and Resistance still happen.)",
				fr: "N'appliquez pas la Faiblesse et la Résistance pour cette attaque. (Tous les autres effets ayant lieu après application de la Faiblesse et la Résistance subsistent.)",
				de: "Schwäche und Resistenz für diesen Angriff nicht anwenden. (Alle anderen Auswirkungen nach der Anwendung von Schwäche und Resistenz finden immer noch statt.)"
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
		en: "Almost as if it were being controlled by something else, it never changes expressions, even in the middle of battle.",
		fr: "Il ne change jamais d'expression, même en plein cœur d'une bataille, comme s'il était sous le contrôle d'une force inconnue.",
		de: "Fast als ob es ferngesteuert wäre, ändert es selbst in der Mitte der Schlacht seinen Gesichtsausdruck nie."
	},


	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 274054,
				tcgplayer: 84559
			}
		},
		{
			type: "holo",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274054,
				tcgplayer: 84559
			}
		}
	]
}

export default card
