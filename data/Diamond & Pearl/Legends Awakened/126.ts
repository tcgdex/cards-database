import { Card } from '../../../interfaces'
import Set from '../Legends Awakened'

const card: Card = {
	name: {
		en: "Tyrogue",
		fr: "Debugant",
		de: "Rabauz"
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		236,
	],
	hp: 60,
	types: [
		"Fighting",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Baby Evolution",
				fr: "Évolution Bébé",
				de: "Baby Evolution"
			},
			effect: {
				en: "Once during your turn (before your attack), you may put Hitmonlee, Hitmonchan, or Hitmontop from your hand onto Tyrogue (this counts as evolving Tyrogue) and remove all damage counters from Tyrogue.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez placer Kicklee, Tygnon ou Kapoera de votre main sur Debugant (vous le faites ainsi évoluer) et retirer à Debugant tous ses marqueurs de dégât.",
				de: "Einmal während deines Zuges (vor deinem Angriff) kannst du Kicklee, Nockchan oder Kapoera von deiner Hand auf Rabauz legen (das zählt als Entwickeln von Rabauz). Entferne alle Schadensmarken von Rabauz."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Gut Blow",
				fr: "Gros coup d'tripes",
				de: "Magenhaken"
			},
			effect: {
				en: "If the Defending Pokémon is an Evolved Pokémon, this attack does 10 damage plus 20 more damage and Tyrogue does 10 damage to itself.",
				fr: "Si le Pokémon Défenseur est un Pokémon Évolué, cette attaque inflige 10 dégâts plus 20 dégâts supplémentaires et Debugant s'inflige 10 dégâts.",
				de: "Wenn das Verteidigende Pokémon ein entwickeltes Pokémon ist, fügt dieser Angriff 10 Schadenspunkte plus 20 weitere Schadenspunkte zu und Rabauz fügt sich selbst 10 Schadenspunkte zu."
			},
			damage: "10+",

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
