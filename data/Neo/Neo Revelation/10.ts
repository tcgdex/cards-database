import { Card } from '../../../interfaces'
import Set from '../Neo Revelation'

const card: Card = {
	name: {
		en: "Magneton",
		fr: "Magneton",
		de: "Magneton"
	},

	illustrator: undefined,
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		82,
	],

	hp: 80,

	types: [
		"Metal",
	],

	evolveFrom: {
		en: "Magnemite",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				en: "Electromagnetic Power",
				fr: "Pouvoir électromagnétique",
				de: "Electromagnetic Power"
			},
			effect: {
				en: "As often as you like during your turn (before your attack), you may take 1 Energy card attached to 1 of your Magnemites, Magnetons, or Dark Magnetons and attach it to a different 1 of your Magnemites, Magnetons, or Dark Magnetons. This power can't be used if Magneton is Asleep, Confused, or Paralyzed.",
				fr: "Aussi souvent que vous le souhaitez pendant votre tour (avant votre attaque), vous pouvez prendre 1 carte Énergie attachée à l'un de vos Magneti, Magneton ou Magneton Obscur et l'attacher à 1 Magneti, Magneton ou Magneton Obscur différent. Ce pouvoir ne peut être utilisé si Magneton est Endormi, Confus ou Paralysé.",
				de: "As often as you like during your turn (before your attack), you may take 1 Energy card attached to 1 of your Magnemites, Magnetons, or Dark Magnetons and attach it to a different 1 of your Magnemites, Magnetons, or Dark Magnetons. This Power can't be used if Magneton is Asleep, Confused, or Paralyzed."
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
				en: "Plasma",
				fr: "Plasma",
				de: "Plasma"
			},
			effect: {
				en: "If there are any Energy cards in your discard pile, attach 1 of them to Magneton.",
				fr: "S'il y a des cartes Énergie  dans votre pile de défausse, attachez-en une à Magneton.",
				de: "If there are any  Energy cards in your discard pile, attach 1 of them to Magneton."
			},
			damage: 30,

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
			type: "Grass",
			value: "-30"
		},
	],

	description: {
		fr: "Trois Magneti sont reliés par une puissante force magnétique. Vous risquez d'avoir mal aux oreilles si vous approchez de trop près."
	},

	thirdParty: {
		cardmarket: 274596,
		tcgplayer: 87092
	},

	variants: [
		{
			type: "holo"
		},
		{
			type: "holo",
			stamp: ["1st-edition"]
		}
	]
}

export default card
