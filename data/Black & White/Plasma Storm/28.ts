import { Card } from '../../../interfaces'
import Set from '../Plasma Storm'

const card: Card = {
	name: {
		en: "Mamoswine",
		fr: "Mammochon",
		es: "Mamoswine",
		it: "Mamoswine",
		pt: "Mamoswine",
		de: "Mamutel"
	},

	illustrator: "match",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		473,
	],

	hp: 150,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Piloswine",
		fr: "Cochignon",
		de: "Keifel"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Frost Stone",
				fr: "Roc Gelé",
				de: "Frostfelsen"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 20 more damage and the Defending Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts supplémentaires et le Pokémon Défenseur est maintenant Paralysé.",
				de: "Wirf 1 Münze. Bei „Kopf“ fügt dieser Angriff 20 weitere Schadenspunkte zu und das Verteidigende Pokémon ist jetzt paralysiert."
			},
			damage: 50,

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Continuous Headbutt",
				fr: "Coup d'Boule Sans Fin",
				de: "Anhaltender Kopfstoß"
			},
			effect: {
				en: "Flip a coin until you get tails. This attack does 90 damage times the number of heads.",
				fr: "Lancez une pièce jusqu'à ce que vous obteniez un côté pile. Cette attaque inflige 90 dégâts multipliés par le nombre de côtés face.",
				de: "Wirf so lang 1 Münze, bis zum ersten Mal das Ergebnis „Zahl“ kommt. Dieser Angriff fügt 90 Schadenspunkte mal der Anzahl „Kopf“ zu."
			},
			damage: 90,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 4,

	description: {
		en: "When the temperature rose at the end of the ice age, most Mamoswine disappeared.",
		de: "Man sagt, als gegen Ende der letzten Eiszeit die Temperaturen wieder stiegen, seien viele Mamutel verschwunden."
	},

	thirdParty: {
		cardmarket: 280768,
		tcgplayer: 87141
	}
}

export default card
