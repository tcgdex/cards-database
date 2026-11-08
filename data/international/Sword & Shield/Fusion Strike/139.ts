import { Card } from "models/database/card"
import Set from "../Fusion Strike"

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

	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 190,
	types: ["Fighting"],

	evolveFrom: {
		'en-us': "Onix",
		'fr-fr': "Onix",
		'es-es': "Onix",
		'it-it': "Onix",
		'pt-br': "Onix",
		'de-de': "Onix"
	},

	stage: "Stage1",
	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 4,
	regulationMark: "E",
	illustrator: "Ryuta Fuse",

	description: {
		'en-us': "It is thought its body transformed as a result of iron accumulating internally from swallowing soil."
	},

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Powerful Rage",
			'fr-fr': "Rage Massive",
			'de-de': "Mächtige Wut",
			'es-es': "Ira Recia",
			'pt-br': "Ira Poderosa",
			'it-it': "Forzafuria"
		},

		damage: "20×",

		effect: {
			'en-us': "This attack does 20 damage for each damage counter on this Pokémon.",
			'fr-fr': "Cette attaque inflige 20 dégâts pour chaque marqueur de dégâts sur ce Pokémon.",
			'de-de': "Diese Attacke fügt für jede Schadensmarke auf diesem Pokémon 20 Schadenspunkte zu.",
			'es-es': "Este ataque hace 20 puntos de daño por cada contador de daño en este Pokémon.",
			'pt-br': "Este ataque causa 20 pontos de dano para cada contador de dano neste Pokémon.",
			'it-it': "Questo attacco infligge 20 danni per ogni segnalino danno presente su questo Pokémon."
		}
	}, {
		cost: ["Fighting", "Fighting", "Colorless"],

		name: {
			'en-us': "Earthquake",
			'fr-fr': "Séisme",
			'de-de': "Erdbeben",
			'es-es': "Terremoto",
			'pt-br': "Terremoto",
			'it-it': "Terremoto"
		},

		damage: 180,

		effect: {
			'en-us': "This attack also does 30 damage to each of your Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			'fr-fr': "Cette attaque inflige aussi 30 dégâts à chacun de vos Pokémon de Banc. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			'de-de': "Diese Attacke fügt auch jedem Pokémon auf deiner Bank 30 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)",
			'es-es': "Este ataque también hace 30 puntos de daño a cada uno de tus Pokémon en Banca. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			'pt-br': "Este ataque também causa 30 pontos de dano a cada um dos seus Pokémon no Banco (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
			'it-it': "Questo attacco infligge anche 30 danni a ciascuno dei Pokémon nella tua panchina. Non applicare debolezza e resistenza ai Pokémon in panchina."
		}
	}],


	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 582748,
				tcgplayer: 253346
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 582748,
				tcgplayer: 253346
			}
		},
	],
}

export default card
