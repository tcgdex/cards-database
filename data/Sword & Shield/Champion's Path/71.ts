import { Card } from '../../../interfaces'
import Set from '../Champion\'s Path'

const card: Card = {
	name: {
		en: "Galarian Cursola V",
		fr: "Corayôme de Galar V"
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,
	hp: 190,

	types: [
		"Psychic",
	],

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Gnawing Aura",
				fr: "Aura Rongeante"
			},
			effect: {
				en: "As long as this Pokémon is in the Active Spot, whenever your opponent attaches an Energy card from their hand to 1 of their Pokémon, put 3 damage counters on that Pokémon.",
				fr: "Tant que ce Pokémon est sur le Poste Actif, chaque fois que votre adversaire attache une carte Énergie de sa main à l’un de ses Pokémon, placez 3 marqueurs de dégâts sur ce Pokémon-là."
			},
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

	attacks: [{
		name: {
			en: "Hollow Missile",
			fr: "Missile Éthéré"
		},

		effect: {
			en: "Put 3 damage counters on your opponent’s Benched Pokémon in any way you like.",
			fr: "Placez 3 marqueurs de dégâts sur les Pokémon de Banc de votre adversaire comme il vous plaît."
		},

		damage: 60,
		cost: ["Psychic", "Colorless"]
	}]
}

export default card
