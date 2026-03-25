import { Card } from "../../../interfaces"
import Set from "../Black Bolt"

const card: Card = {
	dexId: [577],
	set: Set,

	name: {
		en: "Solosis",
		fr: "Nucléos",
		de: "Monozyto",
		it: "Solosis",
		pt: "Solosis",
		es: "Solosis",
		'es-mx': "Solosis"
	},

	illustrator: "LINNE",
	rarity: "Common",
	category: "Pokemon",
	hp: 40,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Rollout",
			fr: "Roulade",
			de: "Walzer",
			it: "Rotolamento",
			pt: "Rolagem",
			es: "Rodar",
			'es-mx': "Rodada"
		},

		damage: 10
	}],

	retreat: 1,
	regulationMark: "I",
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 835981,
				tcgplayer: 642489
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 835981,
				tcgplayer: 642489
			}
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 836348,
				tcgplayer: 642733
			}
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 836347,
				tcgplayer: 642660
			}
		}
	]
}

export default card
