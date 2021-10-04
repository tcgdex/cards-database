import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		en: "Whiscash",
		fr: "Barbicha",
		es: "Whiscash",
		it: "Whiscash",
		pt: "Whiscash",
		de: "Welsar"
	},

	illustrator: "kawayoo",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	evolveFrom: {
		en: "Barboach",
		fr: "Barloche",
		es: "Barboach",
		it: "Barboach",
		pt: "Barboach",
		de: "Schmerbe"
	},

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Submerge",
				fr: "Submersion",
				es: "Hundir",
				it: "Immergersi",
				pt: "Submergir",
				de: "Untertauchen"
			},
			effect: {
				en: "As long as this Pokémon is on your Bench, prevent all damage done to this Pokémon by attacks (both yours and your opponent’s).",
				fr: "Tant que ce Pokémon est sur votre Banc, évitez tous les dégâts infligés à ce Pokémon par des attaques (les vôtres et celles de votre adversaire).",
				es: "Mientras este Pokémon esté en tu Banca, evita todo el daño infligido a este Pokémon por ataques (tanto tuyos como de tu rival).",
				it: "Fintanto che questo Pokémon è nella tua panchina, previeni tutti i danni inflitti a questo Pokémon dagli attacchi, sia tuoi che del tuo avversario.",
				pt: "Desde que este Pokémon esteja em seu Banco, previne todos os danos causados a este Pokémon por ataques (seus e do seu oponente).",
				de: "Solang sich dieses Pokémon auf deiner Bank befindet, verhindere allen Schaden, der diesem Pokémon durch Angriffe (deine und die deines Gegners) zugefügt wird."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fighting",
				"Fighting",
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
				en: "This attack also does 20 damage to each of your Benched Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Cette attaque inflige aussi 20 dégâts à chacun de vos Pokémon de Banc. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				es: "Este ataque también hace 20 puntos de daño a cada uno de tus Pokémon en Banca. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
				it: "Questo attacco infligge anche 20 danni a ciascuno dei Pokémon nella tua panchina. Non applicare debolezza e resistenza ai Pokémon in panchina.",
				pt: "Este ataque também causa 20 pontos de dano a cada um dos seus Pokémon no Banco (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
				de: "Diese Attacke fügt auch jedem Pokémon auf deiner Bank 20 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},
			damage: 140,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 3,
	hp: 140,
	types: ["Fighting"],
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	stage: "Stage1",

	description: {
		en: "It makes its nest at the bottom of swamps. It will eat anything—if it is alive, Whiscash will eat it."
	}
}

export default card
