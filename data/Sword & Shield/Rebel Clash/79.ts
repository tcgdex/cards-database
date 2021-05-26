import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		en: "Galarian Cursola",
		fr: "Corayôme de Galar"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	evolveFrom: {
		en: "Galarian Corsola",
		fr: "Corayon de Galar"
	},

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Perish Body",
				fr: "Corps Condamné"
			},
			effect: {
				en: "If this Pokémon is in the Active Spot and is Knocked Out by damage from an opponent's attack, flip a coin. If heads, the Attacking Pokémon is Knocked Out.",
				fr: "Si ce Pokémon est sur le Poste Actif et est mis K.O. par les dégâts d’une attaque de votre adversaire, lancez une pièce. Si c’est face, le Pokémon Attaquant est mis K.O."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Corner",
				fr: "Coinçage"
			},
			effect: {
				en: "During your opponent's next turn, the Defending Pokémon can't retreat.",
				fr: "Pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas battre en retraite."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	retreat: 2,
	hp: 100,
	types: ["Psychic"]
}

export default card
