import { Card } from '../../../interfaces'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		en: "Alolan Persian",
		fr: "Persian d’Alola",
		es: "Persian de Alola",
		it: "Persian di Alola",
		pt: "Persian de Alola",
		de: "Alola-Snobilikat"
	},
	illustrator: "Tomokazu Komiya",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		53,
	],
	hp: 90,
	types: [
		"Darkness",
	],
	evolveFrom: {
		en: "Alolan Meowth",
		fr: "Miaouss d’Alola",
	},
	stage: "Stage1",


	attacks: [
		{

			name: {
				en: "Empty Threat",
				fr: "Menace en l’Air",
				es: "Falsa Amenaza",
				it: "Minacce a Vuoto",
				pt: "Ameaça Vazia",
				de: "Leere Drohung"
			},
			effect: {
				en: "This attack does 30 less damage times the amount of Energy attached to your opponent’s Active Pokémon.",
				fr: "Cette attaque inflige 30 dégâts de moins multipliés par le nombre d’Énergies attachées au Pokémon Actif de votre adversaire.",
				es: "Este ataque hace 30 puntos de daño menos por cada Energía unida al Pokémon Activo de tu rival.",
				it: "Questo attacco infligge 30 danni in meno per ogni Energia assegnata al Pokémon attivo del tuo avversario.",
				pt: "Este ataque causa 30 pontos de dano a menos vezes a quantidade de Energia ligada ao Pokémon Ativo do seu oponente.",
				de: "Diese Attacke fügt 30 Schadenspunkte weniger mal der Anzahl der an das Aktive Pokémon deines Gegners angelegten Energien zu."
			},
			damage: "90-",

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
