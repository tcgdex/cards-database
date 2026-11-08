import { Card } from 'models/database/card'
import Set from '../Chilling Reign'

const card: Card = {
	dexId: [762],
	set: Set,

	name: {
		'en-us': "Steenee",
		'fr-fr': "Candine",
		'es-es': "Steenee",
		'it-it': "Steenee",
		'pt-br': "Steenee",
		'de-de': "Frubaila"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],

	evolveFrom: {
		'en-us': "Bounsweet",
		'fr-fr': "Croquine",
		'es-es': "Bounsweet",
		'it-it': "Bounsweet",
		'pt-br': "Bounsweet",
		'de-de': "Frubberl"
	},

	attacks: [{
		name: {
			'en-us': "Splash",
			'fr-fr': "Trempette",
			'es-es': "Salpicadura",
			'it-it': "Splash",
			'pt-br': "Borrifada",
			'de-de': "Platscher"
		},

		damage: 20,
		cost: ["Colorless"]
	}, {
		name: {
			'en-us': "Stomp",
			'fr-fr': "Écrasement",
			'es-es': "Pisotón",
			'it-it': "Pestone",
			'pt-br': "Pisotear",
			'de-de': "Stampfer"
		},

		effect: {
			'en-us': "Flip a coin. If heads, this attack does 30 more damage.",
			'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts supplémentaires.",
			'es-es': "Lanza 1 moneda. Si sale cara, este ataque hace 30 puntos de daño más.",
			'it-it': "Lancia una moneta. Se esce testa, questo attacco infligge 30 danni in più.",
			'pt-br': "Jogue 1 moeda. Se sair cara, este ataque causará 30 pontos de dano a mais.",
			'de-de': "Wirf 1 Münze. Bei Kopf fügt diese Attacke 30 Schadenspunkte mehr zu."
		},

		damage: "50+",
		cost: ["Grass", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E",


	stage: "Stage1",

	description: {
		'en-us': "Any Corvisquire that pecks at this Pokémon will be greeted with a smack from its sepals followed by a sharp kick."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 567094,
				tcgplayer: 241663
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 567094,
				tcgplayer: 241663
			}
		},
	],
}

export default card
