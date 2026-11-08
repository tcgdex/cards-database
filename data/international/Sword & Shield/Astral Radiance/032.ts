import { Card } from "models/database/card"
import Set from "../Astral Radiance"

const card: Card = {
	dexId: [221],
	set: Set,

	name: {
		'en-us': "Piloswine",
		'fr-fr': "Cochignon",
		'es-es': "Piloswine",
		'it-it': "Piloswine",
		'pt-br': "Piloswine",
		'de-de': "Keifel"
	},

	illustrator: "yuu",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],

	evolveFrom: {
		'en-us': "Swinub",
		'fr-fr': "Marcacrin",
		'es-es': "Swinub",
		'it-it': "Swinub",
		'pt-br': "Swinub",
		'de-de': "Quiekel"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Stampede",
			'fr-fr': "Ruée",
			'es-es': "Estampida",
			'it-it': "Fuggi Fuggi",
			'pt-br': "Estouro",
			'de-de': "Zertrampeln"
		},

		damage: 30
	}, {
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			'en-us': "Blizzard",
			'fr-fr': "Blizzard",
			'es-es': "Ventisca",
			'it-it': "Bora",
			'pt-br': "Nevasca",
			'de-de': "Blizzard"
		},

		effect: {
			'en-us': "This attack also does 10 damage to each of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			'fr-fr': "Cette attaque inflige aussi 10 dégâts à chacun des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			'es-es': "Este ataque también hace 10 puntos de daño a cada uno de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			'it-it': "Questo attacco infligge anche 10 danni a ciascuno dei Pokémon nella panchina del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			'pt-br': "Este ataque também causa 10 pontos de dano a cada um dos Pokémon no Banco do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
			'de-de': "Diese Attacke fügt auch jedem Pokémon auf der Bank deines Gegners 10 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		},

		damage: 50
	}],

	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "F",


	description: {
		'en-us': "If it charges at an enemy, the hairs on its back stand up straight. It is very sensitive to sound.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 658540,
				tcgplayer: 272232
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 658540,
				tcgplayer: 272232
			}
		},
	],
}

export default card
