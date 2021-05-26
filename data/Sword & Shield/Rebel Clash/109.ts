import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		en: "Falinks",
		fr: "Hexadron"
	},

	illustrator: "Misa Tsutsui",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Call for Family",
				fr: "Appel à la Famille"
			},
			effect: {
				en: "Search your deck for up to 2 Basic Pokémon and put them onto your Bench. Then, shuffle your deck.",
				fr: "Cherchez dans votre deck jusqu’à 2 Pokémon de base, puis placez-les sur votre Banc. Mélangez ensuite votre deck."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Team Attack",
				fr: "Attaque de Groupe"
			},
			effect: {
				en: "This attack does 30 damage for each of your Benched Pokémon that has \"Falinks\" in its name.",
				fr: "Cette attaque inflige 30 dégâts pour chacun de vos Pokémon de Banc ayant « Hexadron » dans son nom."
			},
			damage: "30×",

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,
	hp: 90,
	types: ["Fighting"]
}

export default card
