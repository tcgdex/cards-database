import { Card } from '../../../interfaces'
import Set from '../Legend Maker'

const card: Card = {
	name: {
		en: "Shiftry",
		fr: "Tengalice"
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		275,
	],
	hp: 110,
	types: [
		"Darkness",
	],
	evolveFrom: {
		en: "Nuzleaf",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Evolutionary Fan",
				fr: "Ventilateur évolutif"
			},
			effect: {
				en: "Once during your turn, when you play Shiftry from your hand to evolve 1 of your Pokémon, you may choose 1 of your Evolved Pokémon in play (excluding any Shiftry). Return that Pokémon and all cards attached to it to your hand.",
				fr: "Une seule fois lors de votre tour, lorsque vous jouez Tengalice de votre main pour faire évoluer 1 de vos Pokémon, vous pouvez choisir 1 des Pokémon Évolués que vous avez en jeu (Tengalice excepté). Reprenez dans votre main ce Pokémon ainsi que toutes les cartes qui lui sont attachées."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Reactive Beating",
				fr: "Râclée réactive"
			},
			effect: {
				en: "If Shiftry has any React Energy cards attached to it, the Defending Pokémon is now Confused.",
				fr: "Si Tengalice possède des cartes Énergie réaction, le Pokémon Défenseur est maintenant Confus."
			},
			damage: 30,

		},
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Cross-Cut",
				fr: "Coupe transversale"
			},
			effect: {
				en: "If the Defending Pokémon is an Evolved Pokémon, this attack does 40 damage plus 30 more damage.",
				fr: "Si le Pokémon Défenseur est un Pokémon Évolué, cette attaque inflige 40 dégâts plus 30 dégâts supplémentaires."
			},
			damage: "40+",

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
			type: "Psychic",
			value: "-30"
		},
	],




}

export default card
