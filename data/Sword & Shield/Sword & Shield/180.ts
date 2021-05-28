import { Card } from '../../../interfaces'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		en: "Rare Candy",
		fr: "Super Bonbon",
	},

	illustrator: "Yoshinobu Saito",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		en: "Choose 1 of your Basic Pokémon in play. If you have a Stage 2 card in your hand that evolves from that Pokémon, put that card onto the Basic Pokémon to evolve it, skipping the Stage 1. You can’t use this card during your first turn or on a Basic Pokémon that was put into play this turn.",
		fr: "Choisissez l’un de vos Pokémon de base en jeu. Si vous avez dans votre main une Évolution de Niveau 2 de ce Pokémon-là, placez celle-ci sur le Pokémon de base pour le faire évoluer, sans passer par le Niveau 1. Vous ne pouvez utiliser cette carte ni pendant votre premier tour ni sur un Pokémon de base qui a été mis en jeu pendant ce tour."
	},

	trainerType: "Item",
	regulationMark: "D"
}

export default card
