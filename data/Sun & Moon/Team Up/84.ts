import { Card } from '../../../interfaces'
import Set from '../Team Up'

const card: Card = {
	name: {
		en: "Alolan Muk",
		fr: "Grotadmorv d’Alola",
	},
	illustrator: "Midori Harada",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		89,
	],
	hp: 120,
	types: [
		"Darkness",
	],
	evolveFrom: {
		en: "Alolan Grimer",
		fr: "Tadmorv d’Alola",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Adventurous Appetite",
				fr: "Appétit Aventurier",
			},
			effect: {
				en: "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may look at the top 6 cards of your opponent's deck and discard any number of Item cards you find there. Your opponent shuffles the other cards back into their deck.",
				fr: "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer l’un de vos Pokémon pendant votre tour, vous pouvez regarder les 6 cartes du dessus du deck de votre adversaire et en défausser autant de cartes Objet trouvées que vous voulez. Votre adversaire mélange les autres cartes avec son deck.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Gunk Shot",
				fr: "Détricanon",
			},
			effect: {
				en: "Your opponent's Active Pokémon is now Poisoned.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
			},
			damage: 80,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],
	retreat: 3,



}

export default card
