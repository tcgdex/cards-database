import { Card } from "models/database/card"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Pangoro",
		'fr-fr': "Pandarbare",
		'es-es': "Pangoro",
		'es-mx': "Pangoro",
		'de-de': "Pandagro",
		'it-it': "Pangoro",
		'pt-br': "Pangoro"
	},

	evolveFrom: {
		'en-us': "Pancham",
		'fr-fr': "Pandespiègle",
		'es-es': "Pancham",
		'es-mx': "Pancham",
		'de-de': "Pam-Pam",
		'it-it': "Pancham",
		'pt-br': "Pancham",
	},

	illustrator: "takashi shiraishi",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [675],
	hp: 140,
	types: ["Darkness"],
	stage: "Stage1",

	attacks: [{
		cost: ["Darkness"],

		name: {
			'en-us': "Corkscrew Punch",
			'fr-fr': "Poing Tire-Bouchon",
			'es-es': "Puño Tirabuzón",
			'es-mx': "Puño Sacacorchos",
			'de-de': "Korkenzieherhieb",
			'it-it': "Pugno Rotante",
			'pt-br': "Soco Saca-rolha"
		},

		damage: 40
	}, {
		cost: ["Darkness", "Darkness", "Colorless"],

		name: {
			'en-us': "Master's Punch",
			'fr-fr': "Poing de Mentor",
			'es-es': "Puñetazo del Mentor",
			'es-mx': "Puño Maestro",
			'de-de': "Schlag des Meisters",
			'it-it': "Pugno del Capo",
			'pt-br': "Murro de Mestre"
		},

		effect: {
			'en-us': "If any of your Benched Pancham have any damage counters on them, this attack does 120 more damage.",
			'fr-fr': "Si au moins un marqueur de dégâts est placé sur au moins l'un de vos Pandespiègle de Banc, cette attaque inflige 120 dégâts supplémentaires.",
			'es-es': "Si alguno de tus Pancham en Banca tiene algún contador de daño sobre él, este ataque hace 120 puntos de daño más.",
			'es-mx': "Si alguno de tus Pancham en Banca tiene algún contador de daño sobre él, este ataque hace 120 puntos de daño más.",
			'de-de': "Wenn auf mindestens 1 Pam-Pam auf deiner Bank mindestens 1 Schadensmarke liegt, fügt diese Attacke 120 Schadenspunkte mehr zu.",
			'it-it': "Se uno qualsiasi dei Pancham nella tua panchina ha dei segnalini danno, questo attacco infligge 120 danni in più.",
			'pt-br': "Se algum dos seus Pancham no Banco tiver algum contador de dano nele, este ataque causará 120 pontos de dano a mais."
		},

		damage: "80+"
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "I",

	variants: [
	{
		type: "normal",
		thirdParty: {
			cardmarket: 869751,
			tcgplayer: 675952
		}
	},
	{
		type: "reverse",
		foil: "loveball",
		thirdParty: {
			cardmarket: 870356,
			tcgplayer: 676962
		}
	},
	{
		type: "reverse",
		foil: "energy",
		thirdParty: {
			cardmarket: 870355,
			tcgplayer: 677102
		}
	},
],
}

export default card
