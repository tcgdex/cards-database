import { Card } from 'models/database/card'
import Set from '../Rebel Clash'

const card: Card = {
	dexId: [340],

	name: {
		'en-us': "Whiscash",
		'fr-fr': "Barbicha",
		'es-es': "Whiscash",
		'it-it': "Whiscash",
		'pt-br': "Whiscash",
		'de-de': "Welsar"
	},

	illustrator: "kawayoo",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	evolveFrom: {
		'en-us': "Barboach",
		'fr-fr': "Barloche",
		'es-es': "Barboach",
		'it-it': "Barboach",
		'pt-br': "Barboach",
		'de-de': "Schmerbe"
	},

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Submerge",
				'fr-fr': "Submersion",
				'es-es': "Hundir",
				'it-it': "Immergersi",
				'pt-br': "Submergir",
				'de-de': "Untertauchen"
			},
			effect: {
				'en-us': "As long as this Pokémon is on your Bench, prevent all damage done to this Pokémon by attacks (both yours and your opponent's).",
				'fr-fr': "Tant que ce Pokémon est sur votre Banc, évitez tous les dégâts infligés à ce Pokémon par des attaques (les vôtres et celles de votre adversaire).",
				'es-es': "Mientras este Pokémon esté en tu Banca, evita todo el daño infligido a este Pokémon por ataques (tanto tuyos como de tu rival).",
				'it-it': "Fintanto che questo Pokémon è nella tua panchina, previeni tutti i danni inflitti a questo Pokémon dagli attacchi, sia tuoi che del tuo avversario.",
				'pt-br': "Desde que este Pokémon esteja em seu Banco, previne todos os danos causados a este Pokémon por ataques (seus e do seu oponente).",
				'de-de': "Solang sich dieses Pokémon auf deiner Bank befindet, verhindere allen Schaden, der diesem Pokémon durch Angriffe (deine und die deines Gegners) zugefügt wird."
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
				'en-us': "Earthquake",
				'fr-fr': "Séisme",
				'es-es': "Terremoto",
				'it-it': "Terremoto",
				'pt-br': "Terremoto",
				'de-de': "Erdbeben"
			},
			effect: {
				'en-us': "This attack also does 20 damage to each of your Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Cette attaque inflige aussi 20 dégâts à chacun de vos Pokémon de Banc. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				'es-es': "Este ataque también hace 20 puntos de daño a cada uno de tus Pokémon en Banca. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
				'it-it': "Questo attacco infligge anche 20 danni a ciascuno dei Pokémon nella tua panchina. Non applicare debolezza e resistenza ai Pokémon in panchina.",
				'pt-br': "Este ataque também causa 20 pontos de dano a cada um dos seus Pokémon no Banco (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
				'de-de': "Diese Attacke fügt auch jedem Pokémon auf deiner Bank 20 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
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


	stage: "Stage1",

	description: {
		'en-us': "It makes its nest at the bottom of swamps. It will eat anything—if it is alive, Whiscash will eat it."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 457913,
				tcgplayer: 213188
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 457913,
				tcgplayer: 213188
			}
		},
	],
}

export default card
