import { Card } from '../../../interfaces'
import Set from '../Neo Genesis'

const card: Card = {
	name: {
		en: "Xatu",
		fr: "Xatu",
		de: "Xatu"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		178,
	],

	hp: 80,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Natu",
		fr: "Natu",
		de: "Natu"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Prophecy",
				fr: "Prophétie",
				de: "Vorhersagung"
			},
			effect: {
				en: "Look at the top 3 cards of either player's deck and rearrange them as you like.",
				fr: "Regardez les 3 cartes du dessus du deck de n'importe quel joueur et ordonnez-les comme bon vous semble.",
				de: "Schaue dir die drei obersten Karten entweder von deinem Deck oder vom Deck deines Gegners an und lege sie in einer beliebigen Reihenfolge wieder zurück."
			},

		},
		{
			cost: [
				"Psychic",
				"Psychic",
				"Psychic",
			],
			name: {
				en: "Confuse Ray",
				fr: "Onde folie",
				de: "Konfustrahl"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Confused.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Confus.",
				de: "Wirf eine Münze. Bei „Kopf“ ist das verteidigende Pokémon jetzt verwirrt."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],
	retreat: 1,


	description: {
		en: "They say that it stays still and quiet because it is seeing both the past and future at the same time.",
		fr: "On dit qu'il reste silencieux et immobile car il observe le passé et le futur en même temps.",
		de: "Es wird gesagt, dass es still und ruhig bleibt, weil es sowohl die Vergangenheit als auch die Zukunft gleichzeitig sieht."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274452,
				tcgplayer: 90661
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274452,
				tcgplayer: 90661
			}
		}
	]
}

export default card
