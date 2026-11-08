import { Card } from "models/database/card"
import Set from "../Paldean Fates"

const card: Card = {
	dexId: [852],
	set: Set,

	name: {
		'en-us': "Clobbopus",
		'fr-fr': "Poulpaf",
		'es-es': "Clobbopus",
		'it-it': "Clobbopus",
		'pt-br': "Clobbopus",
		'de-de': "Klopptopus"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Fighting"],

		name: {
			'en-us': "Feint",
			'fr-fr': "Ruse",
			'es-es': "Amago",
			'it-it': "Fintoattacco",
			'pt-br': "Fintar",
			'de-de': "Offenlegung"
		},

		effect: {
			'en-us': "This attack's damage isn't affected by Resistance.",
			'fr-fr': "Les dégâts de cette attaque ne sont pas affectés par la Résistance.",
			'es-es': "El daño de este ataque no se ve afectado por Resistencia.",
			'it-it': "I danni di questo attacco non sono influenzati dalla resistenza.",
			'pt-br': "O dano deste ataque não é afetado por Resistência.",
			'de-de': "Der Schaden dieser Attacke wird durch Resistenz nicht verändert."
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 751588,
				tcgplayer: 534387,
				cardtrader: 274235
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 751588,
				tcgplayer: 534387,
				cardtrader: 274235
			}
		},
	],

	illustrator: "Kedamahadaitai Yawarakai",

	description: {
		'en-us': "Its tentacles tear off easily, but it isn't alarmed when that happens—it knows they'll grow back. It's about as smart as a three-year-old.",
	},

}

export default card
