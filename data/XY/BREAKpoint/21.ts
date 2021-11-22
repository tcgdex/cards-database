import { Card } from '../../../interfaces'
import Set from '../BREAKpoint'

const card: Card = {
	name: {
		en: "Slowking",
		fr: "Roigada",
		es: "Slowking",
		it: "Slowking",
		pt: "Slowking",
		de: "Laschoking"
	},
	illustrator: "Aya Kusube",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		199,
	],
	hp: 100,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Slowpoke",
		fr: "Ramoloss",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Royal Flash",
				fr: "Flash Royal",
				es: "Destello Regio",
				it: "Bagliore Reale",
				pt: "Lampejo Real",
				de: "Monarch-Flimmern"
			},
			effect: {
				en: "Once during your turn (before your attack), you may flip a coin. If heads, move an Energy from your opponent's Active Pokémon to 1 of his or her Benched Pokémon.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez lancer une pièce. Si c'est face, déplacez une Énergie attachée au Pokémon Actif de votre adversaire vers l'un de ses Pokémon de Banc.",
				es: "Una vez durante tu turno (antes de tu ataque), puedes lanzar 1 moneda. Si sale cara, mueve 1 Energía del Pokémon Activo de tu rival a 1 de sus Pokémon en Banca.",
				it: "Una sola volta durante il tuo turno, prima di attaccare, puoi lanciare una moneta. Se esce testa, sposta un'Energia dal Pokémon attivo del tuo avversario a uno dei suoi Pokémon in panchina.",
				pt: "Uma vez durante sua vez de jogar (antes de atacar) você pode jogar uma moeda. Se sair cara, mova uma Energia do Pokémon Ativo do seu adversário para 1 dos Pokémon no Banco dele(a).",
				de: "Einmal während deines Zuges (vor deinem Angriff) kannst du 1 Münze werfen. Verschiebe bei „Kopf“ 1 an das Aktive Pokémon deines Gegners angelegte Energie auf 1 Pokémon auf der Bank deines Gegners."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Psych Up",
				fr: "Boost",
				es: "Más Psique",
				it: "Psicamisù",
				pt: "Carga Psíquica",
				de: "Psycho-Plus"
			},
			effect: {
				en: "During your next turn, this Pokémon's Psych Up attack does 40 more damage (before applying Weakness and Resistance).",
				fr: "Pendant votre prochain tour, l'attaque Boost de ce Pokémon inflige 40 dégâts supplémentaires (avant application de la Faiblesse et de la Résistance).",
				es: "Durante tu próximo turno, el ataque Más Psique de este Pokémon hace 40 puntos de daño más (antes de aplicar Debilidad y Resistencia).",
				it: "Durante il tuo prossimo turno, l'attacco Psicamisù di questo Pokémon infligge 40 danni in più, prima di aver applicato debolezza e resistenza.",
				pt: "Durante a sua próxima vez de jogar, o ataque de Carga Psíquica deste Pokémon causará 40 de danos adicionais (antes da aplicação de Fraqueza e Resistência).",
				de: "Während deines nächsten Zuges fügt die Attacke Psycho-Plus dieses Pokémon 40 weitere Schadenspunkte zu (bevor Schwäche und Resistenz verrechnet werden)."
			},
			damage: 40,

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
