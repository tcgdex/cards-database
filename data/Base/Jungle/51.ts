import { Card } from '../../../interfaces'
import Set from '../Jungle'

const card: Card = {
	name: {
		en: "Eevee",
		fr: "Évoli",
		it: "Eevee",
		de: "Evoli"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		133,
	],

	hp: 50,

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
				en: "Tail Wag",
				fr: "Mouvemend'keu",
				it: "Codata",
				de: "Schwanzschlag"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon can't attack Eevee during your opponent's next turn. (Benching either Pokémon ends this effect.)",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur ne peut pas attaquer Évoli pendant le prochain tour de votre adversaire. (Si l'un des deux Pokémon bat en retraite, cet effet prend fin.)",
				it: "Lancia una moneta. Se esce testa, il Pokémon Difensore non può attaccare Eevee durante il prossimo turno del tuo avversario (mettendo in Panchina uno dei due Pokémon l'effetto termina).",
				de: "Wirf eine Münze. Bei „Kopf“ kann das verteidigende Pokémon Evoli während des nächsten Zuges des Gegners nicht angreifen. (Kommt einer der beiden Pokémon auf die Bank, ist diese Wirkung nicht weiter gültig.)"
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Quick Attack",
				fr: "Vive-attaque",
				it: "Attacco Rapido",
				de: "Ruckzuckhieb"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 10 damage plus 20 more damage; if tails, this attack does 10 damage.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 10 dégâts plus 20 dégâts supplémentaires ; si c'est pile, cette attaque inflige 10 dégâts.",
				it: "Lancia una moneta. Se esce testa, questo attacco infligge 10 danni, più altri 20 danni; se esce croce, questo attacco infligge 10 danni.",
				de: "Wirf eine Münze. Bei „Kopf“ fügt dieser Angriff 10 Schadenspunkte plus 20 weitere Schadenspunkte zu; bei „Zahl“ fügt dieser Angriff 10 Schadenspunkte zu."
			},
			damage: "10+",

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
			value: "-30"
		},
	],
	retreat: 1,


	description: {
		en: "Its genetic code is irregular. It may mutate if it is exposed to radiation from elemental stones.",
		fr: "Il est capable de copier le code génétique d'un ennemi pour se transformer en son double.",
		it: "Il suo codice genetico è anomalo. Potrebbe mutare se venisse esposto alle radiazioni delle pietre elementali.",
		de: "Sein genetischer Code ist unregelmäßig. Es kann mutieren, falls es Strahlung von Elementarsteinen ausgesetzt wird."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 273848,
				tcgplayer: 45154
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 273848,
				tcgplayer: 45154
			}
		}
	],
}

export default card
