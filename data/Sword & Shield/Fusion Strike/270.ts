import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [196],
	set: Set,

	name: {
		en: "Espeon VMAX",
		fr: "Mentali VMAX",
		es: "Espeon VMAX",
		it: "Espeon VMAX",
		pt: "Espeon VMAX",
		de: "Psiana VMAX"
	},

	rarity: "Secret Rare",
	category: "Pokemon",
	hp: 310,
	types: ["Psychic"],

	evolveFrom: {
		en: "Espeon V",
		fr: "Mentali-V",
		es: "Espeon V",
		it: "Espeon-V",
		pt: "Espeon V",
		de: "Psiana-V"
	},

	stage: "VMAX",
	retreat: 2,
	regulationMark: "E",
	illustrator: "Kouki Saitou",

	abilities: [{
		type: "Ability",

		name: {
			en: "Solar Revelation"
		},

		effect: {
			en: "Prevent all effects of attacks from your opponent's Pokémon done to all of your Pokémon that have Energy attached.(Existing effects are not removed. Damage is not an effect.)"
		}
	}],

	attacks: [{
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			en: "Max Mindstorm"
		},

		damage: "60×",

		effect: {
			en: "This attack does 60 damage for each Energy attached to all of your opponent's Pokémon."
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