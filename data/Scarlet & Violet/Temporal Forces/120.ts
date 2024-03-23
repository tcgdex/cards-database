import { Card } from "../../../interfaces"
import Set from "../Temporal Forces"

const card: Card = {
	set: Set,

	name: {
		en: "Koraidon ex",
		fr: "Koraidon-ex",
		es: "Koraidon ex",
		it: "Koraidon-ex",
		pt: "Koraidon ex"
	},

	rarity: "Double rare",
	category: "Pokemon",
	hp: 230,
	types: ["Dragon"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Retribution Strike",
			fr: "Frappe Représailles",
			es: "Golpe Vengativo",
			it: "Colpo Punitivo",
			pt: "Golpe de Retribuição"
		},

		effect: {
			en: "This attack does 10 more damage for each damage counter on this Pokémon.",
			fr: "Cette attaque inflige 10 dégâts supplémentaires pour chaque marqueur de dégâts placé sur ce Pokémon.",
			es: "Este ataque hace 10 puntos de daño más por cada contador de daño en este Pokémon.",
			it: "Questo attacco infligge 10 danni in più per ogni segnalino danno presente su questo Pokémon.",
			pt: "Este ataque causa 10 pontos de dano a mais para cada contador de dano neste Pokémon."
		},

		damage: "20+"
	}, {
		cost: ["Fire", "Fighting", "Fighting"],

		name: {
			en: "Kaiser Tackle",
			fr: "Charge Impériale",
			es: "Placaje Káiser",
			it: "Azione Imperiale",
			pt: "Colisão do Imperador"
		},

		effect: {
			en: "This Pokémon also does 60 damage to itself.",
			fr: "Ce Pokémon s'inflige aussi 60 dégâts.",
			es: "Este Pokémon también se hace 60 puntos de daño a sí mismo.",
			it: "Questo Pokémon infligge anche 60 danni a se stesso.",
			pt: "Este Pokémon também causa 60 pontos de dano a si mesmo."
		},

		damage: 280
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card