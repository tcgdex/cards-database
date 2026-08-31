import { Card } from '../../../interfaces'
import Set from '../Hidden Fates Shiny Vault'

const card: Card = {
	name: {
		en: "Lucario",
		fr: "Lucario",
		de: "Lucario"
	},
	illustrator: "Kouki Saitou",
	rarity: "Shiny rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		448,
	],
	hp: 110,
	types: [
		"Fighting",
	],
	evolveFrom: {
		en: "Riolu",
		fr: "Riolu",
		de: "Riolu"
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Precognitive Aura",
				fr: "Aura Prémonitoire",
				de: "Vorhersehende Aura"
			},
			effect: {
				en: "Once during your turn (before your attack), if you have Garchomp in play, you may search your deck for a card and put it into your hand. Then, shuffle your deck.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), si vous avez Carchacrok en jeu, vous pouvez chercher une carte dans votre deck puis l’ajouter à votre main. Mélangez ensuite votre deck.",
				de: "Einmal während deines Zuges (bevor du angreifst) kannst du, wenn du Knakrack im Spiel hast, dein Deck nach 1 Karte durchsuchen und sie auf deine Hand nehmen. Mische anschließend dein Deck."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Missile Jab",
				fr: "Coup Propulsé",
				de: "Wieselflinke Gerade"
			},
			effect: {
				en: "This attack's damage isn't affected by Resistance.",
				fr: "Les dégâts de cette attaque ne sont pas affectés par la Résistance.",
				de: "Der Schaden dieser Attacke wird durch Resistenz nicht verändert."
			},
			damage: 70,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,




	description: {
		en: "They can detect the species of a living being—and its emotions—from over half a mile away. They control auras and hunt their prey in packs.",
		de: "Es kann aus 1 km Entfernung die Art und auch die Gefühle von Lebewesen erfassen. Es jagt im Rudel und manipuliert die Aura der Beute."
	},
}

export default card
