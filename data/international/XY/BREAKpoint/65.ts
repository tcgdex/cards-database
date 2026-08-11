import { Card } from 'models/database/card'
import Set from '../BREAKpoint'

const card: Card = {
	name: {
		'en-us': "Trevenant",
		'fr-fr': "Desséliande",
		'es-es': "Trevenant",
		'it-it': "Trevenant",
		'pt-br': "Trevenant",
		'de-de': "Trombork"
	},

	illustrator: "Midori Harada",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		709,
	],

	hp: 110,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Phantump",
		'fr-fr': "Brocélôme",
		'es-es': "Phantump",
		'it-it': "Phantump",
		'pt-br': "Phantump",
		'de-de': "Paragoni"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Nervous Seed",
				'fr-fr': "Graine Angoisse",
				'es-es': "Semilla Estresante",
				'it-it': "Seme Minaccioso",
				'pt-br': "Semente Nervosa",
				'de-de': "Nervensaat"
			},
			effect: {
				'en-us': "As long as this Pokémon is your Active Pokémon, your opponent's Basic Pokémon's attacks cost Colorless more.",
				'fr-fr': "Tant que ce Pokémon est votre Pokémon Actif, les attaques des Pokémon de base de votre adversaire coûtent Colorless de plus.",
				'es-es': "Mientras este Pokémon sea tu Pokémon Activo, los ataques de los Pokémon Básicos de tu rival cuestan Colorless más.",
				'it-it': "Fintanto che questo Pokémon è il tuo Pokémon attivo, gli attacchi dei Pokémon Base del tuo avversario costano Colorless in più.",
				'pt-br': "Enquanto este Pokémon for o seu Pokémon Ativo, o custo dos ataques dos Pokémon Básicos do seu oponente será Colorless maior.",
				'de-de': "Solang dieses Pokémon dein Aktives Pokémon ist, erhöhen sich die Angriffskosten der Basis-Pokémon deines Gegners um Colorless."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Energy Press",
				'fr-fr': "Pression Énergétique",
				'es-es': "Presión Energética",
				'it-it': "Energipressa",
				'pt-br': "Aperto de Energia",
				'de-de': "Energiedruck"
			},
			effect: {
				'en-us': "This attack does 10 more damage for each Energy attached to your opponent's Active Pokémon.",
				'fr-fr': "Cette attaque inflige 10 dégâts supplémentaires pour chaque Énergie attachée au Pokémon Actif de votre adversaire.",
				'es-es': "Este ataque hace 10 puntos de daño más por cada Energía unida al Pokémon Activo de tu rival.",
				'it-it': "Questo attacco infligge 10 danni in più per ogni Energia assegnata al Pokémon attivo del tuo avversario.",
				'pt-br': "Este ataque causa 10 de danos adicionais para cada Energia ligada ao Pokémon Ativo do seu oponente.",
				'de-de': "Dieser Angriff fügt 10 weitere Schadenspunkte für jede Energie zu, die an das Aktive Pokémon deines Gegners angelegt ist."
			},
			damage: "70+",

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 3,

	description: {
		'en-us': "Using its roots as a nervous system, it controls the trees in the forest. It's kind to the Pokémon that reside in its body.",
	},

	thirdParty: {
		cardmarket: 288240,
		tcgplayer: 111559
	}
}

export default card
