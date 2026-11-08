import { Card } from 'models/database/card'
import Set from '../Noble Victories'

const card: Card = {
	name: {
		'en-us': "Archeops",
		'fr-fr': "Aéroptéryx",
		'es-es': "Archeops",
		'it-it': "Archeops",
		'pt-br': "Archeops",
		'de-de': "Aeropteryx"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		567,
	],

	hp: 130,

	types: [
		"Fighting",
	],

	evolveFrom: {
		'en-us': "Archen",
		'fr-fr': "Arkéapti",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Ancient Power",
				'fr-fr': "Pouv.Antique",
				'es-es': "Poder Pasado",
				'it-it': "Forzantica",
				'pt-br': "Poder Ancestral",
				'de-de': "Antik-Kraft"
			},
			effect: {
				'en-us': "Each player can’t play any Pokémon from his or her hand to evolve his or her Pokémon.",
				'fr-fr': "Aucun joueur ne peut jouer de Pokémon de sa main pour faire évoluer ses Pokémon.",
				'es-es': "Los jugadores no pueden jugar ningún Pokémon de su mano para evolucionar a sus Pokémon.",
				'it-it': "Nessun giocatore può giocare dei Pokémon dalla propria mano per far evolvere altri Pokémon.",
				'pt-br': "Nenhum jogador pode jogar nenhum Pokémon de sua própria mão para evoluir o Pokémon desse jogador.",
				'de-de': "Kein Spieler darf Pokémon von seiner Hand spielen, um die eigenen Pokémon zu entwickeln."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Rock Slide",
				'fr-fr': "Éboulement",
			},
			effect: {
				'en-us': "Does 10 damage to 2 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Inflige 10 dégâts à 2 des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
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

	retreat: 2,

	description: {
		'en-us': "They are intelligent and will cooperate to catch prey. From the ground, they use a running start to take flight.",
	},

	thirdParty: {
		cardmarket: 280190,
		tcgplayer: 83609
	}
}

export default card
