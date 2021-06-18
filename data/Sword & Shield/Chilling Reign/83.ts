import { Card } from '../../../interfaces'
import Set from '../Chilling Reign'

const card: Card = {
	set: Set,

	name: {
		en: "Galarian Runerigus",
		fr: "Tutétékri de Galar"
	},

	illustrator: "KEIICHIRO ITO",
	rarity: "Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Fighting"],

	evolveFrom: {
		en: "Galarian Yamask",
		fr: "Tutafeh de Galar"
	},

	abilities: [{
		type: "Ability",

		name: {
			en: "Spiteful Slate",
			fr: "Ardoise Malveillante"
		},

		effect: {
			en: "If this Pokémon is in the Active Spot and is damaged by an attack from your opponent’s Pokémon VMAX (even if this Pokémon is Knocked Out), put damage counters on the Attacking Pokémon equal to the damage done to this Pokémon.",
			fr: "Si ce Pokémon est sur le Poste Actif et qu’il subit les dégâts d’une attaque d’un Pokémon-VMAX de votre adversaire (même si ce Pokémon est mis K.O.), placez des marqueurs de dégâts sur le Pokémon Attaquant équivalents aux dégâts infligés à ce Pokémon."
		}
	}],

	attacks: [{
		name: {
			en: "Energy Press",
			fr: "Pression Énergétique"
		},

		effect: {
			en: "This attack does 20 more damage for each Energy attached to your opponent’s Active Pokémon.",
			fr: "Cette attaque inflige 20 dégâts supplémentaires pour chaque Énergie attachée au Pokémon Actif de votre adversaire."
		},

		damage: "60+",
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card