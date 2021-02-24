import { Card } from '../../../interfaces'
import Set from '../Team Up'

const card: Card = {
	name: {
		en: "Golduck",
		fr: "Akwakwak",
	},
	illustrator: "Masakazu Fukuda",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		55,
	],
	hp: 110,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Psyduck",
		fr: "Psykokwak",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Amnesia",
				fr: "Amnésie",
			},
			effect: {
				en: "Choose 1 of your opponent's Active Pokémon's attacks. That Pokémon can't use that attack during your opponent's next turn.",
				fr: "Choisissez l’une des attaques du Pokémon Actif de votre adversaire. Ce Pokémon ne peut pas utiliser cette attaque pendant le prochain tour de votre adversaire.",
			},
			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Swim",
				fr: "Nager",
			},
			effect: {
				en: "If any of your opponent's Pokémon have any Water Energy attached to them, you may do 90 damage to 1 of your opponent's Benched Pokémon instead of their Active Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Si de l’Énergie Water est attachée à l’un des Pokémon de votre adversaire, vous pouvez infliger 90 dégâts à l’un des Pokémon de Banc de votre adversaire plutôt qu’à son Pokémon Actif. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			},
			damage: 90,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
