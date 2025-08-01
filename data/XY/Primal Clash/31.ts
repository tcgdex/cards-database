import { Card } from '../../../interfaces'
import Set from '../Primal Clash'

const card: Card = {
	name: {
		en: "Seadra",
		fr: "Hypocéan",
		es: "Seadra",
		it: "Seadra",
		pt: "Seadra",
		de: "Seemon"
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
		en: "Horsea",
		fr: "Hypotrempe",
		es: "Horsea",
		it: "Horsea",
		pt: "Horsea",
		de: "Seeper"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Knockout Needle",
				fr: "Aiguille Neutralisante",
				es: "Pinchazo Noqueador",
				it: "Aculeo KO",
				pt: "Agulha Nocaute",
				de: "K.-o.-Nadel"
			},
			effect: {
				en: "Flip 2 coins. If both of them are heads, this attack does 40 more damage.",
				fr: "Lancez 2 pièces. Si vous obtenez 2 côtés face, cette attaque inflige 40 dégâts supplémentaires.",
				es: "Lanza 2 monedas. Si ambas son cara, este ataque hace 40 puntos de daño más.",
				it: "Lancia due volte una moneta. Se esce entrambe le volte testa, questo attacco infligge 40 danni in più.",
				pt: "Jogue 2 moedas. Se ambas forem cara, o ataque causará 40 de danos adicionais.",
				de: "o.-Nadel: 10+ damage. Wirf 2 Münzen. Zeigen beide \"Kopf\", fügt dieser Angriff 40 weitere Schadenspunkte zu."
			},
			damage: "10+",

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Water Gun",
				fr: "Pistolet à O",
				es: "Pistola Agua",
				it: "Pistolacqua",
				pt: "Revolver d'Água",
				de: "Aquaknarre"
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

	thirdParty: {
		cardmarket: 273562
	}
}

export default card
