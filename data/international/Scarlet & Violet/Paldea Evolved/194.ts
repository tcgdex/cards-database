import { Card } from "models/database/card"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [214],
	set: Set,

	name: {
		'fr-fr': "Scarhino",
		'en-us': "Heracross",
		'es-es': "Heracross",
		'it-it': "Heracross",
		'pt-br': "Heracross",
		'de-de': "Skaraborn"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 130,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass", "Grass"],

		name: {
			'fr-fr': "Charge",
			'en-us': "Tackle",
			'es-es': "Placaje",
			'it-it': "Azione",
			'pt-br': "Investida",
			'de-de': "Tackle"
		},

		damage: 50
	}, {
		cost: ["Grass", "Grass", "Grass"],

		name: {
			'fr-fr': "Corne Fracassante",
			'en-us': "Smashing Horn",
			'es-es': "Cuerno Devastador",
			'it-it': "Schiacciacorno",
			'pt-br': "Chifre Esmagador",
			'de-de': "Schmetterhorn"
		},

		effect: {
			'fr-fr': "Les dégâts de cette attaque ne sont pas affectés par la Résistance.",
			'en-us': "This attack's damage isn't affected by Resistance.",
			'es-es': "El daño de este ataque no se ve afectado por Resistencia.",
			'it-it': "I danni di questo attacco non sono influenzati dalla resistenza.",
			'pt-br': "O dano deste ataque não é afetado por Resistência.",
			'de-de': "Der Schaden dieser Attacke wird durch Resistenz nicht verändert."
		},

		damage: 110
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "G",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 715669,
				tcgplayer: 497597,
				cardtrader: 248849
			}
		},
	],

	illustrator: "Kurata So",

	description: {
		'en-us': "It loves sweet nectar. To keep all the nectar to itself, it hurls rivals away with its prized horn.",
	},
}

export default card
