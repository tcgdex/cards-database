import { Card } from '../../../interfaces'
import Set from '../Crimson Invasion'

const card: Card = {
	name: {
		en: "Aggron",
		fr: "Galeking",
		es: "Aggron",
		it: "Aggron",
		pt: "Aggron",
		de: "Stolloss"
	},

	illustrator: "Yoshinobu Saito",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		306,
	],

	hp: 170,

	types: [
		"Metal",
	],

	evolveFrom: {
		en: "Lairon",
		fr: "Galegon",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Revenge Cannon",
				fr: "Canon Talion",
				es: "Cañón Venganza",
				it: "Cannonvendetta",
				pt: "Canhão da Vingança",
				de: "Konterkanone"
			},
			effect: {
				en: "This attack does 10 more damage for each damage counter on all of your Benched Pokémon.",
				fr: "Cette attaque inflige 10 dégâts supplémentaires pour chaque marqueur de dégâts placé sur vos Pokémon de Banc.",
				es: "Este ataque hace 10 puntos de daño más por cada contador de daño en todos tus Pokémon en Banca.",
				it: "Questo attacco infligge 10 danni in più per ogni segnalino danno presente sui tuoi Pokémon in panchina.",
				pt: "Este ataque causa 10 pontos de dano a mais para cada contador de dano em todos os seus Pokémon no Banco.",
				de: "Diese Attacke fügt 10 Schadenspunkte mehr mal der Anzahl der Schadensmarken auf allen Pokémon auf deiner Bank zu."
			},
			damage: "10+",

		},
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Buster Swing",
				fr: "Repoussoir",
				es: "Golpe Destructor",
				it: "Colpaccio",
				pt: "Gingado",
				de: "Widerstandsbrecher"
			},
			effect: {
				en: "This attack’s damage isn’t affected by Resistance.",
				fr: "Les dégâts de cette attaque ne sont pas affectés par la Résistance.",
				es: "El daño de este ataque no se ve afectado por Resistencia.",
				it: "I danni di questo attacco non sono influenzati dalla resistenza.",
				pt: "O dano deste ataque não é afetado por Resistência.",
				de: "Der Schaden dieser Attacke wird durch Resistenz nicht verändert."
			},
			damage: 120,

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

	retreat: 4,

	thirdParty: {
		cardmarket: 311915
	}
}

export default card
