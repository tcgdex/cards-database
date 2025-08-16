import { Card } from '../../../interfaces'
import Set from '../Diamond & Pearl'

const card: Card = {
	name: {
		en: "Steelix",
		fr: "Steelix",
		de: "Stahlos"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		208,
	],

	hp: 110,

	types: [
		"Metal",
	],

	evolveFrom: {
		en: "Onix",
		fr: "Onix",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Metal",
			],
			name: {
				en: "Slam",
				fr: "Souplesse",
				de: "Slam"
			},
			effect: {
				en: "Flip 2 coins. This attack does 30 damage times the number of heads.",
				fr: "Lancez 2 pièces. Cette attaque inflige 30 dégâts multipliés par le nombre de faces.",
				de: "Wirf 2 Münzen. Dieser Angriff fügt 30 Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "30x",

		},
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Metal Slash",
				fr: "Tranche métallique",
				de: "Metallschlitzer"
			},
			effect: {
				en: "Steelix can't attack during your next turn.",
				fr: "Steelix ne peut pas attaquer lors de votre prochain tour.",
				de: "Stahlos kann in deinem nächsten Zug nicht angreifen."
			},
			damage: 100,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+20"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 4,

	description: {
		fr: "Grâce à la température élevée et la haute pression souterraines, son corps est plus dur que le métal."
	},

	thirdParty: {
		cardmarket: 277537,
		tcgplayer: 89561
	}
}

export default card
