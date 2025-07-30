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
		fr: "Attachez Sort de force à 1 de vos Pokémon qui ne possède pas déjà d'Outil Pokémon. Si ce Pokémon est mis KO, défaussez cette carte.\n\nDès qu'une attaque du Pokémon auquel est attaché Sort de force inflige des dégâts au Pokémon Actif, (avant application de la Faiblesse et de la Résistance), l'attaque inflige 10 dégâts supplémentaires. À la fin du tour au cours duquel l'attaque a été utilisée, défaussez Sort de force.",
		de: "Immer wenn ein Angriff des Pokémons, an das Stärkezauber angelegt ist, dem verteidigenden Pokémon Schaden zufügt (nachdem Schwäche und Resistenz verrechnet werden), fügt die Attacke 10 Schadenspunkte mehr zu. Am Ende eines solchen Zuges, lege diese Karte ab."
	},

	thirdParty: {
		cardmarket: 276051
	}
}

export default card
