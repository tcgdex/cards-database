import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Sorcilence",
		en: "Hatterene"
	},

	illustrator: "Akira Komayama",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 150,
	types: ["Psychic"],

	evolveFrom: {
		fr: "Chapotus",
		en: "Hattrem"
	},

	abilities: [{
		type: "Ability",

		name: {
			fr: "Chapeau Mental",
			en: "Mind Hat"
		},

		effect: {
			fr: "Une fois pendant votre tour, vous pouvez utiliser ce talent. Chaque joueur défausse une carte de sa main. (Votre adversaire défausse en premier.)",
			en: "Once during your turn, you may use this Ability. Each player discards a card from their hand. (Your opponent discards first.)"
		}
	}],

	attacks: [{
		name: {
			fr: "Rancune Dégoulinante",
			en: "Dripping Grudge"
		},

		effect: {
			fr: "Placez un marqueur de dégâts sur le Pokémon Actif de votre adversaire pour chaque Pokémon dans votre pile de défausse.",
			en: "Put 1 damage counter on your opponent’s Active Pokémon for each Pokémon in your discard pile."
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

	retreat: 2,
	regulationMark: "D"
}

export default card