import { Card } from "models/database/card"
import Set from "../SVP Black Star Promos"

const card: Card = {
	dexId: [943],
	set: Set,

	name: {
		'en-us': "Mabosstiff ex",
		'fr-fr': "Dogrino-ex",
		'es-es': "Mabosstiff ex",
		'it-it': "Mabosstiff-ex",
		'pt-br': "Mabosstiff ex",
		'de-de': "Mastifioso-ex"
	},

	rarity: "Promo",
	category: "Pokemon",
	hp: 260,
	types: ["Darkness"],
	evolveFrom: {
		'en-us': "Maschiff",
		'fr-fr': "Grondogue",
		'es-es': "Maschiff",
		'it-it': "Maschiff",
		'pt-br': "Maschiff",
		'de-de': "Mobtiff"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Daunt",
			'fr-fr': "Découragement",
			'es-es': "Arredrar",
			'it-it': "Scoraggiare",
			'pt-br': "Atemorizar",
			'de-de': "Entmutigen"
		},

		effect: {
			'en-us': "During your opponent's next turn, attacks used by the Defending Pokémon do 50 less damage (before applying Weakness and Resistance).",
			'fr-fr': "Pendant le prochain tour de votre adversaire, les attaques utilisées par le Pokémon Défenseur infligent 50 dégâts de moins (avant application de la Faiblesse et de la Résistance).",
			'es-es': "Durante el próximo turno de tu rival, los ataques usados por el Pokémon Defensor hacen 50 puntos de daño menos (antes de aplicar Debilidad y Resistencia).",
			'it-it': "Durante il prossimo turno del tuo avversario, gli attacchi usati dal Pokémon difensore infliggono 50 danni in meno, prima di aver applicato debolezza e resistenza.",
			'pt-br': "Durante o próximo turno do seu oponente, os ataques usados pelo Pokémon Defensor causarão 50 pontos de dano a menos (antes de aplicar Fraqueza e Resistência).",
			'de-de': "Während des nächsten Zuges deines Gegners fügen die vom Verteidigenden Pokémon eingesetzten Attacken 50 Schadenspunkte weniger zu (bevor Schwäche und Resistenz verrechnet werden)."
		},

		damage: 30
	}, {
		cost: ["Darkness", "Colorless", "Colorless"],

		name: {
			'en-us': "Proud Fangs",
			'fr-fr': "Crocs Fiers",
			'es-es': "Colmillos Imponentes",
			'it-it': "Zanne Fiere",
			'pt-br': "Presas Orgulhosas",
			'de-de': "Stattliche Fänge"
		},

		effect: {
			'en-us': "If your Benched Pokémon have any damage counters on them, this attack does 120 more damage.",
			'fr-fr': "Si au moins un marqueur de dégâts est placé sur vos Pokémon de Banc, cette attaque inflige 120 dégâts supplémentaires.",
			'es-es': "Si tus Pokémon en Banca tienen algún contador de daño sobre ellos, este ataque hace 120 puntos de daño más.",
			'it-it': "Se i tuoi Pokémon in panchina hanno dei segnalini danno, questo attacco infligge 120 danni in più.",
			'pt-br': "Se os seus Pokémon no Banco tiverem algum contador de dano neles, este ataque causará 120 pontos de dano a mais.",
			'de-de': "Wenn auf den Pokémon auf deiner Bank mindestens 1 Schadensmarke liegt, fügt diese Attacke 120 Schadenspunkte mehr zu."
		},

		damage: "100+"
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "G",
	suffix: "ex",
	illustrator: "PLANETA Mochizuki",
	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 751810,
				tcgplayer: 542255
			},
		},
		{
			type: "holo",
			size: "jumbo",
			thirdParty: {
				cardmarket: 751811,
				tcgplayer: 543638
			}
		}
	],
}

export default card
