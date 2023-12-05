import { Card } from '../../../interfaces'
import Set from '../Fossil'

const card: Card = {
	name: {
		en: "Slowbro",
		fr: "Flagadoss",
		de: "Lahmus"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		80,
	],

	hp: 60,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Slowpoke",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				en: "Strange Behavior",
				fr: "Comportement étrange",
				de: "Seltsames verhalten"
			},
			effect: {
				en: "As often as you like during your turn (before your attack), you may move 1 damage counter from 1 of your Pokémon to Slowbro as long as you don't Knock Out Slowbro. This power can't be used if Slowbro is Asleep, Confused, or Paralyzed.",
				fr: "Aussi souvent que vous le désirez pendant votre tour (avant votre attaque), vous pouvez déplacer 1 marqueur de dégâts depuis l'un de vos Pokémon vers Flagadoss tant que cela ne le met pas K.O. Ce pouvoir ne peut être utilisé si Flagadoss est Endormi, Confus ou Paralysé.",
				de: "Bist du am Zug kannst du (vor deinem Angriff) beliebig oft eine Schadensmarke von einem deiner Pokémon auf Lahmus verschieben, solange du Lahmus damit nicht kampfunfähig machst. Diese Fähigkeit kann nicht eingesetzt werden, falls Lahmus schläft verwirrt oder gelähmt ist."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
				"Psychic",
			],
			name: {
				en: "Psyshock",
				fr: "Choc psy",
				de: "Psyschock"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
				de: "Wirf eine Münze. Bei 'Kopf' ist das verteidigende Pokémon jetzt gelähmt."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	description: {
		fr: "Le Kokiyas accroché à la queue du Ramoloss se nourrit des restes de son hôte."
	}
}

export default card
