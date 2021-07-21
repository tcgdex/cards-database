import { Card } from '../../../interfaces'
import Set from '../Ultra Prism'

const card: Card = {
	name: {
		en: "Cresselia",
		fr: "Cresselia",
		es: "Cresselia",
		it: "Cresselia",
		pt: "Cresselia",
		de: "Cresselia"
	},
	illustrator: "chibi",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		488,
	],
	hp: 120,
	types: [
		"Psychic",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Lunar Payback",
				fr: "Vengeance Lunaire",
				es: "Venganza Lunar",
				it: "Rivincita Lunare",
				pt: "Retaliação da Lua",
				de: "Lunar-Rache"
			},
			effect: {
				en: "Discard an Energy from this Pokémon. If you do, switch all damage counters on this Pokémon with those on your opponent’s Active Pokémon.",
				fr: "Défaussez une Énergie de ce Pokémon. Dans ce cas, échangez tous les marqueurs de dégâts de ce Pokémon avec ceux du Pokémon Actif de votre adversaire.",
				es: "Descarta 1 Energía de este Pokémon. Si lo haces, cambia todos los contadores de daño de este Pokémon por los del Pokémon Activo de tu rival.",
				it: "Scarta un’Energia assegnata a questo Pokémon. Se lo fai, scambia tutti i segnalini danno presenti su questo Pokémon con quelli sul Pokémon attivo del tuo avversario.",
				pt: "Descarte 1 Energia deste Pokémon. Se fizer isto, troque todos os contadores de dano neste Pokémon por aqueles no Pokémon Ativo do seu oponente.",
				de: "Lege 1 Energie von diesem Pokémon auf deinen Ablagestapel. Wenn du das machst, tausche alle Schadensmarken auf diesem Pokémon gegen jene auf dem Aktiven Pokémon deines Gegners aus."
			},

		},
		{
			cost: [
				"Psychic",
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
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
