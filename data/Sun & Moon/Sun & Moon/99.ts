import { Card } from '../../../interfaces'
import Set from '../Sun & Moon'

const card: Card = {
	name: {
		en: "Kangaskhan",
		fr: "Kangourex",
		es: "Kangaskhan",
		it: "Kangaskhan",
		pt: "Kangaskhan",
		de: "Kangama"
	},
	illustrator: "TOKIYA",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		115,
	],
	hp: 130,
	types: [
		"Colorless",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Cross-Cut",
				fr: "Coupe Transversale",
				es: "Atajar",
				it: "Fendente Incrociato",
				pt: "Corte em Cruz",
				de: "Überkreuzzerschneider"
			},
			effect: {
				en: "If your opponent’s Active Pokémon is an Evolution Pokémon, this attack does 30 more damage.",
				fr: "Si le Pokémon Actif de votre adversaire est un Pokémon Évolutif, cette attaque inflige 30 dégâts supplémentaires.",
				es: "Si el Pokémon Activo de tu rival es un Pokémon Evolución, este ataque hace 30 puntos de daño más.",
				it: "Se il Pokémon attivo del tuo avversario è un Pokémon Evoluzione, questo attacco infligge 30 danni in più.",
				pt: "Se o Pokémon Ativo do seu oponente for um Pokémon de Evolução, este ataque causará 30 pontos de dano a mais.",
				de: "Wenn das Aktive Pokémon deines Gegners ein Entwicklungs-Pokémon ist, fügt diese Attacke 30 Schadenspunkte mehr zu."
			},
			damage: "30+",

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Hurricane Punch",
				fr: "Poing Ouragan",
				es: "Puño Huracán",
				it: "Pugno Uragano",
				pt: "Soco Furacão",
				de: "Hurrikanhieb"
			},
			effect: {
				en: "Flip 4 coins. This attack does 50 damage for each heads.",
				fr: "Lancez 4 pièces. Cette attaque inflige 50 dégâts multipliés par le nombre de côtés face.",
				es: "Lanza 4 monedas. Este ataque hace 50 puntos de daño por cada cara.",
				it: "Lancia quattro volte una moneta. Questo attacco infligge 50 danni ogni volta che esce testa.",
				pt: "Jogue 4 moedas. Este ataque causa 50 pontos de dano para cada cara.",
				de: "Wirf 4 Münzen. Diese Attacke fügt 50 Schadenspunkte pro Kopf zu."
			},
			damage: "50×",

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
