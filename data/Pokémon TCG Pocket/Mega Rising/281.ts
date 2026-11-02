import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Dragalge ex",
		fr: "Kravarech-ex"
	},

	illustrator: "Shinji Kanda",
	rarity: "Two Star",
	category: "Pokemon",

	dexId: [691],
	hp: 150,
	types: ["Darkness"],

	evolveFrom: {
		en: "Skrelp",
		fr: "Venalgue"
	},

	stage: "Stage1",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			en: "Poison Point",
			fr: "Point Poison"
		},

		effect: {
			en: "If this Pokémon is in the Active Spot and is damaged by an attack from your opponent's Pokémon, the Attacking Pokémon is now Poisoned.",
			fr: "Si ce Pokémon est sur le Poste Actif et qu'il subit les dégâts d'une attaque d'un Pokémon de votre adversaire, le Pokémon Attaquant est maintenant Empoisonné."
		}
	}],

	attacks: [{
		name: {
			en: "Draconic Whip",
			fr: "Fouet Draconien"
		},

		damage: 80,
		cost: ["Darkness", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 2,
	boosters: ["mega-blaziken"]
}

export default card