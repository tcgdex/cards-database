import { Card } from 'models/database/card'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		'en-us': "Counterattack Claws",
		'fr-fr': "Griffes de défense",
		'de-de': "Gegenangriffs-Klauen"
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'en-us': "Attach Counterattack Claws to 1 of your Pokémon that doesn't have a Pokémon Tool attached to it. During your opponent's turn, if the Pokémon Counterattack Claws is attached to is your Active Pokémon and an opponent's attack damages it (even if it is Knocked Out), flip a coin. If heads, put 2 damage counters on the Defending Pokémon. Then, discard Counterattack Claws.",
		'fr-fr': "Attachez Griffes de défense à un de vos Pokémon qui n'a pas d'Outil Pokémon attaché à lui.\n\nPendant le tour de votre adversaire, si Griffes de défense est attachée à votre Pokémon Actif et si l'attaque de votre adversaire lui inflige des dégâts (même s'il est mis K.O.), lancez une pièce. Si c'est face, placez 2 marqueurs de dégâts sur le Pokémon Actif. Défaussez-vous ensuite de Griffes de défense.",
		'de-de': "During your opponent´s turn, if the Pokémon Counterattack Claws is attached to is your Active Pokémon and an opponent´s attack damage it (even if it is Knocked Out), flip a coin. If heads, put 2 damage counters on the Defending Pokémon. Then, discard Counterattack Claws."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274749,
				tcgplayer: 84448
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274749,
				tcgplayer: 84448
			}
		}
	]
}

export default card
