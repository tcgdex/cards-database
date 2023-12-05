import { Card } from '../../../interfaces'
import Set from '../Secret Wonders'

const card: Card = {
	name: {
		en: "Smoochum",
		fr: "Lippouti",
		de: "Kussilla"
	},
	illustrator: "Atsuko Nishida",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		238,
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
				en: "Once during your turn (before your attack), you may put Jynx from your hand onto Smoochum (this counts as evolving Smoochum) and remove all damage counters from Smoochum.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez placer Lippoutou de votre main sur Lippouti (vous le faites ainsi évoluer) et retirer à Lippouti tous ses marqueurs de dégât.",
				de: "Einmal während deines Zuges (vor deinem Angriff) kannst du Rossana von deiner Hand auf Kussilla legen (das zählt als Entwickeln von Kussilla). Entferne alle Schadensmarken von Kussilla."
			},
		},
	],
	attacks: [
		{

			name: {
				en: "Psykiss",
				fr: "Psy'bisou",
				de: "Psykuss"
			},
			effect: {
				en: "Flip a coin. If heads, choose a Special Energy card attached to 1 of your opponent's Pokémon and have your opponent shuffle that card into his or her deck.",
				fr: "Lancez une pièce. Si c'est face, choisissez une carte Énergie spéciale attachée à 1 des Pokémon de votre adversaire et demandez à votre adversaire de la mélanger à son deck.",
				de: "Wirf 1 Münze. Wähle bei \"Kopf\" eine Spezialenergiekarte, die an 1 Pokémon deines Gegners angelegt ist. Dein Gegner mischt die gewählte Karte in sein Deck."
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



}

export default card
