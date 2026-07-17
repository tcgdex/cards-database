import { Card } from "../../../interfaces"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	name: {
		en: "Annihilape",
		fr: "Courrousinge",
		es: "Annihilape",
		'es-mx': "Annihilape",
		de: "Epitaff"
	},

	illustrator: "Haru Akasaka",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [979],
	hp: 150,
	types: ["Psychic"],

	evolveFrom: {
		en: "Primeape"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			en: "Durable Body"
		},

		effect: {
			en: "If this Pokémon would be Knocked Out by damage from an attack, flip a coin. If heads, this Pokémon is not Knocked Out and its remaining HP becomes 10 instead."
		}
	}],

	attacks: [{
		name: {
			en: "Ghostly Blow"
		},

		cost: ["Psychic", "Psychic"],

		damage: 100,

		effect: {
			en: "Put 5 damage counters on 1 of your opponent's Benched Pokémon."
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
			type: "normal",
			thirdParty: {
				cardmarket: 895827,
				tcgplayer: 704798
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 895827,
				tcgplayer: 704798
			}
		},
	],
}

export default card
