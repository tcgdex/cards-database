import { Card } from "models/database/card"
import Set from "../Paldean Fates"

const card: Card = {
	dexId: [244],
	set: Set,

	name: {
		'en-us': "Entei",
		'fr-fr': "Entei",
		'es-es': "Entei",
		'it-it': "Entei",
		'pt-br': "Entei",
		'de-de': "Entei"
	},

	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 130,
	types: ["Fire"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Pressure",
			'fr-fr': "Pression",
			'es-es': "Presión",
			'it-it': "Pressione",
			'pt-br': "Pressão",
			'de-de': "Erzwinger"
		},

		effect: {
			'en-us': "As long as this Pokémon is in the Active Spot, attacks used by your opponent's Active Pokémon do 20 less damage (before applying Weakness and Resistance).",
			'fr-fr': "Tant que ce Pokémon est sur le Poste Actif, les attaques utilisées par le Pokémon Actif de votre adversaire infligent 20 dégâts de moins (avant application de la Faiblesse et de la Résistance).",
			'es-es': "Mientras este Pokémon esté en el Puesto Activo, los ataques usados por el Pokémon Activo de tu rival hacen 20 puntos de daño menos (antes de aplicar Debilidad y Resistencia).",
			'it-it': "Fintanto che questo Pokémon è in posizione attiva, gli attacchi usati dal Pokémon attivo del tuo avversario infliggono 20 danni in meno, prima di aver applicato debolezza e resistenza.",
			'pt-br': "Enquanto este Pokémon estiver no Campo Ativo, os ataques usados pelo Pokémon Ativo do seu oponente causarão 20 pontos de dano a menos (antes de aplicar Fraqueza e Resistência).",
			'de-de': "Solange dieses Pokémon in der Aktiven Position ist, fügen die vom Aktiven Pokémon deines Gegners eingesetzten Attacken 20 Schadenspunkte weniger zu (bevor Schwäche und Resistenz verrechnet werden)."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Blaze Ball",
			'fr-fr': "Balle Incendiaire",
			'es-es': "Bola Ascuas",
			'it-it': "Pallafuoco",
			'pt-br': "Bola de Fogo",
			'de-de': "Brandball"
		},

		effect: {
			'en-us': "This attack does 20 more damage for each {R} Energy attached to this Pokémon.",
			'fr-fr': "Cette attaque inflige 20 dégâts supplémentaires pour chaque Énergie {R} attachée à ce Pokémon.",
			'es-es': "Este ataque hace 20 puntos de daño más por cada Energía {R} unida a este Pokémon.",
			'it-it': "Questo attacco infligge 20 danni in più per ogni Energia {R} assegnata a questo Pokémon.",
			'pt-br': "Este ataque causa 20 pontos de dano a mais para cada Energia {R} ligada a este Pokémon.",
			'de-de': "Diese Attacke fügt für jede an dieses Pokémon angelegte {R}-Energie 20 Schadenspunkte mehr zu."
		},

		damage: "60+"
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 751651,
				tcgplayer: 534493,
				cardtrader: 274296
			}
		},
	],

	illustrator: "Ryuta Fuse",

	description: {
		'en-us': "It is said that when it roars, a volcano erupts somewhere around the globe.",
	},

}

export default card
