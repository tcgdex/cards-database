import { Card } from '../../../interfaces'
import Set from '../Champion\'s Path'

const card: Card = {
	name: {
		en: "Scrafty",
		fr: "Baggaïd"
	},

	illustrator: "tetsuya koizumi",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 120,

	types: [
		"Darkness",
	],

	evolveFrom: {
		en: "Scraggy",
		fr: "Baggiguane"
	},

	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				en: "Corner",
				fr: "Coinçage"
			},
			effect: {
				en: "During your opponent’s next turn, the Defending Pokémon can’t retreat.",
				fr: "Pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas battre en retraite."
			},
			damage: 30,

		},
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Bad Brawl",
				fr: "Grosse Bagarre"
			},
			effect: {
				en: "If you played Piers from your hand during this turn, this attack does 90 more damage.",
				fr: "Si vous avez joué Peterson de votre main pendant ce tour, cette attaque inflige 90 dégâts supplémentaires."
			},
			damage: "90+",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,
	regulationMark: "D"
}

export default card
