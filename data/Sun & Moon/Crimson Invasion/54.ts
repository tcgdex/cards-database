import { Card } from '../../../interfaces'
import Set from '../Crimson Invasion'

const card: Card = {
	name: {
		en: "Gastrodon",
		fr: "Tritosor",
		es: "Gastrodon",
		it: "Gastrodon",
		pt: "Gastrodon",
		de: "Gastrodon"
	},

	illustrator: "TOKIYA",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		423,
	],

	hp: 120,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Shellos",
		fr: "Sancoki",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Eerie Fluid",
				fr: "Fluide Inquiétant",
				es: "Baba Sobrecogedora",
				it: "Fluido Inquietante",
				pt: "Fluido Sinistro",
				de: "Unheimliche Flüssigkeit"
			},
			effect: {
				en: "Your opponent’s Active Pokémon is now Confused.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Confus.",
				es: "El Pokémon Activo de tu rival pasa a estar Confundido.",
				it: "Il Pokémon attivo del tuo avversario viene confuso.",
				pt: "O Pokémon Ativo do seu oponente agora está Confuso.",
				de: "Das Aktive Pokémon deines Gegners ist jetzt verwirrt."
			},
			damage: 30,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Earthquake",
				fr: "Séisme",
				es: "Terremoto",
				it: "Terremoto",
				pt: "Terremoto",
				de: "Erdbeben"
			},
			effect: {
				en: "This attack does 10 damage to each of your Benched Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Cette attaque inflige 10 dégâts à chacun de vos Pokémon de Banc. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				es: "Este ataque hace 10 puntos de daño a cada uno de tus Pokémon en Banca. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
				it: "Questo attacco infligge 10 danni a ciascuno dei tuoi Pokémon in panchina. Ricorda che non puoi applicare debolezza e resistenza ai Pokémon in panchina.",
				pt: "Este ataque causa 10 pontos de dano a cada um dos seus Pokémon no Banco (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
				de: "Diese Attacke fügt jedem Pokémon auf deiner Bank 10 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},
			damage: 120,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 3,

	thirdParty: {
		cardmarket: 311904
	}
}

export default card
