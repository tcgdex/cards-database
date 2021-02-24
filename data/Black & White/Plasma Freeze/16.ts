import { Card } from '../../../interfaces'
import Set from '../Plasma Freeze'

const card: Card = {
	name: {
		en: "Chandelure",
		fr: "Lugulabre",
	},
	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		609,
	],
	hp: 130,
	types: [
		"Fire",
	],
	evolveFrom: {
		en: "Lampent",
		fr: "Mélancolux",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Flare Navigate",
				fr: "Navigation Flamboyante",
			},
			effect: {
				en: "Once during your turn (before your attack), you may search your deck for a Fire Energy card and attach it to 1 of your Pokémon. If you do, put 1 damage counter on that Pokémon. Shuffle your deck afterward.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez chercher une carte Énergie Fire dans votre deck et l'attacher à 1 de vos Pokémon. Dans ce cas, placez 1 marqueur de dégâts sur le Pokémon auquel l'Énergie a été attachée. Mélangez ensuite votre deck.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				en: "Absorb Life",
				fr: "Absorption",
			},
			effect: {
				en: "Heal 30 damage from this Pokémon.",
				fr: "Soignez 30 dégâts à ce Pokémon.",
			},
			damage: 70,

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
