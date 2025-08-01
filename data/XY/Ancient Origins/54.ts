import { Card } from '../../../interfaces'
import Set from '../Ancient Origins'

const card: Card = {
	name: {
		en: "Gardevoir",
		fr: "Gardevoir",
		es: "Gardevoir",
		it: "Gardevoir",
		pt: "Gardevoir",
		de: "Guardevoir"
	},

	illustrator: "TOKIYA",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		282,
	],

	hp: 130,

	types: [
		"Fairy",
	],

	evolveFrom: {
		en: "Kirlia",
		fr: "Kirlia",
		es: "Kirlia",
		it: "Kirlia",
		pt: "Kirlia",
		de: "Kirlia"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Bright Heal",
				fr: "Soin Lumineux",
				es: "Cura Brillante",
				it: "Lumicura",
				pt: "Cura Brilhante",
				de: "Helle Heilung"
			},
			effect: {
				en: "Once during your turn (before your attack), you may heal 20 damage from each of your Pokémon.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez soigner 20 dégâts à chacun de vos Pokémon.",
				es: "Una vez durante tu turno, puedes curar 20 puntos de daño a cada uno de tus Pokémon.",
				it: "Una sola volta durante il tuo turno, puoi curare ciascuno dei tuoi Pokémon da 20 danni.",
				pt: "Uma vez durante o seu turno, você poderá curar 20 pontos de dano de cada um dos seus Pokémon.",
				de: "Einmal während deines Zuges kannst du 20 Schadenspunkte bei jedem deiner Pokémon heilen."
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
				en: "Telekinesis",
				fr: "Lévikinésie",
				es: "Telequinesis",
				it: "Telecinesi",
				pt: "Telecinese",
				de: "Telekinese"
			},
			effect: {
				en: "This attack does 50 damage to 1 of your opponent's Pokémon. This attack's damage isn't affected by Weakness or Resistance.",
				fr: "Cette attaque inflige 50 dégâts à l'un des Pokémon de votre adversaire. Les dégâts de cette attaque ne sont pas affectés par la Faiblesse ou la Résistance.",
				es: "Este ataque hace 50 puntos de daño a 1 de los Pokémon de tu rival. El daño de este ataque no se ve afectado por Debilidad o Resistencia.",
				it: "Questo attacco infligge 50 danni a uno dei Pokémon del tuo avversario. I danni di questo attacco non sono influenzati dalla debolezza o dalla resistenza.",
				pt: "Este ataque causa 50 de danos a 1 dos Pokémon de seu oponente. Os danos deste ataque não são afetados por Fraqueza ou Resistência.",
				de: "Dieser Angriff fügt 1 Pokémon deines Gegners 50 Schadenspunkte zu. Der Schaden dieses Angriffs wird durch Schwäche und Resistenz nicht verändert."
			},

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Darkness",
			value: "-20"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 284235
	}
}

export default card
