import { Card } from '../../../interfaces'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		en: "Stunfisk",
		fr: "Limonde",
		es: "Stunfisk",
		it: "Stunfisk",
		pt: "Stunfisk",
		de: "Flunschlik"
	},
	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		618,
	],
	hp: 110,
	types: [
		"Lightning",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Flail",
				fr: "Fléau",
				es: "Azote",
				it: "Flagello",
				pt: "Mangual",
				de: "Dreschflegel"
			},
			effect: {
				en: "This attack does 10 damage for each damage counter on this Pokémon.",
				fr: "Cette attaque inflige 10 dégâts pour chaque marqueur de dégâts placé sur ce Pokémon.",
				es: "Este ataque hace 10 puntos de daño por cada contador de daño en este Pokémon.",
				it: "Questo attacco infligge 10 danni per ogni segnalino danno presente su questo Pokémon.",
				pt: "Este ataque causa 10 pontos de dano para cada contador de dano neste Pokémon.",
				de: "Diese Attacke fügt 10 Schadenspunkte mal der Anzahl der Schadensmarken auf diesem Pokémon zu."
			},
			damage: "10×",

		},
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Thunder Blast",
				fr: "Grondement de Tonnerre",
				es: "Estallido Trueno",
				it: "Tuonobomba",
				pt: "Explosão de Trovões",
				de: "Donnerkeil"
			},
			effect: {
				en: "Discard a Lightning Energy from this Pokémon.",
				fr: "Défaussez une Énergie Lightning de ce Pokémon.",
				es: "Descarta 1 Energía Lightning de este Pokémon.",
				it: "Scarta un’Energia Lightning assegnata a questo Pokémon.",
				pt: "Descarte 1 Energia Lightning deste Pokémon.",
				de: "Lege 1 Lightning-Energie von diesem Pokémon auf deinen Ablagestapel."
			},
			damage: 50,

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
	retreat: 3,



}

export default card
