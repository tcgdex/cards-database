import { Card } from '../../../interfaces'
import Set from '../Jungle'

const card: Card = {
	name: {
		en: "Eevee",
		fr: "Évoli",
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
				de: "Schwanzschlag"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon can't attack Eevee during your opponent's next turn. (Benching either Pokémon ends this effect.)",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur ne peut pas attaquer Évoli pendant le prochain tour de votre adversaire. (Si l'un des deux Pokémon bat en retraite, cet effet prend fin.)",
				de: "Wirf eine Münze. Bei 'Kopf' kann das verteidigende Pokémon Evoli während des nächsten Zuges des gegners nicht angreifen. (Kommt einer der beiden Pokémon auf die Bank, ist diese Wirkung nicht weiter gültig.)"
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
				de: "Ruckzuckhieb"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 10 damage plus 20 more damage; if tails, this attack does 10 damage.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 10 dégâts plus 20 dégâts supplémentaires ; si c'est pile, cette attaque inflige 10 dégâts.",
				de: "Wirf eine Münze. Bei 'Kopf' fügt dieser Angriff 10 Schadenspunkte plus 20 weitere Schadenspunkte zu. Bei 'Zahl' fügt dieser Angriff 10 Schadenspunkte zu."
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

	description: {
		fr: "Il est capable de copier le code génétique d'un ennemi pour se transformer en son double."
	},

	thirdParty: {
		cardmarket: 273848
	}
}

export default card
