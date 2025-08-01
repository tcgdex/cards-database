import { Card } from '../../../interfaces'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	name: {
		en: "Hitmonchan",
		fr: "Tygnon",
		es: "Hitmonchan",
		it: "Hitmonchan",
		pt: "Hitmonchan",
		de: "Nockchan"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 110,
	types: ["Fighting"],
	stage: "Basic",
	illustrator: "Uta",

	attacks: [{
		name: {
			en: "Clean Hit",
			fr: "Coup Net",
			es: "Impacto Limpio",
			it: "Colpo Pulito",
			pt: "Clean Hit",
			de: "Sauberer Treffer"
		},

		effect: {
			en: "If your opponent's Active Pokémon is an Evolution Pokémon, this attack does 50 more damage.",
			fr: "Si le Pokémon Actif de votre adversaire est un Pokémon Évolutif, cette attaque inflige 50 dégâts supplémentaires.",
			es: "Si el Pokémon Activo de tu rival es un Pokémon Evolución, este ataque hace 50 puntos de daño más.",
			it: "Se il Pokémon attivo del tuo avversario è un Pokémon Evoluzione, questo attacco infligge 50 danni in più.",
			pt: "If your opponent's Active Pokémon is an Evolution Pokémon, this attack does 50 more damage.",
			de: "Wenn das Aktive Pokémon deines Gegners ein Entwicklungs-Pokémon ist, fügt diese Attacke 50 Schadenspunkte mehr zu."
		},

		damage: "20+",
		cost: ["Fighting"]
	}, {
		name: {
			en: "Bullet Straight Punch",
			fr: "Poing Direct Tiré",
			es: "Puño Bala Directo",
			it: "Pugno Diretto Fulmineo",
			pt: "Bullet Straight Punch",
			de: "Geschossgerade"
		},

		effect: {
			en: "This attack's damage isn't affected by Resistance.",
			fr: "Les dégâts de cette attaque ne sont pas affectés par la Résistance.",
			es: "El daño de este ataque no se ve afectado por Resistencia.",
			it: "I danni di questo attacco non sono influenzati dalla resistenza.",
			pt: "This attack's damage isn't affected by Resistance.",
			de: "Der Schaden dieser Attacke wird durch Resistenz nicht verändert."
		},

		damage: 40,
		cost: ["Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 1,

	description: {
		en: "Its punches slice the air. However, it seems to need a short break after fighting for three minutes."
	},

	dexId: [107],
	regulationMark: "E",

	thirdParty: {
		cardmarket: 574129
	}
}

export default card
