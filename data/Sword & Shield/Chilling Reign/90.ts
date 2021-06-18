import { Card } from '../../../interfaces'
import Set from '../Chilling Reign'

const card: Card = {
	set: Set,

	name: {
		en: "Sandaconda VMAX",
		fr: "Dunaconda VMAX"
	},

	illustrator: "aky CG Works",
	rarity: "Rare",
	category: "Pokemon",
	hp: 320,
	types: ["Fighting"],

	evolveFrom: {
		en: "Sandaconda V",
		fr: "Dunaconda-V"
	},

	attacks: [{
		name: {
			en: "Sand Pulse",
			fr: "Vibra Sable"
		},

		effect: {
			en: "This attack also does 20 damage to each of your opponent’s Benched Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige aussi 20 dégâts à chacun des Pokémon de Banc de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)"
		},

		damage: 60,
		cost: ["Fighting"]
	}, {
		name: {
			en: "G-Max Cyclone",
			fr: "Tourbillon G-Max"
		},

		effect: {
			en: "Move any amount of Energy from your Pokémon to your other Pokémon in any way you like.",
			fr: "Déplacez autant de cartes Énergie attachées à vos Pokémon que vous le voulez vers vos autres Pokémon, comme il vous plaît."
		},

		damage: 180,
		cost: ["Fighting", "Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "E"
}

export default card