import { Card } from '../../../interfaces'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,

	variants: {
		normal: false,
		reverse: false,
		holo: false,
		firstEdition: false
	},

	name: {
		en: "Leafeon VMAX",
		fr: "Phyllali VMAX",
		es: "Leafeon VMAX",
		it: "Leafeon VMAX",
		pt: "Leafeon VMAX",
		de: "Folipurba VMAX"
	},

	rarity: "Secret Rare",
	category: "Pokemon",
	hp: 310,
	types: ["Grass"],
	stage: "VMAX",
	illustrator: "PLANETA Tsuji",
	dexId: [470],

	evolveFrom: {
		en: "Leafeon V",
		fr: "Phyllali-V",
		es: "Leafeon V",
		it: "Leafeon-V",
		pt: "Leafeon V",
		de: "Folipurba-V"
	},

	attacks: [{
		cost: ["Grass", "Colorless"],

		name: {
			en: "Grass Knot",
			fr: "Nœud Herbe"
		},

		effect: {
			en: "This attack does 60 damage for each Colorless in your opponent's Active Pokémon's Retreat Cost.",
			fr: "Cette attaque inflige 60 dégâts pour chaque  dans le Coût de Retraite du Pokémon Actif de votre adversaire."
		},

		damage: "60×"
	}, {
		cost: ["Grass", "Grass", "Colorless"],

		name: {
			en: "Max Leaf",
			fr: "Feuillomax"
		},

		effect: {
			en: "Heal 30 damage from this Pokémon.",
			fr: "Soignez 30 dégâts de ce Pokémon."
		},

		damage: 170
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E",

	thirdParty: {
		cardmarket: 574032,
		tcgplayer: 246693
	}
}

export default card
