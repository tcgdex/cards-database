import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	name: {
		en: "Hero’s Medal",
		fr: "Médaille du Héros"
	},

	illustrator: "Toyste Beach",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		en: "The Pokémon VMAX this card is attached to gets -100 HP, and if it is Knocked Out by damage from an attack from your opponent’s Pokémon, that player takes 1 fewer Prize card. You can’t attach this card to a Pokémon VMAX that has 100 HP or less remaining.",
		fr: "Le Pokémon-VMAX auquel cette carte est attachée perd 100 PV, et s’il est mis K.O. par les dégâts d’une attaque d’un Pokémon de votre adversaire, ce dernier récupère une carte Récompense de moins. Vous ne pouvez pas attacher cette carte à un Pokémon-VMAX auquel il reste 100 PV ou moins."
	},

	trainerType: "Tool",
	regulationMark: "D"
}

export default card
