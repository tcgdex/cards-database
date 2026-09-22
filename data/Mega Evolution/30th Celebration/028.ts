import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	description: {
		en: "It has small electric sacs on both its cheeks. When in a tough spot, this Pokémon discharges electricity."
	},

	name: {
		en: "Pikachu",
		fr: "Pikachu",
		de: "Pikachu",
		es: "Pikachu",
		it: "Pikachu",
		'es-mx': "Pikachu"
	},

	illustrator: "sowsow",
	rarity: "Pikachu Rare",
	category: "Pokemon",
	dexId: [25],
	hp: 60,
	types: ["Lightning"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Lonely Gaze",
			fr: "Regard Solitaire",
			de: "Einsamer Blick",
			es: "Mirada Solitaria",
			it: "Sguardo Malinconico",
			'es-mx': "Mirada Solitaria"
		},

		effect: {
			en: "As long as this Pokémon is in the Active Spot, attacks used by your opponent's Active Pokémon do 20 less damage (before applying Weakness and Resistance).",
			fr: "Tant que ce Pokémon est sur le Poste Actif, les attaques utilisées par le Pokémon Actif de votre adversaire infligent 20 dégâts de moins (avant application de la Faiblesse et de la Résistance).",
			de: "Solange dieses Pokémon in der Aktiven Position ist, fügen die vom Aktiven Pokémon deines Gegners eingesetzten Attacken 20 Schadenspunkte weniger zu (bevor Schwäche und Resistenz verrechnet werden).",
			es: "Mientras este Pokémon esté en el Puesto Activo, los ataques usados por el Pokémon Activo de tu rival hacen 20 puntos de daño menos (antes de aplicar Debilidad y Resistencia).",
			it: "Fintanto che questo Pokémon è in posizione attiva, gli attacchi usati dal Pokémon attivo del tuo avversario infliggono 20 danni in meno, prima di aver applicato debolezza e resistenza.",
			'es-mx': "Mientras este Pokémon esté en el Puesto Activo, los ataques usados por el Pokémon Activo de tu rival hacen 20 puntos de daño menos (antes de aplicar Debilidad y Resistencia)."
		}
	}],

	attacks: [{
		name: {
			en: "Pika Ball",
			fr: "Pika Ball",
			de: "Pikaball",
			es: "Pika Ball",
			it: "Pikasfera",
			'es-mx': "Pikabola"
		},

		damage: 20,
		cost: ["Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "J",
	variants: [
		{
			type: "holo",
			stamp: ["30th-anniversary"],
			thirdParty: {
				cardmarket: 907635,
				tcgplayer: 712937
			}
		}
	],
}

export default card
