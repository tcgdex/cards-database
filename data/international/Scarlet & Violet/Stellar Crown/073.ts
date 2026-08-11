import { Card } from "models/database/card"
import Set from "../Stellar Crown"

const card: Card = {
	dexId: [105],
	set: Set,

	name: {
		'en-us': "Marowak",
		'fr-fr': "Ossatueur",
		'es-es': "Marowak",
		'it-it': "Marowak",
		'pt-br': "Marowak",
		'de-de': "Knogga"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Fighting"],
	evolveFrom: {
		'en-us': "Cubone",
		'fr-fr': "Osselait",
		'es-es': "Cubone",
		'it-it': "Cubone",
		'pt-br': "Cubone",
		'de-de': "Tragosso"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Fighting"],

		name: {
			'en-us': "Growl",
			'fr-fr': "Rugissement",
			'es-es': "Gruñido",
			'it-it': "Ruggito",
			'pt-br': "Rosnadura",
			'de-de': "Heuler"
		},

		effect: {
			'en-us': "During your opponent's next turn, attacks used by the Defending Pokémon do 40 less damage (before applying Weakness and Resistance).",
			'fr-fr': "Pendant le prochain tour de votre adversaire, les attaques utilisées par le Pokémon Défenseur infligent 40 dégâts de moins (avant application de la Faiblesse et de la Résistance).",
			'es-es': "Durante el próximo turno de tu rival, los ataques usados por el Pokémon Defensor hacen 40 puntos de daño menos (antes de aplicar Debilidad y Resistencia).",
			'it-it': "Durante il prossimo turno del tuo avversario, gli attacchi usati dal Pokémon difensore infliggono 40 danni in meno, prima di aver applicato debolezza e resistenza.",
			'pt-br': "Durante o próximo turno do seu oponente, os ataques usados pelo Pokémon Defensor causarão 40 pontos de dano a menos (antes de aplicar Fraqueza e Resistência).",
			'de-de': "Während des nächsten Zuges deines Gegners fügen die vom Verteidigenden Pokémon eingesetzten Attacken 40 Schadenspunkte weniger zu (bevor Schwäche und Resistenz verrechnet werden)."
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Bone Vengeance",
			'fr-fr': "Os Vengeur",
			'es-es': "Venganza Ósea",
			'it-it': "Ossorivalsa",
			'pt-br': "Vingança Óssea",
			'de-de': "Knochenvergeltung"
		},

		effect: {
			'en-us': "If any of your Benched Cubone have any damage counters on them, this attack does 120 more damage.",
			'fr-fr': "Si au moins un marqueur de dégâts est placé sur au moins l'un de vos Osselait de Banc, cette attaque inflige 120 dégâts supplémentaires.",
			'es-es': "Si alguno de tus Cubone en Banca tiene algún contador de daño sobre él, este ataque hace 120 puntos de daño más.",
			'it-it': "Se uno qualsiasi dei tuoi Cubone in panchina ha dei segnalini danno, questo attacco infligge 120 danni in più.",
			'pt-br': "Se algum dos seus Cubone no Banco tiver algum contador de dano nele, este ataque causará 120 pontos de dano a mais.",
			'de-de': "Wenn auf mindestens 1 Tragosso auf deiner Bank mindestens 1 Schadensmarke liegt, fügt diese Attacke 120 Schadenspunkte mehr zu."
		},

		damage: "60+"
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "H",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 785927,
				tcgplayer: 567299
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 785927,
				tcgplayer: 567299
			}
		},
	],

	illustrator: "cochi8i",

}

export default card
