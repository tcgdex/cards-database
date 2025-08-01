import { Card } from '../../../interfaces'
import Set from '../Ancient Origins'

const card: Card = {
	name: {
		en: "Vileplume",
		fr: "Rafflesia",
		es: "Vileplume",
		it: "Vileplume",
		pt: "Vileplume",
		de: "Giflor"
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
		en: "Gloom",
		fr: "Ortide",
		es: "Gloom",
		it: "Gloom",
		pt: "Gloom",
		de: "Duflor"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Irritating Pollen",
				fr: "Pollen Irritant",
				es: "Polen Irritante",
				it: "Irritapolline",
				pt: "Pólen Irritante",
				de: "Irritierender Pollen"
			},
			effect: {
				en: "Each player can't play any Item cards from his or her hand.",
				fr: "Aucun joueur ne peut jouer de cartes Objet de sa main.",
				es: "Los jugadores no pueden jugar ninguna carta de Objeto de su mano.",
				it: "Nessun giocatore può giocare carte Strumento dalla propria mano.",
				pt: "Nenhum jogador pode jogar cards de Item da própria mão.",
				de: "Kein Spieler darf Itemkarten von seiner Hand spielen."
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
				en: "Solar Beam",
				fr: "Lance-Soleil",
				es: "Rayo Solar",
				it: "Solarraggio",
				pt: "Raio Solar",
				de: "Solarstrahl"
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

	thirdParty: {
		cardmarket: 284184
	}
}

export default card
