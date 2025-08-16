import { Card } from "../../../interfaces"
import Set from "../Scarlet & Violet"

const card: Card = {
	dexId: [336],
	set: Set,

	name: {
		en: "Seviper",
		fr: "Séviper",
		es: "Seviper",
		it: "Seviper",
		pt: "Seviper",
		de: "Vipitis"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 120,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Darkness"],

		name: {
			en: "Spit Poison",
			fr: "Crache-Venin",
			es: "Escupir Veneno",
			it: "Sputaveleno",
			pt: "Cuspe Venenoso",
			de: "Giftspucke"
		},

		effect: {
			en: "Your opponent's Active Pokémon is now Poisoned.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
			es: "El Pokémon Activo de tu rival pasa a estar Envenenado.",
			it: "Il Pokémon attivo del tuo avversario viene avvelenato.",
			pt: "O Pokémon Ativo do seu oponente agora está Envenenado.",
			de: "Das Aktive Pokémon deines Gegners ist jetzt vergiftet."
		}
	}, {
		cost: ["Darkness", "Colorless", "Colorless"],

		name: {
			en: "Venoshock",
			fr: "Choc Venin",
			es: "Carga Tóxica",
			it: "Velenoshock",
			pt: "Venochoque",
			de: "Giftschock"
		},

		effect: {
			en: "If your opponent's Active Pokémon is Poisoned, this attack does 120 more damage.",
			fr: "Si le Pokémon Actif de votre adversaire est Empoisonné, cette attaque inflige 120 dégâts supplémentaires.",
			es: "Si el Pokémon Activo de tu rival está Envenenado, este ataque hace 120 puntos de daño más.",
			it: "Se il Pokémon attivo del tuo avversario è avvelenato, questo attacco infligge 120 danni in più.",
			pt: "Se o Pokémon Ativo do seu oponente estiver Envenenado, este ataque causará 120 pontos de dano a mais.",
			de: "Wenn das Aktive Pokémon deines Gegners vergiftet ist, fügt diese Attacke 120 Schadenspunkte mehr zu."
		},

		damage: "60+"
	}],

	retreat: 2,
	regulationMark: "G",
	illustrator: "sui",

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	variants: {
		holo: false
	},

	thirdParty: {
		cardmarket: 702423
	}
}

export default card