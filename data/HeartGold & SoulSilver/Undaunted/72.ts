import { Card } from '../../../interfaces'
import Set from '../Undaunted'

const card: Card = {
	name: {
		en: "Defender",
		fr: "Défenseur",
	},
	illustrator: "Ryo Ueda",
	rarity: "Uncommon",
	category: "Trainer",

	set: Set,











	effect: {
		fr: "Attachez Défenseur à l'un de vos Pokémon. Défaussez cette carte une fois le prochain tour de votre adversaire terminé. \nTous les dégâts d'attaque infligés par votre adversaire au Pokémon auquel Défenseur est attachée sont réduits de 20 (après application de la Faiblesse et de la Résistance).",
		en: "Attach Defender to 1 of your Pokémon. Discard this card  at the end of your opponent’s next turn. \nAny damage done to the Pokémon Defender is attached to by an opponent’s attack is reduced by 20 (after applying Weakness and Resistance)."
	},
	trainerType: "Item",

}

export default card
