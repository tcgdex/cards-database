import { Card } from '../../../interfaces'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,

	variants: {
		normal: false,
		reverse: false,
		holo: false,
		firstEdition: false
	},

	name: {
		en: "Rayquaza VMAX",
		fr: "Rayquaza VMAX",
		es: "Rayquaza VMAX",
		it: "Rayquaza VMAX",
		pt: "Rayquaza VMAX",
		de: "Rayquaza VMAX"
	},

	rarity: "Secret Rare",
	category: "Pokemon",
	hp: 320,
	types: ["Dragon"],
	stage: "VMAX",
	illustrator: "PLANETA Mochizuki",
	dexId: [384],

	evolveFrom: {
		en: "Rayquaza V",
		fr: "Rayquaza-V",
		es: "Rayquaza V",
		it: "Rayquaza-V",
		pt: "Rayquaza V",
		de: "Rayquaza-V"
	},

	abilities: [{
		type: "Ability",

		name: {
			en: "Azure Pulse",
			fr: "Pouls Azur"
		},

		effect: {
			en: "Once during your turn, you may discard your hand and draw 3 cards.",
			fr: "Une fois pendant votre tour, vous pouvez défausser votre main et piocher 3 cartes."
		}
	}],

	attacks: [{
		cost: ["Fire", "Lightning"],

		name: {
			en: "Max Burst",
			fr: "Détonomax"
		},

		effect: {
			en: "You may discard any amount of basic Fire Energy or any amount of basic Lightning Energy from this Pokémon. This attack does 80 more damage for each card you discarded in this way.",
			fr: "Vous pouvez défausser autant d'Énergies  de base ou autant d'Énergies  de base que vous le voulez de ce Pokémon. Cette attaque inflige 80 dégâts supplémentaires pour chaque carte défaussée de cette façon."
		},

		damage: "20+"
	}],

	retreat: 2,
	regulationMark: "E",

	thirdParty: {
		cardmarket: 574159,
		tcgplayer: 246731
	}
}

export default card
