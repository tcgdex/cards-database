import { Card } from '../../../interfaces'
import Set from '../Neo Revelation'

const card: Card = {
	name: {
		en: "Lanturn",
		fr: "Lanturn"
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
		en: "Chinchou",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				en: "Submerge",
				fr: "Submersion"
			},
			effect: {
				en: "Once during your turn (before your attack), you may change Lanturn's type to Water until the end of your turn. This power can't be used if Lanturn is Asleep, Confused, or Paralyzed. If Lanturn becomes Asleep, Confused, or Paralyzed after you have used this power, its type changes back to Lightning.",
				fr: "Une fois durant votre tour (avant votre attaque), vous pouvez changer le type de Lanturn en  jusqu'à la fin de votre tour. Ce pouvoir ne fonctionne pas si Lanturn est Endormi, Confus ou Paralysé. Si Lanturn devient Endormi, Confus ou Paralysé après l'utilisation de ce pouvoir, son type redevient ."
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
				en: "Blinding Light",
				fr: "Flash aveuglant"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Confused.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Confus."
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

	description: {
		fr: "Il aveugle sa proie avec un flash de lumière intense, puis, une fois immobilisée, il l'avale d'un seul coup."
	}
}

export default card
