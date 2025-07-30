import { Card } from '../../../interfaces'
import Set from '../Secret Wonders'

const card: Card = {
	name: {
		en: "Banette",
		fr: "Branette",
		de: "Banette"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		354,
	],

	hp: 80,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Shuppet",
		fr: "Polichombr",
	},

	stage: "Stage1",

	attacks: [
		{

			name: {
				en: "Ghost Head",
				fr: "Tête fantôme",
				de: "Geisterkopf"
			},
			effect: {
				en: "Put as many damage counters as you like on Banette. (You can't put more than Banette's remaining HP.) Put that many damage counters on the Defending Pokémon.",
				fr: "Placez sur Branette autant de marqueurs de dégât que vous le voulez. (Vous ne pouvez pas placer plus de marqueurs qu'il ne reste de PV à Branette.) Placez autant de marqueurs de dégât sur le Pokémon Défenseur.",
				de: "Lege eine beliebige Anzahl Schadensmarken auf Banette. (Du kannst höchstens so viele Schadensmarken auf Banette legen, dass seine verbleibenden KP genau 0 betragen.) Lege die gleiche Anzahl Schadensmarken auf das Verteidigende Pokémon."
			},

		},
		{
			cost: [
				"Psychic",
				"Psychic",
			],
			name: {
				en: "Spiteful Pain",
				fr: "Douleur malveillante",
				de: "Tückischer Schmerz"
			},
			effect: {
				en: "If Banette is in your discard pile, this attack does 40 damage plus 40 more damage. Then, search your discard pile for Banette, show it to your opponent, and shuffle it into your deck.",
				fr: "Si Branette se trouve dans votre pile de défausse, cette attaque inflige 40 dégât plus 40 dégât supplémentaires. Ensuite, cherchez Branette dans votre pile de défausse , montrez-le à votre adversaire et mélangez-le à votre deck.",
				de: "Wenn sich mindestens 1 Banette-Karte in deinem Ablagestapel befindet, fügt dieser Angriff 40 Schadenspunkte plus 40 weitere Schadenspunkte zu. danach durchsuche deinen Ablagestapel nach einer Banette-Karte, zeige sie deinem Gegner und mische sie in dein Deck."
			},
			damage: "40+",

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "+20"
		},
	],

	resistances: [
		{
			type: "Colorless",
			value: "-20"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 277776,
		tcgplayer: 83722
	}
}

export default card
