import { Card } from '../../../interfaces'
import Set from '../Platinum'

const card: Card = {
	name: {
		en: "PlusPower",
		fr: "PlusPower",
		de: "PlusPower"
	},

	illustrator: "Ryo Ueda",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		en: "Attach PlusPower to 1 of your Pokémon. Discard this card at the end of your turn. If the Pokémon PlusPower is attached to attacks, the attack does 10 more damage to the Active Pokémon (before applying Weakness and Resistance).",
		fr: "Attachez PlusPower à 1 de vos Pokémon. Défaussez cette carte à la fin de votre tour.\n\nSi le Pokémon auquel PlusPower est attachée attaque, cette attaque inflige 10 dégâts supplémentaires au Pokémon Actif (avant application de la Faiblesse et de la Résistance).",
		de: "Attach PlusPower to 1 of your Pokémon. Discard this card at the end of your turn.\n\nIf the Pokémon PlusPower is attached to attacks, the attack does 10 more damage to the Active Pokémon (before applying Weakness and Resistance)."
	},

	trainerType: "Item",

	variants: [		{
			type:"normal",
			thirdParty: {
				tcgplayer: 88178,
				cardmarket: 278533
			}
		},
		{
			type:"reverse",
			thirdParty: {
				cardmarket: 278533,
				tcgplayer: 88178
			}
		},
		{
			type:"reverse",
			foil: "player-reward",
			thirdParty: {
				cardmarket: 278533,
				tcgplayer: 123186
			}
		}
	],

	retreat: 0
}

export default card
