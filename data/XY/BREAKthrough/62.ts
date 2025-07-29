import { Card } from '../../../interfaces'
import Set from '../BREAKthrough'

const card: Card = {
	name: {
		en: "Mewtwo EX",
		fr: "Mewtwo EX",
		es: "Mewtwo EX",
		it: "Mewtwo EX",
		pt: "Mewtwo EX",
		de: "Mewtu EX"
	},

	illustrator: "PLANETA",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		150,
	],

	hp: 170,

	types: [
		"Psychic",
	],

	suffix: "EX",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Shatter Shot",
				fr: "Coup Fracassant",
				es: "Proyectil Estallido",
				it: "Frantumacolpo",
				pt: "Tiro de Estilhaçar",
				de: "Splitterschuss"
			},
			effect: {
				en: "This attack does 30 damage times the amount of Psychic Energy attached to this Pokémon.",
				fr: "Cette attaque inflige 30 dégâts multipliés par le nombre d'Énergies Psychic attachées à ce Pokémon.",
				es: "Este ataque hace 30 puntos de daño por cada Energía Psychic unida a este Pokémon.",
				it: "Questo attacco infligge 30 danni per ogni Energia Psychic assegnata a questo Pokémon.",
				pt: "Este ataque causa 30 de danos vezes a quantidade de Energia Psychic ligada a este Pokémon.",
				de: "Dieser Angriff fügt 30 Schadenspunkte mal der Anzahl der an dieses Pokémon angelegten Psychic-Energien zu."
			},
			damage: "30×",

		},
		{
			cost: [
				"Psychic",
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Damage Change",
				fr: "Change Dégâts",
				es: "Cambio de Daño",
				it: "Barattadanni",
				pt: "Troca de Danos",
				de: "Schadenswechsel"
			},
			effect: {
				en: "Switch all damage counters on this Pokémon with those on your opponent's Active Pokémon.",
				fr: "Échangez tous les marqueurs de dégâts de ce Pokémon avec ceux du Pokémon Actif de votre adversaire.",
				es: "Cambia todos los contadores de daño de este Pokémon por los del Pokémon Activo de tu rival.",
				it: "Scambia tutti i segnalini danno su questo Pokémon con quelli sul Pokémon attivo del tuo avversario.",
				pt: "Troque todos os contadores de dano deste Pokémon com os do Pokémon Ativo do seu oponente.",
				de: "Tausche alle Schadensmarken auf diesem Pokémon mit denen auf dem Aktiven Pokémon deines Gegners aus."
			},

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,
	stage: "Basic",

	thirdParty: {
		cardmarket: 286307
	}
}

export default card
