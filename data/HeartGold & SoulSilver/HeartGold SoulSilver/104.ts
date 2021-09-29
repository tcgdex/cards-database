import { Card } from '../../../interfaces'
import Set from '../HeartGold SoulSilver'

const card: Card = {
	name: {
		en: "Rainbow Energy",
		fr: "Énergie multicolore",
	},

	illustrator: "Kent Kanetsuna",
	rarity: "Uncommon",
	category: "Energy",
	set: Set,

	effect: {
		fr: "Attachez une énergie Multicolore à l’un de vos Pokémon. En jeu, l’énergie multicolore fournit tout type d’énergie, mais une seule énergie à la fois. (Fournit uniquement de l’énergie.) Lorsque vous attachez cette carte de votre main à l’un de vos Pokémon, placez un marqueur de dégâts sur ce Pokémon. (Lorsqu’elle n’est pas en jeu, l’énergie multicolore compte comme de l’énergie Colorless.)",
		en: "Attach Rainbow Energy to 1 of your Pokémon. While in play, Rainbow Energy provides every type of Energy but provides only 1 Energy at a time. (Has no effect other than providing Energy.) When you attach this card from your hand to 1 of your Pokémon, put 1 damage counter on that Pokémon. (While not in play, Rainbow Energy counts as Colorless Energy.)"
	},

	energyType: "Special",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	hp: 0
}

export default card
