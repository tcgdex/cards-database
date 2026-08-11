import { Card } from "models/database/card"
import Set from "../Surging Sparks"

const card: Card = {
	dexId: [329],
	set: Set,

	name: {
		'en-us': "Vibrava",
		'fr-fr': "Vibraninf",
		'es-es': "Vibrava",
		'it-it': "Vibrava",
		'pt-br': "Vibrava",
		'de-de': "Vibrava"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 90,
	types: ["Fighting"],
	evolveFrom: {
		'en-us': "Trapinch",
		'fr-fr': "Kraknoix",
		'es-es': "Trapinch",
		'it-it': "Trapinch",
		'pt-br': "Trapinch",
		'de-de': "Knacklion"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Screech",
			'fr-fr': "Grincement",
			'es-es': "Chirrido",
			'it-it': "Stridio",
			'pt-br': "Agudo",
			'de-de': "Kreideschrei"
		},

		effect: {
			'en-us': "During your next turn, the Defending Pokémon takes 50 more damage from attacks (after applying Weakness and Resistance).",
			'fr-fr': "Pendant votre prochain tour, le Pokémon Défenseur subit 50 dégâts supplémentaires provenant des attaques (après application de la Faiblesse et de la Résistance).",
			'es-es': "Durante tu próximo turno, los ataques hacen 50 puntos de daño más al Pokémon Defensor (después de aplicar Debilidad y Resistencia).",
			'it-it': "Durante il tuo prossimo turno, il Pokémon difensore subisce 50 danni in più dagli attacchi, dopo aver applicato debolezza e resistenza.",
			'pt-br': "Durante o seu próximo turno, o Pokémon Defensor receberá 50 pontos de dano a mais de ataques (depois de aplicar Fraqueza e Resistência).",
			'de-de': "Während deines nächsten Zuges werden dem Verteidigenden Pokémon durch Attacken 50 Schadenspunkte mehr zugefügt (nachdem Schwäche und Resistenz verrechnet wurden)."
		}
	}, {
		cost: ["Fighting", "Colorless"],

		name: {
			'en-us': "Cutting Wind",
			'fr-fr': "Vent Glacial",
			'es-es': "Viento Helado",
			'it-it': "Vento Tagliente",
			'pt-br': "Vento Dilacerante",
			'de-de': "Schneidender Wind"
		},

		damage: 50
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 794579,
				tcgplayer: 590086
			}
		},
	],

	illustrator: "toriyufu",

}

export default card
