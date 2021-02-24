import { Card } from '../../../interfaces'
import Set from '../Secret Wonders'

const card: Card = {
	name: {
		en: "Golduck",
		fr: "Akwakwak",
	},
	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		55,
	],
	hp: 90,
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
				"Psychic",
			],
			name: {
				en: "Encore",
				fr: "Encore",
			},
			effect: {
				en: "Choose 1 of the Defending Pokémon's attacks. That Pokémon can use only that attack during your opponent's next turn.",
				fr: "Choisissez 1 des attaques du Pokémon Défenseur. Ce Pokémon ne peut utiliser que cette attaque lors du prochain tour de votre adversaire.",
			},
			damage: 20,

		},
		{
			cost: [
				"Water",
				"Psychic",
			],
			name: {
				en: "Break Beam",
				fr: "Rayon brisant",
			},
			effect: {
				en: "You may do 40 damage plus 20 more damage. If you do, Golduck is now Confused.",
				fr: "Vous pouvez infliger 40 dégâts plus 20 dégâts supplémentaires. Akwakwak devient alors Confus.",
			},
			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "+20"
		},
	],

	retreat: 1,



}

export default card
