import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [260],
	set: Set,

	name: {
		en: "Swampert",
		fr: "Laggron",
		es: "Swampert",
		it: "Swampert",
		pt: "Swampert",
		de: "Sumpex"
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 170,
	types: ["Water"],

	evolveFrom: {
		en: "Marshtomp",
		fr: "Flobio",
		es: "Marshtomp",
		it: "Marshtomp",
		pt: "Marshtomp",
		de: "Moorabbel"
	},

	stage: "Stage2",
	retreat: 3,
	regulationMark: "E",
	illustrator: "Masakazu Fukuda",

	description: {
		en: "It can swim while towing a large ship. It bashes down foes with a swing of its thick arms."
	},

	abilities: [{
		type: "Ability",

		name: {
			en: "Muddy Maker"
		},

		effect: {
			en: "Once during your turn, you may attach a Water Energy card or a Fighting Energy card from your hand to 1 of your Pokémon."
		}
	}],

	attacks: [{
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			en: "Earthquake"
		},

		damage: 180,

		effect: {
			en: "This attack also does 20 damage to each of your Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)"
		}
	}],

	variants: {
		normal: false,
		reverse: true,
		holo: true,
		firstEdition: false
	}
}

export default card
