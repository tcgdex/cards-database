import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Wimessir",
		en: "Indeedee"
	},

	illustrator: "Souichirou Gunjima",
	rarity: "Rare",
	category: "Pokemon",
	hp: 100,
	types: ["Colorless"],

	attacks: [{
		name: {
			fr: "Coup d’Main",
			en: "Helping Hand"
		},

		effect: {
			fr: "Cherchez dans votre deck une carte Énergie de base, puis attachez-la à l’un de vos Pokémon de Banc. Mélangez ensuite votre deck.",
			en: "Search your deck for a basic Energy card and attach it to 1 of your Benched Pokémon. Then, shuffle your deck."
		},

		cost: ["Colorless"]
	}, {
		name: {
			fr: "Psyko",
			en: "Psychic"
		},

		effect: {
			fr: "Cette attaque inflige 20 dégâts supplémentaires pour chaque Énergie attachée au Pokémon Actif de votre adversaire.",
			en: "This attack does 20 more damage for each Energy attached to your opponent’s Active Pokémon."
		},

		damage: "20+",
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D"
}

export default card