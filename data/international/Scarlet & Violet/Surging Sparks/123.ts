import { Card } from "models/database/card"
import Set from "../Surging Sparks"

const card: Card = {
	dexId: [51],
	set: Set,

	name: {
		'en-us': "Alolan Dugtrio",
		'fr-fr': "Triopikeur d'Alola",
		'es-es': "Dugtrio de Alola",
		'it-it': "Dugtrio di Alola",
		'pt-br': "Dugtrio de Alola",
		'de-de': "Alola-Digdri"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 110,
	types: ["Metal"],
	evolveFrom: {
		'en-us': "Alolan Diglett",
		'fr-fr': "Taupiqueur d'Alola",
		'es-es': "Diglett de Alola",
		'it-it': "Diglett di Alola",
		'pt-br': "Diglett de Alola",
		'de-de': "Alola-Digda"
	},
	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Trio-Cheehoo",
			'fr-fr': "Trio-Cheehoo",
			'es-es': "Trío Olé",
			'it-it': "Triurrà",
			'pt-br': "Trilegal",
			'de-de': "Dreistes Glück"
		},

		effect: {
			'en-us': "If you don't have exactly 3 cards in your hand, this attack does nothing.",
			'fr-fr': "Si vous n'avez pas exactement 3 cartes dans votre main, cette attaque ne fait rien.",
			'es-es': "Si no tienes exactamente 3 cartas en tu mano, este ataque no hace nada.",
			'it-it': "Se non hai esattamente tre carte in mano, questo attacco non ha effetto.",
			'pt-br': "Se você não tiver exatamente 3 cartas na sua mão, este ataque não fará nada.",
			'de-de': "Wenn du nicht genau 3 Karten auf deiner Hand hast, hat diese Attacke keine Auswirkungen."
		},

		damage: 120
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Grass",
			value: "-30",
		},
	],
	retreat: 2,
	regulationMark: "H",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 794496,
				tcgplayer: 589856
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 794496,
				tcgplayer: 589856
			}
		},
	],

	illustrator: "Dsuke",

}

export default card
