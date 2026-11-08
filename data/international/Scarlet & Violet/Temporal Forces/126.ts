import { Card } from "models/database/card"
import Set from "../Temporal Forces"

const card: Card = {
	dexId: [163],
	set: Set,

	name: {
		'en-us': "Hoothoot",
		'fr-fr': "Hoothoot",
		'es-es': "Hoothoot",
		'it-it': "Hoothoot",
		'pt-br': "Hoothoot",
		'de-de': "Hoothoot"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Silent Wing",
			'fr-fr': "Aile Silencieuse",
			'es-es': "Ala Silenciosa",
			'it-it': "Ala Silenziosa",
			'pt-br': "Asa Silenciosa",
			'de-de': "Lautlose Flügel"
		},

		effect: {
			'en-us': "Your opponent reveals their hand.",
			'fr-fr': "Votre adversaire montre sa main.",
			'es-es': "Tu rival enseña las cartas de su mano.",
			'it-it': "Il tuo avversario mostra le carte che ha in mano.",
			'pt-br': "Seu oponente revela a mão dele.",
			'de-de': "Dein Gegner zeigt dir seine Handkarten."
		},

		damage: 20
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
	regulationMark: "H",

	description: {
		'en-us': "It always stands on one foot. It changes feet so fast, the movement can rarely be seen.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 760756,
				tcgplayer: 542870
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 760756,
				tcgplayer: 542870
			}
		},
		{
			type: "holo",
			foil: "cosmos",
			thirdParty: {
				cardmarket: 800145,
			}
		},
	],

	illustrator: "ryoma uratsuka",

}

export default card