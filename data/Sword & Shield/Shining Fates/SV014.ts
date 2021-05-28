import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Dratatin",
		en: "Appletun"
	},

	illustrator: "Kouki Saitou",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],

	evolveFrom: {
		fr: "Verpom",
		en: "Applin"
	},

	abilities: [{
		type: "Ability",

		name: {
			fr: "Arôme Délicieux",
			en: "Delicious Aroma"
		},

		effect: {
			fr: "Une fois pendant votre tour, vous pouvez lancer une pièce. Si c’est face, échangez l’un des Pokémon de Banc de base de votre adversaire contre son Pokémon Actif.",
			en: "Once during your turn, you may flip a coin. If heads, switch 1 of your opponent’s Benched Basic Pokémon with their Active Pokémon."
		}
	}],

	attacks: [{
		name: {
			fr: "Lance-Soleil",
			en: "Solar Beam"
		},

		damage: 70,
		cost: ["Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 3
}

export default card