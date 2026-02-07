import { Card } from '../../../interfaces'
import Set from '../POP Series 4'

const card: Card = {
	name: {
		en: "Heal Energy",
		fr: "Énergie guérisseuse"
	},

	illustrator: "Takumi Akabane",
	rarity: "Uncommon",
	category: "Energy",
	set: Set,
	energyType: "Special",

	effect: {
		en: "Heal Energy provides Colorless Energy. When you attach this card from your hand to 1 of your Pokémon, remove 1 damage counter and all Special Conditions from that Pokémon. If Heal Energy is attached to Pokémon-ex, Heal Energy has no effect other than providing Energy.",
		fr: "Énergie guérisseuse fournit une Énergie . Lorsque vous l'attachez de votre main à 1 de vos Pokémon, retirez à ce Pokémon 1 marqueur de dégât et tous ses États Spéciaux. Si Énergie guérisseuse est attachée à un Pokémon-ex, elle n'a pas d'autre effet que de fournir de l'Énergie."
	},

	variants: [
		{ type: 'normal', size: 'standard' }
	],

	thirdParty: {
		cardmarket: 277473,
		tcgplayer: 86038
	}
}

export default card
