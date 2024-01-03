import { Card } from '../../../interfaces'
import Set from '../Base Set'

const card: Card = {
	name: {
		en: "Alakazam",
		fr: "Alakazam",
		de: "Simsala"
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
				fr: "Transfert de dégâts",
				de: "Schadenstausch"
			},
			effect: {
				en: "As often as you like during your turn (before your attack), you may move 1 damage counter from 1 of your Pokémon to another as long as you don't Knock Out that Pokémon. This power can't be used if Alakazam is Asleep, Confused, or Paralyzed.",
				fr: "Aussi souvent que vous le souhaitez pendant votre tour (avant votre attaque), vous pouvez déplacer 1 marqueur de dégâts depuis 1 de vos Pokémon vers un autre sous réserve de ne pas mettre ce Pokémon K.O. Ce pouvoir ne peut être utilisé si Alakazam est Endormi, Confus ou Paralysé.",
				de: "Bist Du am Zug, kannst Du (vor Deinem Angriff) beliebig oft eine Schadensmarke von einem Deiner Pokémon auf ein anderes verschieben, solange Du dieses Pokémon nicht kampfunfähig machst. Diese Fähigkeit kann nicht eingesetzt werden, falls Simsala schlafend, verwirrt oder gelähmt ist."
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
				fr: "Onde Folie",
				de: "Konfustrahl"
			},
			effect: {
				en: "Flip a coin. If heads, the Definding Pokémon is now Confused.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon défenseur est maintenant Confus.",
				de: "Wirf eine Münze bei \"Kopf\" ist das verteidigende Pokémon verwirrt"
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
