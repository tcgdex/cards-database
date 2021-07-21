import { Card } from '../../../interfaces'
import Set from '../Ultra Prism'

const card: Card = {
	name: {
		en: "Eevee",
		fr: "Évoli",
		es: "Eevee",
		it: "Eevee",
		pt: "Eevee",
		de: "Evoli"
	},
	illustrator: "Hideki Ishikawa",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		133,
	],
	hp: 60,
	types: [
		"Colorless",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Palette of Friends",
				fr: "Palette d’Amis",
				es: "Paleta de Amigos",
				it: "Amici Diversi",
				pt: "Palheta de Amigos",
				de: "Freundespalette"
			},
			effect: {
				en: "This attack does 10 damage for each different type of Pokémon on your Bench.",
				fr: "Cette attaque inflige 10 dégâts pour chaque type différent de Pokémon sur votre Banc.",
				es: "Este ataque hace 10 puntos de daño por cada tipo de Pokémon diferente en tu Banca.",
				it: "Questo attacco infligge 10 danni per ogni Pokémon di tipo diverso nella tua panchina.",
				pt: "Este ataque causa 10 pontos de dano para cada tipo diferente de Pokémon no seu Banco.",
				de: "Diese Attacke fügt 10 Schadenspunkte mal der Anzahl der verschiedenen Pokémon-Typen auf deiner Bank zu."
			},
			damage: "10×",

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
