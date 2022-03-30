import { Card } from '../../../interfaces'
import Set from '../BREAKthrough'

const card: Card = {
	name: {
		en: "Cacturne",
		fr: "Cacturne",
		es: "Cacturne",
		it: "Cacturne",
		pt: "Cacturne",
		de: "Noktuska"
	},
	illustrator: "match",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		332,
	],
	hp: 100,
	types: [
		"Darkness",
	],
	evolveFrom: {
		en: "Cacnea",
		fr: "Cacnea",
		es: "Cacnea",
		it: "Cacnea",
		pt: "Cacnea",
		de: "Tuska"
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				en: "Derail",
				fr: "Déraillement",
				es: "Descarrilar",
				it: "Deragliamento",
				pt: "Descarrilhar",
				de: "Entgleisen"
			},
			effect: {
				en: "Discard a Special Energy attached to your opponent's Active Pokémon.",
				fr: "Défaussez une Énergie spéciale attachée au Pokémon Actif de votre adversaire.",
				es: "Descarta 1 Energía Especial unida al Pokémon Activo de tu rival.",
				it: "Scarta un'Energia speciale assegnata al Pokémon attivo del tuo avversario.",
				pt: "Descarte uma Energia Especial ligada ao Pokémon Ativo do seu oponente.",
				de: "Lege 1 an das Aktive Pokémon deines Gegners angelegte Spezial-Energie auf den Ablagestapel deines Gegners."
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
				en: "Pin Missile",
				fr: "Dard-Nuée",
				es: "Pin Misil",
				it: "Missilspillo",
				pt: "Míssil de Espinhos",
				de: "Nadelrakete"
			},
			effect: {
				en: "Flip 3 coins. This attack does 40 damage times the number of heads.",
				fr: "Lancez 3 pièces. Cette attaque inflige 40 dégâts multipliés par le nombre de côtés face.",
				es: "Lanza 3 monedas. Este ataque hace 40 puntos de daño por cada cara.",
				it: "Lancia tre volte una moneta. Questo attacco infligge 40 danni ogni volta che esce testa.",
				pt: "Jogue 3 moedas. Este ataque causa 40 de danos vezes o número de caras.",
				de: "Wirf 3 Münzen. Dieser Angriff fügt 40 Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "40×",

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
