import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Sorcilence"
	},

	illustrator: "Akira Komayama",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 150,
	types: ["Psychic"],

	evolveFrom: {
		fr: "Chapotus"
	},

	abilities: [{
		type: "Ability",

		name: {
			fr: "Chapeau Mental"
		},

		effect: {
			fr: "Une fois pendant votre tour, vous pouvez utiliser ce talent. Chaque joueur défausse une carte de sa main. (Votre adversaire défausse en premier.)"
		}
	}],

	attacks: [{
		name: {
			fr: "Rancune Dégoulinante"
		},

		effect: {
			fr: "Placez un marqueur de dégâts sur le Pokémon Actif de votre adversaire pour chaque Pokémon dans votre pile de défausse."
		},

		cost: ["Psychic"]
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