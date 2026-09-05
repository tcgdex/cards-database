import { Card } from '../../../interfaces'
import Set from '../Dragons Exalted'

const card: Card = {
	name: {
		en: "Honchkrow",
		fr: "Corboss",
		es: "Honchkrow",
		it: "Honchkrow",
		pt: "Honchkrow",
		de: "Kramshef"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		430,
	],

	hp: 110,

	types: [
		"Darkness",
	],

	evolveFrom: {
		en: "Murkrow",
		fr: "Cornèbre",
		de: "Kramurx"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Whirlwind",
				fr: "Cyclone",
				de: "Wirbelwind"
			},
			effect: {
				en: "You may have your opponent switch the Defending Pokémon with 1 of his or her Benched Pokémon.",
				fr: "Vous pouvez demander à votre adversaire d'échanger le Pokémon Défenseur avec 1 de ses Pokémon de Banc.",
				de: "Du kannst deinen Gegner dazu veranlassen, das Verteidigende Pokémon gegen 1 Pokémon auf seiner Bank auszutauschen."
			},
			damage: 30,

		},
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Diving Swipe",
				fr: "Rafle Plongeante",
				de: "Sturzklau"
			},
			effect: {
				en: "Discard a random card from your opponent's hand.",
				fr: "Défaussez au hasard une carte de la main de votre adversaire.",
				de: "Nimm 1 zufällige Karte aus der verdeckten Hand deines Gegners und lege sie auf dessen Ablagestapel."
			},
			damage: 70,

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

	retreat: 2,

	description: {
		en: "If one utters a deep cry, many Murkrow gather quickly. For this, it is called \"Summoner of Night.\"",
		de: "Sein tiefer Ruf lockt andere Kramurx herbei. Man anennt es daher „Beschwörer der Nacht“."
	},

	thirdParty: {
		cardmarket: 280512,
		tcgplayer: 86163
	}
}

export default card
