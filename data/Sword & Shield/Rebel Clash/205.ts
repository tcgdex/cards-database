import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	set: Set,

	name: {
		en: "Galarian Perrserker",
		fr: "Berserkatt de Galar"
	},

	illustrator: "PLANETA Tsuji",
	rarity: "Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Metal"],

	evolveFrom: {
		en: "Galarian Meowth",
		fr: "Miaouss de Galar"
	},

	abilities: [{
		type: "Ability",

		name: {
			en: "Steely Spirit",
			fr: "Boost Acier"
		},

		effect: {
			en: "Your Metal Pokémon’s attacks do 20 more damage to your opponent’s Active Pokémon (before applying Weakness and Resistance).",
			fr: "Les attaques de vos Pokémon Metal infligent 20 dégâts supplémentaires au Pokémon Actif de votre adversaire (avant application de la Faiblesse et de la Résistance)."
		}
	}],

	attacks: [{
		name: {
			en: "Metal Claw",
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