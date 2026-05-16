import { Card } from "../../../interfaces"
import Set from "../151"

const card: Card = {
	dexId: [50],
	set: Set,

	name: {
		fr: "Taupiqueur",
		en: "Diglett",
		es: "Diglett",
		it: "Diglett",
		pt: "Diglett",
		de: "Digda"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 50,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Fighting"],

		name: {
			fr: "Culbute Surprise",
			en: "Headbutt Bounce",
			es: "Bote Cabezazo",
			it: "Rimbalzo Bottintesta",
			pt: "Cabeçada Ricochete",
			de: "Abrupter Kopfstoß"
		},

		damage: 10
	}, {
		cost: ["Fighting", "Fighting"],

		name: {
			fr: "Coud'Boue",
			en: "Mud-Slap",
			es: "Bofetón Lodo",
			it: "Fangosberla",
			pt: "Tapa de Lama",
			de: "Lehmschelle"
		},

		damage: 30
	}],

	retreat: 1,
	regulationMark: "G",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 733645,
				tcgplayer: 516215,
				cardtrader: 261108
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 733645,
				tcgplayer: 516215,
				cardtrader: 261108
			}
		},
	],

	illustrator: "Miki Tanaka",

	
}

export default card
