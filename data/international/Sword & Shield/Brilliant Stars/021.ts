import { Card } from "models/database/card"
import Set from "../Brilliant Stars"

const card: Card = {
	dexId: [146],
	set: Set,

	name: {
		'en-us': "Moltres",
		'fr-fr': "Sulfura",
		'es-es': "Moltres",
		'it-it': "Moltres",
		'pt-br': "Moltres",
		'de-de': "Lavados"
	},

	illustrator: "otumami",
	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Fire"],

		name: {
			'en-us': "Inferno Wings",
			'fr-fr': "Ailes Infernales",
			'es-es': "Alas Infernales",
			'it-it': "Ali Infernali",
			'pt-br': "Asas Infernais",
			'de-de': "Inferno-Flügel"
		},

		effect: {
			'en-us': "If this Pokémon has any damage counters on it, this attack does 70 more damage. This attack's damage isn't affected by Weakness.",
			'fr-fr': "Si au moins un marqueur de dégâts est placé sur ce Pokémon, cette attaque inflige 70 dégâts supplémentaires. Les dégâts de cette attaque ne sont pas affectés par la Faiblesse.",
			'es-es': "Si este Pokémon tiene algún contador de daño sobre él, este ataque hace 70 puntos de daño más. El daño de este ataque no se ve afectado por Debilidad.",
			'it-it': "Se questo Pokémon ha dei segnalini danno, questo attacco infligge 70 danni in più. I danni di questo attacco non sono influenzati dalla debolezza.",
			'pt-br': "Se este Pokémon tiver algum contador de dano nele, este ataque causará 70 pontos de dano a mais. O dano deste ataque não é afetado por Fraqueza.",
			'de-de': "Wenn auf diesem Pokémon mindestens 1 Schadensmarke liegt, fügt diese Attacke 70 Schadenspunkte mehr zu. Der Schaden dieser Attacke wird durch Schwäche nicht verändert."
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
		'en-us': "It's one of the legendary bird Pokémon. When Moltres flaps its flaming wings, they glimmer with a dazzling red glow.",
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 608471,
				tcgplayer: 263711
			}
		},
		{
			type: 'holo',
			foil: 'cosmos',
			thirdParty: {
				cardmarket: 778297
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 608471,
				tcgplayer: 263711
			}
		},
	],
}

export default card
