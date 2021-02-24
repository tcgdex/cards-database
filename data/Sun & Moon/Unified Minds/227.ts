import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Mawile-GX",
		fr: "Mysdibule-GX",
	},
	illustrator: "ConceptLab",
	rarity: "Ultra Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		303,
	],
	hp: 170,
	types: [
		"Metal",
	],


	suffix: "GX",
	abilities: [
		{
			type: "Ability",
			name: {
				en: "Captivating Wink",
				fr: "Œillade Envoûtante",
			},
			effect: {
				en: "When you play this Pokémon from your hand onto your Bench during your turn, you may have your opponent reveal their hand and put any number of Basic Pokémon you find there onto their Bench.",
				fr: "Lorsque vous jouez ce Pokémon de votre main sur votre Banc pendant votre tour, vous pouvez demander à votre adversaire de dévoiler sa main et de placer autant de Pokémon de base trouvés que vous voulez sur son Banc.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Metal",
				"Colorless",
			],
			name: {
				en: "Wily Bite",
				fr: "Morsure Maligne",
			},
			effect: {
				en: "This attack does 30 more damage for each of your opponent's Benched Pokémon.",
				fr: "Cette attaque inflige 30 dégâts supplémentaires pour chaque Pokémon de Banc de votre adversaire.",
			},
			damage: 10,

		},
		{
			cost: [
				"Metal",
				"Colorless",
			],
			name: {
				en: "Big Eater-GX",
				fr: "Gros Mangeur-GX",
			},
			effect: {
				en: "Your opponent reveals their hand. Discard all Supporter cards you find there. (You can't use more than 1 GX attack in a game.)",
				fr: "Votre adversaire dévoile sa main. Défaussez toutes les cartes Supporter que vous y trouvez. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
			},

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
