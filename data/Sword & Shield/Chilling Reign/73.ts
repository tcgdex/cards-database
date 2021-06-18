import { Card } from '../../../interfaces'
import Set from '../Chilling Reign'

const card: Card = {
	set: Set,

	name: {
		en: "Hatterene",
		fr: "Sorcilence"
	},

	illustrator: "chibi",
	rarity: "Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Psychic"],

	evolveFrom: {
		en: "Hattrem",
		fr: "Chapotus"
	},

	abilities: [{
		type: "Ability",

		name: {
			en: "Witch Rondo",
			fr: "Rondo Envoûtant"
		},

		effect: {
			en: "Once during your turn, you may switch your Active Pokémon with 1 of your Benched Pokémon. If you do, your opponent switches their Active Pokémon with 1 of their Benched Pokémon.",
			fr: "Une fois pendant votre tour, vous pouvez échanger votre Pokémon Actif contre l’un de vos Pokémon de Banc. Dans ce cas, votre adversaire échange son Pokémon Actif contre l’un de ses Pokémon de Banc."
		}
	}],

	attacks: [{
		name: {
			en: "Psychic",
			fr: "Psyko"
		},

		effect: {
			en: "This attack does 50 more damage for each Energy attached to your opponent’s Active Pokémon.",
			fr: "Cette attaque inflige 50 dégâts supplémentaires pour chaque Énergie attachée au Pokémon Actif de votre adversaire."
		},

		damage: "30+",
		cost: ["Colorless", "Colorless"]
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