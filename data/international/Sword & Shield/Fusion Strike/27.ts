import { Card } from "models/database/card"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [893],
	set: Set,

	name: {
		'en-us': "Zarude",
		'fr-fr': "Zarude",
		'es-es': "Zarude",
		'it-it': "Zarude",
		'pt-br': "Zarude",
		'de-de': "Zarude"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 110,
	types: ["Grass"],
	stage: "Basic",
	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "E",
	illustrator: "Anesaki Dynamic",

	description: {
		'en-us': "Once the vines on Zarude's body tear off, they become nutrients in the soil. This helps the plants of the forest grow."
	},

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Scratch",
			'fr-fr': "Griffe",
			'de-de': "Kratzer",
			'es-es': "Arañazo",
			'pt-br': "Arranhão",
			'it-it': "Graffio"
		},

		damage: 20
	}, {
		cost: ["Grass", "Colorless"],

		name: {
			'en-us': "Wild Whip",
			'fr-fr': "Fouet Sauvage",
			'de-de': "Wilde Peitsche",
			'es-es': "Látigo Salvaje",
			'pt-br': "Chicote Selvagem",
			'it-it': "Frustata Selvaggia"
		},

		damage: "40+",

		effect: {
			'en-us': "Flip a coin. If heads, this attack does 30 more damage.",
			'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts supplémentaires.",
			'de-de': "Wirf 1 Münze. Bei Kopf fügt diese Attacke 30 Schadenspunkte mehr zu.",
			'es-es': "Lanza 1 moneda. Si sale cara, este ataque hace 30 puntos de daño más.",
			'pt-br': "Jogue 1 moeda. Se sair cara, este ataque causará 30 pontos de dano a mais.",
			'it-it': "Lancia una moneta. Se esce testa, questo attacco infligge 30 danni in più."
		}
	}],


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 582098,
				tcgplayer: 253122
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 582098,
				tcgplayer: 253122
			}
		},
	],
}

export default card
