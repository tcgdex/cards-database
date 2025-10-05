import { Card } from '../../../interfaces'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		en: "Mime Jr.",
		fr: "Mime Junior",
		de: "Pantimimi"
	},

	illustrator: "Miki Tanaka",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		439,
	],

	hp: 50,

	types: [
		"Psychic",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Baby Evolution",
				fr: "Évolution bébé",
				de: "Baby Evolution"
			},
			effect: {
				en: "Once during your turn (before your attack), you may put Mr. Mime from your hand onto Mime Jr. (this counts as evolving Mime Jr.) and remove all damage counters from Mime Jr.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez placer M. Mime de votre main sur Mime Junior (vous le faites ainsi évoluer) et retirer à Mime Junior tous ses marqueurs de dégât.",
				de: "Einmal während deines Zuges (vor deinem Angriff) kannst du Pantimos von deiner Hand auf Pantimimi legen (das zählt als Entwickeln von Pantimimi). Entferne alle Schadensmarken von Pantimimi."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Encore",
				fr: "Encore",
				de: "Zugabe"
			},
			effect: {
				en: "Choose 1 of the Defending Pokémon's attacks. That Pokémon can use only that attack during your opponent's next turn.",
				fr: "Choisissez 1 des attaques du Pokémon Défenseur. Ce Pokémon ne peut utiliser que cette attaque lors du prochain tour de votre adversaire.",
				de: "Wähle 1 Angriff des Verteidigenden Pokémon. Dieses Pokémon kann in der nächsten Runde nur den gewählten Angriff einsetzen."
			},

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "+10"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 278806
	},

	variants: [
		{
			type: "holo"
		},
		{
			type: "reverse"
		}
	]
}

export default card
