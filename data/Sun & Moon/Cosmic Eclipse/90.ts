import { Card } from '../../../interfaces'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		en: "Golurk",
		fr: "Golemastoc",
		es: "Golurk",
		it: "Golurk",
		pt: "Golurk",
		de: "Golgantes"
	},
	illustrator: "Ayaka Yoshida",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		623,
	],
	hp: 140,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Golett",
		fr: "Gringolem",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Rock Tumble",
				fr: "Roule-Pierre",
				es: "Avalancha de Rocas",
				it: "Tiramassi",
				pt: "Desabamento de Pedras",
				de: "Rollende Felsen"
			},
			effect: {
				en: "This attack’s damage isn’t affected by Resistance.",
				fr: "Les dégâts de cette attaque ne sont pas affectés par la Résistance.",
				es: "El daño de este ataque no se ve afectado por Resistencia.",
				it: "I danni di questo attacco non sono influenzati dalla resistenza.",
				pt: "O dano deste ataque não é afetado por Resistência.",
				de: "Der Schaden dieser Attacke wird durch Resistenz nicht verändert."
			},
			damage: 40,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Fist of Antiquity",
				fr: "Poing d’Antiquité",
				es: "Puño de Antigüedad",
				it: "Pugno dell’Antichità",
				pt: "Punho da Antiguidade",
				de: "Faust des Altertums"
			},
			effect: {
				en: "If you have any Supporter cards in your discard pile, this attack does nothing.",
				fr: "Si vous avez une carte Supporter dans votre pile de défausse, cette attaque ne fait rien.",
				es: "Si tienes alguna carta de Partidario en tu pila de descartes, este ataque no hace nada.",
				it: "Se hai delle carte Aiuto nella tua pila degli scarti, questo attacco non ha effetto.",
				pt: "Se você tiver alguma carta de Apoiador na sua pilha de descarte, este ataque não fará nada.",
				de: "Wenn du mindestens 1 Unterstützerkarte in deinem Ablagestapel hast, hat diese Attacke keine Auswirkungen."
			},
			damage: 160,

		},
	],
	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],
	retreat: 4,



}

export default card
