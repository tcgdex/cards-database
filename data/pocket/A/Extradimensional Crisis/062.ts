import { Card } from "models/database/card"
import Set from "../Extradimensional Crisis"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Celesteela",
		'fr-fr': "Bamboiselle"
	},

	illustrator: "kawayoo",
	rarity: "Three Diamond",
	category: "Pokemon",

	dexId: [797],
	hp: 120,
	types: ["Colorless"],

	description: {
		'en-us': "One of the dangerous UBs, high energy readings\ncan be detected coming from both of its\nhuge arms.",
		'fr-fr': "Cette dangereuse créature fait partie des Ultra-Chimères. On peut détecter des pics d'énergie émis par ses bras gigantesques."
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Ultra Thrusters",
			'fr-fr': "Ultra-Propulseurs"
		},

		effect: {
			'en-us': "Once during your turn, you may switch your Active Ultra Beast with 1 of your Benched Ultra Beasts.",
			'fr-fr': "Une fois pendant votre tour, vous pouvez échanger l'Ultra-Chimère sur votre Poste Actif avec une des Ultra-Chimères sur votre Banc."
		}
	}],

	attacks: [{
		name: {
			'en-us': "Moombahton",
			'fr-fr': "Moombahton"
		},

		damage: 100,
		cost: ["Colorless", "Colorless", "Colorless"],

		effect: {
			'en-us': "Flip a coin. If tails, this attack does nothing.",
			'fr-fr': "Lancez une pièce. Si c'est pile, cette attaque ne fait rien."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 4
}

export default card