import { Card } from "../../../interfaces"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	name: {
		en: "Mega Excadrill ex",
		fr: "Méga-Minotaupe-ex",
		es: "Mega-Excadrill ex",
		'es-mx': "Mega-Excadrill ex",
		de: "Mega-Stalobor-ex"
	},

	illustrator: "Keisuke Azuma",
	rarity: "Ultra Rare",
	category: "Pokemon",
	dexId: [530],
	hp: 340,
	types: ["Metal"],

	evolveFrom: {
		en: "Drilbur"
	},

	stage: "Stage1",
	suffix: "EX",

	attacks: [{
		name: {
			en: "Undermine",
			es: "Horadar",
			'es-mx': "Minería",
			de: "Untergraben"
		},

		cost: ["Metal", "Metal"],

		damage: 90,

		effect: {
			en: "Discard the top 2 cards of your opponent's deck",
			es: "Descarta las 2 primeras cartas de la baraja de tu rival.",
			'es-mx': "Descarta las primeras 2 cartas del mazo de tu rival.",
			de: "Lege die obersten 2 Karten des Decks deines Gegners auf seinen Ablagestapel."
		}
	}, {
		name: {
			en: "Maximum Drilling",
			es: "Perforación Total",
			'es-mx': "Taladrado Total",
			de: "Maximalbohrer"
		},

		cost: ["Metal", "Metal"],

		damage: "200+",

		effect: {
			en: "If you have at least 2 extra Energy attached to this Pokémon, this attack does 130 more damage",
			es: "Si este Pokémon tiene por lo menos 2 Energías adicionales unidas (además de las del coste de este ataque), este ataque hace 130 puntos de daño más.",
			'es-mx': "Si este Pokémon tiene al menos 2 Energías adicionales unidas (además de las del costo de este ataque), este ataque hace 130 puntos de daño más.",
			de: "Wenn an dieses Pokémon mindestens 2 extra Energien angelegt sind (zusätzlich zu den Kosten dieser Attacke), fügt diese Attacke 130 Schadenspunkte mehr zu."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],
	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 4,
	regulationMark: "J",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 895888,
				tcgplayer: 704860
			}
		},
	],
}

export default card
