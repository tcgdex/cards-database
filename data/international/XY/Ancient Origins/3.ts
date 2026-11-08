import { Card } from 'models/database/card'
import Set from '../Ancient Origins'

const card: Card = {
	name: {
		'en-us': "Vileplume",
		'fr-fr': "Rafflesia",
		'es-es': "Vileplume",
		'it-it': "Vileplume",
		'pt-br': "Vileplume",
		'de-de': "Giflor"
	},

	illustrator: "Midori Harada",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		45,
	],

	hp: 130,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Gloom",
		'fr-fr': "Ortide",
		'es-es': "Gloom",
		'it-it': "Gloom",
		'pt-br': "Gloom",
		'de-de': "Duflor"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Irritating Pollen",
				'fr-fr': "Pollen Irritant",
				'es-es': "Polen Irritante",
				'it-it': "Irritapolline",
				'pt-br': "Pólen Irritante",
				'de-de': "Irritierender Pollen"
			},
			effect: {
				'en-us': "Each player can't play any Item cards from his or her hand.",
				'fr-fr': "Aucun joueur ne peut jouer de cartes Objet de sa main.",
				'es-es': "Los jugadores no pueden jugar ninguna carta de Objeto de su mano.",
				'it-it': "Nessun giocatore può giocare carte Strumento dalla propria mano.",
				'pt-br': "Nenhum jogador pode jogar cards de Item da própria mão.",
				'de-de': "Kein Spieler darf Itemkarten von seiner Hand spielen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Solar Beam",
				'fr-fr': "Lance-Soleil",
				'es-es': "Rayo Solar",
				'it-it': "Solarraggio",
				'pt-br': "Raio Solar",
				'de-de': "Solarstrahl"
			},

			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		'en-us': "It has the world's largest petals. With every step, the petals shake out heavy clouds of toxic pollen.",
	},

	thirdParty: {
		cardmarket: 284184,
		tcgplayer: 100615
	}
}

export default card
