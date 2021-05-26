import { Card } from '../../../interfaces'
import Set from '../Ultra Prism'

const card: Card = {
	name: {
		en: "Xurkitree-GX",
		fr: "Câblifère-GX",
	},
	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		796,
	],
	hp: 180,
	types: [
		"Lightning",
	],


	suffix: "GX",
	abilities: [
		{
			type: "Ability",
			name: {
				en: "Flashing Head",
				fr: "Tête Clignotante",
			},
			effect: {
				en: "Prevent all damage done to this Pokémon by attacks from your opponent's Pokémon that have any Special Energy attached to them.",
				fr: "Évitez tous les dégâts d’attaque infligés à ce Pokémon par les Pokémon de votre adversaire auxquels est attachée de l’Énergie spéciale.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Rumbling Wires",
				fr: "Câbles Grondants",
			},
			effect: {
				en: "Discard the top card of your opponent's deck.",
				fr: "Défaussez la première carte du dessus du deck de votre adversaire.",
			},
			damage: 100,

		},
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Lighting-GX",
				fr: "Éclair-GX",
			},
			effect: {
				en: "Your opponent reveals their hand. Add a card you find there to their Prize cards face down. (You can't use more than 1 GX attack in a game.)",
				fr: "Votre adversaire dévoile sa main. Ajoutez une des cartes que vous y trouvez à ses cartes Récompense, face cachée. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
			},

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],
	retreat: 2,



}

export default card
