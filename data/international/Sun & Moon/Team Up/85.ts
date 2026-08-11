import { Card } from 'models/database/card'
import Set from '../Team Up'

const card: Card = {
	name: {
		'en-us': "Tyranitar",
		'fr-fr': "Tyranocif",
		'es-es': "Tyranitar",
		'it-it': "Tyranitar",
		'pt-br': "Tyranitar",
		'de-de': "Despotar"
	},

	illustrator: "Hasuno",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		248,
	],

	hp: 170,

	types: [
		"Darkness",
	],

	evolveFrom: {
		'en-us': "Pupitar",
		'fr-fr': "Ymphect",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Spinning Tail",
				'fr-fr': "Queue Tournante",
				'es-es': "Cola Giratoria",
				'it-it': "Coda Rotante",
				'pt-br': "Cauda Giratória",
				'de-de': "Kreisender Schweif"
			},
			effect: {
				'en-us': "This attack does 30 damage to each of your opponent’s Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Cette attaque inflige 30 dégâts à chacun des Pokémon de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				'es-es': "Este ataque hace 30 puntos de daño a cada uno de los Pokémon de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
				'it-it': "Questo attacco infligge 30 danni a ciascuno dei Pokémon del tuo avversario. Ricorda che non puoi applicare debolezza e resistenza ai Pokémon in panchina.",
				'pt-br': "Este ataque causa 30 pontos de dano a cada um dos Pokémon do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
				'de-de': "Diese Attacke fügt jedem Pokémon deines Gegners 30 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},

		},
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Bite Off",
				'fr-fr': "Arrachage",
				'es-es': "Despedazar",
				'it-it': "Addentare",
				'pt-br': "Mordida Estraçalhante",
				'de-de': "Abbeißen"
			},
			effect: {
				'en-us': "If your opponent’s Active Pokémon is a Pokémon-GX or a Pokémon-EX, this attack does 100 more damage.",
				'fr-fr': "Si le Pokémon Actif de votre adversaire est un Pokémon-GX ou un Pokémon-EX, cette attaque inflige 100 dégâts supplémentaires.",
				'es-es': "Si el Pokémon Activo de tu rival es un Pokémon-GX o un Pokémon-EX, este ataque hace 100 puntos de daño más.",
				'it-it': "Se il Pokémon attivo del tuo avversario è un Pokémon-GX o un Pokémon-EX, questo attacco infligge 100 danni in più.",
				'pt-br': "Se o Pokémon Ativo do seu oponente for um Pokémon-GX ou um Pokémon-EX, este ataque causará 100 pontos de dano a mais.",
				'de-de': "Wenn das Aktive Pokémon deines Gegners ein Pokémon-GX oder ein Pokémon-EX ist, fügt diese Attacke 100 Schadenspunkte mehr zu."
			},
			damage: "130+",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 4,

	description: {
		'en-us': "If it rampages, it knocks down mountains and buries rivers. Maps must be redrawn afterward.",
	},

	thirdParty: {
		cardmarket: 369015,
		tcgplayer: 183863
	}
}

export default card
