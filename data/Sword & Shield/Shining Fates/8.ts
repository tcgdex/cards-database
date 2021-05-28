import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Archéduc",
		en: "Decidueye"
	},

	illustrator: "Ryota Murayama",
	rarity: "Rare",
	category: "Pokemon",
	hp: 140,
	types: ["Grass"],

	evolveFrom: {
		fr: "Efflèche",
		en: "Dartrix"
	},

	abilities: [{
		type: "Ability",

		name: {
			fr: "Camouflage Sylvestre",
			en: "Deep Forest Camo"
		},

		effect: {
			fr: "Évitez tous les dégâts infligés à ce Pokémon par les attaques des Pokémon-V et Pokémon-GX de votre adversaire.",
			en: "Prevent all damage done to this Pokémon by attacks from your opponent’s Pokémon V and Pokémon-GX."
		}
	}],

	attacks: [{
		name: {
			fr: "Flèche Fendante",
			en: "Splitting Arrow"
		},

		effect: {
			fr: "Cette attaque inflige aussi 20 dégâts à 2 des Pokémon de Banc de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			en: "This attack also does 20 damage to 2 of your opponent’s Benched Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)"
		},

		damage: 90,
		cost: ["Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "D"
}

export default card