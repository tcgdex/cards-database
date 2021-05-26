import { Card } from '../../../interfaces'
import Set from '../Battle Styles'

const card: Card = {
	set: Set,

	name: {
		en: "Cherrim",
		fr: "Ceriflor"
	},

	illustrator: "Mina Nakai",
	rarity: "Rare",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],

	evolveFrom: {
		en: "Cherubi",
		fr: "Ceribou"
	},

	abilities: [{
		type: "Ability",

		name: {
			en: "Spring Bloom",
			fr: "Floraison Vernale"
		},

		effect: {
			en: "As often as you like during your turn, you may attach a Grass Energy card from your hand to 1 of your Pokémon that doesn’t have a Rule Box (Pokémon V, Pokémon-GX, etc. have Rule Boxes).",
			fr: "Autant de fois que vous le voulez pendant votre tour, vous pouvez attacher une carte Énergie Grass de votre main à l’un de vos Pokémon n’ayant pas d’encadré Règle(les Pokémon-V, Pokémon-GX, etc. ont des encadrés Règle)."
		}
	}],

	attacks: [{
		name: {
			en: "Seed Bomb",
			fr: "Canon Graine"
		},

		damage: 70,
		cost: ["Grass", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2
}

export default card