import { Card } from '../../../interfaces'
import Set from '../Black & White'

const card: Card = {
	name: {
		en: "Stoutland",
		fr: "Mastouffe",
		es: "Stoutland",
		it: "Stoutland",
		pt: "Stoutland",
		de: "Bissbark"
	},

	illustrator: "match",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		508,
	],

	hp: 140,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Herdier",
		fr: "Ponchien",
		de: "Terribark"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Odor Sleuth",
				fr: "Flair",
				de: "Schnüffler"
			},
			effect: {
				en: "Flip 3 coins. For each heads, put a card from your discard pile into your hand.",
				fr: "Lancez 3 pièces. Pour chaque côté face, prenez une carte dans votre pile de défausse et ajoutez-la à votre main.",
				de: "Wirf 3 Münzen. Nimm pro „Kopf“ 1 Karte von deinem Ablagestapel auf deine Hand."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Giga Impact",
				fr: "Giga Impact",
				de: "Gigastoß"
			},
			effect: {
				en: "This Pokémon can't attack during your next turn.",
				fr: "Ce Pokémon ne peut pas attaquer pendant votre prochain tour.",
				de: "Dieses Pokémon kann während deines nächsten Zuges nicht angreifen."
			},
			damage: 90,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		en: "This extremely wise Pokémon excels at rescuing people stranded at sea or in the mountains.",
		de: "Seine Stärke ist es, Menschen zu retten, die auf hoher See oder in den Bergen in Not geraten. Ein sehr kluges Pokémon."
	},

	thirdParty: {
		cardmarket: 279821,
		tcgplayer: 89570
	}
}

export default card
