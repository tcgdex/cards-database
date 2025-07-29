import { Card } from '../../../interfaces'
import Set from '../Dragons Exalted'

const card: Card = {
	name: {
		en: "Krookodile",
		fr: "Crocorible",
		es: "Krookodile",
		it: "Krookodile",
		pt: "Krookodile",
		de: "Rabigator"
	},

	illustrator: "5ban Graphics",
	rarity: "Secret Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		553,
	],

	hp: 150,

	types: [
		"Darkness",
	],

	evolveFrom: {
		en: "Krokorok",
		fr: "Escroco",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Dark Clamp",
				fr: "Pince des Ténèbres",
			},
			effect: {
				en: "The Defending Pokémon can't retreat during your opponent's next turn.",
				fr: "Le Pokémon Défenseur ne peut pas battre en retraite pendant le prochain tour de votre adversaire.",
			},
			damage: 60,

		},
		{
			cost: [
				"Darkness",
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Bombast",
				fr: "Arrogance",
			},
			effect: {
				en: "Does 40 damage times the number of Prize cards you have taken.",
				fr: "Inflige 40 dégâts multipliés par le nombre de cartes Récompense que vous avez récupérées.",
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 3,

	thirdParty: {
		cardmarket: 280566
	}
}

export default card
