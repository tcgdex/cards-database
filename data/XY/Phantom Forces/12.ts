import { Card } from '../../../interfaces'
import Set from '../Phantom Forces'

const card: Card = {
	name: {
		en: "Pyroar",
		fr: "Némélios",
	},
	illustrator: "Naoki Saito",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		668,
	],
	hp: 110,
	types: [
		"Fire",
	],
	evolveFrom: {
		en: "Litleo",
		fr: "Hélionceau",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Flare Command",
				fr: "Ordre Flamboyant",
			},
			effect: {
				en: "Once during your turn (before your attack), you may discard a Fire Energy attached to this Pokémon. If you do, switch 1 of your opponent's Benched Pokémon with his or her Active Pokémon.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez défausser une Énergie Fire attachée à ce Pokémon. Dans ce cas, échangez l'un des Pokémon de Banc de votre adversaire avec son Pokémon Actif.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fire",
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				en: "Inferno Onrush",
				fr: "Torrent d'Enfer",
			},
			effect: {
				en: "This Pokémon does 30 damage to itself.",
				fr: "Ce Pokémon s'inflige 30 dégâts.",
			},
			damage: 110,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
