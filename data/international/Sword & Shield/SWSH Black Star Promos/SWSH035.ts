import { Card } from 'models/database/card'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,

	name: {
		'en-us': "Decidueye",
		'fr-fr': "Archéduc",
		'es-es': "Decidueye",
		'it-it': "Decidueye",
		'pt-br': "Decidueye",
		'de-de': "Silvarro"
	},

	illustrator: "Souichirou Gunjima",
	rarity: "Promo",
	category: "Pokemon",
	hp: 140,
	types: ["Grass"],

	evolveFrom: {
		'en-us': "Dartrix",
		'fr-fr': "Efflèche",
		'de-de': "Arboretoss",
		'es-es': "Dartrix",
		'pt-br': "Dartrix",
		'it-it': "Dartrix"
	},

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Deep Forest Camo",
			'fr-fr': "Camouflage Sylvestre",
			'es-es': "Camuflaje Forestal",
			'it-it': "Camuffamento Forestale",
			'pt-br': "Camuflagem Florestal",
			'de-de': "Waldtarnung"
		},

		effect: {
			'en-us': "Prevent all damage done to this Pokémon by attacks from your opponent's Pokémon V and Pokémon-GX.",
			'fr-fr': "Évitez tous les dégâts infligés à ce Pokémon par les attaques des Pokémon-V et Pokémon-GX de votre adversaire.",
			'es-es': "Evita todo el daño infligido a este Pokémon por ataques de los Pokémon V y Pokémon-GX de tu rival.",
			'it-it': "Previeni tutti i danni inflitti a questo Pokémon dagli attacchi dei Pokémon-V e dei Pokémon-GX del tuo avversario.",
			'pt-br': "Previna todo o dano causado a este Pokémon por ataques dos Pokémon V e Pokémon-GX do seu oponente.",
			'de-de': "Verhindere allen Schaden, der diesem Pokémon durch Attacken von Pokémon-V und Pokémon-GX deines Gegners zugefügt wird."
		}
	}],

	attacks: [{
		name: {
			'en-us': "Splitting Arrow",
			'fr-fr': "Flèche Fendante",
			'es-es': "Flecha Dividida",
			'it-it': "Freccia Scissa",
			'pt-br': "Flechas Divididas",
			'de-de': "Spaltpfeil"
		},

		effect: {
			'en-us': "This attack also does 20 damage to 2 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			'fr-fr': "Cette attaque inflige aussi 20 dégâts à 2 des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			'es-es': "Este ataque también hace 20 puntos de daño a 2 de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			'it-it': "Questo attacco infligge anche 20 danni a due dei Pokémon nella panchina del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			'pt-br': "Este ataque também causa 20 pontos de dano a 2 dos Pokémon no Banco do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
			'de-de': "Diese Attacke fügt auch 2 Pokémon auf der Bank deines Gegners 20 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		},

		damage: 90,
		cost: ["Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,

	description: {
		'en-us': "As if wielding a bow, it launches the arrow quills hidden among the feathers of its wings. Decidueye's shots never miss."
	},

	stage: "Stage2",
	dexId: [724],

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	regulationMark: "D",

	thirdParty: {
		cardmarket: 487069
	}
}

export default card
