import { Card } from '../../../interfaces'
import Set from '../XY trainer Kit (Suicune)'

const card: Card = {
	dexId: [245],
	set: Set,

	name: {
		en: "Suicune",
		fr: "Suicune",
		es: "Suicune",
		it: "Suicune",
		pt: "Suicune",
		de: "Suicune"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 100,
	types: ["Water"],
	stage: "Basic",
	retreat: 1,
	illustrator: "Yoshinobu Saito",

	description: {
		en: "Said to be the embodiment of north winds, it can instantly purify filthy, murky water."
	},

	attacks: [{
		name: {
			en: "Spiral Drain",
			fr: "Spirale Épuisante"
		},

		damage: 20,

		effect: {
			en: "Heal 20 damage from this Pokémon.",
			fr: "Soignez 20 dégâts à ce Pokémon."
		}
	}, {
		name: {
			en: "Aurora Beam",
			fr: "Onde Boréale"
		},

		damage: 80
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	thirdParty: {
		tcgplayer: 118851
	}
}

export default card