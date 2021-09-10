import { Card } from '../../../interfaces'
import Set from '../Steam Siege'

const card: Card = {
	name: {
		en: "Persian",
		fr: "Persian",
		es: "Persian",
		it: "Persian",
		pt: "Persian",
		de: "Snobilikat"
	},
	illustrator: "Anesaki Dynamic",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		53,
	],
	hp: 90,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Meowth",
		fr: "Miaouss",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Raid",
				fr: "Razzia Obscure",
				es: "Raid Oscuro",
				it: "Raid Oscuro",
				pt: "Reide",
				de: "Überfall"
			},
			effect: {
				en: "If this Pokémon evolved from Meowth during this turn, this attack does 30 more damage.",
				fr: "Si ce Pokémon a évolué de Miaouss pendant ce tour, cette attaque inflige 30 dégâts supplémentaires.",
				es: "Si este Pokémon ha evolucionado de Meowth durante este turno, este ataque hace 30 puntos de daño más.",
				it: "Se questo Pokémon si è evoluto da Meowth durante questo turno, questo attacco infligge 30 danni in più.",
				pt: "Se este Pokémon evoluiu de Meowth durante esta vez de jogar, este ataque causará 30 de danos adicionais.",
				de: "Wenn sich dieses Pokémon während dieses Zuges aus Mauzi entwickelt hat, fügt dieser Angriff 30 weitere Schadenspunkte zu."
			},
			damage: "30+",

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Fury Swipes",
				fr: "Combo-Griffe",
				es: "Golpes Furia",
				it: "Sfuriate",
				pt: "Golpes de Fúria",
				de: "Kratzfurie"
			},
			effect: {
				en: "Flip 3 coins. This attack does 30 damage times the number of heads.",
				fr: "Lancez 3 pièces. Cette attaque inflige 30 dégâts multipliés par le nombre de côtés face.",
				es: "Lanza 3 monedas. Este ataque hace 30 puntos de daño por cada cara.",
				it: "Lancia tre volte una moneta. Questo attacco infligge 30 danni ogni volta che esce testa.",
				pt: "Jogue 3 moedas. Este ataque causa 30 de danos vezes o número de caras.",
				de: "Wirf 3 Münzen. Dieser Angriff fügt 30 Schadenspunkte mal der Anzahl „Kopf“ zu."
			},
			damage: "30×",

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
