import { Card } from "../../../interfaces"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	name: {
		en: "Mega Slowbro ex",
		fr: "Méga-Flagadoss-ex",
		es: "Mega-Slowbro ex",
		'es-mx': "Mega-Slowbro ex",
		de: "Mega-Lahmus-ex"
	},

	illustrator: "5ban Graphics",
	rarity: "Double rare",
	category: "Pokemon",
	dexId: [80],
	hp: 330,
	types: ["Psychic"],

	evolveFrom: {
		en: "Slowpoke"
	},

	stage: "Stage1",
	suffix: "EX",

	attacks: [{
		name: {
			en: "Shellnado Spin"
		},

		cost: ["Psychic", "Psychic", "Psychic"],

		damage: 180,

		effect: {
			en: "During your opponent's next turn, if this Pokémon is damaged by an attack (even if this Pokémon is Knocked Out), place 12 damage counters on the attacking Pokémon"
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

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 895818,
				tcgplayer: 704788
			}
		},
	],
}

export default card
