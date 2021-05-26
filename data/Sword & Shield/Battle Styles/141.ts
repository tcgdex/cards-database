import { Card } from '../../../interfaces'
import Set from '../Battle Styles'

const card: Card = {
	set: Set,

	name: {
		en: "Single Strike Energy",
		fr: "Énergie Poing Final"
	},

	rarity: "Uncommon",
	category: "Energy",

	effect: {
		en: "This card can only be attached to a Single Strike Pokémon. If this card is attached to anything other than a Single Strike Pokémon, discard this card.\nAs long as this card is attached to a Pokémon, it provides Fighting and Darkness Energy but provides only 1 Energy at a time, and the attacks of the Pokémon this card is attached to do 20 more damage to your opponent’s Active Pokémon (before applying Weakness and Resistance).",
		fr: "Cette carte ne peut être attachée qu’à un Pokémon Poing Final. Si cette carte est attachée à autre chose qu’un Pokémon Poing Final, défaussez-la.\nTant que cette carte est attachée à un Pokémon, elle fournit de l’Énergie Fighting et Darkness (mais seulement une Énergie à la fois), et les attaques du Pokémon auquel cette carte est attachée infligent 20 dégâts supplémentaires au Pokémon Actif de votre adversaire (avant application de la Faiblesse et de la Résistance)."
	},

	energyType: "Special"
}

export default card