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
		en: "Cinccino ex"
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	dexId: [573],
	hp: 240,
	types: ["Colorless"],

	evolveFrom: {
		en: "Mincinno"
	},

	stage: "Stage1",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			en: "Smooth Coat"
		},

		effect: {
			en: "If any damage is done to this Pokémon by attacks, flip a coin. If heads, prevent that damage."
		}
	}],

	attacks: [{
		name: {
			en: "Energized Slap"
		},

		cost: ["Colorless"],
		damage: 40,

		effect: {
			en: "This attack does 40 damage for each Energy attached to this Pokémon."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "J",

	thirdParty: {
		tcgplayer: 693464
	}
}

export default card