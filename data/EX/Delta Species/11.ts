import { Card } from '../../../interfaces'
import Set from '../Delta Species'

const card: Card = {
	name: {
		en: "Metagross δ",
		fr: "Metalosse δ",
		de: "Metagross"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		376,
	],

	hp: 100,

	types: [
		"Lightning",
		"Metal",
	],

	evolveFrom: {
		en: "Metang",
		fr: "Metang"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Delta Control",
				fr: "Contrôle Delta",
				de: "Delta-Kontrolle"
			},
			effect: {
				en: "Once during your turn (before your attack), you may look at the top 4 cards of your deck, choose 1 of them, and put it into your hand. Put the 3 other cards on the bottom of your deck in any order. This power can't be used if Metagross is affected by a Special Condition.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez regarder les 4 cartes du dessus de votre deck. Choisissez-en 1 et placez-la dans votre main. Placez les 3 autres cartes au dessous de votre deck dans n'importe quel ordre. Ce pouvoir ne peut pas être utilisé si Metalosse est affecté par un État Spécial.",
				de: "Einmal während deines Zuges (vor deinem Angriff) kannst du dir die obersten 4 Karten deines Decks anschauen. Wähle 1 davon und nimm sie auf die Hand. Lege die anderen 3 Karten in beliebiger Reihenfolge unter dein Deck zurück. Diese Poké-Power kann nicht benutzt werden, wenn Metagross von einem Speziellen Zustand betroffen ist."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Lightning",
				"Metal",
			],
			name: {
				en: "Crush and Burn",
				fr: "Écra-brûle",
				de: "Falten und Frittieren"
			},
			effect: {
				en: "You may discard as many Energy cards as you like attached to your Pokémon in play. If you do, this attack does 30 damage plus 20 more damage for each Energy card you discarded.",
				fr: "Vous pouvez défausser autant de cartes Énergie attachées aux Pokémon que vous avez en jeu que vous voulez. Cette attaque inflige alors 30 dégâts plus 20 dégâts supplémentaires pour chaque carte Énergie défaussée.",
				de: "Du kannst beliebig viele Energiekarten, die an deine Pokémon angelegt sind, auf den Ablagestapel legen. Wenn du das machst, fügt dieser Angriff 30 Schadenspunkte plus 20 weitere Schadenspunkte für jede abgelegte Energiekarte zu."
			},
			damage: "30+",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Grass",
			value: "-30"
		},
	],


	retreat: 3,

	thirdParty: {
		cardmarket: 276774
	},

	variants: [
		{
			type: "holo"
		},
		{
			type: "holo",
			stamp: ["set-logo"]
		}
	]
}

export default card
