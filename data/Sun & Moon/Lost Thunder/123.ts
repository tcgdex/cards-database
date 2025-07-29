import { Card } from '../../../interfaces'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		en: "Alolan Dugtrio",
		fr: "Triopikeur d’Alola",
		es: "Dugtrio de Alola",
		it: "Dugtrio di Alola",
		pt: "Dugtrio de Alola",
		de: "Alola-Digdri"
	},

	illustrator: "Yuka Morii",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		51,
	],

	hp: 90,

	types: [
		"Metal",
	],

	evolveFrom: {
		en: "Alolan Diglett",
		fr: "Taupiqueur d’Alola",
	},

	stage: "Stage1",

	attacks: [
		{

			name: {
				en: "Digging Dash",
				fr: "Cours et Creuse",
				es: "Choque Excavación",
				it: "Corsa Escavatrice",
				pt: "Arremetida Subterrânea",
				de: "Schaufellauf"
			},
			effect: {
				en: "This attack’s damage isn’t affected by Weakness or Resistance.",
				fr: "Les dégâts de cette attaque ne sont pas affectés par la Faiblesse ou la Résistance.",
				es: "El daño de este ataque no se ve afectado por Debilidad o Resistencia.",
				it: "I danni di questo attacco non sono influenzati dalla debolezza o dalla resistenza.",
				pt: "O dano deste ataque não é afetado por Fraqueza ou Resistência.",
				de: "Der Schaden dieser Attacke wird durch Schwäche und Resistenz nicht verändert."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 365760
	}
}

export default card
