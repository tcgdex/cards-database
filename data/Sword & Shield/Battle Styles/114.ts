import { Card } from '../../../interfaces'
import Set from '../Battle Styles'

const card: Card = {
	set: Set,

	name: {
		en: "Lickilicky",
		fr: "Coudlangue"
	},

	illustrator: "Mina Nakai",
	rarity: "Rare",
	category: "Pokemon",
	hp: 140,
	types: ["Colorless"],

	evolveFrom: {
		en: "Lickitung",
		fr: "Excelangue"
	},

	attacks: [{
		name: {
			en: "Selickt",
			fr: "Séleclangue"
		},

		effect: {
			en: "Your opponent chooses to discard the top 3 cards of their deck or to discard 3 cards from their hand.",
			fr: "Votre adversaire choisit de défausser les 3 cartes du dessus de son deck ou 3 cartes de sa main."
		},

		cost: ["Colorless", "Colorless", "Colorless"]
	}, {
		name: {
			en: "Pitch",
			fr: "Lancer"
		},

		effect: {
			en: "Your opponent switches their Active Pokémon with 1 of their Benched Pokémon.",
			fr: "Votre adversaire échange son Pokémon Actif contre l’un de ses Pokémon de Banc."
		},

		damage: 100,
		cost: ["Colorless", "Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "E"
}

export default card