import { Card } from '../../../interfaces'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,

	name: {
		en: "Polteageist V",
		fr: "Polthégeist V"
	},

	illustrator: "PLANETA Igarashi",
	rarity: "Common",
	category: "Pokemon",
	hp: 170,
	types: ["Psychic"],

	abilities: [{
		type: "Ability",

		name: {
			en: "Teapot of Surprises",
			fr: "Théière Surprise"
		},

		effect: {
			en: "If this Pokémon is in the Active Spot and is damaged by an opponent’s attack (even if it is Knocked Out), choose a random card from your opponent’s hand. Your opponent reveals that card and puts it on the bottom of their deck.",
			fr: "Si ce Pokémon est sur le Poste Actif et qu’il subit les dégâts d’une attaque de votre adversaire (même s’il est mis K.O.), choisissez une carte au hasard dans la main de votre adversaire. Votre adversaire montre cette carte, puis la place en dessous de son deck."
		}
	}],

	attacks: [{
		name: {
			en: "Mind Bend",
			fr: "Contrôleur d’Esprit"
		},

		effect: {
			en: "Your opponent’s Active Pokémon is now Confused.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Confus."
		},

		damage: 100,
		cost: ["Psychic", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1
}

export default card