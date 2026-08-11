import { Card } from "models/database/card"
import Set from "../Black Bolt"

const card: Card = {
	dexId: [531],
	set: Set,

	name: {
		'en-us': "Audino",
		'fr-fr': "Nanméouïe",
		'de-de': "Ohrdoch",
		'it-it': "Audino",
		'pt-br': "Audino",
		'es-es': "Audino",
		'es-mx': "Audino"
	},

	illustrator: "Saya Tsuruta",
	rarity: "Common",
	category: "Pokemon",
	hp: 100,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Return",
			'fr-fr': "Retour",
			'de-de': "Rückkehr",
			'it-it': "Ritorno",
			'pt-br': "Retorno",
			'es-es': "Retribución",
			'es-mx': "Retribución"
		},

		effect: {
			'en-us': "You may draw cards until you have 6 cards in your hand.",
			'fr-fr': "Vous pouvez piocher des cartes jusqu'à en avoir 6 en main.",
			'de-de': "Du kannst so lange Karten ziehen, bis du 6 Karten auf deiner Hand hast.",
			'it-it': "Puoi pescare fino ad avere sei carte in mano.",
			'pt-br': "Você pode comprar cartas até ter 6 cartas na sua mão.",
			'es-es': "Puedes robar cartas hasta que tengas 6 cartas en tu mano.",
			'es-mx': "Puedes robar cartas hasta que tengas 6 cartas en tu mano."
		},

		damage: 30
	}],

	retreat: 1,
	regulationMark: "I",
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 836058,
				tcgplayer: 642525
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 836058,
				tcgplayer: 642525
			}
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 836460,
				tcgplayer: 642766
			}
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 836461,
				tcgplayer: 642693
			}
		}
	]
}

export default card
