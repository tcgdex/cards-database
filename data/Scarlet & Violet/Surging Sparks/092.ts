import { Card } from "../../../interfaces"
import Set from "../Surging Sparks"

const card: Card = {
	dexId: [786],
	set: Set,

	name: {
		en: "Tapu Lele",
		fr: "Tokopiyon",
		es: "Tapu Lele",
		it: "Tapu Lele",
		pt: "Tapu Lele",
		de: "Kapu-Fala"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 110,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Perplex",
			fr: "Affolement",
			es: "Desconcierto",
			it: "Sconcerto",
			pt: "Perplexo",
			de: "Perplex"
		},

		effect: {
			en: "Your opponent's Active Pokémon is now Confused.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Confus.",
			es: "El Pokémon Activo de tu rival pasa a estar Confundido.",
			it: "Il Pokémon attivo del tuo avversario viene confuso.",
			pt: "O Pokémon Ativo do seu oponente agora está Confuso.",
			de: "Das Aktive Pokémon deines Gegners ist jetzt verwirrt."
		},

		damage: 20
	}, {
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			en: "Mental Crush",
			fr: "Écrasement Mental",
			es: "Aplastamiento Mental",
			it: "Sbriciolamente",
			pt: "Esmagamento Mental",
			de: "Mentaler Zermalmer"
		},

		effect: {
			en: "If your opponent's Active Pokémon is Confused, this attack does 90 more damage.",
			fr: "Si le Pokémon Actif de votre adversaire est Confus, cette attaque inflige 90 dégâts supplémentaires.",
			es: "Si el Pokémon Activo de tu rival está Confundido, este ataque hace 90 puntos de daño más.",
			it: "Se il Pokémon attivo del tuo avversario è confuso, questo attacco infligge 90 danni in più.",
			pt: "Se o Pokémon Ativo do seu oponente estiver Confuso, este ataque causará 90 pontos de dano a mais.",
			de: "Wenn das Aktive Pokémon deines Gegners verwirrt ist, fügt diese Attacke 90 Schadenspunkte mehr zu."
		},

		damage: "90+"
	}],

	retreat: 1,
	regulationMark: "H",

	variants: {
		normal: false
	},

	illustrator: "Natsumi Yoshida"
}

export default card
