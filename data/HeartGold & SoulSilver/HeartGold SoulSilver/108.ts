import { Card } from '../../../interfaces'
import Set from '../HeartGold SoulSilver'

const card: Card = {
	name: {
		en: "Feraligatr",
		fr: "Aligatueur",
	},

	illustrator: "Kent Kanetsuna",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		160,
	],

	hp: 140,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Croconaw",
		fr: "Crocodil",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Rain Dance",
				fr: "Danse pluie",
			},
			effect: {
				en: "As often as you like during your turn (before your attack), you may attach a Water Energy card from your hand to 1 of your Water Pokémon. This power can’t be used if Feraligatr is affected by a Special Condition.",
				fr: "Autant de fois que vous le souhaitez pendant votre tour (avant votre attaque), vous pouvez attacher une carte Énergie Water de votre main à l’un de vos Pokémon Water. Ce pouvoir ne peut pas être utilisé si Aligatueur est affecté par un État spécial.",
			},
		},
	],

	attacks: [
		{
			cost: [
				"Water",
				"Water",
				"Water",
				"Water",
			],
			name: {
				en: "Hydro Crunch",
				fr: "Hydro-machouille",
			},
			effect: {
				en: "Does 60 damage plus 10 more damage for each damage counter on the Defending Pokémon.",
				fr: "Inflige 60 dégâts plus 10 dégâts supplémentaires pour chaque marqueur de dégâts sur le Pokémon Défenseur.",
			},
			damage: "60+",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 3,
	suffix: "Prime"
}

export default card
