import { Card } from '../../../interfaces'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		en: "EXP.ALL",
		fr: "Multi expédition",
		de: "EXP.ALL*"
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Rare",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Attachez Multi expédition à un de vos Pokémon qui n'a pas d'Outil Pokémon attaché à lui.\n\nPendant le tour de votre adversaire, si votre Pokémon Actif doit être mis K.O. par l'attaque de votre adversaire, vous pouvez prendre une des cartes Énergie de base attachées à votre Pokémon Actif et l'attacher au Pokémon ayant Multi expédition attachée à lui. Si vous le faites, défaussez-vous de Multi expédition.",
		de: "During your opponent's turn, if your Active Pokémon would be Knocked Out by your opponent's attack, you may take 1 of the basic Energy cards attached to your Active Pokémon and attach it to the Pokémon with EXP.ALL attached to it. If you do, discard EXP.ALL."
	},

	thirdParty: {
		tcgplayer: 85367
	}
}

export default card
