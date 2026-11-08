import { Card } from "models/database/card"
import Set from "../Prismatic Evolutions"

const card: Card = {
	dexId: [676],
	set: Set,

	name: {
		'en-us': "Furfrou",
		'fr-fr': "Couafarel",
		'es-es': "Furfrou",
		'pt-br': "Furfrou",
		'it-it': "Furfrou",
		'de-de': "Coiffwaff"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 100,
	types: ["Colorless"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Fur Coat",
			'fr-fr': "Toison Épaisse",
			'es-es': "Pelaje Recio",
			'pt-br': "Camada de Pelos",
			'it-it': "Foltopelo",
			'de-de': "Fellkleid"
		},

		effect: {
			'en-us': "This Pokémon takes 20 less damage from attacks (after applying Weakness and Resistance).",
			'fr-fr': "Ce Pokémon subit 20 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
			'es-es': "Los ataques hacen 20 puntos de daño menos a este Pokémon (después de aplicar Debilidad y Resistencia).",
			'pt-br': "Este Pokémon recebe 20 pontos de dano a menos de ataques (depois de aplicar Fraqueza e Resistência).",
			'it-it': "Questo Pokémon subisce 20 danni in meno dagli attacchi, dopo aver applicato debolezza e resistenza.",
			'de-de': "Diesem Pokémon werden durch Attacken 20 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden)."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Bite",
			'fr-fr': "Morsure",
			'es-es': "Mordisco",
			'pt-br': "Mordida",
			'it-it': "Morso",
			'de-de': "Biss"
		},

		damage: 80
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",
	illustrator: "Keisin",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 805480,
				tcgplayer: 610443
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 805480,
				tcgplayer: 610443
			}
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 806536,
				tcgplayer: 610601
			}
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 806537,
				tcgplayer: 610702
			}
		},
	],
}

export default card
