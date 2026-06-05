import { Card } from "../../../interfaces"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [953],
	set: Set,

	name: {
		fr: "Léboulérou",
		en: "Rellor",
		es: "Rellor",
		it: "Rellor",
		pt: "Rellor",
		de: "Relluk"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 40,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			fr: "Piqûre",
			en: "Bug Bite",
			es: "Picadura",
			it: "Coleomorso",
			pt: "Picada",
			de: "Käferbiss"
		},

		damage: 10
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	variants: {
		holo: false
	},

	illustrator: "Kouki Saitou",

	description: {
		en: "This Pokémon creates a mud ball by mixing sand and dirt with psychic energy. It treasures its mud ball more than its own life.",
	},

	thirdParty: {
		cardmarket: 715498
	}
}

export default card