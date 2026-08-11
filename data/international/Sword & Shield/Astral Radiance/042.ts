import { Card } from "models/database/card"
import Set from "../Astral Radiance"

const card: Card = {
	dexId: [502],
	set: Set,

	name: {
		'en-us': "Dewott",
		'fr-fr': "Mateloutre",
		'es-es': "Dewott",
		'it-it': "Dewott",
		'pt-br': "Dewott",
		'de-de': "Zwottronin"
	},

	illustrator: "Mina Nakai",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],

	evolveFrom: {
		'en-us': "Oshawott",
		'fr-fr': "Moustillon",
		'es-es': "Oshawott",
		'it-it': "Oshawott",
		'pt-br': "Oshawott",
		'de-de': "Ottaro"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Razor Shell",
			'fr-fr': "Coqui-Lame",
			'es-es': "Concha Filo",
			'it-it': "Conchilama",
			'pt-br': "Concha Navalha",
			'de-de': "Kalkklinge"
		},

		effect: {
			'en-us': "Flip a coin. If heads, this attack does 20 more damage.",
			'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts supplémentaires.",
			'es-es': "Lanza 1 moneda. Si sale cara, este ataque hace 20 puntos de daño más.",
			'it-it': "Lancia una moneta. Se esce testa, questo attacco infligge 20 danni in più.",
			'pt-br': "Jogue 1 moeda. Se sair cara, este ataque causará 20 pontos de dano a mais.",
			'de-de': "Wirf 1 Münze. Bei Kopf fügt diese Attacke 20 Schadenspunkte mehr zu."
		},

		damage: "20+"
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "F",


	description: {
		'en-us': "Its exquisite double-scalchop technique is likely the result of daily training, and it can send even masters of the blade fleeing in defeat.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 658580,
				tcgplayer: 272242
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 658580,
				tcgplayer: 272242
			}
		},
	],
}

export default card
