import { Card } from '../../../interfaces'
import Set from '../Chilling Reign'

const card: Card = {
	set: Set,

	name: {
		en: "Seviper",
		fr: "Séviper",
		es: "Seviper",
		it: "Seviper",
		pt: "Seviper",
		de: "Vipitis"
	},

	illustrator: "Anesaki Dynamic",
	rarity: "Rare",
	category: "Pokemon",
	hp: 110,
	types: ["Darkness"],

	attacks: [{
		name: {
			en: "Strong Tail",
			fr: "Queue Puissante",
			es: "Cola Fuerte",
			it: "Fortecoda",
			pt: "Cauda Poderosa",
			de: "Starker Schlag"
		},

		effect: {
			en: "If you played a Single Strike Supporter card from your hand during this turn, this attack does 90 more damage.",
			fr: "Si vous avez joué une carte Supporter Poing Final de votre main pendant ce tour, cette attaque inflige 90 dégâts supplémentaires.",
			es: "Si has jugado 1 carta de Partidario de Golpe Brusco de tu mano durante este turno, este ataque hace 90 puntos de daño más.",
			it: "Se hai giocato una carta Aiuto Colpo Singolo dalla tua mano durante questo turno, questo attacco infligge 90 danni in più.",
			pt: "Se você jogou 1 carta de Apoiador Golpe Decisivo da sua mão durante este turno, este ataque causará 90 pontos de dano a mais.",
			de: "Wenn du eine Fokussierter-Angriff-Unterstützerkarte während dieses Zuges aus deiner Hand gespielt hast, fügt diese Attacke 90 Schadenspunkte mehr zu."
		},

		damage: "90+",
		cost: ["Darkness", "Darkness", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card