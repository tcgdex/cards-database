import { Card } from "../../../interfaces"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	name: {
		en: "Armarouge",
		fr: "Carmadura",
		es: "Armarouge",
		'es-mx': "Armarouge",
		de: "Crimanzo"
	},

	illustrator: "Jiro Sasumo",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [936],
	hp: 140,
	types: ["Fire"],

	evolveFrom: {
		en: "Charcadet"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Flame Legion"
		},

		cost: ["Fire"],

		damage: "40+",

		effect: {
			en: "This attack does 40 more damage for each of your Benched Pokémon that have Fire Energy attached"
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "J",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 895800,
				tcgplayer: 704769
			}
		},
	],
}

export default card
