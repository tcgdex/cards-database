import { Card } from '../../../interfaces'
import Set from '../Power Keepers'

const card: Card = {
	name: {
		en: "Shiftry ex",
		fr: "Tengalice ex"
	},
	illustrator: "Ryo Ueda",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		275,
	],
	hp: 140,
	types: [
		"Darkness",
	],
	evolveFrom: {
		en: "Nuzleaf",
	},

	suffix: "EX",

	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				en: "Skill Hack",
				fr: "Solution pro"
			},
			effect: {
				en: "Look at your opponent's hand and choose a Basic Pokémon or Evolution card you find there. Choose 1 of that Pokémon's attacks. Skill Hack copies that attack except for its Energy cost. (You must still do anything else required for that attack.) (No matter what type that Pokémon is, Shiftry ex's type is still Darkness.) Shiftry ex performs that attack.",
				fr: "Regardez la main de votre adversaire et choisissez un Pokémon de base ou une carte Évolution. Choisissez 1 des attaques de ce Pokémon. Entaille pro copie cette attaque, son Coût en Énergie excepté. (Vous devez toujours faire ce que l'attaque indique.) (Peu importe le type de ce Pokémon, Tengalice ex est toujours de type .) Tengalice ex utilise cette attaque."
			},

		},
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Dirge",
				fr: "Explosion spirituelle"
			},
			effect: {
				en: "Does 60 damage to each of your opponent's Benched Pokémon that has the same name as the Defending Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Inflige 60 dégâts à chacun des Pokémon de Banc de votre adversaire possédant le même nom que le Pokémon Défenseur. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)"
			},
			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-30"
		},
	],




}

export default card
