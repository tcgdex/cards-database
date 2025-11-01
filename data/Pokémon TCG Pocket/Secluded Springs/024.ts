import { Card } from "../../../interfaces"
import Set from "../Secluded Springs"

const card: Card = {
	set: Set,

	name: {
		en: "Cryogonal",
		fr: "Hexagel"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 80,
	types: ["Water"],

	description: {
		en: "Cryogonal appear during cold seasons. It is said\nthat people and Pokémon who die on snowy\nmountains are reborn into these Pokémon.",
		fr: "Il apparaît lors des saisons froides. On dit qu'il est la réincarnation des personnes et des Pokémon disparus dans la neige des montagnes."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Ice Blade",
			fr: "Lame de Glace"
		},

		cost: ["Water", "Water"],

		effect: {
			en: "This attack does 40 damage to 1 of your opponent's Pokémon.",
			fr: "Cette attaque inflige 40 dégâts à l'un des Pokémon de votre adversaire."
		}
	}],

	weaknesses: [{
		type: "Metal",
		value: "+20"
	}],

	retreat: 1
}

export default card