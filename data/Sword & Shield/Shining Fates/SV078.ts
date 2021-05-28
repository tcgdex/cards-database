import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Zigzaton de Galar",
		en: "Galarian Zigzagoon"
	},

	illustrator: "Misa Tsutsui",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],

	abilities: [{
		type: "Ability",

		name: {
			fr: "Caprice Coup de Tête",
			en: "Headbutt Tantrum"
		},

		effect: {
			fr: "Lorsque vous jouez ce Pokémon de votre main pour sur votre Banc pendant votre tour, vous pouvez placer un marqueur de dégâts sur l’un des Pokémon de votre adversaire.",
			en: "When you play this Pokémon from your hand onto your Bench during your turn, you may put 1 damage counter on 1 of your opponent’s Pokémon."
		}
	}],

	attacks: [{
		name: {
			fr: "Attaque Surprise",
			en: "Surprise Attack"
		},

		effect: {
			fr: "Lancez une pièce. Si c’est pile, cette attaque ne fait rien.",
			en: "Flip a coin. If tails, this attack does nothing."
		},

		damage: 30,
		cost: ["Darkness", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D"
}

export default card