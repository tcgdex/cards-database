import { Card } from 'models/database/card'
import Set from '../Celebrations'

const card: Card = {
	set: Set,


	name: {
		'en-us': "Surfing Pikachu VMAX",
		'fr-fr': "Pikachu Surfeur VMAX",
		'es-es': "Pikachu Surf VMAX",
		'it-it': "Pikachu Surf VMAX",
		'pt-br': "Pikachu Surfista VMAX",
		'de-de': "Surfendes Pikachu VMAX"
	},

	rarity: "Holo Rare VMAX",
	category: "Pokemon",
	hp: 310,
	types: ["Lightning"],
	stage: "VMAX",
	illustrator: "aky CG Works",

	attacks: [{
		name: {
			'en-us': "Max Surfer",
			'fr-fr': "Surfeuromax",
			'es-es': "Maxisurfista",
			'it-it': "Dynasurfista",
			'pt-br': "Surfista Max",
			'de-de': "Dyna-Surfen"
		},

		effect: {
			'en-us': "This attack also does 30 damage to each of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			'fr-fr': "Cette attaque inflige aussi 30 dégâts à chacun des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			'es-es': "Este ataque también hace 30 puntos de daño a cada uno de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			'it-it': "Questo attacco infligge anche 30 danni a ciascuno dei Pokémon nella panchina del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			'pt-br': "Este ataque também causa 30 pontos de dano a cada um dos Pokémon no Banco do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
			'de-de': "Diese Attacke fügt auch jedem Pokémon auf der Bank deines Gegners 30 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		},

		damage: 160,
		cost: ["Water", "Water", "Water"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,

	evolveFrom: {
		'en-us': "Surfing Pikachu V",
		'fr-fr': "Pikachu Surfeur-V",
		'es-es': "Pikachu Surf V",
		'it-it': "Pikachu Surf-V",
		'pt-br': "Pikachu Surfista V",
		'de-de': "Surfendes Pikachu-V"
	},

	regulationMark: "E",
	dexId: [25],

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 576754,
				tcgplayer: 250307
			}
		},
	],
}

export default card
