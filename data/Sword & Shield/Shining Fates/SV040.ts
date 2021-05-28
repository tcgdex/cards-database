import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Fulgudog",
		en: "Boltund"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Lightning"],

	evolveFrom: {
		fr: "Voltoutou",
		en: "Yamper"
	},

	attacks: [{
		name: {
			fr: "Grosse Morsure",
			en: "Big Bite"
		},

		effect: {
			fr: "Pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas battre en retraite.",
			en: "During your opponent’s next turn, the Defending Pokémon can’t retreat."
		},

		damage: 50,
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			fr: "Crocs Combatifs",
			en: "Fighting Fangs"
		},

		effect: {
			fr: "Si le Pokémon Actif de votre adversaire est un Pokémon-V ou un Pokémon-GX, cette attaque inflige 90 dégâts supplémentaires.",
			en: "If your opponent’s Active Pokémon is a Pokémon V or Pokémon-GX, this attack does 90 more damage."
		},

		damage: "90+",
		cost: ["Lightning", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D"
}

export default card