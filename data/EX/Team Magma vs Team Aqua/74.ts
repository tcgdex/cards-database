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
		de: "Immer wenn ein Angriff des Pokémons, an das Stärkezauber angelegt ist, dem verteidigenden Pokémon Schaden zufügt (nachdem Schwäche und Resistenz verrechnet werden), fügt die Attacke 10 Schadenspunkte mehr zu. Am Ende eines solchen Zuges, lege diese Karte ab."
	},

	thirdParty: {
		cardmarket: 276051,
		tcgplayer: 89578
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse",
		}
	]
}

export default card
