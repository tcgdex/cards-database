import { Card } from "../../../interfaces"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	name: {
		en: "Banette",
		fr: "Branette",
		es: "Banette",
		'es-mx': "Banette",
		de: "Banette"
	},

	illustrator: "Mugi Hamada",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [354],
	hp: 80,
	types: ["Psychic"],

	evolveFrom: {
		en: "Shuppet"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Hide 'n' Sneak"
		},

		effect: {
			en: "Prevent all effects of opponent's Attacks and Abilities done to this Pokémon."
		}
	}],

	attacks: [{
		name: {
			en: "Puppet Pull"
		},

		cost: ["Psychic", "Psychic"],

		damage: 80,

		effect: {
			en: "You may search your deck for a card and put it into your hand. Then shuffle tour deck."
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

	retreat: 1,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 895821,
				tcgplayer: 704791
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 895821,
				tcgplayer: 704791
			}
		},
	],
}

export default card
