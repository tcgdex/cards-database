import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Berserkatt de Galar",
		en: "Galarian Perrserker"
	},

	illustrator: "Ryuta Fuse",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Metal"],

	evolveFrom: {
		fr: "Miaouss de Galar",
		en: "Galarian Meowth"
	},

	abilities: [{
		type: "Ability",

		name: {
			fr: "Boost Acier",
			en: "Steely Spirit"
		},

		effect: {
			fr: "Les attaques de vos Pokémon Metal infligent 20 dégâts supplémentaires au Pokémon Actif de votre adversaire (avant application de la Faiblesse et de la Résistance).",
			en: "Your Metal Pokémon’s attacks do 20 more damage to your opponent’s Active Pokémon (before applying Weakness and Resistance)."
		}
	}],

	attacks: [{
		name: {
			fr: "Griffe Acier",
			en: "Metal Claw"
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

	retreat: 2,
	regulationMark: "D"
}

export default card