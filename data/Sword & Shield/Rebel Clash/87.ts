import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		en: "Alcremie",
		fr: "Charmilly"
	},

	illustrator: "Mizue",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	evolveFrom: {
		en: "Milcery",
		fr: "Crèmy"
	},

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Decorate",
				fr: "Nappage"
			},
			effect: {
				en: "Attach any number of basic Energy cards from your hand to your Pokémon in any way you like.",
				fr: "Attachez le nombre de cartes Énergie de base voulues de votre main à vos Pokémon comme il vous plaît."
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Draining Kiss",
				fr: "Vampibaiser"
			},
			effect: {
				en: "Heal 30 damage from this Pokémon.",
				fr: "Soignez 30 dégâts de ce Pokémon."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 1,
	hp: 110,
	types: ["Psychic"]
}

export default card
