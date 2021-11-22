import { Card } from '../../../interfaces'
import Set from '../XY'

const card: Card = {
	name: {
		en: "Rainbow Energy",
		fr: "Énergie Multicolore",
	},
	illustrator: "5ban Graphics",
	rarity: "Uncommon",
	category: "Energy",

	set: Set,











	effect: {
		fr: "Cette carte fournit de l'Énergie Colorless. Pendant que cette carte est en jeu, elle fournit n'importe quel type d'Énergie mais ne fournit qu'une Énergie à la fois. Lorsque vous attachez cette carte de votre main à l'un de vos Pokémon, placez un marqueur de dégâts sur le Pokémon auquel l'Énergie a été attachée.",
		en: "Attach Rainbow Energy to 1 of your Pokémon. While in play, Rainbow Energy provides every type of Energy but provides only 1 Energy at a time. (Has no effect other than providing Energy.) When you attach this card from your hand to 1 of your Pokémon, put 1 damage counter on that Pokémon. (While not in play, Rainbow Energy counts as Colorless Energy.)"
	},

energyType: "Special",
}

export default card
