import { Card } from "../../../interfaces"
import Set from "../Brilliant Stars"

const card: Card = {
	set: Set,

	name: {
		en: "Moltres",
		fr: "Sulfura",
		es: "Moltres",
		it: "Moltres",
		pt: "Moltres",
		de: "Lavados"
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Fire"],

		name: {
			en: "Inferno Wings",
			fr: "Ailes Infernales",
			es: "Alas Infernales",
			it: "Ali Infernali",
			pt: "Asas Infernais",
			de: "Inferno-Flügel"
		},

		effect: {
			en: "If this Pokémon has any damage counters on it, this attack does 70 more damage. This attack's damage isn't affected by Weakness.",
			fr: "Si au moins un marqueur de dégâts est placé sur ce Pokémon, cette attaque inflige 70 dégâts supplémentaires. Les dégâts de cette attaque ne sont pas affectés par la Faiblesse.",
			es: "Si este Pokémon tiene algún contador de daño sobre él, este ataque hace 70 puntos de daño más. El daño de este ataque no se ve afectado por Debilidad.",
			it: "Se questo Pokémon ha dei segnalini danno, questo attacco infligge 70 danni in più. I danni di questo attacco non sono influenzati dalla debolezza.",
			pt: "Se este Pokémon tiver algum contador de dano nele, este ataque causará 70 pontos de dano a mais. O dano deste ataque não é afetado por Fraqueza.",
			de: "Wenn auf diesem Pokémon mindestens 1 Schadensmarke liegt, fügt diese Attacke 70 Schadenspunkte mehr zu. Der Schaden dieser Attacke wird durch Schwäche nicht verändert."
		},

		damage: "20+"
	}],

	retreat: 1,
	regulationMark: "F",
	variants: {
		normal: false,
		reverse: true,
		holo: true,
		firstEdition: false
	}
}

export default card
