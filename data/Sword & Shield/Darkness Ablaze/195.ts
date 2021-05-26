import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	name: {
		en: "Pokémon Breeder’s Nurturing",
		fr: "Soins de l’Éleveur de Pokémon"
	},

	illustrator: "kirisAki",
	rarity: "Rare",
	category: "Trainer",
	set: Set,

	effect: {
		en: "Choose up to 2 of your Pokémon in play. For each of those Pokémon, search your deck for a card that evolves from that Pokémon and put it onto that Pokémon to evolve it. Then, shuffle your deck. You can’t use this card during your first turn or on a Pokémon that was put into play this turn.",
		fr: "Choisissez jusqu’à 2 de vos Pokémon en jeu. Pour chacun de ces Pokémon, cherchez dans votre deck une carte Évolution de ce Pokémon-là, puis placez-la sur ce dernier pour le faire évoluer. Mélangez ensuite votre deck. Vous ne pouvez utiliser cette carte ni pendant votre premier tour ni sur un Pokémon qui a été mis en jeu pendant ce tour."
	},

	trainerType: "Supporter"
}

export default card
