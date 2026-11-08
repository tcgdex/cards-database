import { Card } from "models/database/card"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [287],
	set: Set,

	name: {
		'fr-fr': "Parecool",
		'en-us': "Slakoth",
		'es-es': "Slakoth",
		'it-it': "Slakoth",
		'pt-br': "Slakoth",
		'de-de': "Bummelz"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'fr-fr': "Bâillement",
			'en-us': "Yawn",
			'es-es': "Bostezo",
			'it-it': "Sbadiglio",
			'pt-br': "Bocejo",
			'de-de': "Gähner"
		},

		effect: {
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
			'en-us': "Your opponent's Active Pokémon is now Asleep.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Dormido.",
			'it-it': "Il Pokémon attivo del tuo avversario viene addormentato.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Adormecido.",
			'de-de': "Das Aktive Pokémon deines Gegners schläft jetzt."
		}
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 715635,
				tcgplayer: 497578,
				cardtrader: 248803
			}
		},
		{
			type: 'holo',
			foil: 'cosmos',
			thirdParty: {
				cardmarket: 858718
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 715635,
				tcgplayer: 497578,
				cardtrader: 248803
			}
		},
	],

	illustrator: "Shigenori Negishi",

	description: {
		'en-us': "It sleeps for 20 hours every day. Making drowsy those that see it is one of its abilities.",
	},
}

export default card
