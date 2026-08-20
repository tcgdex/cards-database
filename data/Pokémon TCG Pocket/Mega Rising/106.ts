import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Jirachi",
		fr: "Jirachi"
	},

	illustrator: "Sanosuke Sakuma",
	rarity: "Three Diamond",
	category: "Pokemon",

	dexId: [385],
	hp: 50,
	types: ["Psychic"],

	description: {
		en: "It is said to have the ability to grant any wish for\njust one week every thousand years.",
		fr: "On raconte qu'une fois tous les mille ans, il a la capacité d'exaucer tous les vœux durant une semaine."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Star Drop",
			fr: "Chute d'Étoiles"
		},

		cost: ["Psychic"],

		effect: {
			en: "This attack does 30 damage to 1 of your opponent's Pokémon.",
			fr: "Cette attaque inflige 30 dégâts à l'un des Pokémon de votre adversaire."
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 1,

	boosters: ["mega-altaria"]
}

export default card