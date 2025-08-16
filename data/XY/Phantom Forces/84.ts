import { Card } from '../../../interfaces'
import Set from '../Phantom Forces'

const card: Card = {
	name: {
		en: "Loudred",
		fr: "Ramboum",
		es: "Loudred",
		it: "Loudred",
		pt: "Loudred",
		de: "Krakeelo"
	},

	illustrator: "MAHOU",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		294,
	],

	hp: 90,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Whismur",
		fr: "Chuchmur",
		es: "Whismur",
		it: "Whismur",
		pt: "Whismur",
		de: "Flurmel"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Pound",
				fr: "Écras'Face",
				es: "Destructor",
				it: "Botta",
				pt: "Pancada",
				de: "Pfund"
			},

			damage: 30,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Energy Press",
				fr: "Pression Énergétique",
				es: "Presión Energética",
				it: "Energipressa",
				pt: "Aperto de Energia",
				de: "Energiedruck"
			},
			effect: {
				en: "This attack does 30 more damage for each Energy attached to your opponent's Active Pokémon.",
				fr: "Cette attaque inflige 30 dégâts supplémentaires pour chaque Énergie attachée au Pokémon Actif de votre adversaire.",
				es: "Este ataque hace 30 puntos de daño más por cada Energía unida al Pokémon Activo de tu rival.",
				it: "Questo attacco infligge 30 danni in più per ogni Energia assegnata al Pokémon attivo del tuo avversario.",
				pt: "Esse ataque causa 30 de danos adicionais para cada Energia ligada ao Pokémon Ativo do seu oponente.",
				de: "Dieser Angriff fügt 30 weitere Schadenspunkte für jede Energie zu, die an das Aktive Pokémon deines Gegners angelegt ist."
			},
			damage: "30+",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 281890,
		tcgplayer: 94652
	}
}

export default card
