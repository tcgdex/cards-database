import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Archéduc"
	},

	illustrator: "nagimiso",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 140,
	types: ["Grass"],

	evolveFrom: {
		fr: "Efflèche"
	},

	abilities: [{
		type: "Ability",

		name: {
			fr: "Camouflage Sylvestre"
		},

		effect: {
			fr: "Évitez tous les dégâts infligés à ce Pokémon par les attaques des Pokémon-V et Pokémon-GX de votre adversaire."
		}
	}],

	attacks: [{
		name: {
			fr: "Flèche Fendante"
		},

		effect: {
			fr: "Cette attaque inflige aussi 20 dégâts à 2 des Pokémon de Banc de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)"
		},

		damage: 90,
		cost: ["Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2
}

export default card