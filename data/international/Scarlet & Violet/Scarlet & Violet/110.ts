import { Card } from "models/database/card"
import Set from "../Scarlet & Violet"

const card: Card = {
	dexId: [307],
	set: Set,

	name: {
		'en-us': "Meditite",
		'fr-fr': "Méditikka",
		'es-es': "Meditite",
		'it-it': "Meditite",
		'pt-br': "Meditite",
		'de-de': "Meditie"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
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

		damage: 10
	}],

	retreat: 1,
	regulationMark: "G",
	illustrator: "miki kudo",

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	],

	description: {
		'en-us': "It never skips its daily yoga training. It heightens its inner strength through meditation.",
	},

	thirdParty: {
        cardmarket: 702406,
        tcgplayer: 487999
    }
}

export default card