import { Card } from '../../../interfaces'
import Set from '../Triumphant'

const card: Card = {
	name: {
		en: "Black Belt",
		fr: "Karatéka",
	},
	illustrator: "Kanako Eo",
	rarity: "Uncommon",
	category: "Trainer",

	set: Set,











	effect: {
		fr: "Vous ne pouvez jouer qu'une seule carte Supporter par tour. Lorsque vous jouez cette carte, placez-la près de votre Pokémon Actif. Une fois votre tour terminé, défaussez cette carte.",
		en: "You may use this card only if you have more Prize cards left than your opponent. During this turn, each of your Active Pokémon’s attacks does 40 more damage to your opponent’s Active Pokémon (before applying Weakness and Resistance)."
	},
	trainerType: "Supporter",

}

export default card
