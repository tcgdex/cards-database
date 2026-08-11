import { Card } from '../../../interfaces'
import Set from '../Dragon Frontiers'

const card: Card = {
	name: {
		en: "Strength Charm",
		fr: "Fétiche de force",
		de: "Stärkeamulett"
	},

	illustrator: "Shizurow",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Tool",

	effect: {
		en: "Attach Strength Charm to 1 of your Pokémon that doesn't already have a Pokémon Tool attached to it. If that Pokémon is Knocked Out, discard this card. Whenever an attack from the Pokémon that Strength Charm is attached to does damage to the Active Pokémon, this attack does 10 more damage (before applying Weakness and Resistance). Discard Strength Charm at the end of the turn in which this Pokémon attacks.",
		fr: "Attachez Fétiche de force à 1 de vos Pokémon qui ne possède pas déjà d'Outil Pokémon. Si ce Pokémon est mis K.O, défaussez cette carte.\n\nLorsqu'une attaque du Pokémon auquel Fétiche de force est attachée inflige des dégâts au Pokémon Actif, cette attaque inflige 10 dégâts supplémentaires (avant application de la Faiblesse et de la Résistance). Défaussez Fétiche de force à la fin du tour au cours duquel ce Pokémon attaque.",
		de: "Wenn ein Angriff des Pokémon, an dem Stärkeamulett angelegt ist, Aktiven Pokémon Schaden zufügt (bevor Schwäche und Resistenz verrechnet werden), fügt dieser Angriff 10 weitere Schadenspunkte zu. Wenn das Pokémon angreift, lege Stärkeamulett am Ende des Zuges auf den Ablagestapel."
	},

	thirdParty: {
		cardmarket: 277286,
		tcgplayer: 89576
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		},
		{
			type: "normal",
			stamp: ["jeremy-scharff-kim"]
		}
	]
}

export default card
