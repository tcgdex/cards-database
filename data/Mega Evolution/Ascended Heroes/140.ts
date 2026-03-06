import { Card } from "../../../interfaces"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		en: "Pangoro",
		fr: "Pandarbare",
		es: "Pangoro",
		'es-mx': "Pangoro",
		de: "Pandagro",
		it: "Pangoro",
		pt: "Pangoro"
	},

	illustrator: "takashi shiraishi",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 140,
	types: ["Darkness"],
	stage: "Stage1",
	dexId: [675],

	attacks: [{
		cost: ["Darkness"],

		name: {
			en: "Corkscrew Punch",
			fr: "Poing Tire-Bouchon",
			es: "Puño Tirabuzón",
			'es-mx': "Puño Sacacorchos",
			de: "Korkenzieherhieb",
			it: "Pugno Rotante",
			pt: "Soco Saca-rolha"
		},

		damage: 40
	}, {
		cost: ["Darkness", "Darkness", "Colorless"],

		name: {
			en: "Master's Punch",
			fr: "Poing de Mentor",
			es: "Puñetazo del Mentor",
			'es-mx': "Puño Maestro",
			de: "Schlag des Meisters",
			it: "Pugno del Capo",
			pt: "Murro de Mestre"
		},

		effect: {
			en: "If any of your Benched Pancham have any damage counters on them, this attack does 120 more damage.",
			fr: "Si au moins un marqueur de dégâts est placé sur au moins l'un de vos Pandespiègle de Banc, cette attaque inflige 120 dégâts supplémentaires.",
			es: "Si alguno de tus Pancham en Banca tiene algún contador de daño sobre él, este ataque hace 120 puntos de daño más.",
			'es-mx': "Si alguno de tus Pancham en Banca tiene algún contador de daño sobre él, este ataque hace 120 puntos de daño más.",
			de: "Wenn auf mindestens 1 Pam-Pam auf deiner Bank mindestens 1 Schadensmarke liegt, fügt diese Attacke 120 Schadenspunkte mehr zu.",
			it: "Se uno qualsiasi dei Pancham nella tua panchina ha dei segnalini danno, questo attacco infligge 120 danni in più.",
			pt: "Se algum dos seus Pancham no Banco tiver algum contador de dano nele, este ataque causará 120 pontos de dano a mais."
		},

		damage: "80+"
	}],

	retreat: 3,
	regulationMark: "I",

	thirdParty: {
		tcgplayer: 675952,
		cardmarket: 869751
	}
}

export default card