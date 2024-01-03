import { Card } from '../../../interfaces'
import Set from '../Secret Wonders'

const card: Card = {
	name: {
		en: "Unown Z",
		fr: "Zarbi Z",
		de: "Icognito Z"
	},
	illustrator: "Kazuyuki Kano",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		201,
	],
	hp: 50,
	types: [
		"Psychic",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "ZERO",
				fr: "ZÉRO",
				de: "ZERO"
			},
			effect: {
				en: "Once during your turn (before your attack), if Unown Z is on your Bench and you have no cards in your deck, you may discard all cards attached to Unown Z and put Unown Z on top of your deck.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), si Zarbi Z est sur votre Banc et qu'il ne vous reste plus de cartes dans votre deck, vous pouvez défausser toutes les cartes attachées à Zarbi Z et placer Zarbi Z au dessus de votre deck.",
				de: "Einmal während deines Zuges (vor deinem Angriff) kannst du, wenn Icognito Z auf deiner Bank ist und dein Deck keine Karten mehr enthält, alle an Icognito Z angelegten Karten auf deinen Ablagestapel und Icognito Z auf dein Deck legen."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Hidden Power",
				fr: "Puissance cachée",
				de: "Kraftreserve"
			},
			effect: {
				en: "Remove as many damage counters as you like from each Unown you have in play. Put that many damage counters on the Defending Pokémon.",
				fr: "Retirez à chacun des Zarbis que vous avez en jeu autant de marqueurs de dégât que vous voulez. Placez autant de marqueurs de dégât sur le Pokémon Défenseur.",
				de: "Entferne eine beliebige Anzahl Schadensmarken von deinen Icognito im Spiel. Lege die gleiche Anzahl Schadensmarken auf das Verteidigende Pokémon."
			},

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "+10"
		},
	],

	retreat: 1,



}

export default card
