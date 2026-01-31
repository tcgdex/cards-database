import { Card } from '../../../interfaces'
import Set from '../Legend Maker'

const card: Card = {
	name: {
		en: "Magby",
		fr: "Magby",
		de: "Magby"
	},

	illustrator: "Yuka Morii",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		240,
	],

	hp: 40,

	types: [
		"Fire",
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
				en: "Once during your turn (before your attack), you may put Magmar from your hand onto Magby (this counts as evolving Magby) and remove all damage counters from Magby.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez placer Magmar de votre main sur Magby (vous le faites ainsi évoluer) et retirer à Magby tous ses marqueurs de dégât.",
				de: "Einmal während deines Zuges (vor deinem Angriff), kannst du Magmar von deiner Hand auf Magby legen (das zählt als Entwickeln von Magby). Entferne alle Schadensmarken von Magby."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Ignite",
				fr: "Mettre le feu",
				de: "Entzünden"
			},
			effect: {
				en: "If Full Flame is in play, the Defending Pokémon is now Burned.",
				fr: "Si Flamme maximale est en jeu, le Pokémon Défenseur est maintenant Brûlé.",
				de: "Wenn die Volle Flamme im Spiel ist, ist das Verteidigende Pokémon jetzt verbrannt."
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	
	retreat: 1,

	thirdParty: {
		cardmarket: 276935,
		tcgplayer: 87004
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		}
	]
}

export default card
