import { Card } from "../../../interfaces"
import Set from "../Secluded Springs"

const card: Card = {
	set: Set,

	name: {
		en: "Galarian Cursola",
		fr: "Corayôme de Galar"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Three Diamond",
	category: "Pokemon",
	hp: 80,
	types: ["Psychic"],

	evolveFrom: {
		en: "Galarian Corsola"
	},

	description: {
		en: "Its shell is overflowing with its heightened\notherworldly energy. The ectoplasm serves as\nprotection for this Pokémon's core spirit.",
		fr: "Son énergie spectrale accrue s'est répandue hors de sa coquille. Il protège l'âme de son noyau avec son corps spirituel."
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Perish Body",
			fr: "Corps Condamné"
		},

		effect: {
			en: "If this Pokémon is in the Active Spot and is Knocked Out by damage from an attack from your opponent's Pokémon, flip a coin. If heads, the Attacking Pokémon is Knocked Out.",
			fr: "Si ce Pokémon est sur le Poste Actif et est mis K.O. par les dégâts d'une attaque d'un Pokémon de votre adversaire, lancez une pièce. Si c'est face, le Pokémon Attaquant est mis K.O."
		}
	}],

	attacks: [{
		name: {
			en: "Spooky Shot",
			fr: "Tir Effrayant"
		},

		damage: 60,
		cost: ["Psychic", "Psychic"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 2
}

export default card