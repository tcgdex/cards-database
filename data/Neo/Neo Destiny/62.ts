import { Card } from '../../../interfaces'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		en: "Dark Octillery",
		fr: "Octillery obscur"
	},

	illustrator: "Shin-ichi Yoshida",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		224,
	],

	hp: 60,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Remoraid",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Ink Blast",
				fr: "Explosion d'encre"
			},
			effect: {
				en: "This attack does 20 damage plus 10 more damage for each Energy attached to Dark Octillery but not used to pay for this attack's Energy cost. You can't add more than 20 damage in this way.",
				fr: "Cette attaque inflige 20 dégâts plus 10 dégâts supplémentaires pour chaque Énergie attachée à Octillery obscur mais non utilisée pour payer le coût d'Énergie de cette attaque. Vous ne pouvez pas ajouter plus de 20 dégâts de cette manière."
			},
			damage: "20+",

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Tentacle Wrap",
				fr: "Roule tentacule"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed. If tails, during your opponent's next turn, your opponent pays more to retreat the Defending Pokémon.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé. Si c'est pile, pendant le prochain tour de votre adversaire, votre adversaire paie  supplémentaires pour faire battre en retraite le Pokémon Défenseur."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	description: {
		fr: "Il aime dormir dans les cavernes sous-marines et il lui arrive même de voler le nid d'un autre Octillery."
	}
}

export default card
