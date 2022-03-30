import { Card } from '../../../interfaces'
import Set from '../Primal Clash'

const card: Card = {
	name: {
		en: "Volbeat",
		fr: "Muciole",
		es: "Volbeat",
		it: "Volbeat",
		pt: "Volbeat",
		de: "Volbeat"
	},
	illustrator: "Tomokazu Komiya",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		313,
	],
	hp: 70,
	types: [
		"Grass",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Acrobatics",
				fr: "Acrobatie",
				es: "Acróbata",
				it: "Acrobazia",
				pt: "Acrobático",
				de: "Akrobatik"
			},
			effect: {
				en: "Flip 2 coins. This attack does 20 more damage for each heads.",
				fr: "Lancez 2 pièces. Cette attaque inflige 20 dégâts supplémentaires pour chaque côté face.",
				es: "Lanza 2 monedas. Este ataque hace 20 puntos de daño más por cada cara.",
				it: "Lancia due volte una moneta. Ogni volta che esce testa, questo attacco infligge 20 danni in più.",
				pt: "Jogue 2 moedas. Esse ataque causa 20 de danos adicionais para cada cara.",
				de: "Wirf 2 Münzen. Dieser Angriff fügt 20 weitere Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "10+",

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Pester",
				fr: "Tarabustage",
				es: "Insistencia",
				it: "Perseguitare",
				pt: "Importunar",
				de: "Drangsal"
			},
			effect: {
				en: "If your opponent's Active Pokémon is affected by a Special Condition, this attack does 30 more damage.",
				fr: "Si le Pokémon Actif de votre adversaire est affecté par un État Spécial, cette attaque inflige 30 dégâts supplémentaires.",
				es: "Si el Pokémon Activo de tu rival se ve afectado por una Condición Especial, este ataque hace 30 puntos de daño más.",
				it: "Se il Pokémon attivo del tuo avversario è influenzato da una condizione speciale, questo attacco infligge 30 danni in più.",
				pt: "Se o Pokémon Ativo do seu oponente estiver sendo afetado por uma Condição Especial, esse ataque causará 30 de danos adicionais.",
				de: "Wenn das Aktive Pokémon deines Gegners von einem Speziellen Zustand betroffen ist, fügt dieser Angriff 30 weitere Schadenspunkte zu."
			},
			damage: "30+",

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
