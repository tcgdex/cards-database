import { Card } from '../../../interfaces'
import Set from '../Roaring Skies'

const card: Card = {
	name: {
		en: "Carbink",
		fr: "Strassie",
		es: "Carbink",
		it: "Carbink",
		pt: "Carbink",
		de: "Rocara"
	},
	illustrator: "Akira Komayama",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		703,
	],
	hp: 70,
	types: [
		"Fairy",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Jewel Armor",
				fr: "Armure Joyau",
				es: "Armadura de Joyas",
				it: "Gemmascudo",
				pt: "Armadura de Joia",
				de: "Juwelenrüstung"
			},
			effect: {
				en: "As long as this Pokémon is on your Bench, prevent all damage done to this Pokémon by attacks (both yours and your opponent's).",
				fr: "Tant que ce Pokémon est sur votre Banc, évitez tous les dégâts infligés à ce Pokémon par des attaques (les vôtres et celles de votre adversaire).",
				es: "Mientras este Pokémon esté en tu Banca, evita todo el daño infligido a este Pokémon por ataques (tanto tuyos como de tu rival).",
				it: "Fintanto che questo Pokémon è nella tua panchina, previeni tutti i danni inflitti a questo Pokémon dagli attacchi, sia tuoi che del tuo avversario.",
				pt: "Desde que este Pokémon esteja em seu Banco, impede todos os danos causados a ele por ataques (seus e do seu oponente).",
				de: "Solang sich dieses Pokémon auf deiner Bank befindet, verhindere allen Schaden, der diesem Pokémon durch Angriffe (deine und die deines Gegners) zugefügt würde."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fairy",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Spin Tackle",
				fr: "Charge Tournoyante",
				es: "Placaje Giro",
				it: "Svoltazione",
				pt: "Investida Giratória",
				de: "Dreh-Tackle"
			},
			effect: {
				en: "Flip a coin. If tails, this Pokémon does 20 damage to itself.",
				fr: "Lancez une pièce. Si c'est pile, ce Pokémon s'inflige 20 dégâts.",
				es: "Lanza 1 moneda. Si sale cruz, este Pokémon se hace 20 puntos de daño a sí mismo.",
				it: "Lancia una moneta. Se esce croce, questo Pokémon infligge 20 danni a se stesso.",
				pt: "Jogue uma moeda. Se sair coroa, este Pokémon causará 20 de danos a ele mesmo.",
				de: "Wirf 1 Münze. Bei \"Zahl\" fügt sich dieses Pokémon selbst 20 Schadenspunkte zu."
			},
			damage: 60,

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



}

export default card
