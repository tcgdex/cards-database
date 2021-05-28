import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	set: Set,

	name: {
		en: "Inteleon VMAX",
		fr: "Lézargus VMAX"
	},

	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",
	hp: 320,
	types: ["Water"],

	evolveFrom: {
		en: "Inteleon V",
		fr: "Lézargus-V"
	},

	attacks: [{
		name: {
			en: "Hydro Snipe",
			fr: "Hydro-Frappe"
		},

		effect: {
			en: "You may put an Energy attached to your opponent's Active Pokémon into their hand.",
			fr: "Vous pouvez ajouter à la main de votre adversaire une Énergie attachée à son Pokémon Actif."
		},

		damage: 60,
		cost: ["Water"]
	}, {
		name: {
			en: "Max Bullet",
			fr: "Projectilomax"
		},

		effect: {
			en: "This attack also does 60 damage to 1 of your opponent's Benched Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige aussi 60 dégâts à l’un des Pokémon de Banc de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)"
		},

		damage: 160,
		cost: ["Water", "Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "D"
}

export default card