import { Card } from '../../../interfaces'
import Set from '../Battle Styles'

const card: Card = {
	set: Set,

	name: {
		en: "Honchkrow",
		fr: "Corboss"
	},

	illustrator: "Miki Tanaka",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 130,
	types: ["Darkness"],

	evolveFrom: {
		en: "Murkrow",
		fr: "Cornèbre"
	},

	abilities: [{
		type: "Ability",

		name: {
			en: "Insomnia",
			fr: "Insomnia"
		},

		effect: {
			en: "This Pokémon can’t be Asleep.",
			fr: "Ce Pokémon ne peut pas être Endormi."
		}
	}],

	attacks: [{
		name: {
			en: "Voltage Dive",
			fr: "Plongée Voltaïque"
		},

		effect: {
			en: "If your opponent’s Active Pokémon has any Special Energy attached, this attack does 80 more damage.",
			fr: "Si de l’Énergie spéciale est attachée au Pokémon Actif de votre adversaire, cette attaque inflige 80 dégâts supplémentaires."
		},

		damage: "80+",
		cost: ["Darkness", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 2
}

export default card