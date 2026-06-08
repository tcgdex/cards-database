import { Card } from "../../../interfaces"
import Set from "../Chaos Rising"

const card: Card = {
	set: Set,

	variants: {
		normal: true,
		reverse: false,
		holo: false,
		firstEdition: false
	},

	name: {
		en: "Espurr",
		fr: "Psystigri",
		es: "Espurr",
		'es-mx': "Espurr",
		de: "Psiau",
		it: "Espurr",
		pt: "Espurr"
	},

	illustrator: "sowsow",
	rarity: "Common",
	category: "Pokemon",
	dexId: [677],
	hp: 60,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Buddy Attack",
			fr: "Attaque Partenaire",
			es: "Ataque Amigo",
			'es-mx': "Ataque Amistoso",
			de: "Kumpelattacke",
			it: "Attacco Amico",
			pt: "Golpe Amigo"
		},

		cost: ["Psychic"],
		damage: "10+",

		effect: {
			en: "If you played Emma from your hand during this turn, this attack does 60 more damage.",
			fr: "Si vous avez joué Millie de votre main pendant ce tour, cette attaque inflige 60 dégâts supplémentaires.",
			es: "Si has jugado Matière de tu mano durante este turno, este ataque hace 60 puntos de daño más.",
			'es-mx': "Si jugaste Matière de tu mano durante este turno, este ataque hace 60 puntos de daño más.",
			de: "Wenn du Matière während dieses Zuges aus deiner Hand gespielt hast, fügt diese Attacke 60 Schadenspunkte mehr zu.",
			it: "Se hai giocato Matière dalla tua mano durante questo turno, questo attacco infligge 60 danni in più.",
			pt: "Se você jogou Emma da sua mão durante este turno, este ataque causará 60 pontos de dano a mais."
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "J",

	thirdParty: {
		tcgplayer: 693483,
		cardmarket: 886428
	}
}

export default card