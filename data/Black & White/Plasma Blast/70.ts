import { Card } from '../../../interfaces'
import Set from '../Plasma Blast'

const card: Card = {
	name: {
		en: "Druddigon",
		fr: "Drakkarmin",
		es: "Druddigon",
		it: "Druddigon",
		pt: "Druddigon",
		de: "Shardrago"
	},

	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		621,
	],

	hp: 100,

	types: [
		"Dragon",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Big Swing",
				fr: "Vaste Oscillation",
				de: "Gewaltiger Haken"
			},
			effect: {
				en: "Flip 2 coins. If either of them is tails, this attack does nothing.",
				fr: "Lancez 2 pièces. Si vous obtenez au moins un côté pile, cette attaque ne fait rien.",
				de: "Wirf 2 Münzen. Wenn eine oder beide Münzen „Zahl“ zeigen, hat dieser Angriff keine Auswirkungen."
			},
			damage: 40,

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Shred",
				fr: "Déchiquetage",
				de: "Zerfetzer"
			},
			effect: {
				en: "This attack's damage isn't affected by any effects on the Defending Pokémon.",
				fr: "Les dégâts de cette attaque ne sont affectés par aucun effet en action sur le Pokémon Défenseur.",
				de: "Der Schaden dieses Angriffs wird durch Effekte auf dem Verteidigenden Pokémon nicht verändert."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Dragon",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		en: "It runs through the narrow tunnels formed by Excadrill and Onix. It uses its sharp claws to catch prey.",
		de: "Es jagt in schmalen, von Stalobor und Onix gegrabenen Schächten nach Beute und spießt sie mit spitzen Klauen auf."
	},

	thirdParty: {
		cardmarket: 281091,
		tcgplayer: 84980
	}
}

export default card
