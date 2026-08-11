import { Card } from "models/database/card"
import Set from "../Phantasmal Flames"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Mega Sharpedo ex",
		'fr-fr': "Méga-Sharpedo-ex",
		'es-es': "Mega-Sharpedo ex",
		'es-mx': "Mega-Sharpedo ex",
		'de-de': "Mega-Tohaido-ex",
		'it-it': "Mega Sharpedo-ex",
		'pt-br': "Mega Sharpedo ex"
	},
	evolveFrom: {
		'en-us': "Carvanha",
		'de-de': "Kanivanha",
		'es-es': "Carvanha",
		'fr-fr': "Carvanha",
		'it-it': "Carvanha",
		'pt-br': "Carvanha",
	},

	rarity: "Double rare",
	category: "Pokemon",

	dexId: [319],
	hp: 330,
	types: ["Darkness"],
	stage: "Stage1",

	attacks: [{
		cost: ["Darkness"],

		name: {
			'en-us': "Greedy Fang",
			'fr-fr': "Croc Cupide",
			'es-es': "Colmillo Codicioso",
			'es-mx': "Colmillo Codicioso",
			'de-de': "Gieriges Gebiss",
			'it-it': "Zanna Ingorda",
			'pt-br': "Presa Gananciosa"
		},

		effect: {
			'en-us': "Draw 2 cards.",
			'fr-fr': "Piochez 2 cartes.",
			'es-es': "Roba 2 cartas.",
			'es-mx': "Roba 2 cartas.",
			'de-de': "Ziehe 2 Karten.",
			'it-it': "Pesca due carte.",
			'pt-br': "Compre 2 cartas."
		},

		damage: 70
	}, {
		cost: ["Darkness", "Darkness"],

		name: {
			'en-us': "Hungry Jaws",
			'fr-fr': "Mâchoires Avides",
			'es-es': "Mandíbulas Hambrientas",
			'es-mx': "Mandíbulas Voraces",
			'de-de': "Gefräßiger Schlund",
			'it-it': "Mandibole Affamate",
			'pt-br': "Bocarra Voraz"
		},

		effect: {
			'en-us': "If this Pokémon has any damage counters on it, this attack does 150 more damage.",
			'fr-fr': "Si au moins un marqueur de dégâts est placé sur ce Pokémon, cette attaque inflige 150 dégâts supplémentaires.",
			'es-es': "Si este Pokémon tiene algún contador de daño sobre él, este ataque hace 150 puntos de daño más.",
			'es-mx': "Si este Pokémon tiene algún contador de daño sobre él, este ataque hace 150 puntos de daño más.",
			'de-de': "Wenn auf diesem Pokémon mindestens 1 Schadensmarke liegt, fügt diese Attacke 150 Schadenspunkte mehr zu.",
			'it-it': "Se questo Pokémon ha dei segnalini danno, questo attacco infligge 150 danni in più.",
			'pt-br': "Se este Pokémon tiver algum contador de dano nele, este ataque causará 150 pontos de dano a mais."
		},

		damage: "120+"
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 0,
	regulationMark: "I",

	illustrator: "5ban Graphics",
	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 857636,
				tcgplayer: 662191,
				cardtrader: 356845
			}
		},
	],	
}

export default card
