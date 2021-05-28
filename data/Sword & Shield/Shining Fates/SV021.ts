import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "M. Glaquette de Galar",
		en: "Galarian Mr. Rime"
	},

	illustrator: "Hideki Ishikawa",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],

	evolveFrom: {
		fr: "M. Mime de Galar",
		en: "Galarian Mr. Mime"
	},

	abilities: [{
		type: "Ability",

		name: {
			fr: "Danse Entraînante",
			en: "Shuffle Dance"
		},

		effect: {
			fr: "Une fois pendant votre tour, vous pouvez échanger l’une des cartes Récompense de votre adversaire (actuellement face cachée) contre la carte du dessus de son deck. (Les cartes restent face cachée.)",
			en: "Once during your turn, you may switch 1 of your opponent’s face-down Prize cards with the top card of their deck. (The cards stay face down.)"
		}
	}],

	attacks: [{
		name: {
			fr: "Folle Aventure",
			en: "Mad Party"
		},

		effect: {
			fr: "Cette attaque inflige 20 dégâts pour chaque Pokémon dans votre pile de défausse qui a l’attaque Folle Aventure.",
			en: "This attack does 20 damage for each Pokémon in your discard pile that has the Mad Party attack."
		},

		damage: "20×",
		cost: ["Water", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "D"
}

export default card