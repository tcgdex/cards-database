import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	name: {
		en: "Milotic",
		fr: "Milobellus",
		es: "Milotic",
		it: "Milotic",
		pt: "Milotic",
		de: "Milotic"
	},

	illustrator: "AKIRA EGAWA",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 120,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Feebas",
		fr: "Barpau"
	},

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
				en: "Once during your turn, you may heal 20 damage from each of your Pokémon.",
				fr: "Une fois pendant votre tour, vous pouvez soigner 20 dégâts de chacun de vos Pokémon.",
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
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Surf",
				fr: "Surf",
				es: "Surf",
				it: "Surf",
				pt: "Surfar",
				de: "Surfer"
			},

			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 2,
	regulationMark: "D",

	variants: {
		normal: false,
		reverse: true,
		holo: true,
		firstEdition: false
	}
}

export default card
