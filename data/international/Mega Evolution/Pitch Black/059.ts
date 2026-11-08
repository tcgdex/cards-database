import { Card } from "models/database/card"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Chi-Yu",
		'fr-fr': "Yuyu",
		'es-es': "Chi-Yu",
		'es-mx': "Chi-Yu",
		'de-de': "Yuyu",
		'it-it': "Chi-Yu",
		'pt-br': "Chi-Yu"
	},

	illustrator: "IKEDA Saki",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [1004],
	hp: 90,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Whirling Envy",
			'fr-fr': "Jalousie Tourbillonnante",
			'es-es': "Torbellino de Envidia",
			'es-mx': "Envidia Espiral",
			'de-de': "Wirbelnder Neid",
			'it-it': "Invidia Vorticosa",
			'pt-br': "Rodopiar de Inveja"
		},

		cost: ["Darkness"],

		damage: "20+",

		effect: {
			'en-us': "If this Pokémon has 2 or more damage counters on it, this attack does 90 more damage. This attack's damage isn't affected by Weakness.",
			'fr-fr': "Si ce Pokémon a au moins 2 marqueurs de dégâts, cette attaque inflige 90 dégâts supplémentaires. Les dégâts de cette attaque ne sont pas affectés par la Faiblesse.",
			'es-es': "Si este Pokémon tiene 2 contadores de daño o más sobre él, este ataque hace 90 puntos de daño más. El daño de este ataque no se ve afectado por Debilidad.",
			'es-mx': "Si este Pokémon tiene 2 contadores de daño o más sobre él, este ataque hace 90 puntos de daño más. El daño de este ataque no se ve afectado por Debilidad.",
			'de-de': "Wenn auf diesem Pokémon 2 oder mehr Schadensmarken liegen, fügt diese Attacke 90 Schadenspunkte mehr zu. Der Schaden dieser Attacke wird durch Schwäche nicht verändert.",
			'it-it': "Se questo Pokémon ha due o più segnalini danno, questo attacco infligge 90 danni in più. I danni di questo attacco non sono influenzati dalla debolezza.",
			'pt-br': "Se este Pokémon tiver 2 ou mais contadores de dano nele, este ataque causará 90 pontos de dano a mais. O dano deste ataque não é afetado por Fraqueza."
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "J",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 895844,
				tcgplayer: 704816
			}
		},
	],
}

export default card
