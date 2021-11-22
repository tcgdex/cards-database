import { Card } from '../../../interfaces'
import Set from '../Fates Collide'

const card: Card = {
	name: {
		en: "Audino EX",
		fr: "Nanméouïe EX",
		es: "Audino EX",
		it: "Audino EX",
		pt: "Audino EX",
		de: "Ohrdoch EX"
	},

	illustrator: "Ayaka Yoshida",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		531,
	],

	hp: 180,

	types: [
		"Colorless",
	],

	suffix: "EX",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Drain Slap",
				fr: "Baffe Sangsue",
				es: "Absorbebofetón",
				it: "Sberlassorbimento",
				pt: "Bofetada Drenagem",
				de: "Watschensauger"
			},
			effect: {
				en: "Heal 20 damage from this Pokémon.",
				fr: "Soignez 20 dégâts à ce Pokémon.",
				es: "Cura 20 puntos de daño a este Pokémon.",
				it: "Cura questo Pokémon da 20 danni.",
				pt: "Cure 20 de danos deste Pokémon.",
				de: "Heile 20 Schadenspunkte bei diesem Pokémon."
			},
			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Do the Wave",
				fr: "Faites la Vague",
				es: "Hacer la Ola",
				it: "Fare la Ola",
				pt: "Fazer a \"Ola\"",
				de: "Wellenreiten"
			},
			effect: {
				en: "This attack does 10 more damage for each of your Benched Pokémon.",
				fr: "Cette attaque inflige 10 dégâts supplémentaires pour chacun de vos Pokémon de Banc.",
				es: "Este ataque hace 10 puntos de daño más por cada uno de tus Pokémon en Banca.",
				it: "Questo attacco infligge 10 danni in più per ogni Pokémon nella tua panchina.",
				pt: "Este ataque causa 10 de danos adicionais para cada Pokémon no Banco do seu oponente.",
				de: "Dieser Angriff fügt 10 weitere Schadenspunkte mal der Anzahl der Pokémon auf deiner Bank zu."
			},
			damage: "60+",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 3,
	stage: "Basic"
}

export default card
