import { Card } from 'models/database/card'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		'en-us': "Aerodactyl GX",
		'fr-fr': "Ptéra GX",
		'es-es': "Aerodactyl GX",
		'it-it': "Aerodactyl GX",
		'pt-br': "Aerodactyl GX",
		'de-de': "Aerodactyl GX"
	},

	illustrator: "ConceptLab",
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
		'en-us': "Unidentified Fossil",
		'fr-fr': "Fossile Inconnu"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Primal Winds",
				'fr-fr': "Vents Primaires",
				'es-es': "Vientos Primigenios",
				'it-it': "Venti Primordiali",
				'pt-br': "Ventos Primitivos",
				'de-de': "Urzeitwinde"
			},
			effect: {
				'en-us': "As long as this Pokémon is your Active Pokémon, your opponent’s Basic Pokémon’s attacks cost Colorless more.",
				'fr-fr': "Tant que ce Pokémon est votre Pokémon Actif, les attaques des Pokémon de base de votre adversaire coûtent Colorless de plus.",
				'es-es': "Mientras este Pokémon sea tu Pokémon Activo, los ataques de los Pokémon Básicos de tu rival cuestan Colorless más.",
				'it-it': "Fintanto che questo Pokémon è il tuo Pokémon attivo, gli attacchi dei Pokémon Base del tuo avversario costano Colorless in più.",
				'pt-br': "Enquanto este Pokémon for o seu Pokémon Ativo, o custo dos ataques dos Pokémon Básicos do seu oponente será Colorless a mais.",
				'de-de': "Solang dieses Pokémon dein Aktives Pokémon ist, erhöhen sich die Kosten der Attacken der Basis-Pokémon deines Gegners um Colorless."
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
				'en-us': "Boulder Crush",
				'fr-fr': "Rocher Écrasant",
				'es-es': "Alud de Rocas",
				'it-it': "Macignata",
				'pt-br': "Rocha Esmagadora",
				'de-de': "Felsenquetscher"
			},

			damage: 120,

		},
		{
			cost: [
				"Fighting",
			],
			name: {
				'en-us': "Wild Dive GX",
				'fr-fr': "Piqué Fou GX",
				'es-es': "Picado Salvaje GX",
				'it-it': "Picchiata Irrefrenabile GX",
				'pt-br': "Mergulho Selvagem GX",
				'de-de': "Wilder Sturzflug"
			},
			effect: {
				'en-us': "This attack does 50 damage times the amount of Energy attached to your opponent’s Active Pokémon. (You can’t use more than 1 GX attack in a game.)",
				'fr-fr': "Cette attaque inflige 50 dégâts multipliés par le nombre d’Énergies attachées au Pokémon Actif de votre adversaire. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				'es-es': "Este ataque hace 50 puntos de daño por cada Energía unida al Pokémon Activo de tu rival. (No puedes usar más de 1 ataque GX en una partida).",
				'it-it': "Questo attacco infligge 50 danni per ogni Energia assegnata al Pokémon attivo del tuo avversario. Non puoi usare più di un attacco GX a partita.",
				'pt-br': "Este ataque causa 50 pontos de dano vezes a quantidade de Energia ligada ao Pokémon Ativo do seu oponente (você não pode usar mais de 1 ataque GX por partida).",
				'de-de': "Diese Attacke fügt 50 Schadenspunkte mal der Anzahl der an das Aktive Pokémon deines Gegners angelegten Energien zu. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
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

	retreat: 0,

	thirdParty: {
		cardmarket: 389012,
		tcgplayer: 195054
	}
}

export default card
