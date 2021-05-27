import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Charmilly",
		en: "Alcremie"
	},

	illustrator: "MAHOU",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 110,
	types: ["Psychic"],

	evolveFrom: {
		fr: "Crèmy",
		en: "Milcery"
	},

	attacks: [{
		name: {
			fr: "Nappage",
			en: "Decorate"
		},

		effect: {
			fr: "Attachez le nombre de cartes Énergie de base voulues de votre main à vos Pokémon comme il vous plaît.",
			en: "Attach any number of basic Energy cards from your hand to your Pokémon in any way you like."
		},

		cost: ["Colorless"]
	}, {
		name: {
			fr: "Vampibaiser",
			en: "Draining Kiss"
		},

		effect: {
			fr: "Soignez 30 dégâts de ce Pokémon.",
			en: "Heal 30 damage from this Pokémon."
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