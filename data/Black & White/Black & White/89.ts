import { Card } from '../../../interfaces'
import Set from '../Black & White'

const card: Card = {
	name: {
		en: "Cinccino",
		fr: "Pashmilla",
		es: "Cinccino",
		it: "Cinccino",
		pt: "Cinccino",
		de: "Chillabell"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		573,
	],

	hp: 90,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Minccino",
		fr: "Chinchidou",
		de: "Picochilla"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Tail Slap",
				fr: "Plumo-Queue",
				de: "Kehrschelle"
			},
			effect: {
				en: "Flip 2 coins. This attack does 20 damage times the number of heads.",
				fr: "Lancez 2 pièces. Cette attaque inflige 20 dégâts multipliés par le nombre de côtés face.",
				de: "Wirf 2 Münzen. Dieser Angriff fügt 20 Schadenspunkte mal der Anzahl „Kopf“ zu."
			},
			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Do the Wave",
				fr: "Faites la Vague",
				de: "Wellenreiten"
			},
			effect: {
				en: "Does 20 damage times the number of your Benched Pokémon.",
				fr: "Inflige 20 dégâts multipliés par le nombre de vos Pokémon de Banc.",
				de: "Dieser Angriff fügt 20 Schadenspunkte mal der Anzahl der Pokémon auf deiner Bank zu."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		en: "Their white fur is coated in a special oil that makes it easy for them to deflect attacks.",
		de: "Sein weißer Flaum ist mit einem speziellen Öl überzogen. Gegnerische Angriffe gleiten daran einfach ab."
	},

	thirdParty: {
		cardmarket: 279827,
		tcgplayer: 84317
	}
}

export default card
