import { Card } from "models/database/card"
import Set from "../Paradox Rift"

const card: Card = {
	dexId: [620],
	set: Set,

	name: {
		'en-us': "Mienshao",
		'fr-fr': "Shaofouine",
		'es-es': "Mienshao",
		'it-it': "Mienshao",
		'pt-br': "Mienshao",
		'de-de': "Wie-Shu"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 100,
	types: ["Fighting"],
	evolveFrom: {
		'en-us': "Mienfoo",
		'fr-fr': "Kungfouine",
		'es-es': "Mienfoo",
		'it-it': "Mienfoo",
		'pt-br': "Mienfoo",
		'de-de': "Lin-Fu"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Fighting"],

		name: {
			'en-us': "Three-Step Strike",
			'fr-fr': "Attaque en Trois Étapes",
			'es-es': "Golpe a Tres Pasos",
			'it-it': "Colpo Trifasico",
			'pt-br': "Golpe de Três Passos",
			'de-de': "Dreistufenstoß"
		},

		effect: {
			'en-us': "Flip 3 coins. This attack does 20 damage for each heads.",
			'fr-fr': "Lancez 3 pièces. Cette attaque inflige 20 dégâts pour chaque côté face.",
			'es-es': "Lanza 3 monedas. Este ataque hace 20 puntos de daño por cada cara.",
			'it-it': "Lancia tre volte una moneta. Questo attacco infligge 20 danni ogni volta che esce testa.",
			'pt-br': "Jogue 3 moedas. Este ataque causa 20 pontos de dano para cada cara.",
			'de-de': "Wirf 3 Münzen. Diese Attacke fügt 20 Schadenspunkte pro Kopf zu."
		},

		damage: "20×"
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Whip Expert",
			'fr-fr': "Expert du Fouet",
			'es-es': "Látigo Experto",
			'it-it': "Specialista di Fruste",
			'pt-br': "Especialista em Chicotada",
			'de-de': "Peitschenexperte"
		},

		effect: {
			'en-us': "If you attached a Pokémon Tool card from your hand to this Pokémon during this turn, this attack does 70 more damage.",
			'fr-fr': "Si vous avez attaché une carte Outil Pokémon de votre main à ce Pokémon pendant ce tour, cette attaque inflige 70 dégâts supplémentaires.",
			'es-es': "Si has unido una carta de Herramienta Pokémon de tu mano a este Pokémon durante este turno, este ataque hace 70 puntos de daño más.",
			'it-it': "Se hai assegnato a questo Pokémon una carta Oggetto Pokémon dalla tua mano durante questo turno, questo attacco infligge 70 danni in più.",
			'pt-br': "Se você ligou uma carta de Ferramenta Pokémon da sua mão a este Pokémon durante este turno, este ataque causará 70 pontos de dano a mais.",
			'de-de': "Wenn du 1 Pokémon-Ausrüstung während dieses Zuges aus deiner Hand an dieses Pokémon angelegt hast, fügt diese Attacke 70 Schadenspunkte mehr zu."
		},

		damage: "50+"
	}],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	description: {
		'en-us': "Delivered at blinding speeds, kicks from this Pokémon can shatter massive boulders into tiny pieces.",
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 740743,
				tcgplayer: 523881,
				cardtrader: 265557
			}
		},
	],

	illustrator: "Taira Akitsu",

	
}

export default card
