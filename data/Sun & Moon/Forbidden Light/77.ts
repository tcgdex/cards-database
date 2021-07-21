import { Card } from '../../../interfaces'
import Set from '../Forbidden Light'

const card: Card = {
	name: {
		en: "Buzzwole",
		fr: "Mouscoto",
		es: "Buzzwole",
		it: "Buzzwole",
		pt: "Buzzwole",
		de: "Masskito"
	},
	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		794,
	],
	hp: 130,
	types: [
		"Fighting",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Sledgehammer",
				fr: "Coup de Masse",
				es: "Almádena",
				it: "Colpo di Mazza",
				pt: "Marreta",
				de: "Vorschlaghammer"
			},
			effect: {
				en: "If your opponent has exactly 4 Prize cards remaining, this attack does 90 more damage.",
				fr: "S’il reste exactement 4 cartes Récompense à votre adversaire, cette attaque inflige 90 dégâts supplémentaires.",
				es: "Si a tu rival le quedan exactamente 4 cartas de Premio, este ataque hace 90 puntos de daño más.",
				it: "Se il tuo avversario ha esattamente quattro carte Premio rimanenti, questo attacco infligge 90 danni in più.",
				pt: "Se o seu oponente tiver exatamente 4 cartas de Prêmio restantes, este ataque causará 90 pontos de dano a mais.",
				de: "Wenn dein Gegner genau 4 verbleibende Preiskarten hat, fügt diese Attacke 90 Schadenspunkte mehr zu."
			},
			damage: "30+",

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Swing Around",
				fr: "Balançoire",
				es: "Dar Vueltas",
				it: "Giravolta",
				pt: "Balanço",
				de: "Gegenschwung"
			},
			effect: {
				en: "Flip 2 coins. This attack does 20 more damage for each heads.",
				fr: "Lancez 2 pièces. Cette attaque inflige 20 dégâts supplémentaires pour chaque côté face.",
				es: "Lanza 2 monedas. Este ataque hace 20 puntos de daño más por cada cara.",
				it: "Lancia due volte una moneta. Questo attacco infligge 20 danni in più ogni volta che esce testa.",
				pt: "Jogue 2 moedas. Este ataque causa 20 pontos de dano a mais para cada cara.",
				de: "Wirf 2 Münzen. Diese Attacke fügt 20 Schadenspunkte mehr pro Kopf zu."
			},
			damage: "80+",

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
