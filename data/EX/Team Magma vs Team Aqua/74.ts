import { Card } from '../../../interfaces'
import Set from '../Team Magma vs Team Aqua'

const card: Card = {
	name: {
		en: "Strength Charm",
		fr: "Sort de force"
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Tool",

	effect: {
		fr: "Attachez Sort de force à 1 de vos Pokémon qui ne possède pas déjà d'Outil Pokémon. Si ce Pokémon est mis KO, défaussez cette carte.\n\nDès qu'une attaque du Pokémon auquel est attaché Sort de force inflige des dégâts au Pokémon Actif, (avant application de la Faiblesse et de la Résistance), l'attaque inflige 10 dégâts supplémentaires. À la fin du tour au cours duquel l'attaque a été utilisée, défaussez Sort de force."
	}
}

export default card
