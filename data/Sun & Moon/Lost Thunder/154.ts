import { Card } from '../../../interfaces'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		en: "Ditto ◇",
		fr: "Métamorph ",
	},
	illustrator: "kirisAki",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		132,
	],
	hp: 40,
	types: [
		"Colorless",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Almighty Evolution",
				fr: "Évolution Toute-Puissante",
			},
			effect: {
				en: "Once during your turn (before your attack), you may put any Stage 1 card from your hand onto this Pokémon to evolve it. You can't use this Ability during your first turn or the turn this Pokémon was put into play.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez placer n’importe quelle carte de Niveau 1 de votre main sur ce Pokémon pour le faire évoluer. Vous ne pouvez utiliser ce talent ni pendant votre premier tour ni pendant le tour durant lequel ce Pokémon a été joué.",
			},
		},
	],
	attacks: [
		{

			name: {
				fr: "Règle pour les cartes  (Prisme Étoile)",
			},


		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
