import { Card } from '../../../interfaces'
import Set from '../Undaunted'

const card: Card = {
	name: {
		en: "Slowking",
		fr: "Roigada",
		de: "Laschoking"
	},

	illustrator: "Noriko Hotta",
	rarity: "Rare PRIME",
	category: "Pokemon",
	set: Set,

	dexId: [
		199,
	],

	hp: 100,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Slowpoke",
		fr: "Ramoloss",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Opponent’s Choice",
				fr: "Choix de l’adversaire",
				de: "Gegnerische Wahl"
			},
			effect: {
				en: "Once during your turn (before your attack), you may reveal the top 2 cards of your deck and your opponent chooses 1 of them. Put that card into your hand and the other card on the bottom of your deck. This power can’t be used if Slowking is affected by a Special Condition.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez dévoiler les 2 cartes du dessus de votre deck pour que votre adversaire choisisse l’une d’entre elles. Ajoutez cette carte à votre main et placez l’autre carte au dessous de votre deck. Ce pouvoir ne peut pas être utilisé si Roigada est affecté par un État Spécial.",
				de: "Einmal während deines Zuges (vor deinem Angriff) kannst du die obersten 2 Karten deines Deck aufdecken und eine davon von deinem Gegner auswählen lassen. Nimm die gewählte Karte auf deine Hand und lege die andere Karte unter dein Deck. Diese Poké-Power kann nicht benutzt werden, wenn Laschoking von einem Speziellen Zustand betroffen ist."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Super Psy Bolt",
				fr: "Super psy",
				de: "Super-Psischlag"
			},

			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,
	suffix: "Prime",

	variants: [
		{
			type: "holo"
		},
	],

	thirdParty: {
		cardmarket: 279338,
		tcgplayer: 89318
	}
}

export default card
