import { Card } from '../../../interfaces'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		en: "Counterattack Claws",
		fr: "Griffes de défense",
		de: "Gegenangriffs-Klauen"
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Attachez Griffes de défense à un de vos Pokémon qui n'a pas d'Outil Pokémon attaché à lui.\n\nPendant le tour de votre adversaire, si Griffes de défense est attachée à votre Pokémon Actif et si l'attaque de votre adversaire lui inflige des dégâts (même s'il est mis K.O.), lancez une pièce. Si c'est face, placez 2 marqueurs de dégâts sur le Pokémon Actif. Défaussez-vous ensuite de Griffes de défense.",
		de: "During your opponent´s turn, if the Pokémon Counterattack Claws is attached to is your Active Pokémon and an opponent´s attack damage it (even if it is Knocked Out), flip a coin. If heads, put 2 damage counters on the Defending Pokémon. Then, discard Counterattack Claws."
	},

	thirdParty: {
		cardmarket: 274749,
		tcgplayer: 84448
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
