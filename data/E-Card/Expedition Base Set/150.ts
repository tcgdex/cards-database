import { Card } from '../../../interfaces'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		en: "Strength Charm",
		fr: "Fétiche de force",
		de: "Stärkeamulett"
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Uncommon",
	category: "Trainer",
	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Crystal Type",
			},
			effect: {
				en: "Attach Strength Charm to 1 of your Pokémon that doesn't have a Pokémon Tool attached to it. Whenever an attack from the Pokémon that Strength Charm is attached to does damage (after applying Weakness and Resistance), the attack does 10 more damage. At the end of your turn in which this happens, discard Strength Charm.",
			},
		},
	],,
	weaknesses: [
		{
			type: "Grass",
			value: "x2"
		},
	],,
	attacks: [
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				en: "Poison Horn",
			},
			effect: {
				en: "The Defending Pokémon is now Poisoned.",
			},
			damage: 20,
		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Fighting",
				"Fighting",
			],
			name: {
				en: "Rolling Thunder",
			},
			effect: {
				en: "Flip a coin, If heads, this attack does 10 damage to each of your opponent's Benched Pokémon. If tails, this attack does 10 damage to each of your Benched Pokémon. (Don't apply Weakness or Resistance for Benched Pokémon.)",
			},
			damage: 50,
		},
	],,
	stage: "Stage2",
	types: [
		"Colorless"
	],
	hp: 100,
	dexId: [34],
	trainerType: "Tool",
	set: Set,

	effect: {
		en: "Attach Strength Charm to 1 of your Pokémon that doesn't have a Pokémon Tool attached to it. Whenever an attack from the Pokémon that Strength Charm is attached to does damage (after applying Weakness and Resistance), the attack does 10 more damage. At the end of your turn in which this happens, discard Strength Charm.",
		fr: "Attachez Fétiche de force à un de vos Pokémon qui n'a pas d'Outil Pokémon attaché à lui.\n\nÀ chaque fois qu'une attaque du Pokémon sur lequel est attachée Fétiche de force inflige des dégâts (après application de la Faiblesse et de la Résistance), cette attaque inflige 10 dégâts supplémentaires. À la fin de votre tour où cet effet a lieu, défaussez-vous de Fétiche de force.",
		de: "Falls das Pokémon, an das das Stärke-Amulett angelegt ist, mit einem Angriff Schaden zufügt (nachdem Schwäche und Resistenz verrechnet wurden), fügt der Angriff 10 weitere Schadenspunkte zu. Lege am Ende des Zuges, in dem dies geschieht, das Stärke-Amulett auf den Ablagestapel."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 89577,
				cardmarket: 275025
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 89577,
				cardmarket: 275025
			},
		},
	],
	retreat: 3,
}

export default card
