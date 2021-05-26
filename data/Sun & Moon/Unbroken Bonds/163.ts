import { Card } from '../../../interfaces'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		en: "Celesteela-GX",
		fr: "Bamboiselle-GX",
	},
	illustrator: "PLANETA Igarashi",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		797,
	],
	hp: 200,
	types: [
		"Colorless",
	],


	suffix: "GX",
	abilities: [
		{
			type: "Ability",
			name: {
				en: "Force Canceler",
				fr: "Annule Force",
			},
			effect: {
				en: "As long as this Pokémon is your Active Pokémon, prevent all effects of your opponent's GX attacks, including damage, done to your Pokémon.",
				fr: "Tant que ce Pokémon est votre Pokémon Actif, évitez tous les effets des attaques GX de votre adversaire, y compris les dégâts, infligés à vos Pokémon.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Power Cyclone",
				fr: "Cyclone d’Énergie",
			},
			effect: {
				en: "Move an Energy from this Pokémon to 1 of your Benched Pokémon.",
				fr: "Déplacez une Énergie de ce Pokémon vers l’un de vos Pokémon de Banc.",
			},
			damage: 110,

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Discovery-GX",
				fr: "Découverte-GX",
			},
			effect: {
				en: "Count your Prize cards and put them into your hand. Then, take that many cards from the top of your deck and put them face down as your Prize cards. If you don't have that many cards in your deck, this attack does nothing. (You can't use more than 1 GX attack in a game.)",
				fr: "Comptez vos cartes Récompense, puis ajoutez-les à votre main. Prenez alors ce nombre de cartes du dessus de votre deck et placez-les faces cachées comme cartes Récompense. Si vous n’avez pas assez de cartes dans votre deck, cette attaque ne fait rien. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
			},

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],
	retreat: 4,



}

export default card
