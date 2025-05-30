import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	set: Set,

	name: {
		en: "Seviper",
		fr: "Séviper",
		de: "Vipitis",
		it: "Seviper",
		es: "Seviper",
		pt: "Seviper"
	},

	illustrator: "sui",
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
			de: "Giftspucke",
			it: "Sputaveleno",
			es: "Escupir Veneno",
			pt: "Cuspe Venenoso"
		},

		effect: {
			en: "Your opponent's Active Pokémon is now Poisoned.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
			de: "Das Aktive Pokémon deines Gegners ist jetzt vergiftet.",
			it: "Il Pokémon attivo del tuo avversario viene avvelenato.",
			es: "El Pokémon Activo de tu rival pasa a estar Envenenado.",
			pt: "O Pokémon Ativo do seu oponente agora está Envenenado."
		}
	}, {
		cost: ["Darkness", "Colorless", "Colorless"],

		name: {
			en: "Venoshock",
			fr: "Choc Venin",
			de: "Giftschock",
			it: "Velenoshock",
			es: "Carga Tóxica",
			pt: "Venochoque"
		},

		effect: {
			en: "If your opponent's Active Pokémon is Poisoned, this attack does 120 more damage.",
			fr: "Si le Pokémon Actif de votre adversaire est Empoisonné, cette attaque inflige 120 dégâts supplémentaires.",
			de: "Wenn das Aktive Pokémon deines Gegners vergiftet ist, fügt diese Attacke 120 Schadenspunkte mehr zu.",
			it: "Se il Pokémon attivo del tuo avversario è avvelenato, questo attacco infligge 120 danni in più.",
			es: "Si el Pokémon Activo de tu rival está Envenenado, este ataque hace 120 puntos de daño más.",
			pt: "Se o Pokémon Ativo do seu oponente estiver Envenenado, este ataque causará 120 pontos de dano a mais."
		},

		damage: "60+"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card