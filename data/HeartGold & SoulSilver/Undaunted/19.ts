import { Card } from '../../../interfaces'
import Set from '../Undaunted'

const card: Card = {
	name: {
		en: "Mismagius",
		fr: "Magireve",
		de: "Traunmagil"
	},

	illustrator: "Suwama Chiaki",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		429,
	],

	hp: 80,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Misdreavus",
		fr: "Feuforeve",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Sleeping Spell",
				fr: "Endormissement",
				de: "Schlafzauber"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Asleep.",
				fr: "Lancez une pièce. Si c’est face, le Pokémon Défenseur est maintenant Endormi.",
				de: "Wirf eine Münze. Bei \"Kopf\" schläft das Verteidigende Pokémon jetzt."
			},
			damage: 30,

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Poltergeist",
				fr: "Poltergeist",
				de: "Poltergeist"
			},
			effect: {
				en: "Look at your opponent’s hand. This attack does 30 damage times the number of Trainer, Supporter, and Stadium cards in your opponent’s hand.",
				fr: "Regardez la main de votre adversaire. Cette attaque inflige 30 dégâts multipliés par le nombre de cartes Dresseur, Supporter et Stade qui se trouvent dans la main de votre adversaire.",
				de: "Schau dir die Handkarten deines Gegners an. Dieser Angriff fügt 30 Schadenspunkte mal der Anzahl der Trainer-, Unterstützer- und Stadion-Karten, die du dort gefunden hast, zu."
			},
			damage: "30x",

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Colorless",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		en: "Its cries sound like incantations to torment the foe. It appears where you least expect it."
	},

	variants: {
		normal: true,
		reverse: false,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 279272,
		tcgplayer: 87518
	}
}

export default card
