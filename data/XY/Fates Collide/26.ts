import { Card } from '../../../interfaces'
import Set from '../Fates Collide'

const card: Card = {
	name: {
		en: "M Alakazam EX",
		fr: "M-Alakazam EX",
		es: "M-Alakazam EX",
		it: "M Alakazam EX",
		pt: "M-Alakazam EX",
		de: "M-Simsala EX"
	},
	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		65,
	],
	hp: 210,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Alakazam-EX",
		fr: "Alakazam-EX",
	},
	stage: "MEGA",


	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Zen Force",
				fr: "Force Zen",
				es: "Fuerza Zen",
				it: "Forza Zen",
				pt: "Força Zen",
				de: "Zen-Kraft"
			},
			effect: {
				en: "This attack does 30 more damage for each damage counter on your opponent’s Active Pokémon.",
				fr: "Cette attaque inflige 30 dégâts supplémentaires pour chaque marqueur de dégâts placé sur le Pokémon Actif de votre adversaire.",
				es: "Este ataque hace 30 puntos de daño más por cada contador de daño en el Pokémon Activo de tu rival.",
				it: "Questo attacco infligge 30 danni in più per ogni segnalino danno presente sul Pokémon attivo del tuo avversario.",
				pt: "Este ataque causa 30 de danos adicionais para cada contador de danos no Pokémon Ativo do seu oponente.",
				de: "Dieser Angriff fügt 30 weitere Schadenspunkte für jede Schadensmarke auf dem Aktiven Pokémon deines Gegners zu."
			},
			damage: "10+",

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
