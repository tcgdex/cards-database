import { Card } from '../../../interfaces'
import Set from '../Chilling Reign'

const card: Card = {
	set: Set,

	name: {
		fr: "Artikodin de Galar V",
		en: "Galarian Articuno V"
	},

	illustrator: "Uta",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 210,
	types: ["Psychic"],

	abilities: [{
		type: "Ability",

		name: {
			fr: "Reconstitution",
			en: "Reconstitute"
		},

		effect: {
			fr: "Vous devez défausser 2 cartes de votre main pour pouvoir utiliser ce talent. Une fois pendant votre tour, vous pouvez piocher une carte.",
			en: "You must discard 2 cards from your hand in order to use this Ability. Once during your turn, you may draw a card."
		}
	}],

	attacks: [{
		name: {
			fr: "Rayon Psy",
			en: "Psyray"
		},

		effect: {
			fr: "Le Pokémon Actif de votre adversaire est maintenant Confus.",
			en: "Your opponent’s Active Pokémon is now Confused."
		},

		damage: 110,
		cost: ["Psychic", "Colorless", "Colorless"]
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