import { Card } from 'models/database/card'
import Set from '../Rebel Clash'

const card: Card = {
	dexId: [759],

	name: {
		'en-us': "Stufful",
		'fr-fr': "Nounourson",
		'es-es': "Stufful",
		'it-it': "Stufful",
		'pt-br': "Stufful",
		'de-de': "Velursi"
	},

	illustrator: "so-taro",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Tackle",
				'fr-fr': "Charge",
				'es-es': "Placaje",
				'it-it': "Azione",
				'pt-br': "Investida",
				'de-de': "Tackle"
			},

			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Jump On",
				'fr-fr': "Saut",
				'es-es': "Asaltar",
				'it-it': "Salta Su",
				'pt-br': "Pular em Cima",
				'de-de': "Draufspringen"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 40 more damage.",
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 40 dégâts supplémentaires.",
				'es-es': "Lanza 1 moneda. Si sale cara, este ataque hace 40 puntos de daño más.",
				'it-it': "Lancia una moneta. Se esce testa, questo attacco infligge 40 danni in più.",
				'pt-br': "Jogue 1 moeda. Se sair cara, este ataque causará 40 pontos de dano a mais.",
				'de-de': "Wirf 1 Münze. Bei Kopf fügt diese Attacke 40 Schadenspunkte mehr zu."
			},
			damage: "40+",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 2,
	hp: 80,
	types: ["Colorless"],
	regulationMark: "D",


	stage: "Basic",

	description: {
		'en-us': "Its fluffy fur is a delight to pet, but carelessly reaching out to touch this Pokémon could result in painful retaliation."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 458143,
				tcgplayer: 213249
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 458143,
				tcgplayer: 213249
			}
		},
	],
}

export default card
