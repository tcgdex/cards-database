import { Card } from "models/database/card"
import Set from "../Scarlet & Violet"

const card: Card = {
	dexId: [552],
	set: Set,

	name: {
		'en-us': "Krokorok",
		'fr-fr': "Escroco",
		'es-es': "Krokorok",
		'it-it': "Krokorok",
		'pt-br': "Krokorok",
		'de-de': "Rokkaiman"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 100,
	types: ["Fighting"],

	evolveFrom: {
		'en-us': "Sandile",
		'fr-fr': "Mascaïman"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Fighting"],

		name: {
			'en-us': "Payback",
			'fr-fr': "Représailles",
			'es-es': "Vendetta",
			'it-it': "Rivincita",
			'pt-br': "Revide",
			'de-de': "Gegenstoß"
		},

		effect: {
			'en-us': "If your opponent has exactly 1 Prize card remaining, this attack does 90 more damage.",
			'fr-fr': "S'il reste exactement une carte Récompense à votre adversaire, cette attaque inflige 90 dégâts supplémentaires.",
			'es-es': "Si a tu rival le queda exactamente una carta de Premio, este ataque hace 90 puntos de daño más.",
			'it-it': "Se il tuo avversario ha esattamente una carta Premio rimanente, questo attacco infligge 90 danni in più.",
			'pt-br': "Se o seu oponente tiver exatamente 1 carta de Prêmio restante, este ataque causará 90 pontos de dano a mais.",
			'de-de': "Wenn dein Gegner genau 1 verbleibende Preiskarte hat, fügt diese Attacke 90 Schadenspunkte mehr zu."
		},

		damage: "30+"
	}, {
		cost: ["Fighting", "Fighting"],

		name: {
			'en-us': "Corkscrew Punch",
			'fr-fr': "Poing Tire-Bouchon",
			'es-es': "Puño Tirabuzón",
			'it-it': "Pugno Rotante",
			'pt-br': "Soco Saca-rolha",
			'de-de': "Korkenzieherhieb"
		},

		damage: 60
	}],

	retreat: 2,
	regulationMark: "G",
	illustrator: "kantaro",

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	],

	description: {
		'en-us': "Protected by thin membranes, their eyes can see even in the dead of night. They live in groups of a few individuals.",
	},

	thirdParty: {
        cardmarket: 702412,
        tcgplayer: 488005
    }
}

export default card