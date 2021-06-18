import { Card } from '../../../interfaces'
import Set from '../Chilling Reign'

const card: Card = {
	set: Set,

	name: {
		en: "Gengar",
		fr: "Ectoplasma"
	},

	illustrator: "Aya Kusube",
	rarity: "Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Psychic"],

	evolveFrom: {
		en: "Haunter",
		fr: "Spectrum"
	},

	abilities: [{
		type: "Ability",

		name: {
			en: "Last Gift",
			fr: "Dernier Geste"
		},

		effect: {
			en: "If this Pokémon is Knocked Out by damage from an attack from your opponent’s Pokémon, search your deck for up to 2 cards and put them into your hand. Then, shuffle your deck.",
			fr: "Si ce Pokémon est mis K.O. par les dégâts d’une attaque d’un Pokémon de votre adversaire, cherchez dans votre deck jusqu’à 2 cartes, puis ajoutez-les à votre main. Mélangez ensuite votre deck."
		}
	}],

	attacks: [{
		name: {
			en: "Pain Burst",
			fr: "Douleur Explosive"
		},

		effect: {
			en: "This attack does 40 more damage for each damage counter on your opponent’s Active Pokémon.",
			fr: "Cette attaque inflige 40 dégâts supplémentaires pour chaque marqueur de dégâts sur le Pokémon Actif de votre adversaire."
		},

		damage: "10+",
		cost: ["Colorless", "Colorless", "Colorless"]
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