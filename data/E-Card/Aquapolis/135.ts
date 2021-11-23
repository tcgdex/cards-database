import { Card } from '../../../interfaces'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		en: "Time Shard",
		fr: "Écharde temporelle"
	},

	illustrator: "Shin-ichi Yoshikawa",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Attachez Écharde temporelle à un de vos Pokémon qui n'a pas d'Outil Pokémon attaché à lui. Si ce Pokémon est mis K.O., défaussez-vous de cette carte.\n\nSi le Pokémon auquel cette carte est attachée est mis K.O. à la suite de dégâts infligés par l'attaque du Pokémon Défenseur pendant le tour de votre adversaire, vous pouvez renvoyer dans votre main jusqu'à 2 cartes Énergie de base attachées à votre Pokémon Actif."
	}
}

export default card
