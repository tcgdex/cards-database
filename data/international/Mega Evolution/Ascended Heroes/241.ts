import { Card } from "models/database/card"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Medicham",
		'fr-fr': "Charmina",
		'es-es': "Medicham",
		'es-mx': "Medicham",
		'de-de': "Meditalis",
		'it-it': "Medicham",
		'pt-br': "Medicham"
	},

	evolveFrom: {
		'en-us': "Meditite",
		'fr-fr': "Méditikka",
		'es-es': "Meditite",
		'es-mx': "Meditite",
		'de-de': "Meditie",
		'it-it': "Meditite",
		'pt-br': "Meditite",
	},

	illustrator: "KEIICHIRO ITO",
	rarity: "Illustration rare",
	category: "Pokemon",
	dexId: [308],
	hp: 120,
	types: ["Fighting"],
	stage: "Stage1",

	attacks: [{
		cost: ["Fighting"],

		name: {
			'en-us': "Seventh Kick",
			'fr-fr': "Septième Coup de Pied",
			'es-es': "Séptima Patada",
			'es-mx': "Séptima Patada",
			'de-de': "Siebter Kick",
			'it-it': "Settimo Calcio",
			'pt-br': "Sétimo Chute"
		},

		effect: {
			'en-us': "If you don't have exactly 7 cards in your hand, this attack does nothing.",
			'fr-fr': "Si vous n'avez pas exactement 7 cartes dans votre main, cette attaque ne fait rien.",
			'es-es': "Si no tienes exactamente 7 cartas en tu mano, este ataque no hace nada.",
			'es-mx': "Si no tienes exactamente 7 cartas en tu mano, este ataque no hace nada.",
			'de-de': "Wenn du nicht genau 7 Karten auf deiner Hand hast, hat diese Attacke keine Auswirkungen.",
			'it-it': "Se non hai esattamente sette carte in mano, questo attacco non ha effetto.",
			'pt-br': "Se você não tiver exatamente 7 cartas na sua mão, este ataque não fará nada."
		},

		damage: 150
	}],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "I",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 869852,
				tcgplayer: 676053
			}
		}
	],
}

export default card
