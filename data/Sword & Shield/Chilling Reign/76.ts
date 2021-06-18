import { Card } from '../../../interfaces'
import Set from '../Chilling Reign'

const card: Card = {
	set: Set,

	name: {
		en: "Diglett",
		fr: "Taupiqueur"
	},

	illustrator: "Souichirou Gunjima",
	rarity: "Common",
	category: "Pokemon",
	hp: 50,
	types: ["Fighting"],

	attacks: [{
		name: {
			en: "Dig",
			fr: "Tunnel"
		},

		effect: {
			en: "Flip a coin. If heads, during your opponent’s next turn, prevent all damage from and effects of attacks done to this Pokémon.",
			fr: "Lancez une pièce. Si c’est face, pendant le prochain tour de votre adversaire, évitez tous les dégâts et les effets d’attaques infligés à ce Pokémon."
		},

		damage: 10,
		cost: ["Fighting"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card