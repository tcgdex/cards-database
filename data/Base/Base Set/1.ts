import { Card } from '../../../interfaces'
import Set from '../Base Set'

const card: Card = {
	name: {
		en: "Alakazam",
		fr: "Alakazam"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		65,
	],

	hp: 80,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Kadabra",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				en: "Damage Swap",
				fr: "Transfert de dégâts"
			},
			effect: {
				en: "As often as you like during your turn (before your attack), you may move 1 damage counter from 1 of your Pokémon to another as long as you don't Knock Out that Pokémon. This power can't be used if Alakazam is Asleep, Confused, or Paralyzed.",
				fr: "Aussi souvent que vous le souhaitez pendant votre tour (avant votre attaque), vous pouvez déplacer 1 marqueur de dégâts depuis 1 de vos Pokémon vers un autre sous réserve de ne pas mettre ce Pokémon K.O. Ce pouvoir ne peut être utilisé si Alakazam est Endormi, Confus ou Paralysé."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
				"Psychic",
				"Psychic",
			],
			name: {
				en: "Confuse Ray",
				fr: "Onde Folie"
			},
			effect: {
				en: "Flip a coin. If heads, the Definding Pokémon is now Confused.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon défenseur est maintenant Confus."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		fr: "Son super cerveau peut effectuer des opérations plus rapidement qu'un super ordinateur. Il a un Q.I. de 5000."
	}
}

export default card
