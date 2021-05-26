import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Palarticho de Galar"
	},

	illustrator: "Kouki Saitou",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Fighting"],

	evolveFrom: {
		fr: "Canarticho de Galar"
	},

	attacks: [{
		name: {
			fr: "Transpercement"
		},

		damage: 40,
		cost: ["Fighting"]
	}, {
		name: {
			fr: "Joute Astrale"
		},

		effect: {
			fr: "Ce Pokémon ne peut pas réutiliser Joute Astrale tant qu’il ne quitte pas le Poste Actif."
		},

		damage: 180,
		cost: ["Fighting", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 2
}

export default card