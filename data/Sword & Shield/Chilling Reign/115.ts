import { Card } from '../../../interfaces'
import Set from '../Chilling Reign'

const card: Card = {
	set: Set,

	name: {
		en: "Tauros",
		fr: "Tauros"
	},

	illustrator: "nagimiso",
	rarity: "Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Colorless"],

	attacks: [{
		name: {
			en: "Raging Bull",
			fr: "Taureau Furieux"
		},

		effect: {
			en: "This attack does 20 more damage for each damage counter on this Pokémon. This Pokémon is now Confused.",
			fr: "Cette attaque inflige 20 dégâts supplémentaires pour chaque marqueur de dégâts sur ce Pokémon. Ce Pokémon est maintenant Confus."
		},

		damage: "20+",
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			en: "Take Down",
			fr: "Bélier"
		},

		effect: {
			en: "This Pokémon also does 30 damage to itself.",
			fr: "Ce Pokémon s’inflige aussi 30 dégâts."
		},

		damage: 80,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card