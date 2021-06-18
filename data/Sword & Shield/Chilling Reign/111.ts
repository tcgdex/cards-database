import { Card } from '../../../interfaces'
import Set from '../Chilling Reign'

const card: Card = {
	set: Set,

	name: {
		en: "Aggron",
		fr: "Galeking"
	},

	illustrator: "Teeziro",
	rarity: "Rare",
	category: "Pokemon",
	hp: 180,
	types: ["Metal"],

	evolveFrom: {
		en: "Lairon",
		fr: "Galegon"
	},

	attacks: [{
		name: {
			en: "Guard Press",
			fr: "Pression de Garde"
		},

		effect: {
			en: "During your opponent’s next turn, this Pokémon takes 30 less damage from attacks (after applying Weakness and Resistance).",
			fr: "Pendant le prochain tour de votre adversaire, ce Pokémon subit 30 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance)."
		},

		damage: 100,
		cost: ["Metal", "Colorless", "Colorless"]
	}, {
		name: {
			en: "Seismic Rift",
			fr: "Faille Sismique"
		},

		effect: {
			en: "This attack also does 30 damage to each of your Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige aussi 30 dégâts à chacun de vos Pokémon. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)"
		},

		damage: 240,
		cost: ["Metal", "Metal", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 4,
	regulationMark: "E"
}

export default card