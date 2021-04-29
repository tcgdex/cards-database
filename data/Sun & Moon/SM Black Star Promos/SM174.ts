import { Card } from '../../../interfaces'
import Set from '../SM Black Star Promos'

const card: Card = {
	name: {
		en: "Eevee-GX",
		fr: "Évoli-GX",
	},
	illustrator: "PLANETA Otani",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		133,
	],
	hp: 160,
	types: [
		"Colorless",
	],


	suffix: "GX",
	abilities: [
		{
			type: "Ability",
			name: {
				en: "Ascension DNA",
				fr: "ADN d’Ascension",
			},
			effect: {
				en: "Once during your turn (before your attack), if you have a Pokémon in your hand that evolves from Eevee, you may put that card onto this Pokémon to evolve it. Before evolving, heal all damage from this Pokémon. You can't use this Ability during your first turn or the turn this Pokémon was put into play.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), si vous avez dans votre main un Pokémon qui évolue d’Évoli, vous pouvez placer cette carte sur ce Pokémon pour le faire évoluer. Avant de le faire évoluer, soignez tous les dégâts de ce Pokémon. Vous ne pouvez utiliser ce talent ni pendant votre premier tour ni pendant le tour durant lequel ce Pokémon a été joué.",
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
				en: "Boost Dash",
				fr: "Ruée Propulsée",
			},

			damage: 100,

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Joy Maker GX",
				fr: "Créateur de Joie-GX",
			},
			effect: {
				en: "Put 3 cards from your discard pile into your hand. (You can't use more than 1 GX attack in a game.)",
				fr: "Placez 3 cartes de votre pile de défausse dans votre main. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
			},

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
