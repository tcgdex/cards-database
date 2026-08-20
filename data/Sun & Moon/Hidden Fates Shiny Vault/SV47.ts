import { Card } from '../../../interfaces'
import Set from '../Hidden Fates Shiny Vault'

const card: Card = {
	name: {
		en: "Decidueye-GX",
		fr: "Archéduc-GX",
		de: "Silvarro-GX"
	},
	illustrator: "5ban Graphics",
	rarity: "Shiny rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		724,
	],
	hp: 240,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Dartrix",
		fr: "Efflèche",
		de: "Arboretoss"
	},

	suffix: "GX",
	abilities: [
		{
			type: "Ability",
			name: {
				en: "Feather Arrow",
				fr: "Flèche Empennée",
				de: "Federpfeil"
			},
			effect: {
				en: "Once during your turn (before your attack), you may put 2 damage counters on 1 of your opponent's Pokémon.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez placer 2 marqueurs de dégâts sur l’un des Pokémon de votre adversaire.",
				de: "Einmal während deines Zuges (bevor du angreifst) kannst du 2 Schadensmarken auf 1 Pokémon deines Gegners legen."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Razor Leaf",
				fr: "Tranch’Herbe",
				de: "Rasierblatt"
			},

			damage: 90,

		},
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Hollow Hunt-GX",
				fr: "Chasse Éthérée-GX",
				de: "Pirschjagd GX"
			},
			effect: {
				en: "Put 3 cards from your discard pile into your hand. (You can't use more than 1 GX attack in a game.)",
				fr: "Prenez 3 cartes dans votre pile de défausse et ajoutez-les à votre main. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				de: "Nimm 3 Karten aus deinem Ablagestapel auf deine Hand. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
			},

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
