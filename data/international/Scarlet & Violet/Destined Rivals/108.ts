import { Card } from "models/database/card"
import Set from "../Destined Rivals"

const card: Card = {
	dexId: [750],
	set: Set,

	name: {
		'en-us': "Mudsdale",
		'fr-fr': "Bourrinos",
		'de-de': "Pampross",
		'it-it': "Mudsdale",
		'es-es': "Mudsdale",
		'pt-br': "Mudsdale",
		'es-mx': "Mudsdale"
	},


	illustrator: "Uta",

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 150,
	types: ["Fighting"],
	evolveFrom: {
		'en-us': "Mudbray",
		'fr-fr': "Tiboudet",
		'de-de': "Pampuli",
		'it-it': "Mudbray",
		'es-es': "Mudbray",
		'pt-br': "Mudbray",
		'es-mx': "Mudbray"
	},
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Mud Coat",
			'fr-fr': "Toison Boueuse",
			'de-de': "Schlammschicht",
			'it-it': "Manto Fangoso",
			'es-es': "Pelaje Lodo",
			'pt-br': "Camada de Lama",
			'es-mx': "Capa de Lodo"
		},

		effect: {
			'en-us': "This Pokémon takes 30 less damage from attacks (after applying Weakness and Resistance).",
			'fr-fr': "Ce Pokémon subit 30 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
			'de-de': "Diesem Pokémon werden durch Attacken 30 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden).",
			'it-it': "Questo Pokémon subisce 30 danni in meno dagli attacchi, dopo aver applicato debolezza e resistenza.",
			'es-es': "Los ataques hacen 30 puntos de daño menos a este Pokémon (después de aplicar Debilidad y Resistencia).",
			'pt-br': "Este Pokémon recebe 30 pontos de dano a menos de ataques (depois de aplicar Fraqueza e Resistência).",
			'es-mx': "Los ataques hacen 30 puntos de daño menos a este Pokémon (después de aplicar Debilidad y Resistencia)."
		}
	}],

	attacks: [{
		cost: ["Fighting", "Fighting", "Colorless"],

		name: {
			'en-us': "Heavy Impact",
			'fr-fr': "Gros Impact",
			'de-de': "Schwerer Einschlag",
			'it-it': "Impatto Pesante",
			'es-es': "Impacto Pesado",
			'pt-br': "Impacto Pesado",
			'es-mx': "Impacto Pesado"
		},

		damage: 130
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "I",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 825982,
				tcgplayer: 632916
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 825982,
				tcgplayer: 632916
			}
		},
	],
}

export default card
