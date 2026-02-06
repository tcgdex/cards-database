import { Card } from "../../../interfaces"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	dexId: [618],

	name: {
		en: "Stunfisk ex",
		fr: "Limonde-ex",
		es: "Stunfisk ex",
		'es-mx': "Stunfisk ex",
		de: "Flunschlik-ex",
		it: "Stunfisk-ex",
		pt: "Stunfisk ex"
	},

	illustrator: "5ban Graphics",
	rarity: "Double rare",
	category: "Pokemon",
	hp: 210,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Fighting"],

		name: {
			en: "Big Bite",
			fr: "Grosse Morsure",
			es: "Gran Mordisco",
			'es-mx': "Gran Mordida",
			de: "Mächtiger Biss",
			it: "Grande Morso",
			pt: "Mordidona"
		},

		effect: {
			en: "During your opponent's next turn, the Defending Pokémon can't retreat.",
			fr: "Pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas battre en retraite.",
			es: "Durante el próximo turno de tu rival, el Pokémon Defensor no puede retirarse.",
			'es-mx': "Durante el próximo turno de tu rival, el Pokémon Defensor no puede retirarse.",
			de: "Während des nächsten Zuges deines Gegners kann sich das Verteidigende Pokémon nicht zurückziehen.",
			it: "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può ritirarsi.",
			pt: "Durante o próximo turno do seu oponente, o Pokémon Defensor não poderá recuar."
		},

		damage: 30
	}, {
		cost: ["Fighting", "Colorless", "Colorless"],

		name: {
			en: "Flopping Trap",
			fr: "Piège Frétillant",
			es: "Trampa Salto",
			'es-mx': "Trampa Zarandeada",
			de: "Flappfalle",
			it: "Trappola Rimbalzante",
			pt: "Armadilha Estrebuchante"
		},

		effect: {
			en: "If this Pokémon has any damage counters on it, this attack does 100 more damage.",
			fr: "Si au moins un marqueur de dégâts est placé sur ce Pokémon, cette attaque inflige 100 dégâts supplémentaires.",
			es: "Si este Pokémon tiene algún contador de daño sobre él, este ataque hace 100 puntos de daño más.",
			'es-mx': "Si este Pokémon tiene algún contador de daño sobre él, este ataque hace 100 puntos de daño más.",
			de: "Wenn auf diesem Pokémon mindestens 1 Schadensmarke liegt, fügt diese Attacke 100 Schadenspunkte mehr zu.",
			it: "Se questo Pokémon ha dei segnalini danno, questo attacco infligge 100 danni in più.",
			pt: "Se este Pokémon tiver algum contador de dano nele, este ataque causará 100 pontos de dano a mais."
		},

		damage: "100+"
	}],

	retreat: 2,
	regulationMark: "J",

	thirdParty: {
		tcgplayer: 675926,
		cardmarket: 869725
	}
}

export default card