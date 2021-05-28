import { Card } from '../../../interfaces'
import Set from '../Battle Styles'

const card: Card = {
	set: Set,

	name: {
		en: "Meowstic",
		fr: "Mistigrix"
	},

	illustrator: "Yuu Nishida",
	rarity: "Rare",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],

	evolveFrom: {
		en: "Espurr",
		fr: "Psystigri"
	},

	abilities: [{
		type: "Ability",

		name: {
			en: "Ear Moves",
			fr: "Mouvements d’Oreilles"
		},

		effect: {
			en: "Once during your turn, you may move 1 damage counter from 1 of your Pokémon to 1 of your opponent’s Pokémon.",
			fr: "Une fois pendant votre tour, vous pouvez déplacer un marqueur de dégâts de l’un de vos Pokémon vers l’un des Pokémon de votre adversaire."
		}
	}],

	attacks: [{
		name: {
			en: "Psychic Sphere",
			fr: "Sphère Psy"
		},

		damage: 50,
		cost: ["Psychic", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card