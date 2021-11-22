import { Card } from '../../../interfaces'
import Set from '../Crystal Guardians'

const card: Card = {
	name: {
		en: "Blaziken ex",
		fr: "Brasegali ex"
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		257,
	],
	hp: 150,
	types: [
		"Fighting",
	],
	evolveFrom: {
		en: "Combusken",
	},

	suffix: "EX",

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Drag Off",
				fr: "Traîne"
			},
			effect: {
				en: "Before doing damage, you may choose 1 of your opponent's Benched Pokémon and switch it with 1 of the Defending Pokémon. Your opponent chooses the Defending Pok��mon to switch.",
				fr: "Avant d'infliger des dégâts, vous pouvez choisir 1 des Pokémon de Banc de votre adversaire et l'échanger avec 1 des Pokémon Défenseurs. Votre adversaire choisit le Pokémon Défenseur à échanger."
			},
			damage: 30,

		},
		{
			cost: [
				"Fire",
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Burn Away",
				fr: "Grosse brûlure"
			},
			effect: {
				en: "Before doing damage, count the remaining HP of the Defending Pokémon. If that Pokémon is Knocked Out by this attack, Blaziken ex does damage to itself equal to this attack's damage minus the remaining HP of the Defending Pokémon. This attack's damage isn't affected by Weakness, Resistance, Poké-Powers, Poké-Bodies, or any other effects on that Pokémon.",
				fr: "Avant d'infliger des dégâts, comptabilisez le nombre de Points de vie restant au Pokémon Défenseur. Si ce Pokémon est mis K.O par cette attaque, Brasegali ex s'inflige autant de dégâts que les dégâts de cette attaque moins les Points de vie restant au Pokémon Défenseur. Les dégâts de cette attaque ne sont pas affectés par la Faiblesse, la Résistance, les Poké-Powers, les Poké-Bodies ou tout autre effet sur ce Pokémon."
			},
			damage: 100,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],





}

export default card
