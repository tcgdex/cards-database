import { Card } from '../../../interfaces'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		en: "Slowking",
		fr: "Roigada",
		es: "Slowking",
		it: "Slowking",
		pt: "Slowking",
		de: "Laschoking"
	},
	illustrator: "sowsow",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		199,
	],
	hp: 120,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Slowpoke",
		fr: "Ramoloss",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Memory Melt",
				fr: "Mémoire Déliquescente",
				es: "Disipar Memoria",
				it: "Vuoto di Memoria",
				pt: "Memória Derretida",
				de: "Gedächtnisschmelze"
			},
			effect: {
				en: "Look at your opponent’s hand and put a card you find there in the Lost Zone.",
				fr: "Regardez la main de votre adversaire et placez une carte que vous y trouvez dans la Zone Perdue.",
				es: "Mira las cartas de la mano de tu rival y pon 1 carta que encuentres entre ellas en la Zona Perdida.",
				it: "Guarda le carte in mano al tuo avversario, prendi una carta presente tra esse e mettila nell’area perduta.",
				pt: "Olhe a mão do seu oponente e coloque 1 carta que encontrar lá na Zona Perdida.",
				de: "Schau dir die Hand deines Gegners an und lege 1 Karte, die du dort findest, ins Nirgendwo."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
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
				en: "This attack does 20 more damage times the amount of Energy attached to your opponent’s Active Pokémon.",
				fr: "Cette attaque inflige 20 dégâts supplémentaires multipliés par le nombre d’Énergies attachées au Pokémon Actif de votre adversaire.",
				es: "Este ataque hace 20 puntos de daño más por cada Energía unida al Pokémon Activo de tu rival.",
				it: "Questo attacco infligge 20 danni in più per ogni Energia assegnata al Pokémon attivo del tuo avversario.",
				pt: "Este ataque causa 20 pontos de dano a mais vezes a quantidade de Energia ligada ao Pokémon Ativo do seu oponente.",
				de: "Diese Attacke fügt 20 Schadenspunkte mehr mal der Anzahl der an das Aktive Pokémon deines Gegners angelegten Energien zu."
			},
			damage: "60+",

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
