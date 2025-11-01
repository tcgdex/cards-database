import { Card } from "../../../interfaces"
import Set from "../Secluded Springs"

const card: Card = {
	set: Set,

	name: {
		en: "Seviper",
		fr: "Séviper"
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 80,
	types: ["Darkness"],

	description: {
		en: "Constant polishing makes the edge of the blade on\nits tail extremely sharp. It's Zangoose's archrival.",
		fr: "C'est l'ennemi naturel de Mangriff. Sa queue en forme de lame est bien tranchante, car il passe son temps à l'affûter sur des rochers."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Fateful Fang",
			fr: "Crocs du Destin"
		},

		damage: 40,
		cost: ["Darkness", "Colorless"],

		effect: {
			en: "If your opponent's Active Pokémon is Zangoose, this attack does 40 more damage.",
			fr: "Si le Pokémon Actif de votre adversaire est , cette attaque inflige 40 dégâts supplémentaires."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 2
}

export default card