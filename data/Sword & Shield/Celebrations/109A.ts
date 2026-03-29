import { Card } from '../../../interfaces'
import Set from '../Celebrations'

const card: Card = {
	dexId: [405],
	set: Set,

	name: {
		en: "Luxray GL LV.X",
		fr: "Luxray GL NIV.X"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Classic Collection",
	category: "Pokemon",
	hp: 110,
	types: ["Lightning"],
	stage: "LEVEL-UP",

	abilities: [{
		type: "Poke-POWER",

		name: {
			en: "Bright Look",
			fr: "Regard alerte"
		},

		effect: {
			en: "Once during your turn (before your attack), when you put Luxray GL LV.X from your hand onto your Active Luxray GL, you may switch the Defending Pokémon with 1 of your opponent's Benched Pokémon.",
			fr: "Une seule fois lors de votre tour (avant votre attaque), lorsque vous placez Luxray  NIV.X de votre main sur votre Luxray  Actif, vous pouvez échanger le Pokémon Défenseur avec 1 des Pokémon de Banc de votre adversaire."
		}
	}],

	attacks: [{
		name: {
			en: "Flash Impact",
			fr: "Impact-flash"
		},

		effect: {
			en: "Does 30 damage to 1 of your Pokémon, and don't apply Weakness and Resistance to this damage.",
			fr: "Inflige 30 dégâts à 1 de vos Pokémon. N'appliquez pas la Faiblesse et la Résistance à ces dégâts."
		},

		damage: 60,
		cost: ["Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	resistances: [{
		type: "Metal",
		value: "-20"
	}],

	retreat: 0,
	suffix: "SP",

	variants: {
		reverse: false,
		normal: false
	}
}

export default card
