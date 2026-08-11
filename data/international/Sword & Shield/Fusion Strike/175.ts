import { Card } from "models/database/card"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [717],
	set: Set,

	name: {
		'en-us': "Yveltal",
		'fr-fr': "Yveltal",
		'es-es': "Yveltal",
		'it-it': "Yveltal",
		'pt-br': "Yveltal",
		'de-de': "Yveltal"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Darkness"],
	stage: "Basic",
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
	retreat: 2,
	regulationMark: "E",
	illustrator: "kawayoo",

	description: {
		'en-us': "When its life comes to an end, it absorbs the life energy of every living thing and turns into a cocoon once more."
	},

	attacks: [{
		cost: ["Darkness", "Darkness"],

		name: {
			'en-us': "Dark Cutter",
			'fr-fr': "Tranch'Obscur",
			'de-de': "Dunkler Zerschneider",
			'es-es': "Cuchilla Oscura",
			'pt-br': "Cortador de Escuridão",
			'it-it': "Oscurotaglio"
		},

		damage: 50
	}, {
		cost: ["Darkness", "Darkness", "Darkness"],

		name: {
			'en-us': "Single Strike Wings",
			'fr-fr': "Ailes Poing Final",
			'de-de': "Fokussierter-Angriff-Flügel",
			'es-es': "Alas Golpe Brusco",
			'pt-br': "Asas Golpe Decisivo",
			'it-it': "Ali Colpo Singolo"
		},

		damage: 110
	}],


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 582803,
				tcgplayer: 253389
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 582803,
				tcgplayer: 253389
			}
		},
	],
}

export default card
