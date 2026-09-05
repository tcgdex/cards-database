import { Card } from '../../../interfaces'
import Set from '../Neo Revelation'

const card: Card = {
	name: {
		en: "Magneton",
		fr: "Magnéton",
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
		fr: "Magnéti",
		de: "Magnetilo"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				en: "Electromagnetic Power",
				fr: "Pouvoir électromagnétique",
				de: "Elektromagnet-Kraft"
			},
			effect: {
				en: "As often as you like during your turn (before your attack), you may take 1 Energy card attached to 1 of your Magnemites, Magnetons, or Dark Magnetons and attach it to a different 1 of your Magnemites, Magnetons, or Dark Magnetons. This power can't be used if Magneton is Asleep, Confused, or Paralyzed.",
				fr: "Aussi souvent que vous le souhaitez pendant votre tour (avant votre attaque), vous pouvez prendre 1 carte Énergie attachée à l'un de vos Magneti, Magneton ou Magneton Obscur et l'attacher à 1 Magneti, Magneton ou Magneton Obscur différent. Ce pouvoir ne peut être utilisé si Magneton est Endormi, Confus ou Paralysé.",
				de: "Du darfst in deinem Zug so oft, wie du willst (vor deinem Angriff), eine Energiekarte, die an eines deiner Magnetilos, Magnetons oder Dunklen Magnetons angelegt ist, nehmen und an ein anderes deiner Magnetilos, Magnetons oder Dunklen Magnetons anlegen. Diese Fähigkeit kann nicht verwendet werden, falls Magneton schläft, verwirrt oder gelähmt ist."
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
				de: "Wenn mindestens eine {L}-Energiekarte in deinem Ablagestapel ist, lege eine davon an Magneton an."
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
	retreat: 2,


	description: {
		en: "Three Magnemites are linked by a strong magnetic force. Earaches will occur if you get too close.",
		fr: "Trois Magneti sont reliés par une puissante force magnétique. Vous risquez d'avoir mal aux oreilles si vous approchez de trop près.",
		de: "Jeweils drei Magnetons werden von einer starken magnetischen Kraft zusammengehalten. Wenn du zu nahe herangehst, bekommst du Ohrenschmerzen."
	},


	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 274596,
				tcgplayer: 87092
			}
		},
		{
			type: "holo",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274596,
				tcgplayer: 87092
			}
		}
	]
}

export default card
