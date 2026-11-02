import { Card } from '../../../interfaces'
import Set from '../Platinum'

const card: Card = {
	name: {
		en: "Mightyena",
		fr: "Grahyèna",
		de: "Magnayen"
	},

	illustrator: "Kouki Saitou",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [262],

	hp: 90,

	types: [
		"Darkness"
	],

	evolveFrom: {
		en: "Poochyena",
		fr: "Medhyena",
		de: "Fiffyen"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Cold Feet",
				fr: "Pieds froids",
				de: "Kalte Füße"
			},
			effect: {
				en: "If Mightyena is affected by a Special Condition, ignore all Energy necessary to use Mightyena's attacks.",
				fr: "Si Grahyena est affecté par un État Spécial, ignorez toutes les Énergies nécessaires pour utiliser les attaques de Grahyena.",
				de: "Wenn Magnayen von einem Speziellen Zustand betroffen ist, ignoriere alle Energiekosten von Magnayens Angriffen."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Collude",
				fr: "Association louche",
				de: "Verschwören"
			},
			effect: {
				en: "If you played any Supporter card from your hand during this turn, this attack does 20 damage plus 20 more damage.",
				fr: "Si vous avez joué une carte Supporter de votre main ce tour-ci, cette attaque inflige 20 dégâts plus 20 dégâts supplémentaires.",
				de: "Wenn du in diesem Zug mindestens 1 Unterstützerkarte von deiner Hand gespielt hast, fügt dieser Angriff 20 Schadenspunkte plus 20 weitere Schadenspunkte zu."
			},
			damage: "20+",

		},
		{
			cost: [
				"Darkness",
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Desperate Attack",
				fr: "Attaque désespérée",
				de: "Verzweifelter Angriff"
			},
			effect: {
				en: "If Mightyena has less Energy attached to it than the Defending Pokémon, this attack does 50 damage plus 30 more damage.",
				fr: "Si Grahyena possède moins d'Énergie que le Pokémon Défenseur, cette attaque inflige 50 dégâts plus 30 dégâts supplémentaires.",
				de: "Wenn an das Verteidigende Pokémon mehr Energie angelegt ist als an Magnayen, fügt dieser Angriff 50 Schadenspunkte plus 30 weitere Schadenspunkte zu."
			},
			damage: "50+",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+20"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	variants: [
		{
			type:"normal",
			thirdParty: {
				tcgplayer: 87448,
				cardmarket: 278475
			}
		},
		{
			type:"reverse",
			thirdParty: {
				cardmarket: 278475,
				tcgplayer: 87448
			}
		}
	],

	retreat: 0
}

export default card
