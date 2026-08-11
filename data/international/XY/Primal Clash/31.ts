import { Card } from 'models/database/card'
import Set from '../Primal Clash'

const card: Card = {
	name: {
		'en-us': "Seadra",
		'fr-fr': "Hypocéan",
		'es-es': "Seadra",
		'it-it': "Seadra",
		'pt-br': "Seadra",
		'de-de': "Seemon"
	},

	illustrator: "Sanosuke Sakuma",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		117,
	],

	hp: 80,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Horsea",
		'fr-fr': "Hypotrempe",
		'es-es': "Horsea",
		'it-it': "Horsea",
		'pt-br': "Horsea",
		'de-de': "Seeper"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Knockout Needle",
				'fr-fr': "Aiguille Neutralisante",
				'es-es': "Pinchazo Noqueador",
				'it-it': "Aculeo KO",
				'pt-br': "Agulha Nocaute",
				'de-de': "K.-o.-Nadel"
			},
			effect: {
				'en-us': "Flip 2 coins. If both of them are heads, this attack does 40 more damage.",
				'fr-fr': "Lancez 2 pièces. Si vous obtenez 2 côtés face, cette attaque inflige 40 dégâts supplémentaires.",
				'es-es': "Lanza 2 monedas. Si ambas son cara, este ataque hace 40 puntos de daño más.",
				'it-it': "Lancia due volte una moneta. Se esce entrambe le volte testa, questo attacco infligge 40 danni in più.",
				'pt-br': "Jogue 2 moedas. Se ambas forem cara, o ataque causará 40 de danos adicionais.",
				'de-de': "o.-Nadel: 10+ damage. Wirf 2 Münzen. Zeigen beide \"Kopf\", fügt dieser Angriff 40 weitere Schadenspunkte zu."
			},
			damage: "10+",

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Water Gun",
				'fr-fr': "Pistolet à O",
				'es-es': "Pistola Agua",
				'it-it': "Pistolacqua",
				'pt-br': "Revolver d'Água",
				'de-de': "Aquaknarre"
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It is capable of swimming backwards by rapidly flapping its winglike pectoral fins and stout tail.",
	},

	thirdParty: {
		cardmarket: 273562,
		tcgplayer: 95923
	}
}

export default card
