import { Card } from '../../../interfaces'
import Set from '../Fossil'

const card: Card = {
	name: {
		en: "Tentacool",
		fr: "Tentacool"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		72,
	],

	hp: 30,

	types: [
		"Water",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				en: "Cowardice",
				fr: "Échappée"
			},
			effect: {
				en: "At any time during your turn (before your attack), you may return Tentacool to your hand. (Discard all cards attached to Tentacool.) This power can't be used the turn you put Tentacool into play or if Tentacool is Asleep, Confused, or Paralyzed.",
				fr: "À tout moment pendant votre tour (avant votre attaque), vous pouvez reprendre Tentacool dans votre main. (Défaussez toutes les cartes attachées à Tentacool.) Ce pouvoir ne peut être utilisé dans le tour où vous mettez Tentacool en jeu ou si Tentacool est Endormi, Confus ou Paralysé."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Acid",
				fr: "Urticos"
			},

			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	description: {
		fr: "Flottant au bord des côtes, les pêcheurs se font souvent arroser d'acide quand ils en accrochent un."
	}
}

export default card
