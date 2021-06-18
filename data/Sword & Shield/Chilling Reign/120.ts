import { Card } from '../../../interfaces'
import Set from '../Chilling Reign'

const card: Card = {
	set: Set,

	name: {
		en: "Zangoose",
		fr: "Mangriff"
	},

	illustrator: "Anesaki Dynamic",
	rarity: "Rare",
	category: "Pokemon",
	hp: 110,
	types: ["Colorless"],

	attacks: [{
		name: {
			en: "Gale Claws",
			fr: "Tempête de Griffes"
		},

		effect: {
			en: "If you played a Rapid Strike Supporter card from your hand during this turn, this attack also does 50 damage to 2 of your opponent’s Benched Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Si vous avez joué une carte Supporter Mille Poings de votre main pendant ce tour, cette attaque inflige aussi 50 dégâts à 2 des Pokémon de Banc de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)"
		},

		damage: 50,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card