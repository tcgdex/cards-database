import { Card } from '../../../interfaces'
import Set from '../Crystal Guardians'

const card: Card = {
	name: {
		en: "Sableye",
		fr: "Tenefix",
		de: "Zobiris"
	},

	illustrator: "Yukiko Baba",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		302,
	],

	hp: 60,

	types: [
		"Darkness",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Excavate",
				fr: "Déterrer",
				de: "Ausgraben"
			},
			effect: {
				en: "Once during your turn (before your attack), you may look at the card on top of your deck. Put that card on top of your deck, or discard that card. This power can't be used if Sableye is affected by a Special Condition.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez regarder la carte du dessus de votre deck. Placez-la au dessus de votre deck ou défaussez-la. Ce pouvoir ne peut pas être utilisé si Tenefix est affecté par un État Spécial.",
				de: "Während deines Zuges (vor deinem Angriff) kannst du dir ein Mal die oberste Karte deines Decks anschauen. Lege sie entweder auf dein Deck zurück oder auf deinen Ablagestapel. Diese Poké-Power kann nicht benutzt werden, wenn Zobiris von einem Speziellen Zustand betroffen ist."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Disable",
				fr: "Entrave",
				de: "Aussetzer"
			},
			effect: {
				en: "Choose 1 of the Defending Pokémon's attacks. That Pokémon can't use that attack during your opponent's next turn.",
				fr: "Choisissez 1 des attaques du Pokémon Défenseur. Il ne pourra pas utiliser cette attaque lors du prochain tour de votre adversaire.",
				de: "Wähle 1 Angriff des Verteidigenden Pokémon. Dieses Pokémon kann den gewählten Angriff im nächsten Zug deines Gegners nicht einsetzen."
			},
			damage: 10,

		},
	],

	resistances: [
		{
			type: "Colorless",
			value: "-30"
		},
	],


	retreat: 1,

	thirdParty: {
		cardmarket: 277091,
		tcgplayer: 88850
	},

	variants: [
		{
			type: "holo"
		},
		{
			type: "holo",
			stamp: ["set-logo"]
		},
		{
			type: "holo",
			stamp: ["tristan-robinson"]
		}
	]
}

export default card
