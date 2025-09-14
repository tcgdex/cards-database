import { Card } from '../../../interfaces'
import Set from '../Neo Revelation'

const card: Card = {
	name: {
		en: "Porygon2",
		fr: "Porygon2",
		de: "Porygon2"
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		233,
	],

	hp: 70,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Porygon",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				en: "Energy Converter",
				fr: "Convertisseur d'énergie",
				de: "Energy Converter"
			},
			effect: {
				en: "Once during your turn (before your attack), you may choose 1 Basic Energy card attached to 1 of your Pokémon and choose an Energy type. Treat that Energy card as that type until the end is your turn. This power can't be used if Porygon2 is Asleep, Confused, or Paralyzed. If Porygon2 becomes Asleep, Confused, or Paralyzed, the Energy card goes back to its original type.",
				fr: "Une fois durant votre tour (avant votre attaque), vous pouvez choisir une carte Énergie de base attachée à l'un de vos Pokémon et choisir un type d'Énergie. Considérez cette carte Énergie comme étant de ce type jusqu'à la fin de votre tour. Ce pouvoir ne peut être utilisé si Porygon2 est Endormi, Confus ou Paralysé. Si Porygon2 devient Endormi, Confus ou Paralysé, la carte Énergie reprend son type d'origine.",
				de: "Once during your turn (before your attack), you may choose 1 basic Energy card attached to 1 of your Pokémon and choose an Energy type. Treat that Energy card as that type until the end of your turn. This Power can't be used if Porygon2 us Asleep, Confused, or Paralyzed. If Porygon2 becomes Asleep, Confused, or Paralyzed, the Energy card goes back to its original type."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Delta Beam",
				fr: "Rayon Delta",
				de: "Delta Beam"
			},
			effect: {
				en: "Flip a coin. If heads, choose whether the Defending Pokémon becomes Asleep, Confused, or Paralyzed.",
				fr: "Lancez une pièce. Si c'est face, choisissez si le Pokémon Défenseur devient Endormi, Confus ou Paralysé.",
				de: "Flip a coin. If heads, choose whether the Defending Pokémon becomes Asleep, Confused, or Paralyzed."
			},
			damage: 20,

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

	description: {
		fr: "Cette version améliorée de Porygon est conçue pour l'exploration spatiale. Cependant, elle ne peut pas voler."
	},

	thirdParty: {
		cardmarket: 274598,
		tcgplayer: 88322
	},

	variants: [
		{
			type: "holo"
		},
		{
			type: "holo",
			stamp: ["1st edition"]
		}
	]
}

export default card
