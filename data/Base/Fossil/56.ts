import { Card } from '../../../interfaces'
import Set from '../Fossil'

const card: Card = {
	name: {
		en: "Tentacool",
		fr: "Tentacool",
		de: "Tentacha"
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
				fr: "Échappée",
				de: "Rückmarsch"
			},
			effect: {
				en: "At any time during your turn (before your attack), you may return Tentacool to your hand. (Discard all cards attached to Tentacool.) This power can't be used the turn you put Tentacool into play or if Tentacool is Asleep, Confused, or Paralyzed.",
				fr: "À tout moment pendant votre tour (avant votre attaque), vous pouvez reprendre Tentacool dans votre main. (Défaussez toutes les cartes attachées à Tentacool.) Ce pouvoir ne peut être utilisé dans le tour où vous mettez Tentacool en jeu ou si Tentacool est Endormi, Confus ou Paralysé.",
				de: "Jederzeit während deines Zuges (vor deinen Angriff) kannst Du Tentacha zurück auf diene Hand nehmen. (Lege alle auf Tentacha abgelegten Karten ab.) Diese Fähigkeit kann weder während des Zuges , in dem Tentacha ins spiel kommt, noch wenn Tentacha schläft, verwirrt oder gelähmt ist, eingesetzt werden."
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
				fr: "Urticos",
				de: "Säure"
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
	},

	thirdParty: {
		cardmarket: 273917
	}
}

export default card
