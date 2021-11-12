import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	set: Set,

	name: {
		en: "Boltund V",
		fr: "Fulgudog V",
		es: "Boltund V",
		it: "Boltund V",
		pt: "Boltund V",
		de: "Bellektro V"
	},

	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 200,
	types: ["Lightning"],
	stage: "Basic",
	suffix: "V",
	retreat: 1,
	regulationMark: "E",
	illustrator: "Eske Yoshinob",

	attacks: [{
		cost: ["Lightning"],

		name: {
			en: "Smash Turn"
		},

		damage: 30,

		effect: {
			en: "You may switch this Pokémon with 1 of your Benched Pokémon."
		}
	}, {
		cost: ["Lightning", "Lightning", "Colorless"],

		name: {
			en: "Electrobullet"
		},

		damage: 120,

		effect: {
			en: "This attack also does 30 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)"
		}
	}],

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	}
}

export default card