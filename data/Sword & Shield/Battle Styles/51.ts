import { Card } from '../../../interfaces'
import Set from '../Battle Styles'

const card: Card = {
	set: Set,

	name: {
		en: "Tapu Koko VMAX",
		fr: "Tokorico VMAX"
	},

	illustrator: "PLANETA Tsuji",
	rarity: "Rare",
	category: "Pokemon",
	hp: 320,
	types: ["Lightning"],

	evolveFrom: {
		en: "Tapu Koko V",
		fr: "Tokorico-V"
	},

	attacks: [{
		name: {
			en: "Max Shock",
			fr: "Éclairomax"
		},

		effect: {
			en: "If you have more Prize cards remaining than your opponent, their Active Pokémon is now Paralyzed.",
			fr: "S’il vous reste plus de cartes Récompense qu’à votre adversaire, son Pokémon Actif est maintenant Paralysé."
		},

		damage: 180,
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