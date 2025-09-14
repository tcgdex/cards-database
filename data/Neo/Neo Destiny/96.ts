import { Card } from '../../../interfaces'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		en: "Thought Wave Machine (Rocket's Secret Machine)",
		fr: "Machine à ondes cérébrales",
		de: "Thought Wave Machine*"
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "Rare",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Lancez une pièce jusqu'à obtenir pile. Pour chaque face, renvoyez une carte Énergie attachée au Pokémon Actif de votre adversaire dans sa main. Si le Pokémon a moins de cartes Énergie, renvoyez-les toutes dans sa main. Votre tour est terminé (vous ne pouvez pas attaquer).",
		de: "Flip a coin until you get tails. For each heads, return an Energy card attached to your opponent's Active Pokémon to your opponent's hand. If the Pokémon has fewer attached Energy cards than that, return all of them to your opponent's hand. Your turn is over now (you don't get to attack)."
	},

	thirdParty: {
		tcgplayer: 89898
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["1st edition"]
		}
	]
}

export default card
