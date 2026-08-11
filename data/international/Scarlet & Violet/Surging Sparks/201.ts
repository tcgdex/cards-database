import { Card } from "models/database/card"
import Set from "../Surging Sparks"

const card: Card = {
	dexId: [975],
	set: Set,

	name: {
		'en-us': "Cetitan",
		'fr-fr': "Balbalèze",
		'es-es': "Cetitan",
		'it-it': "Cetitan",
		'pt-br': "Cetitan",
		'de-de': "Kolowal"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 180,
	types: ["Water"],
	evolveFrom: {
		'en-us': "Cetoddle",
		'fr-fr': "Piétacé",
		'es-es': "Cetoddle",
		'it-it': "Cetoddle",
		'pt-br': "Cetoddle",
		'de-de': "Flaniwal"
	},
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Solid Body",
			'fr-fr': "Corps Résistant",
			'es-es': "Cuerpo Sólido",
			'it-it': "Corpo Solido",
			'pt-br': "Corpo Robusto",
			'de-de': "Solider Körper"
		},

		effect: {
			'en-us': "This Pokémon takes 30 less damage from attacks (after applying Weakness and Resistance).",
			'fr-fr': "Ce Pokémon subit 30 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
			'es-es': "Los ataques hacen 30 puntos de daño menos a este Pokémon (después de aplicar Debilidad y Resistencia).",
			'it-it': "Questo Pokémon subisce 30 danni in meno dagli attacchi, dopo aver applicato debolezza e resistenza.",
			'pt-br': "Este Pokémon recebe 30 pontos de dano a menos de ataques (depois de aplicar Fraqueza e Resistência).",
			'de-de': "Diesem Pokémon werden durch Attacken 30 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden)."
		}
	}],

	attacks: [{
		cost: ["Water", "Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Dangerous Mouth",
			'fr-fr': "Bouche Dangereuse",
			'es-es': "Boca Peligrosa",
			'it-it': "Fauci Pericolose",
			'pt-br': "Boca Perigosa",
			'de-de': "Gefährliches Maul"
		},

		damage: 150
	}],

	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "H",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 794574,
				tcgplayer: 589894
			}
		},
	],

	illustrator: "Jerky",

}

export default card
