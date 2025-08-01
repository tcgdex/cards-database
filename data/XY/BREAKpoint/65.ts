import { Card } from '../../../interfaces'
import Set from '../BREAKpoint'

const card: Card = {
	name: {
		en: "Trevenant",
		fr: "Desséliande",
		es: "Trevenant",
		it: "Trevenant",
		pt: "Trevenant",
		de: "Trombork"
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
		en: "Phantump",
		fr: "Brocélôme",
		es: "Phantump",
		it: "Phantump",
		pt: "Phantump",
		de: "Paragoni"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Nervous Seed",
				fr: "Graine Angoisse",
				es: "Semilla Estresante",
				it: "Seme Minaccioso",
				pt: "Semente Nervosa",
				de: "Nervensaat"
			},
			effect: {
				en: "As long as this Pokémon is your Active Pokémon, your opponent's Basic Pokémon's attacks cost Colorless more.",
				fr: "Tant que ce Pokémon est votre Pokémon Actif, les attaques des Pokémon de base de votre adversaire coûtent Colorless de plus.",
				es: "Mientras este Pokémon sea tu Pokémon Activo, los ataques de los Pokémon Básicos de tu rival cuestan Colorless más.",
				it: "Fintanto che questo Pokémon è il tuo Pokémon attivo, gli attacchi dei Pokémon Base del tuo avversario costano Colorless in più.",
				pt: "Enquanto este Pokémon for o seu Pokémon Ativo, o custo dos ataques dos Pokémon Básicos do seu oponente será Colorless maior.",
				de: "Solang dieses Pokémon dein Aktives Pokémon ist, erhöhen sich die Angriffskosten der Basis-Pokémon deines Gegners um Colorless."
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
				en: "Energy Press",
				fr: "Pression Énergétique",
				es: "Presión Energética",
				it: "Energipressa",
				pt: "Aperto de Energia",
				de: "Energiedruck"
			},
			effect: {
				en: "This attack does 10 more damage for each Energy attached to your opponent's Active Pokémon.",
				fr: "Cette attaque inflige 10 dégâts supplémentaires pour chaque Énergie attachée au Pokémon Actif de votre adversaire.",
				es: "Este ataque hace 10 puntos de daño más por cada Energía unida al Pokémon Activo de tu rival.",
				it: "Questo attacco infligge 10 danni in più per ogni Energia assegnata al Pokémon attivo del tuo avversario.",
				pt: "Este ataque causa 10 de danos adicionais para cada Energia ligada ao Pokémon Ativo do seu oponente.",
				de: "Dieser Angriff fügt 10 weitere Schadenspunkte für jede Energie zu, die an das Aktive Pokémon deines Gegners angelegt ist."
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

	thirdParty: {
		cardmarket: 288240
	}
}

export default card
