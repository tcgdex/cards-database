import { Card } from '../../../interfaces'
import Set from '../Chilling Reign'

const card: Card = {
	set: Set,

	name: {
		en: "Thundurus",
		fr: "Fulguris"
	},

	illustrator: "Souichirou Gunjima",
	rarity: "Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Lightning"],

	attacks: [{
		name: {
			en: "Assisting Spark",
			fr: "Étincelle de Soutien"
		},

		effect: {
			en: "You may attach a Lightning Energy card from your hand to 1 of your Benched Pokémon.",
			fr: "Vous pouvez attacher une carte Énergie Lightning de votre main à l’un de vos Pokémon de Banc."
		},

		damage: 30,
		cost: ["Lightning"]
	}, {
		name: {
			en: "Thunder",
			fr: "Fatal-Foudre"
		},

		effect: {
			en: "This Pokémon also does 30 damage to itself.",
			fr: "Ce Pokémon s’inflige aussi 30 dégâts."
		},

		damage: 130,
		cost: ["Lightning", "Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card