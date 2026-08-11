import { Card } from "models/database/card"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Stunfisk ex",
		'fr-fr': "Limonde-ex",
		'es-es': "Stunfisk ex",
		'es-mx': "Stunfisk ex",
		'de-de': "Flunschlik-ex",
		'it-it': "Stunfisk-ex",
		'pt-br': "Stunfisk ex"
	},

	suffix: "ex",
	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	dexId: [618],
	hp: 210,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Fighting"],

		name: {
			'en-us': "Big Bite",
			'fr-fr': "Grosse Morsure",
			'es-es': "Gran Mordisco",
			'es-mx': "Gran Mordida",
			'de-de': "Mächtiger Biss",
			'it-it': "Grande Morso",
			'pt-br': "Mordidona"
		},

		effect: {
			'en-us': "During your opponent's next turn, the Defending Pokémon can't retreat.",
			'fr-fr': "Pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas battre en retraite.",
			'es-es': "Durante el próximo turno de tu rival, el Pokémon Defensor no puede retirarse.",
			'es-mx': "Durante el próximo turno de tu rival, el Pokémon Defensor no puede retirarse.",
			'de-de': "Während des nächsten Zuges deines Gegners kann sich das Verteidigende Pokémon nicht zurückziehen.",
			'it-it': "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può ritirarsi.",
			'pt-br': "Durante o próximo turno do seu oponente, o Pokémon Defensor não poderá recuar."
		},

		damage: 30
	}, {
		cost: ["Fighting", "Colorless", "Colorless"],

		name: {
			'en-us': "Flopping Trap",
			'fr-fr': "Piège Frétillant",
			'es-es': "Trampa Salto",
			'es-mx': "Trampa Zarandeada",
			'de-de': "Flappfalle",
			'it-it': "Trappola Rimbalzante",
			'pt-br': "Armadilha Estrebuchante"
		},

		effect: {
			'en-us': "If this Pokémon has any damage counters on it, this attack does 100 more damage.",
			'fr-fr': "Si au moins un marqueur de dégâts est placé sur ce Pokémon, cette attaque inflige 100 dégâts supplémentaires.",
			'es-es': "Si este Pokémon tiene algún contador de daño sobre él, este ataque hace 100 puntos de daño más.",
			'es-mx': "Si este Pokémon tiene algún contador de daño sobre él, este ataque hace 100 puntos de daño más.",
			'de-de': "Wenn auf diesem Pokémon mindestens 1 Schadensmarke liegt, fügt diese Attacke 100 Schadenspunkte mehr zu.",
			'it-it': "Se questo Pokémon ha dei segnalini danno, questo attacco infligge 100 danni in più.",
			'pt-br': "Se este Pokémon tiver algum contador de dano nele, este ataque causará 100 pontos de dano a mais."
		},

		damage: "100+"
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "J",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 869863,
				tcgplayer: 676064
			}
		}
	],
}

export default card
