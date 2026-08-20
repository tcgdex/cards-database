import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Jellicent",
		fr: "Moyade"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Three Diamond",
	category: "Pokemon",

	dexId: [593],
	hp: 120,
	types: ["Water"],

	evolveFrom: {
		en: "Frillish",
		fr: "Viskuse"
	},

	description: {
		en: "Whenever a full moon hangs in the night sky,\nschools of Jellicent gather near the surface of\nthe sea, waiting for their prey to appear."
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Bouncy Body",
			fr: "Corps Rebondissant"
		},

		effect: {
			en: "If this Pokémon is in the Active Spot and is damaged by an attack from your opponent's Pokémon, take a {W} Energy from your Energy Zone and attach it to 1 of your Benched Pokémon.",
			fr: "Si ce Pokémon est sur le Poste Actif et subit les dégâts d'une attaque d'un Pokémon de votre adversaire, prenez une Énergie {W} de votre zone Énergie et attachez-la à un de vos Pokémon de Banc."
		}
	}],

	attacks: [{
		name: {
			en: "Surf",
			fr: "Surf"
		},

		damage: 60,
		cost: ["Water", "Water"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 2,

	boosters: ["mega-gyarados"]
}

export default card