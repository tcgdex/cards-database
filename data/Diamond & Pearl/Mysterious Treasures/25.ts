import { Card } from '../../../interfaces'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		en: "Glalie",
		fr: "Oniglali",
		de: "Firnontor"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		362,
	],

	hp: 90,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Snorunt",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Craggy Face",
				fr: "Visage taillé au couteau",
				de: "Zerklüftetes Gesicht"
			},
			effect: {
				en: "As long as Glalie is your Active Pokémon, any damage done by attacks from your opponent's Stage 2 Evolved Pokémon is reduced by 20 (before applying Weakness and Resistance).",
				fr: "Tant qu'Oniglali est votre Pokémon Actif, tous dégâts qui lui sont infligés par des attaques de Pokémon Évolués de Niveau 2 de votre adversaire sont réduits de 20 (avant application de la Faiblesse et de la Résistance).",
				de: "Solange Firnontor dein Aktives Pokémon ist, wird aller Schaden von Angriffen von entwickelten Pokémon der Phase 2 deines Gegners um 20 Schadenspunkte reduziert (bevor Schwäche und Resistenz verrechnet werden)."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				en: "Intimidation Pebble",
				fr: "Galet intimidant",
				de: "Einschüchter-Kiesel"
			},
			effect: {
				en: "Flip a coin. If heads, your opponent can't play any Trainer cards or Supporter cards from his or her hand during your opponent's next turn.",
				fr: "Lancez une pièce. Si c'est face, votre adversaire ne peut pas jouer de cartes Dresseur ou de cartes Supporter de sa main lors de son prochain tour.",
				de: "Wirf 1 Münze. Bei \"Kopf\" kann dein Gegner in seinem nächsten Zug keine Trainer- oder Unterstützerkarten von seiner Hand spielen."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "+20"
		},
	],

	description: {
		fr: "Il gèle l'humidité de l'air pour former une armure de glace protectrice autour de son corps."
	}
}

export default card
