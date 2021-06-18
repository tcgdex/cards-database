import { Card } from '../../../interfaces'
import Set from '../Chilling Reign'

const card: Card = {
	set: Set,

	name: {
		fr: "Léopardus V",
		en: "Liepard V"
	},

	illustrator: "Ayaka Yoshida",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 190,
	types: ["Darkness"],

	abilities: [{
		type: "Ability",

		name: {
			fr: "Griffes Cachées",
			en: "Hidden Claw"
		},

		effect: {
			fr: "Lorsque vous jouez ce Pokémon de votre main sur votre Banc pendant votre tour, vous pouvez défausser un Outil Pokémon d’un Pokémon (le vôtre ou celui de votre adversaire).",
			en: "When you play this Pokémon from your hand onto your Bench during your turn, you may discard a Pokémon Tool from a Pokémon (yours or your opponent’s)."
		}
	}],

	attacks: [{
		name: {
			fr: "Écorchure Obscure",
			en: "Shadow Ripper"
		},

		effect: {
			fr: "Vous pouvez ajouter à votre main ce Pokémon et toutes les cartes attachées.",
			en: "You may put this Pokémon and all attached cards into your hand."
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