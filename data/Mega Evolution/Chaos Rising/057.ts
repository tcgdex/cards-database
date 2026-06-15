import { Card } from "../../../interfaces"
import Set from "../Chaos Rising"

const card: Card = {
	set: Set,

	description: {
		en: "Consuming garbage makes new kinds of poison gases and liquids inside their bodies.",
	},


	name: {
		en: "Garbodor",
		fr: "Miasmax",
		es: "Garbodor",
		'es-mx': "Garbodor",
		de: "Deponitox",
		it: "Garbodor",
		pt: "Garbodor"
	},

	illustrator: "HYOGONOSUKE",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [569],
	hp: 140,
	types: ["Darkness"],

	evolveFrom: {
		en: "Trubbish"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Gloomy Garbage",
			fr: "Poubelle Lugubre",
			es: "Basura Lúgubre",
			'es-mx': "Bajón Basurero",
			de: "Trübseliger Müll",
			it: "Rifiuti Deprimenti",
			pt: "Lixo Lúgubre"
		},

		effect: {
			en: "Attacks used by your opponent's Active Pokémon that has a Pokémon Tool attached do 20 less damage (before applying Weakness and Resistance).",
			fr: "Les attaques utilisées par le Pokémon Actif de votre adversaire ayant un Outil Pokémon attaché infligent 20 dégâts de moins (avant application de la Faiblesse et de la Résistance).",
			es: "Los ataques usados por el Pokémon Activo de tu rival que tenga una Herramienta Pokémon unida hacen 20 puntos de daño menos (antes de aplicar Debilidad y Resistencia).",
			'es-mx': "Los ataques usados por el Pokémon Activo de tu rival que tenga alguna Herramienta Pokémon unida hacen 20 puntos de daño menos (antes de aplicar Debilidad y Resistencia).",
			de: "Die eingesetzten Attacken des Aktiven Pokémon deines Gegners, an das 1 Pokémon-Ausrüstung angelegt ist, fügen 20 Schadenspunkte weniger zu (bevor Schwäche und Resistenz verrechnet werden).",
			it: "Gli attacchi usati dal Pokémon attivo del tuo avversario che ha una carta Oggetto Pokémon assegnata infliggono 20 danni in meno, prima di aver applicato debolezza e resistenza.",
			pt: "Os ataques usados pelo Pokémon Ativo do seu oponente que tiver uma Ferramenta Pokémon ligada a ele causam 20 pontos de dano a menos (antes de aplicar Fraqueza e Resistência)."
		}
	}],

	attacks: [{
		name: {
			en: "Sludge Bomb",
			fr: "Bombe Beurk",
			es: "Bomba Lodo",
			'es-mx': "Bomba Lodo",
			de: "Matschbombe",
			it: "Fangobomba",
			pt: "Bomba de Lodo"
		},

		cost: ["Darkness", "Darkness", "Colorless"],
		damage: 100
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 886449,
				tcgplayer: 693492
			}
		},
	],
}

export default card
