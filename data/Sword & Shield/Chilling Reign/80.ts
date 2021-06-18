import { Card } from '../../../interfaces'
import Set from '../Chilling Reign'

const card: Card = {
	name: {
		en: "Galarian Zapdos V",
		fr: "Électhor de Galar V"
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,
	hp: 200,
	dexId: [145],

	types: [
		"Fighting",
	],

	stage: 'Basic',
	suffix: 'V',

	abilities: [{
		type: "Ability",
		name: {
			en: "Fighting Instinct",
			fr: "Instinct de Combat"
		},
		effect: {
			en: "This Pokémon’s attacks cost Colorless less for each of your opponent’s Pokémon V in play.",
			fr: "Les attaques de ce Pokémon coûtent Colorless de moins pour chaque Pokémon-V en jeu de votre adversaire."
		}
	}],

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
				"Colorless"
			],
			name: {
				en: "Thunderous Kick",
				fr: "Coup Fulgurant"
			},
			effect: {
				en: "Before doing damage, discard a Special Energy from your opponent’s Active Pokémon.",
				fr: "Avant d’infliger des dégâts, défaussez une Énergie spéciale du Pokémon Actif de votre adversaire.",
			},
			damage: 170
		}
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,
	regulationMark: "E"
}

export default card
