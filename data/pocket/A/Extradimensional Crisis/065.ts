import { Card } from "models/database/card"
import Set from "../Extradimensional Crisis"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Electrical Cord",
		'fr-fr': "Câble Électrique"
	},

	illustrator: "Toyste Beach",
	rarity: "Two Diamond",
	category: "Trainer",

	effect: {
		'en-us': "If the {L} Pokémon this card is attached to is in the Active Spot and is Knocked Out by damage from an attack from your opponent's Pokémon, move 2 {L} Energy from that Pokémon and attach 1 Energy each to 2 of your Benched Pokémon.",
		'fr-fr': "Si le Pokémon {L} auquel cette carte est attachée est sur le Poste Actif et qu'il est mis K.O. par les dégâts d'une attaque d'un Pokémon de votre adversaire, déplacez 2 Énergies {L} de ce Pokémon et attachez une Énergie à 2 de vos Pokémon de Banc."
	},

	trainerType: "Tool"
}

export default card
