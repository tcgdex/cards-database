import { Card } from '../../../interfaces'
import Set from '../Dark Explorers'

const card: Card = {
	name: {
		en: "Swanna",
		fr: "Lakmécygne",
		es: "Swanna",
		it: "Swanna",
		pt: "Swanna",
		de: "Swaroness"
	},

	illustrator: "Mizue",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		581,
	],

	hp: 90,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Ducklett",
		fr: "Couaneton",
		de: "Piccolente"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Healing Pirouette",
				fr: "Pirouette Apaisante",
				de: "Heilender Reigen"
			},
			effect: {
				en: "Heal 30 damage from each of your Pokémon.",
				fr: "Soignez 30 dégâts à chacun de vos Pokémon.",
				de: "Heile 30 Schadenspunkte bei jedem deiner Pokémon."
			},

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				en: "Incessant Peck",
				fr: "Rafal'Bec",
				de: "Dauerpicker"
			},
			effect: {
				en: "Flip a coin until you get tails. This attack does 20 more damage for each heads.",
				fr: "Lancez une pièce jusqu'à ce que vous obteniez un côté pile. Cette attaque inflige 20 dégâts supplémentaires pour chaque côté face.",
				de: "Wirf so lang 1 Münze, bis zum ersten Mal das Ergebnis „Zahl“ kommt. Dieser Angriff fügt 20 weitere Schadenspunkte mal der Anzahl „Kopf“ zu."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		en: "Swanna start to dance at dusk. The one dancing in the middle is the leader of the flock.",
		de: "Wenn der Morgen dämmert, fangen sie an zu tanzen. Das Swaroness in der Mitte führt die Gruppe an."
	},

	thirdParty: {
		cardmarket: 280364,
		tcgplayer: 89686
	}
}

export default card
