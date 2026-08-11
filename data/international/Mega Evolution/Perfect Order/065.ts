import { Card } from "models/database/card"
import Set from "../Perfect Order"

const card: Card = {
	set: Set,

	dexId: [660],

	name: {
		'en-us': "Diggersby",
		'fr-fr': "Excavarenne",
		'es-es': "Diggersby",
		'es-mx': "Diggersby",
		'de-de': "Grebbit",
		'it-it': "Diggersby",
		'pt-br': "Diggersby"
	},

	evolveFrom: {
		'en-us': "Bunnelby",
		'fr-fr': "Sapereau",
		'es-es': "Bunnelby",
		'es-mx': "Bunnelby",
		'de-de': "Scoppel",
		'it-it': "Bunnelby",
		'pt-br': "Bunnelby",
	},

	illustrator: "Mousho",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 150,
	types: ["Colorless"],
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Earthquake",
			'fr-fr': "Séisme",
			'es-es': "Terremoto",
			'es-mx': "Terremoto",
			'de-de': "Erdbeben",
			'it-it': "Terremoto",
			'pt-br': "Terremoto"
		},

		effect: {
			'en-us': "This attack also does 30 damage to each of your Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			'fr-fr': "Cette attaque inflige aussi 30 dégâts à chacun de vos Pokémon de Banc. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			'es-es': "Este ataque también hace 30 puntos de daño a cada uno de tus Pokémon en Banca. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			'es-mx': "Este ataque también hace 30 puntos de daño a cada uno de tus Pokémon en Banca. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			'de-de': "Diese Attacke fügt auch jedem Pokémon auf deiner Bank 30 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)",
			'it-it': "Questo attacco infligge anche 30 danni a ciascuno dei Pokémon nella tua panchina. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			'pt-br': "Este ataque também causa 30 pontos de dano a cada um dos seus Pokémon no Banco. (Não aplique Fraqueza e Resistência aos Pokémon no Banco.)"
		},

		damage: 140
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Whap Down",
			'fr-fr': "Assommer",
			'es-es': "Zurrar",
			'es-mx': "Abatir",
			'de-de': "Verdreschen",
			'it-it': "Bastonata",
			'pt-br': "Golpe Ligeiro"
		},

		damage: 100
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 4,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 684442,
				cardmarket: 877481
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 684442,
				cardmarket: 877481
			}
		}
	],

}

export default card
