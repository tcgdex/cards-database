import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	dexId: [724],

	name: {
		en: "Decidueye",
		fr: "Archéduc",
		es: "Decidueye",
		it: "Decidueye",
		pt: "Decidueye",
		de: "Silvarro"
	},

	illustrator: "Ryota Murayama",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,
	hp: 140,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Dartrix",
		fr: "Efflèche",
		es: "Dartrix",
		it: "Dartrix",
		pt: "Dartrix",
		de: "Arboretoss"
	},

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Deep Forest Camo",
				fr: "Camouflage Sylvestre",
				es: "Camuflaje Forestal",
				it: "Camuffamento Forestale",
				pt: "Camuflagem Florestal",
				de: "Waldtarnung"
			},
			effect: {
				en: "Prevent all damage done to this Pokémon by attacks from your opponent's Pokémon V and Pokémon-GX.",
				fr: "Évitez tous les dégâts infligés à ce Pokémon par les attaques des Pokémon-V et Pokémon-GX de votre adversaire.",
				es: "Evita todo el daño infligido a este Pokémon por ataques de los Pokémon V y Pokémon-GX de tu rival.",
				it: "Previeni tutti i danni inflitti a questo Pokémon dagli attacchi dei Pokémon-V e dei Pokémon-GX del tuo avversario.",
				pt: "Previna todo o dano causado a este Pokémon por ataques dos Pokémon V e Pokémon-GX do seu oponente.",
				de: "Verhindere allen Schaden, der diesem Pokémon durch Attacken von Pokémon-V und Pokémon-GX deines Gegners zugefügt wird."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Splitting Arrow",
				fr: "Flèche Fendante",
				es: "Flecha Dividida",
				it: "Freccia Scissa",
				pt: "Flechas Divididas",
				de: "Spaltpfeil"
			},
			effect: {
				en: "This attack also does 20 damage to 2 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Cette attaque inflige aussi 20 dégâts à 2 des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				es: "Este ataque también hace 20 puntos de daño a 2 de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
				it: "Questo attacco infligge anche 20 danni a due dei Pokémon nella panchina del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
				pt: "Este ataque também causa 20 pontos de dano a 2 dos Pokémon no Banco do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
				de: "Diese Attacke fügt auch 2 Pokémon auf der Bank deines Gegners 20 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},
			damage: 90,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 2,
	regulationMark: "D",

	variants: {
		normal: false,
		reverse: true,
		holo: true,
		firstEdition: false
	},

	stage: "Stage2",

	description: {
		en: "As if wielding a bow, it launches the arrow quills hidden among the feathers of its wings. Decidueye's shots never miss."
	},

	thirdParty: {
		cardmarket: 482939,
		tcgplayer: 219226
	}
}

export default card
