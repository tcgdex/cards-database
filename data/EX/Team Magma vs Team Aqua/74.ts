import { Card } from '../../../interfaces'
import Set from '../Team Magma vs Team Aqua'

const card: Card = {
	name: {
		en: "Strength Charm",
		fr: "Sort de force",
		de: "Stärkeamulett"
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Tool",

	effect: {
		en: "Attach Strength Charm to 1 of your Pokémon that doesn't already have a Pokémon Tool attached to it. If that Pokémon is Knocked Out, discard this card. Whenever an attack from the Pokémon that Strength Charm is attached to does damage to the Active Pokémon (after applying Weakness and Resistance), the attack does 10 more damage. At the end of the turn in which this happens, discard Strength Charm.",
		fr: "Attachez Sort de force à 1 de vos Pokémon qui ne possède pas déjà d'Outil Pokémon. Si ce Pokémon est mis KO, défaussez cette carte.\n\nDès qu'une attaque du Pokémon auquel est attaché Sort de force inflige des dégâts au Pokémon Actif, (avant application de la Faiblesse et de la Résistance), l'attaque inflige 10 dégâts supplémentaires. À la fin du tour au cours duquel l'attaque a été utilisée, défaussez Sort de force.",
		de: "Lege Stärkeamulett an 1 deiner Pokémon an, das keine Pokémon-Ausrüstung hat. Wenn das Pokémon kampfunfähig gemacht wird, lege Stärkeamulett auf den Ablagestapel. Wenn ein Angriff des Pokémon, an dem Stärkeamulett angelegt ist, dem Aktiven Pokémon Schaden zufügt (bevor Schwäche und Resistenz verrechnet wurden), fügt der Angriff 10 zusätzliche Schadenspunkte zu. Lege Stärkeamulett am Ende des Zuges, in dem der Angriff stattfand, auf deinen Ablagestapel."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 275851,
				tcgplayer: 89578
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275851,
				tcgplayer: 89578
			}
		},
	],

	retreat: 0
}

export default card
