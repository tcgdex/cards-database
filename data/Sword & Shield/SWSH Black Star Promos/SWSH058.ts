import { Card } from '../../../interfaces'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,

	name: {
		en: "Alcremie",
		fr: "Charmilly"
	},

	illustrator: "sui",
	rarity: "Common",
	category: "Pokemon",
	hp: 110,
	types: ["Psychic"],

	evolveFrom: {
		en: "Milcery",
		fr: "Crèmy"
	},

	attacks: [{
		name: {
			en: "Decorate",
			fr: "Nappage"
		},

		effect: {
			en: "Attach as many basic Energy cards as you like from your hand to your Pokémon in any way you like.",
			fr: "Attachez le nombre de cartes Énergie de base voulues de votre main à vos Pokémon comme il vous plaît."
		},

		cost: ["Colorless"]
	}, {
		name: {
			en: "Draining Kiss",
			fr: "Vampibaiser"
		},

		effect: {
			en: "Heal 30 damage from this Pokémon.",
			fr: "Soignez 30 dégâts de ce Pokémon."
		},

		damage: 50,
		cost: ["Psychic", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1
}

export default card