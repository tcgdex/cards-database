import { Card } from "../../../interfaces"
import Set from "../SVP Black Star Promos"

const card: Card = {
	dexId: [494],
	set: Set,

	name: {
		en: "Victini",
		fr: "Victini"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],
	stage: "Basic",
	illustrator: "Amelicart",

	attacks: [{
		cost: ["Fire", "Fire"],

		name: {
			en: "V-Force",
			fr: "Force-V"
		},

		effect:{
			en: "If you have 4 or fewer Benched Pokémon, this attack does nothing.",
			fr: "Si vous avez 4 Pokémon de Banc ou moins, cette attaque ne fait rien."
		},

		damage: 120
	}],

	retreat: 1,
	regulationMark: "I",

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		}
	],

	variants: [
		{
			type: "holo"
		},
		{
			type: "holo",
			size: "jumbo"
		}
	],

	thirdParty: {
		cardmarket: 836653,
		tcgplayer: 646169,
	}
}

export default card
