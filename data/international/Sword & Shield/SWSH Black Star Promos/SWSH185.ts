import { Card } from "models/database/card"
import Set from "../SWSH Black Star Promos"

const card: Card = {
	dexId: [146],
	set: Set,

	name: {
		'fr-fr': "Sulfura",
		'de-de': "Lavados",
		'es-es': "Moltres",
		'pt-br': "Moltres",
		'it-it': "Moltres",
		'en-us': "Moltres"
	},

	rarity: "Promo",
	category: "Pokemon",
	hp: 120,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Fire"],

		name: {
			'fr-fr': "Ailes Infernales",
			'de-de': "Inferno-Flügel",
			'es-es': "Alas Infernales",
			'pt-br': "Asas Infernais",
			'it-it': "Ali Infernali",
			'en-us': "Inferno Wings"
		},

		effect: {
			'fr-fr': "Si au moins un marqueur de dégâts est placé sur ce Pokémon, cette attaque inflige 70 dégâts supplémentaires. Les dégâts de cette attaque ne sont pas affectés par la Faiblesse.",
			'de-de': "Wenn auf diesem Pokémon mindestens 1 Schadensmarke liegt, fügt diese Attacke 70 Schadenspunkte mehr zu. Der Schaden dieser Attacke wird durch Schwäche nicht verändert.",
			'es-es': "Si este Pokémon tiene algún contador de daño sobre él, este ataque hace 70 puntos de daño más. El daño de este ataque no se ve afectado por Debilidad.",
			'pt-br': "Se este Pokémon tiver algum contador de dano nele, este ataque causará 70 pontos de dano a mais. O dano deste ataque não é afetado por Fraqueza.",
			'it-it': "Se questo Pokémon ha dei segnalini danno, questo attacco infligge 70 danni in più. I danni di questo attacco non sono influenzati dalla debolezza.",
			'en-us': "If this Pokémon has any damage counters on it, this attack does 70 more damage. This attack's damage isn't affected by Weakness."
		},

		damage: "20+"
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "F",

	description: {
		'en-us': "It's one of the legendary bird Pokémon. When Moltres flaps its flaming wings, they glimmer with a dazzling red glow."
	},

	thirdParty: {
		cardmarket: 606599
	}
}

export default card
