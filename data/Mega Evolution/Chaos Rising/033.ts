import { Card } from "../../../interfaces"
import Set from "../Chaos Rising"

const card: Card = {
	set: Set,

	variants: {
		normal: true,
		reverse: false,
		holo: false,
		firstEdition: false
	},

	name: {
		en: "Deoxys"
	},

	illustrator: "GOSSAN",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [386],
	hp: 130,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Psychic Protect"
		},

		cost: ["Psychic", "Psychic", "Colorless"],
		damage: 80,

		effect: {
			en: "During your opponent's next turn, prevent all damage done to this Pokémon by your opponent's Pokémon that have an Ability."
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 3,
	regulationMark: "J",

	thirdParty: {
		tcgplayer: 693476
	}
}

export default card