import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	name: {
		en: "Gothitelle",
		fr: "Sidérella"
	},

	illustrator: "Eri Yamaki",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 140,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Gothorita",
		fr: "Mesmérella"
	},

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Mind Bend",
				fr: "Contrôleur d’Esprit"
			},
			effect: {
				en: "Your opponent’s Active Pokémon is now Confused.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Confus."
			},
			damage: 40,

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Bend",
				fr: "Tordre"
			},
			effect: {
				en: "Choose 2 random cards from your opponent’s hand. Your opponent reveals those cards and shuffles them into their deck.",
				fr: "Choisissez 2 cartes au hasard dans la main de votre adversaire. Votre adversaire montre ces cartes, puis les mélange avec son deck."
			},
			damage: 90,

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	retreat: 2,
	regulationMark: "D"
}

export default card
