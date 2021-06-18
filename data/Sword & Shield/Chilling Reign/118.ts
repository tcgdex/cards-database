import { Card } from '../../../interfaces'
import Set from '../Chilling Reign'

const card: Card = {
	set: Set,

	name: {
		en: "Porygon-Z",
		fr: "Porygon-Z"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Rare",
	category: "Pokemon",
	hp: 140,
	types: ["Colorless"],

	evolveFrom: {
		en: "Porygon2",
		fr: "Porygon2"
	},

	abilities: [{
		type: "Ability",

		name: {
			en: "Bug Transmission",
			fr: "Piratage"
		},

		effect: {
			en: "Whenever you attach an Energy card from your hand to this Pokémon during your turn, you may make your opponent’s Active Pokémon Confused.",
			fr: "Chaque fois que vous attachez une carte Énergie de votre main à ce Pokémon pendant votre tour, vous pouvez laisser le Pokémon Actif de votre adversaire Confus."
		}
	}],

	attacks: [{
		name: {
			en: "Superbeam",
			fr: "Super Rayon"
		},

		effect: {
			en: "Discard 2 Energy from this Pokémon.",
			fr: "Défaussez 2 Énergies de ce Pokémon."
		},

		damage: 170,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card