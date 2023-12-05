import { Card } from '../../../interfaces'
import Set from '../Platinum'

const card: Card = {
	name: {
		en: "Giratina",
		fr: "Giratina",
		de: "Giratina"
	},
	illustrator: "Hajime Kusajima",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		487,
	],
	hp: 100,
	types: [
		"Psychic",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Over Slash",
				fr: "Sur-trancher",
				de: "Over Slash"
			},
			effect: {
				en: "This attack does 10 damage to each of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Cette attaque inflige 10 dégâts à chacun des Pokémon de votre adversaire. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc).",
				de: "This attack does 10 damage to each of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)"
			},

		},
		{
			cost: [
				"Psychic",
				"Psychic",
			],
			name: {
				en: "Dark Wing Flaps",
				fr: "Battements d'ailes obscurs",
				de: "Dark Wing Flaps"
			},
			effect: {
				en: "Choose 1 card from your opponent's hand without looking. Look at the card you chose, then have your opponent shuffle that card into his or her deck.",
				fr: "Choisissez sans regarder 1 carte de la main de votre adversaire. Regardez-la et demandez à votre adversaire de la mélanger à son deck.",
				de: "Choose 1 card from your opponent's hand without looking. Look at the card you choe, then have your opponent shuffle that card into his or her deck."
			},
			damage: 20,

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Wrack Down",
				fr: "Réduire en poussière",
				de: "Wrack Down"
			},

			damage: 60,

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
			type: "Colorless",
			value: "-20"
		},
	],
	retreat: 3,



}

export default card
