import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		en: "Clefable",
		fr: "Mélodelfe"
	},

	illustrator: "miki kudo",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	evolveFrom: {
		en: "Clefairy",
		fr: "Mélofée"
	},

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Prankish",
				fr: "Plaisantin"
			},
			effect: {
				en: "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may put an Energy attached to your opponent’s Active Pokémon on top of their deck.",
				fr: "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer l’un de vos Pokémon pendant votre tour, vous pouvez placer une Énergie attachée au Pokémon Actif de votre adversaire sur le dessus de son deck."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Moon Kick",
				fr: "Coup d’Pied Lunaire"
			},

			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 2,
	hp: 110,
	types: ["Psychic"],
	regulationMark: "D"
}

export default card
