import { Card } from "../../../interfaces"
import Set from "../Eevee Grove"

const card: Card = {
	set: Set,

	name: {
		en: "Audino",
		fr: "Nanméouïe"
	},

	illustrator: "sui",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [531],
	hp: 90,
	types: ["Colorless"],

	description: {
		en: "This Pokémon has a kind heart. By touching with its feelers,\nAudino can gauge other creatures' feelings and physical conditions.",
		fr: "Ce Pokémon gentil est capable de deviner les émotions et l'état de santé des autres rien qu'en les touchant avec ses antennes."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Do the Wave",
			fr: "Faites la Vague"
		},

		damage: 20,
		cost: ["Colorless", "Colorless"],

		effect: {
			en: "This attack does 20 damage for each of your Benched Pokémon.",
			fr: "Cette attaque inflige 20 dégâts pour chacun de vos Pokémon de Banc."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 2
}

export default card