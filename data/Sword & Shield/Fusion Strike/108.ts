import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	set: Set,

	name: {
		en: "Toxtricity",
		fr: "Salarsen",
		es: "Toxtricity",
		it: "Toxtricity",
		pt: "Toxtricity",
		de: "Riffex"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Lightning"],

	evolveFrom: {
		en: "Toxel",
		fr: "Toxizap",
		es: "Toxel",
		it: "Toxel",
		pt: "Toxel",
		de: "Toxel"
	},

	stage: "Stage1",
	retreat: 2,
	regulationMark: "E",
	illustrator: "nagimiso",

	description: {
		en: "It has an electrical organ on its chest. While generating electricity, it fills its surroundings with sounds like the strumming of a bass guitar."
	},

	abilities: [{
		type: "Ability",

		name: {
			en: "Maximum Downer"
		},

		effect: {
			en: "If all your Pokémon in play are Fusion Strike Pokémon, your opponent's Pokémon VMAX in play get -30 HP."
		}
	}],

	attacks: [{
		cost: ["Lightning", "Lightning", "Colorless"],

		name: {
			en: "Head Bolt"
		},

		damage: 90
	}],

	variants: {
		normal: false,
		reverse: true,
		holo: true,
		firstEdition: false
	}
}

export default card