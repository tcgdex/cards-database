import { Card } from "models/database/card"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [428],
	set: Set,

	name: {
		'en-us': "Lopunny",
		'fr-fr': "Lockpin",
		'es-es': "Lopunny",
		'it-it': "Lopunny",
		'pt-br': "Lopunny",
		'de-de': "Schlapor"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 110,
	types: ["Colorless"],

	evolveFrom: {
		'en-us': "Buneary",
		'fr-fr': "Laporeille",
		'es-es': "Buneary",
		'it-it': "Buneary",
		'pt-br': "Buneary",
		'de-de': "Haspiror"
	},

	stage: "Stage1",
	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "E",
	illustrator: "AKIRA EGAWA",

	description: {
		'en-us': "It's notably wary and has a dislike of fighting, but at the same time, it can deliver powerful kicks with its lithe legs."
	},

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Hopping Shot",
			'fr-fr': "Tir Sauteur",
			'de-de': "Hüpfkick",
			'es-es': "Disparo Salto",
			'pt-br': "Disparada Saltitante",
			'it-it': "Colpo Salterino"
		},

		damage: 70
	}],


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 582949,
				tcgplayer: 253310
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 582949,
				tcgplayer: 253310
			}
		},
	],
}

export default card
