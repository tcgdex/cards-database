import { Card } from '../../../interfaces'
import Set from '../Platinum'

const card: Card = {
	name: {
		en: "Kricketune",
		fr: "Mélokrik",
		de: "Zirpeise"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [402],

	hp: 90,

	types: [
		"Grass"
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
				"Colorless",
			],
			name: {
				en: "Revenge Melody",
				fr: "Mélodie vengeresse",
				de: "Vergeltungsmelodie"
			},
			effect: {
				en: "Does 20 damage times the number of Kricketot and Kricketune in your discard pile.",
				fr: "Inflige 20 dégâts multipliés par le nombre de Crikzik et Mélokrik dans votre pile de défausse.",
				de: "Dieser Angriff fügt 20 Schadenspunkte mal der Anzahl Zirpurze- und Zirpeise-Karten in deinem Ablagestapel zu."
			},
			damage: "20×",

		},
		{
			cost: [
				"Grass",
				"Grass",
			],
			name: {
				en: "Bug Buzz",
				fr: "Bourdon",
				de: "Käfergebrumm"
			},
			effect: {
				en: "If the Defending Pokémon is Asleep, this attack does 50 damage plus 30 more damage. Remove the Special Condition Asleep from the Defending Pokémon.",
				fr: "Si le Pokémon Défenseur est Endormi, cette attaque inflige 50 dégâts plus 30 dégâts supplémentaires. Retirez-lui l'État Spécial Endormi.",
				de: "Wenn das Verteidigende Pokémon schläft, fügt dieser Angriff 50 Schadenspunkte plus 30 weitere Schadenspunkte zu. Entferne den Speziellen Zustand „schlafend“ vom Verteidigenden Pokémon."
			},
			damage: "50+",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+20"
		},
	],

	retreat: 1,

	description: {
		en: "There is a village that hosts a contest based on the amazingly variable cries of this Pokémon.",
		de: "Es gibt ein Dorf, das basierend auf den imposanten Rufen dieses PKMN einen Wettbewerb veranstaltet."
	},

	variants: [
		{
			type:"normal",
			thirdParty: {
				tcgplayer: 86533,
				cardmarket: 278453
			}
		},
		{
			type:"reverse",
			thirdParty: {
				cardmarket: 278453,
				tcgplayer: 86533
			}
		}
	],

}

export default card
