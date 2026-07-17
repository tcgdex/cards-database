import { Card } from "../../../interfaces"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	name: {
		en: "Toucannon",
		fr: "Bazoucan",
		es: "Toucannon",
		'es-mx': "Toucannon",
		de: "Tukanon"
	},

	illustrator: "Masako Tomii",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [733],
	hp: 150,
	types: ["Colorless"],

	evolveFrom: {
		en: "Trumbeak"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			en: "Aerial Draw"
		},

		effect: {
			en: "Once during your turn, you may draw 1 card."
		}
	}],

	attacks: [{
		name: {
			en: "Feather Rondo"
		},

		cost: ["Colorless"],

		damage: "60+",

		effect: {
			en: "This attack does 20 more damage for each Benched Pokémon (both yours and your opponent's)."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],
	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 895852,
				tcgplayer: 704825
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 895852,
				tcgplayer: 704825
			}
		},
	],
}

export default card
