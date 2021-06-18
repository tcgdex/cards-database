import { Card } from '../../../interfaces'
import Set from '../Chilling Reign'

const card: Card = {
	set: Set,

	name: {
		en: "Dugtrio",
		fr: "Triopikeur"
	},

	illustrator: "Hitoshi Ariga",
	rarity: "Rare",
	category: "Pokemon",
	hp: 90,
	types: ["Fighting"],

	evolveFrom: {
		en: "Diglett",
		fr: "Taupiqueur"
	},

	attacks: [{
		name: {
			en: "Triple Heads",
			fr: "Tricéphale"
		},

		effect: {
			en: "Flip 3 coins. This attack does 60 damage for each heads. If all of them are heads, during your opponent’s next turn, prevent all damage from and effects of attacks done to this Pokémon.",
			fr: "Lancez 3 pièces. Cette attaque inflige 60 dégâts pour chaque côté face. S’il y a 3 côtés face, pendant le prochain tour de votre adversaire, évitez tous les dégâts et les effets d’attaques infligés à ce Pokémon."
		},

		damage: "60×",
		cost: ["Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card