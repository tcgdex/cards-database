import { Card } from '../../../interfaces'
import Set from '../Plasma Storm'

const card: Card = {
	name: {
		en: "Cherrim",
		fr: "Ceriflor",
		es: "Cherrim",
		it: "Cherrim",
		pt: "Cherrim",
		de: "Kinoso"
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		421,
	],
	hp: 70,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Cherubi",
		fr: "Ceribou",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Fair-Weather Heal",
				fr: "Soin des Beaux Jours",
				es: "Cura del Buen Tiempo",
				it: "Curabeltempo",
				pt: "Cura Bom Tempo",
				de: "Gut-Wetter-Heilung"
			},
			effect: {
				en: "Once during your turn (before your attack), you may heal 20 damage from 1 of your Pokémon that has any Grass Energy attached to it.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez soigner 20 dégâts à 1 de vos Pokémon auquel de l’Énergie Grass est attachée.",
				es: "Una vez durante tu turno (antes de tu ataque), puedes curar 20 puntos de daño a 1 de tus Pokémon que tenga alguna Energía Grass unida a él.",
				it: "Una sola volta durante il tuo turno, prima di attaccare, puoi curare da 20 danni uno dei tuoi Pokémon che ha Energie Grass assegnate.",
				pt: "Uma vez na sua vez de jogar (antes de atacar), você poderá curar 20 de danos de 1 dos seus Pokémon com qualquer Energia Grass ligada a ele.",
				de: "Einmal während deines Zuges (vor deinem Angriff) kannst du 20 Schadenspunkte bei 1 deiner Pokémon heilen, an das Grass-Energie angelegt ist."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Random Peck",
				fr: "Coup d'Bec au Pif",
			},
			effect: {
				en: "Flip 2 coins. This attack does 20 more damage for each heads.",
				fr: "Lancez 2 pièces. Cette attaque inflige 20 dégâts supplémentaires pour chaque côté face.",
			},
			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Water",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
