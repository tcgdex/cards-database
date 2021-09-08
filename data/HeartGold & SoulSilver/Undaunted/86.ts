import { Card } from '../../../interfaces'
import Set from '../Undaunted'

const card: Card = {
	name: {
		en: "Umbreon",
		fr: "Noctali",
	},
	illustrator: "Hideaki Hakozaki",
	rarity: "Ultra Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		197,
	],
	hp: 100,
	types: [
		"Darkness",
	],
	evolveFrom: {
		en: "Eevee",
		fr: "Evoli",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Cloud-Covered Moon",
				fr: "Lune nuageuse",
			},
			effect: {
				en: "Once during your turn (before your attack), if Umbreon is your Active Pokémon, you may flip a coin. If heads, return Umbreon and all cards attached to it to your hand. This power can’t be used if Umbreon is affected by a Special Condition.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), si Noctali est votre Pokémon Actif, vous pouvez lancer une pièce. Si c’est face, reprenez Noctali dans votre main, ainsi que toutes les cartes qui lui sont attachées. Ce pouvoir ne peut pas être utilisé si Noctali est affecté par un État Spécial.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Evoblast",
				fr: "Evorafale",
			},
			effect: {
				en: "Does 50 damage plus 10 more damage for each of your Pokémon in play that evolves from Eevee.",
				fr: "Inflige 50 dégâts plus 10 dégâts supplémentaires pour chacun de vos Pokémon en jeu qui est une évolution d’Evoli.",
			},
			damage: "50+",

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
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
