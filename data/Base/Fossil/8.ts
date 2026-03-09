import { Card } from '../../../interfaces'
import Set from '../Fossil'

const card: Card = {
	name: {
		en: "Hypno",
		fr: "Hypnomade",
		de: "Hypno"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		97,
	],

	hp: 90,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Drowzee",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Prophecy",
				fr: "Prophétie",
				de: "Vorhersagung"
			},
			effect: {
				en: "Look at up to 3 cards from the top of either player's deck and rearrange them as you like.",
				fr: "Regardez jusqu'à 3 cartes du dessus du deck d'un des deux joueurs et réarrangez-les comme bon vous semble.",
				de: "Schaue dir bis zu drei der obersten Karten vom Deck deines Gegners oder deinem eigenen Deck an und lege sie in beliebiger Reihenfolge wieder auf das Deck zurück."
			},

		},
		{
			cost: [
				"Psychic",
				"Psychic",
				"Psychic",
			],
			name: {
				en: "Dark Mind",
				fr: "Sombre-esprit",
				de: "Finsteres Gemüt"
			},
			effect: {
				en: "If your opponent has any Benched Pokémon, choose 1 of them and this attack does 10 damage to it. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Si votre adversaire a des Pokémon sur son Banc, choisissez l'un d'eux et cette attaque lui inflige 10 dégâts. (Ne pas appliquer la Résistance et la Faiblesse au Pokémon du Banc.)",
				de: "Falls dein Gegner irgendwelche Pokémon auf der Bank hat, wähle eines von ihnen. Dieser Angriff fügt ihm 10 Schadenspunkte zu. (Schwäche und Resistenz für Pokémon auf der Bank nicht anwenden.)"
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	description: {
		fr: "En fixant son adversaire, il l'assaille avec les attaques Psy Hypnose et Convulsion."
	},

	thirdParty: {
		cardmarket: 273869,
		tcgplayer: 106524
	},

	variants: [
		{
			type: "holo",
			foil: "galaxy"
		},
		{
			type: "holo",
			stamp: ["1st-edition"],
			foil: "galaxy"
		},
	]
}

export default card
