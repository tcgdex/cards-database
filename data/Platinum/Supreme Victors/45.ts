import { Card } from '../../../interfaces'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		en: "Solrock",
		fr: "Solaroc",
		de: "Sonnfel"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		338,
	],

	hp: 80,

	types: [
		"Psychic",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Sunshine Fate",
				fr: "Destin ensoleillé",
				de: "Sonnenvorhersage"
			},
			effect: {
				en: "Once during your turn (before your attack), if you have Lunatone in play, you may look at the top 3 cards of your deck and put them back on top of your deck in any order. This power can't be used if Solrock is affected by a Special Condition.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), si vous avez un Seleroc en jeu, vous pouvez regarder les 3 cartes du dessus de votre deck et les replacer au-dessus de votre deck dans n'importe quel ordre. Ce pouvoir ne peut pas être utilisé si Solaroc est affecté par un État Spécial.",
				de: "Einmal während deines Zuges (vor deinem Angriff) kannst du dir, wenn du Lunastein im Spiel hast, die obersten 3 Karten deines Decks anschauen und sie in beliebiger Reihenfolge auf dein Deck zurücklegen. Diese Poké-Power kann nicht benutzt werden, wenn Sonnfel von einem Speziellen Zustand betroffen ist."
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
				en: "Luna Turn",
				fr: "Tour lunaire",
				de: "Mondwende"
			},
			effect: {
				en: "If Lunatone is in your discard pile, this attack does 30 damage plus 30 more damage. Then, search your discard pile for Lunatone, show it to your opponent, and shuffle it into your deck.",
				fr: "Si Seleroc se trouve dans votre pile de défausse, cette attaque inflige 30 dégâts plus 30 dégâts supplémentaires. Ensuite, cherchez Seleroc dans votre pile de défausse, montrez-le à votre adversaire et mélangez-le à votre deck.",
				de: "Wenn sich mindestens 1 Lunastein-Karte in deinem Ablagestapel befindet, fügt dieser Angriff 30 Schadenspunkte plus 30 weitere Schadenspunkte zu. Danach durchsuche deinen Ablagestapel nach einer Lunastein-Karte, zeige sie deinem Gegner und mische sie in dein Deck."
			},
			damage: "30+",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "+20"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 278736
	},

	variants: [
		{
			type: "holo"
		},
		{
			type: "reverse"
		}
	]
}

export default card
