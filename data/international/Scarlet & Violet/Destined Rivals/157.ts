import { Card } from "models/database/card"
import Set from "../Destined Rivals"

const card: Card = {
	dexId: [277],
	set: Set,

	name: {
		'en-us': "Swellow",
		'fr-fr': "Hélédelle",
		'de-de': "Schwalboss",
		'it-it': "Swellow",
		'es-es': "Swellow",
		'pt-br': "Swellow",
		'es-mx': "Swellow"
	},


	illustrator: "Souichirou Gunjima",

	rarity: "Common",
	category: "Pokemon",
	hp: 100,
	types: ["Colorless"],
	evolveFrom: {
		'en-us': "Taillow",
		'fr-fr': "Nirondelle",
		'de-de': "Schwalbini",
		'it-it': "Taillow",
		'es-es': "Taillow",
		'pt-br': "Taillow",
		'es-mx': "Taillow"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Add On",
			'fr-fr': "Ajout",
			'de-de': "Hinzufügen",
			'it-it': "Supplemento",
			'es-es': "Sumar",
			'pt-br': "Adicionar",
			'es-mx': "Acarrear"
		},

		effect: {
			'en-us': "Draw 3 cards.",
			'fr-fr': "Piochez 3 cartes.",
			'de-de': "Ziehe 3 Karten.",
			'it-it': "Pesca tre carte.",
			'es-es': "Roba 3 cartas.",
			'pt-br': "Compre 3 cartas.",
			'es-mx': "Roba 3 cartas."
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Speed Wing",
			'fr-fr': "Ailes Vives",
			'de-de': "Turboschwinge",
			'it-it': "Alaveloce",
			'es-es': "Ala Veloz",
			'pt-br': "Asa da Velocidade",
			'es-mx': "Ala Veloz"
		},

		damage: 70
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
	retreat: 0,
	regulationMark: "I",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 826031,
				tcgplayer: 632959
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 826031,
				tcgplayer: 632959
			}
		},
	],
}

export default card
