import { Card } from '../../../interfaces'
import Set from '../Great Encounters'

const card: Card = {
	name: {
		en: "Luvdisc",
		fr: "Lovdisc",
		de: "Liebiskus"
	},

	illustrator: "Motofumi Fujiwara",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		370,
	],

	hp: 60,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Rendezvous",
				fr: "Rendezvous",
				de: "Verabredung"
			},
			effect: {
				en: "Reveal the top card of your deck and put it into your hand. If that card is a Pokémon, draw 2 cards.",
				fr: "Retournez la carte du dessus de votre deck et placez-la dans votre main. Si c'est un Pokémon, piochez 2 cartes.",
				de: "Decke die oberste Karte deines Decks auf und nimm sie auf die Hand. Wenn diese Karte eine Pokémon-Karte ist, ziehe 2 weitere Karten."
			},

		},
		{
			cost: [
				"Water",
			],
			name: {
				en: "Synchro Dance",
				fr: "Danse synchronisée",
				de: "Synchrontanz"
			},
			effect: {
				en: "If Luvdisc and the Defending Pokémon have the same amount of Energy attached to them, this attack does 10 damage plus 20 more damage.",
				fr: "Si Lovdisc et le Pokémon Défenseur possède le même nombre d'Énergies, cette attaque inflige 10 dégâts plus 20 dégâts supplémentaires.",
				de: "Wenn an Liebiskus und dem Verteidigenden Pokémon die gleiche Anzahl Energien angelegt sind, fügt dieser Angriff 10 Schadenspunkte plus 20 weitere Schadenspunkte zu."
			},
			damage: "10+",

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "+10"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 277979,
		tcgplayer: 86936
	}
}

export default card
