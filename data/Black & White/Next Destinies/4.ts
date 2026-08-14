import { Card } from '../../../interfaces'
import Set from '../Next Destinies'

const card: Card = {
	name: {
		en: "Kricketune",
		fr: "Mélokrik",
		es: "Kricketune",
		it: "Kricketune",
		pt: "Kricketune",
		de: "Zirpeise"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		402,
	],

	hp: 90,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Kricketot",
		fr: "Crikzik",
		de: "Zirpurze"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "White Noise",
				fr: "Sommeil Profond",
				de: "Weißes Rauschen"
			},
			effect: {
				en: "The Defending Pokémon is now Asleep.",
				fr: "Le Pokémon Défenseur est maintenant Endormi.",
				de: "Das Verteidigende Pokémon schläft jetzt."
			},
			damage: 20,

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Draining Cut",
				fr: "Vampitranche",
				de: "Zehrender Schnitt"
			},
			effect: {
				en: "Flip 2 coins. This attack does 40 damage times the number of heads. Heal from this Pokémon the same amount of damage you did to the Defending Pokémon.",
				fr: "Lancez 2 pièces. Cette attaque inflige 40 dégâts multipliés par le nombre de côtés face. Soignez à ce Pokémon la même quantité de dégâts que vous avez infligée au Pokémon Défenseur.",
				de: "Wirf 2 Münzen. Dieser Angriff fügt 40 Schadenspunkte mal der Anzahl „Kopf“ zu. Heile bei diesem Pokémon genauso viel Schaden, wie du dem Verteidigenden Pokémon zugefügt hast."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		en: "There is a village that hosts a contest based on the amazingly variable cries of this Pokémon.",
		de: "Es gibt ein Dorf, das basierend auf den imposanten Rufen dieses Pokémon einen Wettbewerb veranstaltet."
	},

	thirdParty: {
		cardmarket: 280229,
		tcgplayer: 86535
	}
}

export default card
