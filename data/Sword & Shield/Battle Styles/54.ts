import { Card } from '../../../interfaces'
import Set from '../Battle Styles'

const card: Card = {
	set: Set,

	name: {
		en: "Galarian Slowpoke",
		fr: "Ramoloss de Galar"
	},

	illustrator: "Ryota Murayama",
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],

	attacks: [{
		name: {
			en: "Tantailizing",
			fr: "Ragoûtant"
		},

		effect: {
			en: "Flip a coin. If heads, switch 1 of your opponent’s Benched Pokémon with their Active Pokémon.",
			fr: "Lancez une pièce. Si c’est face, échangez l’un des Pokémon de Banc de votre adversaire contre son Pokémon Actif."
		},

		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card