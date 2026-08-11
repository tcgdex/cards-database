import { Card } from 'models/database/card'
import Set from '../Neo Revelation'

const card: Card = {
	name: {
		'en-us': "Lanturn",
		'fr-fr': "Lanturn",
		'de-de': "Lanturn"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		171,
	],

	hp: 80,

	types: [
		"Lightning",
	],

	evolveFrom: {
		'en-us': "Chinchou",
		'fr-fr': "Loupio"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				'en-us': "Submerge",
				'fr-fr': "Submersion",
				'de-de': "Submerge"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), you may change Lanturn's type to Water until the end of your turn. This power can't be used if Lanturn is Asleep, Confused, or Paralyzed. If Lanturn becomes Asleep, Confused, or Paralyzed after you have used this power, its type changes back to Lightning.",
				'fr-fr': "Une fois durant votre tour (avant votre attaque), vous pouvez changer le type de Lanturn en  jusqu'à la fin de votre tour. Ce pouvoir ne fonctionne pas si Lanturn est Endormi, Confus ou Paralysé. Si Lanturn devient Endormi, Confus ou Paralysé après l'utilisation de ce pouvoir, son type redevient .",
				'de-de': "Once during your turn (before your attack), you may change Lanturn´s type to  until the end of your turn. This power can´t be used if Lanturn is Asleep, Confused, or Paralyzed. If Lanturn becomes Asleep, Confused, or Paralyzed after you have used this power, its type change back to ."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Blinding Light",
				'fr-fr': "Flash aveuglant",
				'de-de': "Blinding Light"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Confused.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Confus.",
				'de-de': "Flip a coin. If heads, the Defending Pokémon is now Confused."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],
	retreat: 2,


	description: {
		'en-us': "It blinds prey with an intense burst of light, then swallows the immobilized prey in a single gulp.",
		'fr-fr': "Il aveugle sa proie avec un flash de lumière intense, puis, une fois immobilisée, il l'avale d'un seul coup."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274618,
				tcgplayer: 86602
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274618,
				tcgplayer: 86602
			}
		}
	]
}

export default card

