import { Card } from '../../../interfaces'
import Set from '../Chilling Reign'

const card: Card = {
	set: Set,

	name: {
		en: "Ampharos",
		fr: "Pharamp"
	},

	illustrator: "Megumi Mizutani",
	rarity: "Rare",
	category: "Pokemon",
	hp: 160,
	types: ["Lightning"],

	evolveFrom: {
		en: "Flaaffy",
		fr: "Lainergie"
	},

	attacks: [{
		name: {
			en: "Thunder Shock",
			fr: "Éclair"
		},

		effect: {
			en: "Flip a coin. If heads, your opponent’s Active Pokémon is now Paralyzed.",
			fr: "Lancez une pièce. Si c’est face, le Pokémon Actif de votre adversaire est maintenant Paralysé."
		},

		damage: 50,
		cost: ["Lightning"]
	}, {
		name: {
			en: "Searchlight Tail",
			fr: "Queue de Projecteur"
		},

		effect: {
			en: "Your opponent reveals their hand. If you find any Energy cards there, this attack does 90 more damage.",
			fr: "Votre adversaire dévoile sa main. Si vous y trouvez au moins une carte Énergie, cette attaque inflige 90 dégâts supplémentaires."
		},

		damage: "90+",
		cost: ["Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card