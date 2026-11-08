import { Card } from "models/database/card"
import Set from "../Stellar Crown"

const card: Card = {
	dexId: [457],
	set: Set,

	name: {
		'en-us': "Lumineon",
		'fr-fr': "Luminéon",
		'es-es': "Lumineon",
		'it-it': "Lumineon",
		'pt-br': "Lumineon",
		'de-de': "Lumineon"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],
	evolveFrom: {
		'en-us': "Finneon",
		'fr-fr': "Écayon",
		'es-es': "Finneon",
		'it-it': "Finneon",
		'pt-br': "Finneon",
		'de-de': "Finneon"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Return",
			'fr-fr': "Retour",
			'es-es': "Retribución",
			'it-it': "Ritorno",
			'pt-br': "Retorno",
			'de-de': "Rückkehr"
		},

		effect: {
			'en-us': "You may draw cards until you have 6 cards in your hand.",
			'fr-fr': "Vous pouvez piocher des cartes jusqu'à en avoir 6 en main.",
			'es-es': "Puedes robar cartas hasta que tengas 6 cartas en tu mano.",
			'it-it': "Puoi pescare fino ad avere sei carte in mano.",
			'pt-br': "Você pode comprar cartas até ter 6 cartas na sua mão.",
			'de-de': "Du kannst so lange Karten ziehen, bis du 6 Karten auf deiner Hand hast."
		},

		damage: 20
	}, {
		cost: ["Water", "Colorless"],

		name: {
			'en-us': "Razor Fin",
			'fr-fr': "Aileron-Rasoir",
			'es-es': "Aleta Afilada",
			'it-it': "Pinnalama",
			'pt-br': "Barbatana Cortante",
			'de-de': "Rasierflosse"
		},

		damage: 70
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 785890,
				tcgplayer: 567262
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 785890,
				tcgplayer: 567262
			}
		},
	],

	illustrator: "Shigenori Negishi",

}

export default card
