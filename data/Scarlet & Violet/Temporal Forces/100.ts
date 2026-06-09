import { Card } from "../../../interfaces"
import Set from "../Temporal Forces"

const card: Card = {
	dexId: [23],
	set: Set,

	name: {
		en: "Ekans",
		fr: "Abo",
		es: "Ekans",
		it: "Ekans",
		pt: "Ekans",
		de: "Rettan"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Darkness"],

		name: {
			en: "Poison Blend",
			fr: "Mélange Empoisonné",
			es: "Mezcla Venenosa",
			it: "Miscuglio Velenoso",
			pt: "Mistura Venenosa",
			de: "Giftmischung"
		},

		effect: {
			en: "Flip a coin. If heads, your opponent's Active Pokémon is now Confused and Poisoned.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Confus et Empoisonné.",
			es: "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Confundido y Envenenado.",
			it: "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene confuso e avvelenato.",
			pt: "Jogue uma moeda. Se sair cara, o Pokémon Ativo do seu oponente agora estará Confuso e Envenenado.",
			de: "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt verwirrt und vergiftet."
		}
	}, {
		cost: ["Darkness", "Darkness"],

		name: {
			en: "Bite",
			fr: "Morsure",
			es: "Mordisco",
			it: "Morso",
			pt: "Mordida",
			de: "Biss"
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
		en: "The older it gets, the longer it grows. At night, it wraps its long body around tree branches to rest.",
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