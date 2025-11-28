import { Card } from "../../../interfaces"
import Set from "../Extradimensional Crisis"

const card: Card = {
	set: Set,

	name: {
		en: "Celesteela",
		fr: "Bamboiselle"
	},

	illustrator: "REND",
	rarity: "One Star",
	category: "Pokemon",

	dexId: [797],
	hp: 120,
	types: ["Colorless"],

	description: {
		en: "One of the dangerous UBs, high energy readings\ncan be detected coming from both of its\nhuge arms.",
		fr: "Cette dangereuse créature fait partie des Ultra-Chimères. On peut détecter des pics d'énergie émis par ses bras gigantesques."
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Ultra Thrusters",
			fr: "Ultra-Propulseurs"
		},

		effect: {
			en: "Once during your turn, you may switch your Active Ultra Beast with 1 of your Benched Ultra Beasts.",
			fr: "Une fois pendant votre tour, vous pouvez échanger l'Ultra-Chimère sur votre Poste Actif avec une des Ultra-Chimères sur votre Banc."
		}
	}],

	attacks: [{
		name: {
			en: "Moombahton",
			fr: "Moombahton"
		},

		damage: 100,
		cost: ["Colorless", "Colorless", "Colorless"],

		effect: {
			en: "Flip a coin. If tails, this attack does nothing.",
			fr: "Lancez une pièce. Si c'est pile, cette attaque ne fait rien."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 4
}

export default card