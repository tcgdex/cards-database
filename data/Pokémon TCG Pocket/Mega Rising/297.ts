import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Poliwrath",
		fr: "Tartard"
	},

	illustrator: "MAHOU",
	rarity: "One Shiny",
	category: "Pokemon",

	dexId: [62],
	hp: 150,
	types: ["Water"],

	evolveFrom: {
		en: "Poliwhirl",
		fr: "Têtarte"
	},

	description: {
		en: "Its body is solid muscle. When swimming through\ncold seas, Poliwrath uses its impressive arms to\nsmash through drift ice and plow forward.",
		fr: "Cette véritable montagne de muscles peut\\nse frayer un chemin même dans les eaux glaciales\\nen éclatant la banquise avec ses bras robustes."
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			en: "Counterattack",
			fr: "Contre-Attaque"
		},

		effect: {
			en: "If this Pokémon is in the Active Spot and is damaged by an attack from your opponent's Pokémon, do 20 damage to the Attacking Pokémon.",
			fr: "Si ce Pokémon est sur le Poste Actif et subit les dégâts d'une attaque d'un Pokémon de votre adversaire, le Pokémon Attaquant subit 20 dégâts."
		}
	}],

	attacks: [{
		name: {
			en: "Mega Punch",
			fr: "Ultimapoing"
		},

		damage: 80,
		cost: ["Water", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 2,
	boosters: ["mega-gyarados"]
}

export default card