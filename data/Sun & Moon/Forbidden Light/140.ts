import { Card } from '../../../interfaces'
import Set from '../Forbidden Light'

const card: Card = {
	name: {
		en: "Ultra Necrozma-GX",
		fr: "Ultra-Necrozma-GX",
	},
	illustrator: "PLANETA Igarashi",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		800,
	],
	hp: 190,
	types: [
		"Dragon",
	],


	suffix: "GX",

	attacks: [
		{
			cost: [
				"Psychic",
				"Metal",
			],
			name: {
				en: "Photon Geyser",
				fr: "Photo-Geyser",
			},
			effect: {
				en: "Discard all basic Psychic Energy from this Pokémon. This attack does 80 more damage for each card you discarded in this way.",
				fr: "Défaussez toute l’Énergie Psychic de base de ce Pokémon. Cette attaque inflige 80 dégâts supplémentaires pour chaque carte défaussée de cette façon.",
			},
			damage: 20,

		},
		{
			cost: [
				"Psychic",
				"Metal",
			],
			name: {
				en: "Sky-Scorching Light-GX",
				fr: "Lumière Apocalyptique-GX",
			},
			effect: {
				en: "You can use this attack only if the total of both players' remaining Prize cards is 6 or less. Put 6 damage counters on each of your opponent's Pokémon. (You can't use more than 1 GX attack in a game.)",
				fr: "Vous ne pouvez utiliser cette attaque que s’il reste un total de 6 cartes Récompense ou moins aux deux joueurs. Placez 6 marqueurs de dégâts sur chacun des Pokémon de votre adversaire. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
			},

		},
	],
	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
