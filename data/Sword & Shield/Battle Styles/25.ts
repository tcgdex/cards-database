import { Card } from '../../../interfaces'
import Set from '../Battle Styles'

const card: Card = {
	set: Set,

	name: {
		en: "Emboar",
		fr: "Roitiflam"
	},

	illustrator: "Anesaki Dynamic",
	rarity: "Rare",
	category: "Pokemon",
	hp: 180,
	types: ["Fire"],

	evolveFrom: {
		en: "Pignite",
		fr: "Grotichon"
	},

	abilities: [{
		type: "Ability",

		name: {
			en: "Fighting Fury Stance",
			fr: "Position de Furie Combative"
		},

		effect: {
			en: "Your Single Strike Pokémon’s attacks do 30 more damage to your opponent’s Active Pokémon (before applying Weakness and Resistance).",
			fr: "Les attaques de vos Pokémon Poing Final infligent 30 dégâts supplémentaires au Pokémon Actif de votre adversaire (avant application de la Faiblesse et de la Résistance)."
		}
	}],

	attacks: [{
		name: {
			en: "Heat Crash",
			fr: "Tacle Feu"
		},

		damage: 130,
		cost: ["Fire", "Fire", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 4
}

export default card