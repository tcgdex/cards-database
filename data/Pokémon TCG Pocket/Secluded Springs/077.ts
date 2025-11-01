import { Card } from "../../../interfaces"
import Set from "../Secluded Springs"

const card: Card = {
	set: Set,

	name: {
		en: "Azurill",
		fr: "Azurill"
	},

	illustrator: "ryoma uratsuka",
	rarity: "One Star",
	category: "Pokemon",
	hp: 30,
	types: ["Colorless"],

	description: {
		en: "Its tail bounces like a rubber ball. It flings that tail\naround to fight opponents bigger than itself.",
		fr: "Sa queue est une véritable balle rebondissante. Il s'en sert comme d'une massue lorsqu'il affronte des adversaires de taille imposante."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Squishy Healing",
			fr: "Soin qui Pomponne"
		},

		effect: {
			en: "Heal 50 damage from 1 of your Benched Pokémon.",
			fr: "Soignez 50 dégâts d'un de vos Pokémon de Banc."
		}
	}],

	weaknesses: [{
		type: "Colorless",
		value: "+20"
	}],

	retreat: 0
}

export default card