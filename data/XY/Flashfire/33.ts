import { Card } from '../../../interfaces'
import Set from '../Flashfire'

const card: Card = {
	name: {
		en: "Luxio",
		fr: "Luxio",
		es: "Luxio",
		it: "Luxio",
		pt: "Luxio",
		de: "Luxio"
	},
	illustrator: "Akira Komayama",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		404,
	],
	hp: 80,
	types: [
		"Lightning",
	],
	evolveFrom: {
		en: "Shinx",
		fr: "Lixy",
		es: "Shinx",
		it: "Shinx",
		pt: "Shinx",
		de: "Sheinux"
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Bite",
				fr: "Morsure",
				es: "Mordisco",
				it: "Morso",
				pt: "Mordida",
				de: "Biss"
			},

			damage: 20,

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Electricounter",
				fr: "Contre-Élek",
				es: "Contraataque Eléctrico",
				it: "Contrelettro",
				pt: "Contador de Eletricidade",
				de: "Elektrokonter"
			},
			effect: {
				en: "This attack does 40 damage times the number of Prize cards your opponent has taken.",
				fr: "Cette attaque inflige 40 dégâts multipliés par le nombre de cartes Récompense que votre adversaire a récupérées.",
				es: "Este ataque hace 40 puntos de daño por cada carta de Premio que tu rival haya cogido.",
				it: "Questo attacco infligge 40 danni per ogni carta Premio presa dal tuo avversario.",
				pt: "Esse ataque causa 40 de danos vezes o número de cards de Prêmio recebidos por seu oponente.",
				de: "Dieser Angriff fügt 40 Schadenspunkte für jede Preiskarte zu, die dein Gegner bereits genommen hat."
			},
			damage: "40×",

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
