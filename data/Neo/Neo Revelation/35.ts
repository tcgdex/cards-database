import { Card } from '../../../interfaces'
import Set from '../Neo Revelation'

const card: Card = {
	name: {
		en: "Parasect",
		fr: "Parasect",
		de: "Parasek"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		47,
	],

	hp: 60,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Paras",
		fr: "Paras"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Grass",
				"Grass",
			],
			name: {
				en: "Sleep Pinchers",
				fr: "Pince dodo",
				de: "Sleep Pinchers"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Asleep.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Endormi.",
				de: "Flip a coin. If heads, the Defending Pokémon is now Asleep."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	description: {
		fr: "Il se cache surtout dans les lieux froids et humides. Ce n'est pas l'insecte qui décide, mais les gros champignons qui lui poussent sur le dos et qui le contrôlent."
	},

	abilities: [{
		name: {
			fr: "Pollen allergique",
			de: "Allergic Pollen"
		},

		effect: {
			fr: "Tant que Parasect reste en jeu, les cartes des piles de défausse de tous les joueurs ne sont pas affectées par les attaques ou les Pouvoirs Pokémon. Ce pouvoir ne fonctionne pas si Parasect est Endormi, Confus ou Paralysé.",
			de: "As long as Parasect is in play, cards in any player's discard piles are not affected by attacks or Pokémon Powers. This power stops working, if Parasect becomes Asleep, Confused, or Paralyzed."
		},

		type: "Pokemon Power"
	}],

	thirdParty: {
		cardmarket: 274621,
		tcgplayer: 87955
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["1st-edition"]
		}
	]
}

export default card

