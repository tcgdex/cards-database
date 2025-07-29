import { Card } from '../../../interfaces'
import Set from '../Primal Clash'

const card: Card = {
	name: {
		en: "Gorebyss",
		fr: "Rosabyss",
		es: "Gorebyss",
		it: "Gorebyss",
		pt: "Gorebyss",
		de: "Saganabyss"
	},

	illustrator: "Miki Tanaka",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		368,
	],

	hp: 80,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Clamperl",
		fr: "Coquiperl",
		es: "Clamperl",
		it: "Clamperl",
		pt: "Clamperl",
		de: "Perlu"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Captivate",
				fr: "Séduction",
				es: "Seducción",
				it: "Incanto",
				pt: "Cativar",
				de: "Liebreiz"
			},
			effect: {
				en: "Switch 1 of your opponent's Benched Pokémon with his or her Active Pokémon.",
				fr: "Échangez l'un des Pokémon de Banc de votre adversaire avec son Pokémon Actif.",
				es: "Cambia 1 de los Pokémon en Banca de tu rival por su Pokémon Activo.",
				it: "Scambia uno dei Pokémon nella panchina del tuo avversario con il suo Pokémon attivo.",
				pt: "Troque 1 dos Pokémon no Banco do seu oponente pelo Pokémon Ativo desse oponente.",
				de: "Tausche 1 Pokémon auf der Bank deines Gegners gegen das Aktive Pokémon deines Gegners aus."
			},

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Psychic",
				fr: "Psyko",
				es: "Psíquico",
				it: "Psichico",
				pt: "Psíquico",
				de: "Psychokinese"
			},
			effect: {
				en: "This attack does 10 more damage for each Energy attached to your opponent's Active Pokémon.",
				fr: "Cette attaque inflige 10 dégâts supplémentaires pour chaque Énergie attachée au Pokémon Actif de votre adversaire.",
				es: "Este ataque hace 10 puntos de daño más por cada Energía unida al Pokémon Activo de tu rival.",
				it: "Questo attacco infligge 10 danni in più per ogni Energia assegnata al Pokémon attivo del tuo avversario.",
				pt: "Esse ataque causa 10 de danos adicionais para cada Energia ligada ao Pokémon Ativo do seu oponente.",
				de: "Dieser Angriff fügt 10 weitere Schadenspunkte für jede Energie zu, die an das Aktive Pokémon deines Gegners angelegt ist."
			},
			damage: "30+",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 0,

	thirdParty: {
		cardmarket: 273582
	}
}

export default card
