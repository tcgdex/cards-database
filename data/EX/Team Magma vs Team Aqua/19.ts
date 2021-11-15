import { Card } from '../../../interfaces'
import Set from '../Team Magma vs Team Aqua'

const card: Card = {
	name: {
		en: "Team Magma's Camerupt",
		fr: "Camerupt de Team Magma"
	},
	illustrator: "Katsura Tabata",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		323,
	],
	hp: 80,
	types: [
		"Fire",
	],

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Overheat",
				fr: "Surchauffe"
			},
			effect: {
				en: "Once during your turn (before your attack), you may search your discard pile for a basic Energy card and attach it to Team Magma's Camerupt. Put 2 damage counters on Team Mamga's Camerupt. This power can't be used if Team Magma's Camerupt is affected by a Special Condition.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez chercher dans votre pile de défausse une carte Énergie de base et l'attacher à Camerupt de Team Magma. Placez 2 marqueurs de dégât sur Camerupt de Team Magma. Ce pouvoir ne peut pas être utilisé si Camerupt de Team Magma est affecté par un État Spécial."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Flame Ball",
				fr: "Boule de feu"
			},
			effect: {
				en: "You may move a Fire Energy card attached to Team Magma's Camerupt to 1 of your Benched Pokémon.",
				fr: "Vous pouvez déplacer une carte Énergie  attachée à Camerupt de Team Magma sur 1 des Pokémon de votre Banc."
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],





}

export default card
