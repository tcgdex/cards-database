import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Palarticho de Galar",
		en: "Galarian Sirfetch’d"
	},

	illustrator: "Kouki Saitou",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Fighting"],

	evolveFrom: {
		fr: "Canarticho de Galar",
		en: "Galarian Farfetch’d"
	},

	attacks: [{
		name: {
			fr: "Transpercement",
			en: "Pierce"
		},

		damage: 40,
		cost: ["Fighting"]
	}, {
		name: {
			fr: "Joute Astrale",
			en: "Meteor Assault"
		},

		effect: {
			fr: "Ce Pokémon ne peut pas réutiliser Joute Astrale tant qu’il ne quitte pas le Poste Actif.",
			en: "This Pokémon can’t use Meteor Assault again until it leaves the Active Spot."
		},

		damage: 180,
		cost: ["Fighting", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "D"
}

export default card