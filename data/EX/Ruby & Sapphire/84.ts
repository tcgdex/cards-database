import { Card } from '../../../interfaces'
import Set from '../Ruby & Sapphire'

const card: Card = {
	name: {
		en: "Lum Berry",
		fr: "Baie Prine",
		de: "Prunusbeere"
	},

	illustrator: "Kazuo Yazawa",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Tool",

	effect: {
		en: "Attach Lum Berry to 1 of your Pokémon that doesn't already have a Pokémon Tool attached to it. If that Pokémon is Knocked Out, discard this card. At any time between turns, if the Pokémon this card is attached to is affected by any Special Conditions, remove all of them. Then discard Lum Berry.",
		fr: "Attachez Baie Prine à un de vos Pokémon qui n'a pas déjà d'Outil Pokémon. Si ce Pokémon est mis K.O., défaussez-cette carte.\n\nÀ la fin de chaque tour, si le Pokémon auquel cette carte est attachée possède des États Spéciaux, retirez-les lui tous. Ensuite, défaussez Baie Prine.[1]",
		de: "Wenn zu irgendeinem Zeitpunkt zwischen den Zügen das Pokémon, an dem die Prunusbeere angelegt ist, von einem Speziellen Zustand betroffen ist, verlieren alle Speziellen Zustände auf diesem Pokémon ihre Wirkung. Lege Prunusbeere danach auf deinen Ablagestapel."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 275732,
				tcgplayer: 86919
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275732,
				tcgplayer: 86919
			}
		},
	],

	retreat: 0
}

export default card
