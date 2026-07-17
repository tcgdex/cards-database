import { Card } from "../../../interfaces"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	name: {
		en: "Mega Chandelure ex",
		fr: "Méga-Lugulabre-ex",
		es: "Mega-Chandelure ex",
		'es-mx': "Mega-Chandelure ex",
		de: "Mega-Skelabra-ex"
	},

	illustrator: "REND",
	rarity: "Special illustration rare",
	category: "Pokemon",
	dexId: [609],
	hp: 350,
	types: ["Psychic"],

	evolveFrom: {
		en: "Lampent"
	},

	stage: "Stage2",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			en: "Binding Flame"
		},

		effect: {
			en: "Your opponent's Pokémon's Retreat Cost is 1 more"
		}
	}],

	attacks: [{
		name: {
			en: "Phantom Maze"
		},

		cost: ["Psychic", "Psychic"],

		damage: "130+",

		effect: {
			en: "This attack does 50 more damage for each Energy in your opponent's Active Pokémon's Retreat Cost."
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

	retreat: 2,
	regulationMark: "J",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 895900,
				tcgplayer: 704872
			}
		},
	],
}

export default card
