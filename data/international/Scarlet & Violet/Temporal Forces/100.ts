import { Card } from "models/database/card"
import Set from "../Temporal Forces"

const card: Card = {
	dexId: [23],
	set: Set,

	name: {
		'en-us': "Ekans",
		'fr-fr': "Abo",
		'es-es': "Ekans",
		'it-it': "Ekans",
		'pt-br': "Ekans",
		'de-de': "Rettan"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Darkness"],

		name: {
			'en-us': "Poison Blend",
			'fr-fr': "Mélange Empoisonné",
			'es-es': "Mezcla Venenosa",
			'it-it': "Miscuglio Velenoso",
			'pt-br': "Mistura Venenosa",
			'de-de': "Giftmischung"
		},

		effect: {
			'en-us': "Flip a coin. If heads, your opponent's Active Pokémon is now Confused and Poisoned.",
			'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Confus et Empoisonné.",
			'es-es': "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Confundido y Envenenado.",
			'it-it': "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene confuso e avvelenato.",
			'pt-br': "Jogue uma moeda. Se sair cara, o Pokémon Ativo do seu oponente agora estará Confuso e Envenenado.",
			'de-de': "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt verwirrt und vergiftet."
		}
	}, {
		cost: ["Darkness", "Darkness"],

		name: {
			'en-us': "Bite",
			'fr-fr': "Morsure",
			'es-es': "Mordisco",
			'it-it': "Morso",
			'pt-br': "Mordida",
			'de-de': "Biss"
		},

		damage: 30
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",

	description: {
		'en-us': "The older it gets, the longer it grows. At night, it wraps its long body around tree branches to rest.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 760730,
				tcgplayer: 542844
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 760730,
				tcgplayer: 542844
			}
		},
	],

	illustrator: "Shimaris Yukichi",

}

export default card