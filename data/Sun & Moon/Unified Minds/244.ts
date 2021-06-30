import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Aerodactyl-GX",
		fr: "Ptéra-GX",
		es: "Aerodactyl-GX",
		it: "Aerodactyl-GX",
		pt: "Aerodactyl-GX",
		de: "Aerodactyl-GX"
	},

	illustrator: undefined,
	rarity: "Secret Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		142,
	],

	hp: 210,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "UnidentifiedFossil",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Primal Winds",
				fr: "Vents Primaires",
				es: "Vientos Primigenios",
				it: "Venti Primordiali",
				pt: "Ventos Primitivos",
				de: "Urzeitwinde"
			},
			effect: {
				en: "As long as this Pokémon is your Active Pokémon, your opponent’s Basic Pokémon’s attacks cost Colorless more.",
				fr: "Tant que ce Pokémon est votre Pokémon Actif, les attaques des Pokémon de base de votre adversaire coûtent Colorless de plus.",
				es: "Mientras este Pokémon sea tu Pokémon Activo, los ataques de los Pokémon Básicos de tu rival cuestan Colorless más.",
				it: "Fintanto che questo Pokémon è il tuo Pokémon attivo, gli attacchi dei Pokémon Base del tuo avversario costano Colorless in più.",
				pt: "Enquanto este Pokémon for o seu Pokémon Ativo, o custo dos ataques dos Pokémon Básicos do seu oponente será Colorless a mais.",
				de: "Solang dieses Pokémon dein Aktives Pokémon ist, erhöhen sich die Kosten der Attacken der Basis-Pokémon deines Gegners um Colorless."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Boulder Crush",
				fr: "Rocher Écrasant",
				es: "Alud de Rocas",
				it: "Macignata",
				pt: "Rocha Esmagadora",
				de: "Felsenquetscher"
			},

			damage: 120,

		},
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Wild Dive GX",
				fr: "Piqué Fou GX",
				es: "Picado Salvaje GX",
				it: "Picchiata Irrefrenabile GX",
				pt: "Mergulho Selvagem GX",
				de: "Wilder Sturzflug"
			},
			effect: {
				en: "This attack does 50 damage times the amount of Energy attached to your opponent’s Active Pokémon. (You can’t use more than 1 GX attack in a game.)",
				fr: "Cette attaque inflige 50 dégâts multipliés par le nombre d’Énergies attachées au Pokémon Actif de votre adversaire. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				es: "Este ataque hace 50 puntos de daño por cada Energía unida al Pokémon Activo de tu rival. (No puedes usar más de 1 ataque GX en una partida).",
				it: "Questo attacco infligge 50 danni per ogni Energia assegnata al Pokémon attivo del tuo avversario. Non puoi usare più di un attacco GX a partita.",
				pt: "Este ataque causa 50 pontos de dano vezes a quantidade de Energia ligada ao Pokémon Ativo do seu oponente (você não pode usar mais de 1 ataque GX por partida).",
				de: "Diese Attacke fügt 50 Schadenspunkte mal der Anzahl der an das Aktive Pokémon deines Gegners angelegten Energien zu. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
			},
			damage: "50×",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 0
}

export default card
