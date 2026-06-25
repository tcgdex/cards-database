import { Card } from '../../../interfaces'
import Set from '../Celebrations'

const card: Card = {
	dexId: [786],
	set: Set,

	name: {
		en: "Tapu Lele GX",
		fr: "Tokopiyon-GX"
	},

	illustrator: "5ban Graphics",
	rarity: "Classic Collection",
	category: "Pokemon",
	hp: 170,
	types: ["Psychic"],
	stage: "Basic",
	suffix: "GX",

	abilities: [{
		type: "Ability",

		name: {
			en: "Wonder Tag",
			fr: "Relais Miracle"
		},

		effect: {
			en: "When you play this Pokémon from your hand onto your Bench during your turn, you may search your deck for a Supporter card, reveal it, and put it into your hand. Then, shuffle your deck.",
			fr: "Lorsque vous jouez ce Pokémon de votre main sur votre Banc pendant votre tour, vous pouvez chercher une carte Supporter dans votre deck, la montrer et l'ajouter à votre main. Mélangez ensuite votre deck."
		}
	}],

	attacks: [{
		name: {
			en: "Energy Drive",
			fr: "Propulsion d'Énergie"
		},

		effect: {
			en: "This attack does 20 damage times the amount of Energy attached to both Active Pokémon. This damage isn't affected by Weakness or Resistance.",
			fr: "Cette attaque inflige 20 dégâts multipliés par le nombre d'Énergies attachées aux deux Pokémon Actifs. Ces dégâts ne sont pas affectés par la Faiblesse ou la Résistance."
		},

		damage: "20×",
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			en: "Tapu Cure GX",
			fr: "Toko Soins GX"
		},

		effect: {
			en: "Heal all damage from 2 of your Benched Pokémon. (You can't use more than 1 GX attack in a game.)",
			fr: "Soignez tous les dégâts de 2 de vos Pokémon de Banc. (Vous ne pouvez utiliser qu'une attaque GX par partie.)"
		},

		cost: ["Psychic"]
	}],

	retreat: 1,

	variants: {
		normal: false,
		reverse: false
	},

	thirdParty: {
		cardmarket: 576795
	}
}

export default card
