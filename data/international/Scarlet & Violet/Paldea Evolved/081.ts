import { Card } from "models/database/card"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [940],
	set: Set,

	name: {
		'fr-fr': "Zapétrel",
		'en-us': "Wattrel",
		'es-es': "Wattrel",
		'it-it': "Wattrel",
		'pt-br': "Wattrel",
		'de-de': "Voltrel"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'fr-fr': "Vent Dévastateur",
			'en-us': "Devastating Wind",
			'es-es': "Viento Devastador",
			'it-it': "Devastavento",
			'pt-br': "Vento Devastador",
			'de-de': "Wind der Verwüstung"
		},

		effect: {
			'fr-fr': "Votre adversaire mélange sa main avec son deck et pioche 4 cartes.",
			'en-us': "Your opponent shuffles their hand into their deck and draws 4 cards.",
			'es-es': "Tu rival pone las cartas de su mano en su baraja, las baraja todas y roba 4 cartas.",
			'it-it': "Il tuo avversario rimischia le carte che ha in mano nel suo mazzo e pesca quattro carte.",
			'pt-br': "Seu oponente embaralha a mão dele no baralho dele e compra 4 cartas.",
			'de-de': "Dein Gegner mischt seine Handkarten in sein Deck und zieht 4 Karten."
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'fr-fr': "Battement",
			'en-us': "Flap",
			'es-es': "Aleteo",
			'it-it': "Alabattito",
			'pt-br': "Asa",
			'de-de': "Flattern"
		},

		damage: 40
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 1,
	regulationMark: "G",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 715556,
				tcgplayer: 497492,
				cardtrader: 248708
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 715556,
				tcgplayer: 497492,
				cardtrader: 248708
			}
		},
	],

	illustrator: "sowsow",

	description: {
		'en-us': "When its wings catch the wind, the bones within produce electricity. This Pokémon dives into the ocean, catching prey by electrocuting them.",
	},
}

export default card
