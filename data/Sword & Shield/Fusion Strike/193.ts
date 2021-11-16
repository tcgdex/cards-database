import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	set: Set,

	name: {
		en: "Latias",
		fr: "Latias",
		es: "Latias",
		it: "Latias",
		pt: "Latias",
		de: "Latias"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Dragon"],
	stage: "Basic",
	retreat: 1,
	regulationMark: "E",
	illustrator: "Yuu Nishida",

	description: {
		en: "It can telepathically communicate with people. It changes its appearance using its down that refracts light."
	},

	abilities: [{
		type: "Ability",

		name: {
			en: "Red Assist"
		},

		effect: {
			en: "Once during your turn, you may attach a Psychic Energy card from your hand to 1 of your Latios."
		}
	}],

	attacks: [{
		cost: ["Fire", "Psychic", "Colorless"],

		name: {
			en: "Dyna Barrier"
		},

		damage: 70,

		effect: {
			en: "During your opponent's next turn, prevent all damage done to this Pokémon by attacks from Pokémon VMAX."
		}
	}],

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card