import { Card } from '../../../interfaces'
import Set from '../Chilling Reign'

const card: Card = {
	set: Set,

	name: {
		en: "Liepard V",
		fr: "Léopardus V"
	},

	illustrator: "Ayaka Yoshida",
	rarity: "Rare",
	category: "Pokemon",
	hp: 190,
	types: ["Darkness"],

	abilities: [{
		type: "Ability",

		name: {
			en: "Hidden Claw",
			fr: "Griffes Cachées"
		},

		effect: {
			en: "When you play this Pokémon from your hand onto your Bench during your turn, you may discard a Pokémon Tool from a Pokémon (yours or your opponent’s).",
			fr: "Lorsque vous jouez ce Pokémon de votre main sur votre Banc pendant votre tour, vous pouvez défausser un Outil Pokémon d’un Pokémon (le vôtre ou celui de votre adversaire)."
		}
	}],

	attacks: [{
		name: {
			en: "Shadow Ripper",
			fr: "Écorchure Obscure"
		},

		effect: {
			en: "You may put this Pokémon and all attached cards into your hand.",
			fr: "Vous pouvez ajouter à votre main ce Pokémon et toutes les cartes attachées."
		},

		damage: 110,
		cost: ["Darkness", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card