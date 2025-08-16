import { Card } from '../../../interfaces'
import Set from '../Legends Awakened'

const card: Card = {
	name: {
		en: "Uxie",
		fr: "Créhelf",
		de: "Selfe"
	},

	illustrator: "Shizurow",
	rarity: "Rare Holo LV.X",
	category: "Pokemon",
	set: Set,

	dexId: [
		480,
	],

	hp: 90,

	types: [
		"Psychic",
	],

	stage: "LEVEL-UP",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Trade Off",
				fr: "Compensation",
				de: "Abwägen"
			},
			effect: {
				en: "Once during your turn (before your attack), you may look at the top 2 cards of your deck, choose 1 of them, and put it into your hand. Put the other card on the bottom of your deck. This power can't be used if Uxie is affected by a Special Condition. You can't use more than 1 Trade Off Poké-Power each turn.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez regarder les 2 cartes du dessus de votre deck. Choisissez-en 1 et placez-la dans votre main. Placez l'autre carte au dessous de votre deck. Ce pouvoir ne peut pas être utilisé si Créhelf est affecté par un État Spécial. Vous ne pouvez pas utiliser plus d'1 Poké-Power Compensation par tour.",
				de: "Einmal während deines Zuges (vor deinem Angriff) kannst du die obersten 2 Karten deines Decks anschauen. Wähle 1 von ihnen und nimm sie auf die Hand. Lege die andere Karte unter dein Deck. Diese Poké-Power kann nicht benutzt werden, wenn Selfe von einem Speziellen Zustand betroffen ist. Du kannst nicht mehr als 1 Abwägen Poké-Power pro Zug benutzen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Zen Blade",
				fr: "Lame zen",
				de: "Zen-Klinge"
			},
			effect: {
				en: "Uxie can't use Zen Blade during your next turn.",
				fr: "Créhelf ne peut pas utiliser Lame zen lors de votre prochain tour.",
				de: "Selfe kann Zen-Klinge in deinem nächsten Zug nicht einsetzen."
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

	retreat: 1,

	thirdParty: {
		cardmarket: 278192,
		tcgplayer: 90262
	}
}

export default card
