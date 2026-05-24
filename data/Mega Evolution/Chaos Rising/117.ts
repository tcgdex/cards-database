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
		en: "Mega Floette ex"
	},

	illustrator: "Teeziro",
	rarity: "Special illustration rare",
	category: "Pokemon",
	dexId: [670],
	hp: 250,
	types: ["Psychic"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		name: {
			en: "Gentle Light"
		},

		cost: ["Psychic"],

		effect: {
			en: "Heal 30 damage from each Pokémon (both yours and your opponent's)."
		}
	}, {
		name: {
			en: "Eternity Bloom"
		},

		cost: ["Psychic", "Psychic", "Psychic"],
		damage: 200,

		effect: {
			en: "Search your deck for up to 4 Basic Psychic Energy cards and attach them to your Benched Pokémon in any way you like. Then, shuffle your deck."
		}
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "J",

	thirdParty: {
		tcgplayer: 693513,
		cardmarket: 886510
	}
}

export default card