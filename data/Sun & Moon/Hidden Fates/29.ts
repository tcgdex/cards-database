import { Card } from '../../../interfaces'
import Set from '../Hidden Fates'

const card: Card = {
	name: {
		en: "Weezing",
		fr: "Smogogo",
		de: "Smogmog"
	},

	illustrator: "Hideki Ishikawa",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		110,
	],

	hp: 120,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Koffing",
		fr: "Smogo",
		de: "Smogon"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Surrender Now",
				fr: "Rendez-Vous Tous",
				de: "Gib lieber auf"
			},
			effect: {
				en: "Once during your turn, if this Pokémon is discarded with the effect of Jessie & James, you may have your opponent discard a card from their hand. (They discard that card after the effect of Jessie & James.)",
				fr: "Une seule fois pendant votre tour, si ce Pokémon est défaussé du fait de l'effet de la carte Jessie et James, vous pouvez demander à votre adversaire de défausser une carte de sa main. (Cette carte est défaussée après l'effet de Jessie et James.)",
				de: "Einmal während deines Zuges, wenn dieses Pokémon durch den Effekt von Jessie & James auf deinen Ablagestapel gelegt wird, kannst du deinen Gegner dazu veranlassen, 1 Karte aus seiner Hand auf seinen Ablagestapel zu legen. (Er legt jene Karte nach dem Effekt von Jessie & James auf seinen Ablagestapel.)"
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Tackle",
				fr: "Charge",
				de: "Tackle"
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		en: "If one of the twin Koffing inflates, the other one deflates. It constantly mixes its poisonous gases.",
		de: "Pumpt sich eines der zwei Smogon auf, lässt das andere Luft ab. So findet ein Giftgasaustausch statt."
	},

	thirdParty: {
		cardmarket: 381228,
		tcgplayer: 197673
	}
}

export default card
