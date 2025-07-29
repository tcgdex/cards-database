import { Card } from '../../../interfaces'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		en: "Pichu",
		fr: "Pichu",
		de: "Pichu"
	},

	illustrator: "Yuka Morii",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		172,
	],

	hp: 40,

	types: [
		"Lightning",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Baby Evolution",
				fr: "Évolution bébé",
				de: "Baby-Evolution"
			},
			effect: {
				en: "Once during your turn (before your attack), you may put Pikachu from your hand onto Pichu (this counts as evolving Pichu) and remove all damage counters from Pichu.",
				fr: "Une seule fois lors votre tour (avant votre attaque), vous pouvez placer Pikachu de votre main sur Pichu (vous le faites ainsi évoluer) et retirer à Pichu tous ses marqueurs de dégât.",
				de: "Einmal während deines Zuges (vor deinem Angriff) kannst du Pikachu von deiner Hand auf Pichu legen (das zählt als Entwickeln von Pichu). Entferne alle Schadensmarken von Pichu."
			},
		},
	],

	attacks: [
		{

			name: {
				en: "Chupi",
				fr: "Chupi",
				de: "Chupi"
			},
			effect: {
				en: "Flip a coin. If tails, this attack does nothing.",
				fr: "Lancez une pièce. Si c'est pile, cette attaque est sans effet.",
				de: "Wirf 1 Münze. Bei \"Zahl\" hat dieser Angriff keine Auswirkungen."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+10"
		},
	],

	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],

	description: {
		fr: "Les poches sur ses joues sont encore trop petites pour accumuler beaucoup d'électricité."
	},

	thirdParty: {
		cardmarket: 277722
	}
}

export default card
