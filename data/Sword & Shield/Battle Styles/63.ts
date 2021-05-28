import { Card } from '../../../interfaces'
import Set from '../Battle Styles'

const card: Card = {
	set: Set,

	name: {
		en: "Necrozma V",
		fr: "Necrozma V"
	},

	illustrator: "PLANETA Tsuji",
	rarity: "Rare",
	category: "Pokemon",
	hp: 220,
	types: ["Psychic"],

	attacks: [{
		name: {
			en: "Prismatic Ray",
			fr: "Rayon Prismatique"
		},

		effect: {
			en: "This attack also does 20 damage to 2 of your opponent’s Benched Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige aussi 20 dégâts à 2 des Pokémon de Banc de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)"
		},

		damage: 20,
		cost: ["Psychic"]
	}, {
		name: {
			en: "Special Laser",
			fr: "Laser Spécial"
		},

		effect: {
			en: "If this Pokémon has any Special Energy attached, this attack does 120 more damage.",
			fr: "Si de l’Énergie spéciale est attachée à ce Pokémon, cette attaque inflige 120 dégâts supplémentaires."
		},

		damage: "100+",
		cost: ["Psychic", "Psychic", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 3,
	regulationMark: "E"
}

export default card