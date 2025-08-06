import { Card } from "../../../interfaces"
import Set from "../SWSH Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		fr: "Sulfura",
		de: "Lavados",
		es: "Moltres",
		pt: "Moltres",
		it: "Moltres",
		en: "Moltres"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 120,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Fire"],

		name: {
			fr: "Ailes Infernales",
			de: "Inferno-Flügel",
			es: "Alas Infernales",
			pt: "Asas Infernais",
			it: "Ali Infernali",
			en: "Inferno Wings"
		},

		effect: {
			fr: "Si au moins un marqueur de dégâts est placé sur ce Pokémon, cette attaque inflige 70 dégâts supplémentaires. Les dégâts de cette attaque ne sont pas affectés par la Faiblesse.",
			de: "Wenn auf diesem Pokémon mindestens 1 Schadensmarke liegt, fügt diese Attacke 70 Schadenspunkte mehr zu. Der Schaden dieser Attacke wird durch Schwäche nicht verändert.",
			es: "Si este Pokémon tiene algún contador de daño sobre él, este ataque hace 70 puntos de daño más. El daño de este ataque no se ve afectado por Debilidad.",
			pt: "Se este Pokémon tiver algum contador de dano nele, este ataque causará 70 pontos de dano a mais. O dano deste ataque não é afetado por Fraqueza.",
			it: "Se questo Pokémon ha dei segnalini danno, questo attacco infligge 70 danni in più. I danni di questo attacco non sono influenzati dalla debolezza.",
			en: "If this Pokémon has any damage counters on it, this attack does 70 more damage. This attack's damage isn't affected by Weakness."
		},

		damage: "20+"
	}],

	retreat: 1,
	regulationMark: "F",

	description: {
		en: "It's one of the legendary bird Pokémon. When Moltres flaps its flaming wings, they glimmer with a dazzling red glow."
	},

	thirdParty: {
		cardmarket: 606599
	}
}

export default card