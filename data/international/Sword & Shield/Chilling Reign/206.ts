import { Card } from 'models/database/card'
import Set from '../Chilling Reign'

const card: Card = {
	dexId: [844],
	set: Set,

	name: {
		'en-us': "Sandaconda VMAX",
		'fr-fr': "Dunaconda VMAX",
		'es-es': "Sandaconda VMAX",
		'it-it': "Sandaconda VMAX",
		'pt-br': "Sandaconda VMAX",
		'de-de': "Sanaconda VMAX"
	},

	rarity: "Secret Rare",
	category: "Pokemon",
	hp: 320,
	types: ["Fighting"],

	attacks: [{
		name: {
			'en-us': "Sand Pulse",
			'fr-fr': "Vibra Sable",
			'es-es': "Pulso de Arena",
			'it-it': "Silicopulsar",
			'pt-br': "Pulso de Areia",
			'de-de': "Sandimpuls"
		},

		damage: 60,

		effect: {
			'en-us': "This attack also does 20 damage to each of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			'fr-fr': "Cette attaque inflige aussi 20 dégâts à chacun des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			'es-es': "Este ataque también hace 20 puntos de daño a cada uno de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			'it-it': "Questo attacco infligge anche 20 danni a ciascuno dei Pokémon nella panchina del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			'pt-br': "Este ataque também causa 20 pontos de dano a cada um dos Pokémon no Banco do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
			'de-de': "Diese Attacke fügt auch jedem Pokémon auf der Bank deines Gegners 20 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		},

		cost: ["Fighting"]
	}, {
		name: {
			'en-us': "G-Max Cyclone",
			'fr-fr': "Tourbillon G-Max",
			'es-es': "Gigaciclón",
			'it-it': "Gigatornado",
			'pt-br': "Ciclone G-Max",
			'de-de': "Giga-Wirbel"
		},

		damage: 180,

		effect: {
			'en-us': "Move any amount of Energy from your Pokémon to your other Pokémon in any way you like.",
			'fr-fr': "Déplacez autant de cartes Énergie attachées à vos Pokémon que vous le voulez vers vos autres Pokémon, comme il vous plaît.",
			'es-es': "Mueve cualquier cantidad de Energías de tus Pokémon a tus otros Pokémon de la manera que desees.",
			'it-it': "Sposta un numero qualsiasi di Energie dall'uno all'altro dei tuoi Pokémon nel modo che preferisci.",
			'pt-br': "Mova qualquer quantidade de Energia dos seus Pokémon para outros Pokémon seus como desejar.",
			'de-de': "Verschiebe beliebig viele Energien von deinen Pokémon beliebig auf deine anderen Pokémon."
		},

		cost: ["Fighting", "Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 3,


	stage: "VMAX",
	illustrator: "aky CG Works",

	evolveFrom: {
		'en-us': "Sandaconda V",
		'fr-fr': "Dunaconda-V",
		'es-es': "Sandaconda V",
		'it-it': "Sandaconda-V",
		'pt-br': "Sandaconda V",
		'de-de': "Sanaconda-V"
	},

	regulationMark: "E",

	variants: [
		{
			type: 'holo',
			foil: 'rainbow',
			thirdParty: {
				cardmarket: 567314,
				tcgplayer: 241759
			}
		},
	],
}

export default card
