import { Card } from "models/database/card"
import Set from "../Extradimensional Crisis"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Ferrothorn",
		'fr-fr': "Noacier"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [598],
	hp: 110,
	types: ["Metal"],

	evolveFrom: {
		'en-us': "Ferroseed"
	},

	description: {
		'en-us': "This Pokémon scrapes its spikes across rocks,\nand then uses the tips of its feelers to absorb\nthe nutrients it finds within the stone.",
		'fr-fr': "Il fissure la roche avec ses épines pour ensuite absorber les nutriments qui s'y trouvent grâce à l'extrémité de ses tentacules."
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Steel Spikes",
			'fr-fr': "Épines d'Acier"
		},

		effect: {
			'en-us': "If this Pokémon is in the Active Spot and is damaged by an attack from your opponent's Pokémon, do 20 damage to the Attacking Pokémon.",
			'fr-fr': "Si ce Pokémon est sur le Poste Actif et subit les dégâts d'une attaque d'un Pokémon de votre adversaire, le Pokémon Attaquant subit 20 dégâts."
		}
	}],

	attacks: [{
		name: {
			'en-us': "Spinning Attack",
			'fr-fr': "Attaque Tournante"
		},

		damage: 70,
		cost: ["Metal", "Metal", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 3
}

export default card