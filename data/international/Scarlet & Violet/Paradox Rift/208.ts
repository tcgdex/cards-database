import { Card } from "models/database/card"
import Set from "../Paradox Rift"

const card: Card = {
	dexId: [208],
	set: Set,

	name: {
		'en-us': "Steelix",
		'fr-fr': "Steelix",
		'es-es': "Steelix",
		'it-it': "Steelix",
		'pt-br': "Steelix",
		'de-de': "Stahlos"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 180,
	types: ["Metal"],
	evolveFrom: {
		'en-us': "Onix",
		'fr-fr': "Onix",
		'es-es': "Onix",
		'it-it': "Onix",
		'pt-br': "Onix",
		'de-de': "Onix"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Metal"],

		name: {
			'en-us': "Earthquake",
			'fr-fr': "Séisme",
			'es-es': "Terremoto",
			'it-it': "Terremoto",
			'pt-br': "Terremoto",
			'de-de': "Erdbeben"
		},

		effect: {
			'en-us': "This attack also does 30 damage to each of your Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			'fr-fr': "Cette attaque inflige aussi 30 dégâts à chacun de vos Pokémon de Banc. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			'es-es': "Este ataque también hace 30 puntos de daño a cada uno de tus Pokémon en Banca. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			'it-it': "Questo attacco infligge anche 30 danni a ciascuno dei Pokémon nella tua panchina. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			'pt-br': "Este ataque também causa 30 pontos de dano a cada um dos seus Pokémon no Banco. (Não aplique Fraqueza e Resistência aos Pokémon no Banco.)",
			'de-de': "Diese Attacke fügt auch jedem Pokémon auf deiner Bank 30 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		},

		damage: 130
	}, {
		cost: ["Metal", "Metal", "Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Heavy Impact",
			'fr-fr': "Gros Impact",
			'es-es': "Impacto Pesado",
			'it-it': "Impatto Pesante",
			'pt-br': "Impacto Pesado",
			'de-de': "Schwerer Einschlag"
		},

		damage: 180
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Grass",
			value: "-30",
		},
	],
	retreat: 4,
	regulationMark: "G",

	description: {
		'en-us': "It is thought its body transformed as a result of iron accumulating internally from swallowing soil.",
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 740751,
				tcgplayer: 523889,
				cardtrader: 265563
			}
		},
	],

	illustrator: "nisimono",

	
}

export default card
