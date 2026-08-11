import { Card } from 'models/database/card'
import Set from '../Burning Shadows'

const card: Card = {
	name: {
		'en-us': "Bruxish",
		'fr-fr': "Denticrisse",
		'es-es': "Bruxish",
		'it-it': "Bruxish",
		'pt-br': "Bruxish",
		'de-de': "Knirfish"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		779,
	],

	hp: 100,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Gnash Teeth",
				'fr-fr': "Grincedent",
				'es-es': "Dientes Rechinantes",
				'it-it': "Sfregadenti",
				'pt-br': "Ranger Dentes",
				'de-de': "Knirschzahn"
			},
			effect: {
				'en-us': "Your opponent’s Active Pokémon is now Confused.",
				'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Confus.",
				'es-es': "El Pokémon Activo de tu rival pasa a estar Confundido.",
				'it-it': "Il Pokémon attivo del tuo avversario viene confuso.",
				'pt-br': "O Pokémon Ativo do seu oponente agora está Confuso.",
				'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verwirrt."
			},

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Synchronoise",
				'fr-fr': "Synchropeine",
				'es-es': "Sincrorruido",
				'it-it': "Sincrumore",
				'pt-br': "Barulho Sincronizado",
				'de-de': "Synchrolärm"
			},
			effect: {
				'en-us': "This attack does 20 damage to each of your opponent’s Benched Pokémon that shares a type with your opponent’s Active Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Cette attaque inflige 20 dégâts à chaque Pokémon de Banc de votre adversaire ayant un type en commun avec le Pokémon Actif de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				'es-es': "Este ataque hace 20 puntos de daño a cada uno de los Pokémon en Banca de tu rival que tenga un mismo tipo que el Pokémon Activo de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
				'it-it': "Questo attacco infligge 20 danni a ciascun Pokémon nella panchina del tuo avversario che condivide un tipo con il Pokémon attivo del tuo avversario. Ricorda che non puoi applicare debolezza e resistenza ai Pokémon in panchina.",
				'pt-br': "Este ataque causa 20 pontos de dano a cada um dos Pokémon no Banco do seu oponente que compartilha um tipo com o Pokémon Ativo do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
				'de-de': "Diese Attacke fügt jedem Pokémon auf der Bank deines Gegners, das denselben Typ wie das Aktive Pokémon deines Gegners hat, 20 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "When it unleashes its psychic power from the protuberance on its head, the grating sound of grinding teeth echoes through the area.",
	},

	thirdParty: {
		cardmarket: 299443,
		tcgplayer: 138518
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	]
}

export default card
