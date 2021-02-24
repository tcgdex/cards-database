import { Card } from '../../../interfaces'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		en: "Venusaur & Snivy-GX",
		fr: "Florizarre et Vipélierre-GX",
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		3,
	],
	hp: 270,
	types: [
		"Grass",
	],


	suffix: "TAG TEAM-GX",
	abilities: [
		{
			type: "Ability",
			name: {
				en: "Shining Vine",
				fr: "Liane Étincelante",
			},
			effect: {
				en: "Once during your turn, if this Pokémon is your Active Pokémon, when you attach a Grass Energy card from your hand to it, you may switch 1 of your opponent's Benched Pokémon with their Active Pokémon.",
				fr: "Une seule fois pendant votre tour, si ce Pokémon est votre Pokémon Actif, lorsque vous lui attachez une carte Énergie Grass de votre main, vous pouvez échanger l’un des Pokémon de Banc de votre adversaire avec son Pokémon Actif.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Forest Dump",
				fr: "Rejet Forestier",
			},

			damage: 160,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Solar Plant-GX",
				fr: "Plante Solaire-GX",
			},
			effect: {
				en: "This attack does 50 damage to each of your opponent's Pokémon. If this Pokémon has at least 2 extra Energy attached to it (in addition to this attack's cost), heal all damage from all of your Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.) (You can't use more than 1 GX attack in a game.)",
				fr: "Cette attaque inflige 50 dégâts à chacun des Pokémon de votre adversaire. Si au moins 2 Énergies supplémentaires sont attachées à ce Pokémon (en plus du coût de cette attaque), soignez tous les dégâts de vos Pokémon. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.) (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
			},

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
