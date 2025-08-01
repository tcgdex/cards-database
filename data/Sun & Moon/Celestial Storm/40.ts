import { Card } from '../../../interfaces'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		en: "Wailord",
		fr: "Wailord",
		es: "Wailord",
		it: "Wailord",
		pt: "Wailord",
		de: "Wailord"
	},

	illustrator: "Anesaki Dynamic",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		321,
	],

	hp: 220,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Wailmer",
		fr: "Wailmer",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
				"Water",
				"Water",
				"Water",
			],
			name: {
				en: "Dwindling Wave",
				fr: "Vague Faiblissante",
				es: "Ola Menguante",
				it: "Onda Evanescente",
				pt: "Onda Decrescente",
				de: "Schwindende Welle"
			},
			effect: {
				en: "This attack does 40 less damage for each damage counter on this Pokémon.",
				fr: "Cette attaque inflige 40 dégâts de moins pour chaque marqueur de dégâts placé sur ce Pokémon.",
				es: "Este ataque hace 40 puntos de daño menos por cada contador de daño en este Pokémon.",
				it: "Questo attacco infligge 40 danni in meno per ogni segnalino danno presente su questo Pokémon.",
				pt: "Este ataque causa 40 pontos de dano a menos para cada contador de dano neste Pokémon.",
				de: "Diese Attacke fügt 40 Schadenspunkte weniger mal der Anzahl der Schadensmarken auf diesem Pokémon zu."
			},
			damage: "200-",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 4,

	thirdParty: {
		cardmarket: 361287
	}
}

export default card
