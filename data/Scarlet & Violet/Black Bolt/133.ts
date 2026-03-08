import { Card } from "../../../interfaces"
import Set from "../Black Bolt"

const card: Card = {
	dexId: [544],
	set: Set,

	name: {
		en: "Whirlipede",
		fr: "Scobolide",
		de: "Rollum",
		it: "Whirlipede",
		pt: "Whirlipede",
		es: "Whirlipede",
		'es-mx': "Whirlipede"
	},

	illustrator: "kurumitsu",
	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 100,
	types: ["Darkness"],
	evolveFrom: {
		en: "Venipede",
		fr: "Venipatte",
		de: "Toxiped",
		it: "Venipede",
		pt: "Venipede",
		es: "Venipede",
		'es-mx': "Venipede"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Venoshock",
			fr: "Choc Venin",
			de: "Giftschock",
			it: "Velenoshock",
			pt: "Venochoque",
			es: "Carga Tóxica",
			'es-mx': "Carga Tóxica"
		},

		effect: {
			en: "If your opponent's Active Pokémon is Poisoned, this attack does 60 more damage.",
			fr: "Si le Pokémon Actif de votre adversaire est Empoisonné, cette attaque inflige 60 dégâts supplémentaires.",
			de: "Wenn das Aktive Pokémon deines Gegners vergiftet ist, fügt diese Attacke 60 Schadenspunkte mehr zu.",
			it: "Se il Pokémon attivo del tuo avversario è avvelenato, questo attacco infligge 60 danni in più.",
			pt: "Se o Pokémon Ativo do seu oponente estiver Envenenado, este ataque causará 60 pontos de dano a mais.",
			es: "Si el Pokémon Activo de tu rival está Envenenado, este ataque hace 60 puntos de daño más.",
			'es-mx': "Si el Pokémon Activo de tu rival está Envenenado, este ataque hace 60 puntos de daño más."
		},

		damage: "30+"
	}],

	retreat: 3,
	regulationMark: "I",

	thirdParty: {
		cardmarket: 836183
	}
}

export default card