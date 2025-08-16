import { Card } from '../../../interfaces'
import Set from '../Phantom Forces'

const card: Card = {
	name: {
		en: "Deino",
		fr: "Solochi",
		es: "Deino",
		it: "Deino",
		pt: "Deino",
		de: "Kapuno"
	},

	illustrator: "Shigenori Negishi",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		633,
	],

	hp: 50,

	types: [
		"Dragon",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Psychic",
				"Darkness",
			],
			name: {
				en: "Gnaw Off",
				fr: "Rongement",
				es: "Roer Completamente",
				it: "Rosicchia Via",
				pt: "Corroer",
				de: "Abnagen"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 10 more damage.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 10 dégâts supplémentaires.",
				es: "Lanza 1 moneda. Si sale cara, este ataque hace 10 puntos de daño más.",
				it: "Lancia una moneta. Se esce testa, questo attacco infligge 10 danni in più.",
				pt: "Jogue uma moeda. Se sair cara, esse ataque causará 10 de danos adicionais.",
				de: "Wirf 1 Münze. Bei \"Kopf\" fügt dieser Angriff 10 weitere Schadenspunkte zu."
			},
			damage: "20+",

		},
	],

	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 281878,
		tcgplayer: 94640
	}
}

export default card
