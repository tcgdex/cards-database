import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	name: {
		en: "Klinklang",
		fr: "Cliticlic",
		es: "Klinklang",
		it: "Klinklang",
		pt: "Klinklang",
		de: "Klikdiklak"
	},

	illustrator: "Naoki Saito",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 150,

	types: [
		"Metal",
	],

	evolveFrom: {
		en: "Klang",
		fr: "Clic",
		es: "Klang",
		it: "Klang",
		pt: "Klang",
		de: "Kliklak"
	},

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Beam",
				fr: "Rayon",
				es: "Transmisión",
				it: "Raggio",
				pt: "Feixe",
				de: "Strahl"
			},

			damage: 60,

		},
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Clockwork",
				fr: "Mécanisme",
				es: "Mecanismo de Relojería",
				it: "Ingranaggi",
				pt: "Mecanismo",
				de: "Uhrwerk"
			},
			effect: {
				en: "If you don't have Klink and Klang on your Bench, this attack does nothing.",
				fr: "Si vous n'avez pas Tic et Clic sur votre Banc, cette attaque ne fait rien.",
				es: "Si no tienes a Klink y Klang en tu Banca, este ataque no hace nada.",
				it: "Se non hai Klink e Klang nella tua panchina, questo attacco non ha effetto.",
				pt: "Se Klink e Klang não estiverem no seu Banco, este ataque não fará nada.",
				de: "Wenn sich Klikk und Kliklak nicht auf deiner Bank befinden, hat diese Attacke keine Auswirkungen."
			},
			damage: 200,

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
			type: "Grass",
			value: "-30"
		},
	],

	retreat: 3,
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	stage: "Stage2",

	description: {
		en: "From its spikes, it launches powerful blasts of electricity. Its red core contains an enormous amount of energy."
	}
}

export default card
