import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Charmilly V",
		en: "Alcremie V"
	},

	illustrator: "Ayaka Yoshida",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 170,
	types: ["Psychic"],

	attacks: [{
		name: {
			fr: "Granulés Sucrés",
			en: "Sugary Sprinkles"
		},

		effect: {
			fr: "Soignez 30 dégâts de chacun de vos Pokémon de Banc.",
			en: "Heal 30 damage from each of your Benched Pokémon."
		},

		cost: ["Psychic"]
	}, {
		name: {
			fr: "Soupçon de Sucre",
			en: "Sweet Splash"
		},

		effect: {
			fr: "Si le Pokémon Défenseur est un Pokémon de base, il ne peut pas attaquer pendant le prochain tour de votre adversaire.",
			en: "If the Defending Pokémon is a Basic Pokémon, it can’t attack during your opponent’s next turn."
		},

		damage: 100,
		cost: ["Psychic", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 2
}

export default card