import { Card } from 'models/database/card'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		'en-us': "Dark Gengar",
		'fr-fr': "Ectoplasma obscur",
		'de-de': "Dunkles Gengar"
	},

	illustrator: "Aya Kusube",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		94,
	],

	hp: 70,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Haunter",
		'fr-fr': "Spectrum obscur"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				'en-us': "Deep Sleep",
				'fr-fr': "Gros dodo",
				'de-de': "Deep Sleep"
			},
			effect: {
				'en-us': "As long as any Dark Gengar are in play, a player flips 2 coins for each of his or her Pokémon that is Asleep at the end of each turn. If either of them is tails, that Pokémon is still Asleep. This power stops working if Dark Gengar is Asleep, Confused, or Paralyzed.",
				'fr-fr': "Tant qu'il y a un Ectoplasma obscur en jeu, chaque joueur lance 2 pièces à la fin de chaque tour pour chacun de ses Pokémon Endormis. Si vous obtenez au moins 1 pile, ce Pokémon reste Endormi. Ce pouvoir cesse de fonctionner si Ectoplasma obscur est Endormi, Confus ou Paralysé.",
				'de-de': "As long as any Dark Gengar are in play, a player flips 2 coins for each of his or her Pokémon that is Asleep at the end of each turn. If either of them is tails, that Pokémon is still Asleep. This power stops working while Dark Gengar is Asleep, Confused, or Paralyzed."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
				"Psychic",
				"Psychic",
			],
			name: {
				'en-us': "Pull In",
				'fr-fr': "Rangement",
				'de-de': "Pull In"
			},
			effect: {
				'en-us': "If your opponent has any Benched Pokémon, you may choose 1 of them and switch it with the Defending Pokémon (before doing damage or other effects of this attack). Either way, the Defending Pokémon is now Asleep.",
				'fr-fr': "Si votre adversaire a des Pokémon sur son Banc, vous pouvez choisir l'un d'entre eux et l'échanger contre le Pokémon Défenseur (avant d'infliger les dégâts ou d'autres effets de cette attaque). Dans tous les cas, le Pokémon Défenseur est maintenant Endormi.",
				'de-de': "If your opponent has any Benched Pokémon, you may choose 1 of them and switch it with the Defending Pokémon (before doing damage or other effects of this attack). Either way, the Defending Pokémon is now Asleep."
			},
			damage: 30,

		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],
	retreat: 2,


	description: {
		'en-us': "It absorbs the heat in the air around it. If you suddenly feel cold, it's because a Gengar has appeared.",
		'fr-fr': "Il absorbe la chaleur de l'air autour de lui. Si vous avez soudain très froid, c'est qu'un Ectoplasma vient d'apparaître."
	},


	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 274658,
				tcgplayer: 84599
			}
		},
		{
			type: "holo",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274658,
				tcgplayer: 84599
			}
		}
	]
}

export default card
