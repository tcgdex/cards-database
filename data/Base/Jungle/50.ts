import { Card } from '../../../interfaces'
import Set from '../Jungle'

const card: Card = {
	name: {
		en: "Cubone",
		fr: "Osselait",
		de: "Tragosso"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		104,
	],

	hp: 40,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Snivel",
				fr: "Pleurnicherie",
				de: "Geheule"
			},
			effect: {
				en: "If the Defending Pokémon attacks Cubone during your opponent's next turn, any damage done by the attack is reduced by 20 (after applying Weakness and Resistance). (Benching either Pokémon ends this effect.)",
				fr: "Si le Pokémon Défenseur attaque Osselait pendant le prochain tour de votre adversaire, les dégâts infligés par l'attaque sont réduits de 20 (après application de la Faiblesse et de la Résistance). (Si l'un des Pokémon bat en retraite, cet effet prend fin.)",
				de: "Greift das verteidigende Pokémon Tragossi während des nächsten gegnerischen Zuges an, wird aller aufgrund dieses Angriffs zugefügte Schaden um 20 Schadenspunkte reduziert (nachdem Schwäche und Resistenz abgerechnet wurden). (Kommt einer der beiden Pokémon auf die Bank, ist diese Wirkung nich weiter gültig.)"
			},

		},
		{
			cost: [
				"Fighting",
				"Fighting",
			],
			name: {
				en: "Rage",
				fr: "Frénésie",
				de: "Raserei"
			},
			effect: {
				en: "Does 10 damage plus 10 more damage for each damage counter on Cubone.",
				fr: "Inflige 10 dégâts plus 10 dégâts supplémentaires pour chaque marqueur de dégâts placé sur Osselait.",
				de: "Fügt 10 Schadenspunkte plus 10 weitere Schadenspunkte für jede Schadensmarke auf Tragosso zu."
			},
			damage: "10+",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Lightning",
			value: "-30"
		},
	],

	description: {
		fr: "Il ne retire jamais son casque en os. Personne n'a jamais vu le visage de ce Pokémon."
	},

	thirdParty: {
		cardmarket: 273847,
		tcgplayer: 45153
	}
}

export default card
