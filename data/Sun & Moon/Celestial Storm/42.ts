import { Card } from '../../../interfaces'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		en: "Huntail",
		fr: "Serpang",
		es: "Huntail",
		it: "Huntail",
		pt: "Huntail",
		de: "Aalabyss"
	},
	illustrator: "Shigenori Negishi",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		367,
	],
	hp: 110,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Clamperl",
		fr: "Coquiperl",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Big Bite",
				fr: "Grosse Morsure",
				es: "Gran Mordisco",
				it: "Grande Morso",
				pt: "Mordidona",
				de: "Mächtiger Biss"
			},
			effect: {
				en: "The Defending Pokémon can’t retreat during your opponent’s next turn.",
				fr: "Le Pokémon Défenseur ne peut pas battre en retraite pendant le prochain tour de votre adversaire.",
				es: "El Pokémon Defensor no puede retirarse durante el próximo turno de tu rival.",
				it: "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può ritirarsi.",
				pt: "O Pokémon Defensor não poderá recuar durante a próxima vez de jogar do seu oponente.",
				de: "Das Verteidigende Pokémon kann sich während des nächsten Zuges deines Gegners nicht zurückziehen."
			},
			damage: 30,

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Dangerous Bite",
				fr: "Morsure Dangereuse",
				es: "Mordisco Peligroso",
				it: "Morso Insidioso",
				pt: "Mordida Perigosa",
				de: "Gefährlicher Biss"
			},
			effect: {
				en: "If your opponent’s Active Pokémon is a Basic Pokémon, this attack does 80 more damage.",
				fr: "Si le Pokémon Actif de votre adversaire est un Pokémon de base, cette attaque inflige 80 dégâts supplémentaires.",
				es: "Si el Pokémon Activo de tu rival es un Pokémon Básico, este ataque hace 80 puntos de daño más.",
				it: "Se il Pokémon attivo del tuo avversario è un Pokémon Base, questo attacco infligge 80 danni in più.",
				pt: "Se o Pokémon Ativo do seu oponente for um Pokémon Básico, este ataque causará 80 pontos de dano a mais.",
				de: "Wenn das Aktive Pokémon deines Gegners ein Basis-Pokémon ist, fügt diese Attacke 80 Schadenspunkte mehr zu."
			},
			damage: "40+",

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
