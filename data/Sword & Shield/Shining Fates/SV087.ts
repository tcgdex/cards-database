import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Berserkatt de Galar"
	},

	illustrator: "Ryuta Fuse",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Metal"],

	evolveFrom: {
		fr: "Miaouss de Galar"
	},

	abilities: [{
		type: "Ability",

		name: {
			fr: "Boost Acier"
		},

		effect: {
			fr: "Les attaques de vos Pokémon Metal infligent 20 dégâts supplémentaires au Pokémon Actif de votre adversaire (avant application de la Faiblesse et de la Résistance)."
		}
	}],

	attacks: [{
		name: {
			fr: "Griffe Acier"
		},

		damage: 70,
		cost: ["Metal", "Metal", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 2
}

export default card