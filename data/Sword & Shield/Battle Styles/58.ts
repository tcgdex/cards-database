import { Card } from '../../../interfaces'
import Set from '../Battle Styles'

const card: Card = {
	set: Set,

	name: {
		en: "Claydol",
		fr: "Kaorine"
	},

	illustrator: "Shibuzoh.",
	rarity: "Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],

	evolveFrom: {
		en: "Baltoy",
		fr: "Balbuto"
	},

	attacks: [{
		name: {
			en: "Power Split",
			fr: "Partage Force"
		},

		effect: {
			en: "Attach Psychic Energy cards from your discard pile to your Pokémon in any way you like until your Pokémon and your opponent’s Pokémon have the same total amount of Energy attached.",
			fr: "Attachez des cartes Énergie Psychic de votre pile de défausse à vos Pokémon comme il vous plaît, jusqu’à ce que vos Pokémon et ceux de votre adversaire aient la même quantité d’Énergie attachée."
		},

		cost: ["Colorless"]
	}, {
		name: {
			en: "Psyshot",
			fr: "Piqûre Psy"
		},

		damage: 100,
		cost: ["Psychic", "Psychic", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 2
}

export default card