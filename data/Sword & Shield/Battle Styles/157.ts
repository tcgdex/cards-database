import { Card } from '../../../interfaces'
import Set from '../Battle Styles'

const card: Card = {
	set: Set,

	name: {
		en: "Stoutland V",
		fr: "Mastouffe V"
	},

	illustrator: "Eske Yoshinob",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 210,
	types: ["Colorless"],

	attacks: [{
		name: {
			en: "Double Dip Fangs",
			fr: "Crocs Redoublés"
		},

		effect: {
			en: "If your opponent’s Basic Pokémon is Knocked Out by damage from this attack, take 1 more Prize card.",
			fr: "Si le Pokémon de base de votre adversaire est mis K.O. par les dégâts de cette attaque, récupérez une carte Récompense supplémentaire."
		},

		damage: 40,
		cost: ["Colorless", "Colorless", "Colorless"]
	}, {
		name: {
			en: "Wild Tackle",
			fr: "Tacle Brutal"
		},

		effect: {
			en: "This Pokémon also does 30 damage to itself.",
			fr: "Ce Pokémon s’inflige aussi 30 dégâts."
		},

		damage: 200,
		cost: ["Colorless", "Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "E"
}

export default card