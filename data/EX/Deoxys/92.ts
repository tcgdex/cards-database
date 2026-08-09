import { Card } from '../../../interfaces'
import Set from '../Deoxys'

const card: Card = {
	name: {
		en: "Strength Charm",
		fr: "Fétiche de force",
		de: "Stärkeamulett"
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Tool",

	effect: {
		en: "Attach Strength Charm to 1 of your Pokémon that doesn't already have a Pokémon Tool attached to it. If that Pokémon is Knocked Out, discard this card. Whenever an attack from the Pokémon that Strength Charm is attached to does damage to the Active Pokémon, the attack does 10 more damage (before applying Weakness and Resistance). Discard Strength Charm at the end of the turn in which this Pokémon attacks.",
		fr: "Attachez Fétiche de force à 1 de vos Pokémon qui ne possède pas déjà d'Outil Pokémon. Si ce Pokémon est mis K.O., défaussez-la.\n\nDès que le Pokémon auquel est attaché Fétiche de force inflige des dégâts au Pokémon Actif, cette attaque inflige 10 dégâts supplémentaires (avant application de la Faiblesse et de la Résistance). Défaussez Fétiche de force à la fin du tour au cours duquel ce Pokémon attaque.",
		de: "Whenever an attack from the Pokémon that Strength Charm is attached to does damage to the Active Pokémon, the attack does 10 more damage (before applying Weakness and Resistance). Discard Strength Charm at the end of the turn in which this Pokémon attacks."
	},


	variants: [
		{
			type: "reverse",
			stamp: ["set-logo"],
			thirdParty: {
				tcgplayer: 89575,
				cardmarket: 276495
			},
		},
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 89575,
				cardmarket: 276495
			},
		},
		{
			type: "normal",
			stamp: ["michael-gonzalez"],
			thirdParty: {
				tcgplayer: 477590,
				cardmarket: 871577
			},
		},
		{
			type: "normal",
			stamp: ["jimmy-ballard"],
			thirdParty: {
				tcgplayer: 477969,
				cardmarket: 869584
			},
		},
	],

}

export default card
