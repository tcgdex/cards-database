import { Card } from '../../../interfaces'
import Set from '../Black & White'

const card: Card = {
	name: {
		en: "Maractus",
		fr: "Maracachi",
		es: "Maractus",
		it: "Maractus",
		pt: "Maractus",
		de: "Maracamba"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		556,
	],

	hp: 90,

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
				en: "Constant Rattle",
				fr: "Secousses Successives",
				de: "Rasseltanz"
			},
			effect: {
				en: "Flip 3 coins. If 1 of them is heads, this attack does 10 damage. If 2 of them are heads, this attack does 30 damage. If all of them are heads, this attack does 60 damage.",
				fr: "Lancez 3 pièces. Si vous obtenez un côté face, cette attaque inflige 10 dégâts. Si vous obtenez 2 côtés face, cette attaque inflige 30 dégâts. Si vous obtenez seulement des côtés face, cette attaque inflige 60 dégâts.",
				de: "Wirf 3 Münzen. Zeigt 1 davon „Kopf“, fügt dieser Angriff 10 Schadenspunkte zu. Zeigen 2 davon „Kopf“, fügt dieser Angriff 30 Schadenspunkte zu. Zeigen alle Münzen „Kopf“, fügt dieser Angriff 60 Schadenspunkte zu."
			},

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Grass",
			],
			name: {
				en: "Giga Drain",
				fr: "Giga-Sangsue",
				de: "Gigasauger"
			},
			effect: {
				en: "Heal from this Pokémon the same amount of damage you did to the Defending Pokémon.",
				fr: "Soignez à ce Pokémon la même quantité de dégâts que vous avez infligée au Pokémon Défenseur.",
				de: "Heile bei diesem Pokémon genauso viel Schaden, wie du dem Verteidigenden Pokémon zugefügt hast."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Water",
			value: "-20"
		},
	],

	retreat: 2,

	description: {
		en: "Arid regions are their habitat. They move rhythmically, making a sound similar to maracas.",
		de: "Erzeugt durch rhythmische Bewegungen Laute, die dem Klang von Maracas ähneln. Lebt an trockenen Orten."
	},

	thirdParty: {
		cardmarket: 279749,
		tcgplayer: 87188
	}
}

export default card
