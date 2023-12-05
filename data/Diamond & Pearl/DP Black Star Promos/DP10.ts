import { Card } from '../../../interfaces'
import Set from '../DP Black Star Promos'

const card: Card = {
	name: {
		en: "Infernape",
		fr: "Simiabraz",
		de: "Panferno"
	},
	illustrator: "Shizurow",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		392,
	],
	hp: 120,
	types: [
		"Fire",
	],

	stage: "LEVEL-UP",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Burning Head",
				fr: "Tête brûlante",
				de: "Feuerkopf"
			},
			effect: {
				en: "Once during your turn (before your attack), you may look at the top 3 cards of your deck, choose 1 of them, and put it into your hand. Discard the other 2 cards. This power can't be used if Infernape is affected by a Special Condition.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez regarder les 3 cartes du dessus de votre deck. Choisissez-en 1 et placez-la dans votre main. Défaussez les 2 autres cartes. Ce pouvoir ne peut pas être utilisé si Simiabraz est affecté par un État Spécial.",
				de: "Einmal während deines Zuges (vor deinem Angriff) kannst du dir die obersten 3 Karten deines Decks anschauen. Wähle 1 davon und nimm sie auf die Hand. Lege die anderen 2 Karten auf deinen Ablagestapel. Diese Poké-Power kann nicht benutzt werden, wenn Panferno von einem Speziellen Zustand betroffen ist."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fire",
				"Fire",
			],
			name: {
				en: "Flare Up",
				fr: "Brasier ardent",
				de: "Aufflammen"
			},
			effect: {
				en: "Search your discard pile for 8 Fire Energy cards, show them to your opponent, and shuffle them into your deck. (This attack does nothing if you don't have 8 Fire Energy cards in your discard pile.)",
				fr: "Choisissez dans votre pile de défausse 8 cartes Énergie Fire, montrez-les à votre adversaire et mélangez-les à votre deck. (Cette attaque est sans effet si vous n'avez pas 8 cartes Énergie Fire dans votre pile de défausse.)",
				de: "Durchsuche deinen Ablagestapel nach 8 -Energiekarten, zeige sie deinem Gegner und mische sie in dein Deck. (Dieser Angriff hat keine Auswirklungen, wenn weniger als 8 -Energiekarten auf deinem Ablagestapel liegen.)"
			},
			damage: 150,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "+30"
		},
	],





}

export default card
