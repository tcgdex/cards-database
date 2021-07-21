import { Card } from '../../../interfaces'
import Set from '../SM Black Star Promos'

const card: Card = {
	name: {
		en: "Terrakion",
		fr: "Terrakium",
		es: "Terrakion",
		it: "Terrakion",
		pt: "Terrakion",
		de: "Terrakium"
	},

	illustrator: undefined,
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		639,
	],

	hp: 140,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Cavern Counter",
				fr: "Marqueur des Grottes",
				es: "Contraataque Gruta",
				it: "Segnali Rupestri",
				pt: "Vingança Cavernosa",
				de: "Höhlenkonter"
			},
			effect: {
				en: "If all of your Benched Pokémon have at least 1 damage counter on them, this attack does 150 more damage.",
				fr: "Si tous vos Pokémon de Banc ont au moins un marqueur de dégâts, cette attaque inflige 150 dégâts supplémentaires.",
				es: "Si todos tus Pokémon en Banca tienen por lo menos 1 contador de daño sobre ellos, este ataque hace 150 puntos de daño más.",
				it: "Se tutti i tuoi Pokémon in panchina hanno almeno un segnalino danno, questo attacco infligge 150 danni in più.",
				pt: "Se todos os seus Pokémon no Banco tiverem pelo menos 1 contador de dano neles, este ataque causará 150 pontos de dano a mais.",
				de: "Wenn auf jedem Pokémon auf deiner Bank mindestens 1 Schadensmarke liegt, fügt diese Attacke 150 Schadenspunkte mehr zu."
			},
			damage: "50+",

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Boulder Crush",
				fr: "Rocher Écrasant",
				es: "Alud de Rocas",
				it: "Macignata",
				pt: "Rocha Esmagadora",
				de: "Felsenquetscher"
			},

			damage: 110,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 4
}

export default card
