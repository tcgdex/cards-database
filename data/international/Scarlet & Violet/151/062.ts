import { Card } from "models/database/card"
import Set from "../151"

const card: Card = {
	dexId: [62],
	set: Set,

	name: {
		'fr-fr': "Tartard",
		'en-us': "Poliwrath",
		'es-es': "Poliwrath",
		'it-it': "Poliwrath",
		'pt-br': "Poliwrath",
		'de-de': "Quappo"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 160,
	types: ["Water"],
	evolveFrom: {
		'fr-fr': "Têtarte",
		'en-us': "Poliwhirl",
		'es-es': "Poliwhirl",
		'it-it': "Poliwhirl",
		'pt-br': "Poliwhirl",
		'de-de': "Quaputzi"
	},
	stage: "Stage2",

	attacks: [{
		cost: ["Water"],

		name: {
			'fr-fr': "Bulles d'O",
			'en-us': "Bubble Beam",
			'es-es': "Rayo Burbuja",
			'it-it': "Bollaraggio",
			'pt-br': "Jato de Bolhas",
			'de-de': "Blubbstrahl"
		},

		effect: {
			'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
			'en-us': "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
			'es-es': "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
			'it-it': "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato.",
			'pt-br': "Jogue uma moeda. Se sair cara, o Pokémon Ativo do seu oponente agora estará Paralisado.",
			'de-de': "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt paralysiert."
		},

		damage: 50
	}, {
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			'fr-fr': "Coup de Poing Héroïque",
			'en-us': "Heroic Punch",
			'es-es': "Puño Heroico",
			'it-it': "Pugno Eroico",
			'pt-br': "Soco Heroico",
			'de-de': "Heldenhafter Hieb"
		},

		effect: {
			'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 150 dégâts supplémentaires.",
			'en-us': "Flip a coin. If heads, this attack does 150 more damage.",
			'es-es': "Lanza 1 moneda. Si sale cara, este ataque hace 150 puntos de daño más.",
			'it-it': "Lancia una moneta. Se esce testa, questo attacco infligge 150 danni in più.",
			'pt-br': "Jogue uma moeda. Se sair cara, este ataque causará 150 pontos de dano a mais.",
			'de-de': "Wirf 1 Münze. Bei Kopf fügt diese Attacke 150 Schadenspunkte mehr zu."
		},

		damage: "100+"
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",

	description: {
		'en-us': "Poliwrath is skilled at both swimming and martial arts. It uses its well-trained arms to dish out powerful punches.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 733657,
				tcgplayer: 516251,
				cardtrader: 261207
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 733657,
				tcgplayer: 516251,
				cardtrader: 261207
			}
		},
	],

	illustrator: "Kurata So",

	
}

export default card
