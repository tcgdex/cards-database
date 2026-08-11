import { Card } from 'models/database/card'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		'en-us': "Tsareena",
		'fr-fr': "Sucreine",
		'es-es': "Tsareena",
		'it-it': "Tsareena",
		'pt-br': "Tsareena",
		'de-de': "Fruyal"
	},

	illustrator: "kirisAki",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		763,
	],

	hp: 140,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Steenee",
		'fr-fr': "Candine",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Queenly Reward",
				'fr-fr': "Récompense Royale",
				'es-es': "Recompensa Regia",
				'it-it': "Ricompensa Regale",
				'pt-br': "Recompensa Régia",
				'de-de': "Majestätische Belohnung"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), you may attach a Grass Energy card from your discard pile to your Active Pokémon.",
				'fr-fr': "Une seule fois pendant votre tour (avant votre attaque), vous pouvez attacher une carte Énergie Grass de votre pile de défausse à votre Pokémon Actif.",
				'es-es': "Una vez durante tu turno (antes de tu ataque), puedes unir 1 carta de Energía Grass de tu pila de descartes a tu Pokémon Activo.",
				'it-it': "Una sola volta durante il tuo turno, prima di attaccare, puoi assegnare al tuo Pokémon attivo una carta Energia Grass dalla tua pila degli scarti.",
				'pt-br': "Uma vez durante a sua vez de jogar (antes de atacar), você pode ligar 1 carta de Energia Grass da sua pilha de descarte ao seu Pokémon Ativo.",
				'de-de': "Einmal während deines Zuges (bevor du angreifst) kannst du 1 Grass-Energiekarte aus deinem Ablagestapel an dein Aktives Pokémon anlegen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "High Jump Kick",
				'fr-fr': "Pied Voltige",
				'es-es': "Patada Salto Alta",
				'it-it': "Calcinvolo",
				'pt-br': "Chute de Pulo Alto",
				'de-de': "Turmkick"
			},

			damage: 90,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "A master of grand and beautiful kicks, it can knock out even kickboxing champions with a single blow.",
	},

	thirdParty: {
		cardmarket: 387927,
		tcgplayer: 194935
	}
}

export default card
