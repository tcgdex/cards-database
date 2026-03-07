import { Card } from "../../../interfaces"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		en: "Medicham",
		fr: "Charmina",
		es: "Medicham",
		'es-mx': "Medicham",
		de: "Meditalis",
		it: "Medicham",
		pt: "Medicham"
	},

	illustrator: "GIDORA",
	rarity: "Common",
	category: "Pokemon",
	hp: 120,
	types: ["Fighting"],
	stage: "Stage1",
	dexId: [308],

	attacks: [{
		cost: ["Fighting"],

		name: {
			en: "Seventh Kick",
			fr: "Septième Coup de Pied",
			es: "Séptima Patada",
			'es-mx': "Séptima Patada",
			de: "Siebter Kick",
			it: "Settimo Calcio",
			pt: "Sétimo Chute"
		},

		effect: {
			en: "If you don't have exactly 7 cards in your hand, this attack does nothing.",
			fr: "Si vous n'avez pas exactement 7 cartes dans votre main, cette attaque ne fait rien.",
			es: "Si no tienes exactamente 7 cartas en tu mano, este ataque no hace nada.",
			'es-mx': "Si no tienes exactamente 7 cartas en tu mano, este ataque no hace nada.",
			de: "Wenn du nicht genau 7 Karten auf deiner Hand hast, hat diese Attacke keine Auswirkungen.",
			it: "Se non hai esattamente sette carte in mano, questo attacco non ha effetto.",
			pt: "Se você não tiver exatamente 7 cartas na sua mão, este ataque não fará nada."
		},

		damage: 150
	}],

	retreat: 1,
	regulationMark: "I",

	variants: [
	{
		type: "normal",
		thirdParty: {
			cardmarket: 869715,
			tcgplayer: 675916
		}
	},
	{
		type: "reverse",
		thirdParty: {
			cardmarket: 869715,
			tcgplayer: 675916
		}
	},
	{
		type: "reverse",
		foil: "quickball",
		thirdParty: {
			cardmarket: 870303,
			tcgplayer: 676936
		}
	},
	{
		type: "reverse",
		foil: "energy",
		thirdParty: {
			cardmarket: 870304,
			tcgplayer: 677076
		}
	},
],
}

export default card