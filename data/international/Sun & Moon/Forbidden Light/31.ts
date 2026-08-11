import { Card } from 'models/database/card'
import Set from '../Forbidden Light'

const card: Card = {
	name: {
		'en-us': "Volcanion ◇",
		'fr-fr': "Volcanion ◇",
		'es-es': "Volcanion ◇",
		'it-it': "Volcanion ◇",
		'pt-br': "Volcanion ◇",
		'de-de': "Volcanion ◇"
	},

	illustrator: "Naoki Saito",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		721,
	],

	hp: 160,

	types: [
		"Water",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Jet Geyser",
				'fr-fr': "Propulsion Geyser",
				'es-es': "Jet Géiser",
				'it-it': "Getto Geyser",
				'pt-br': "Jato de Gêiser",
				'de-de': "Geysirdüse"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), you may discard a Water Energy card from your hand. If you do, your opponent switches their Active Pokémon with 1 of their Benched Pokémon.",
				'fr-fr': "Une seule fois pendant votre tour (avant votre attaque), vous pouvez défausser une carte Énergie Water de votre main. Dans ce cas, votre adversaire échange son Pokémon Actif avec l’un de ses Pokémon de Banc.",
				'es-es': "Una vez durante tu turno (antes de tu ataque), puedes descartar 1 carta de Energía Water de tu mano. Si lo haces, tu rival cambia su Pokémon Activo por 1 de sus Pokémon en Banca.",
				'it-it': "Una sola volta durante il tuo turno, prima di attaccare, puoi scartare una carta Energia Water dalla tua mano. Se lo fai, il tuo avversario scambia il suo Pokémon attivo con uno dei suoi Pokémon in panchina.",
				'pt-br': "Uma vez durante a sua vez de jogar (antes de atacar), você pode descartar 1 carta de Energia Water da sua mão. Se fizer isto, seu oponente troca o próprio Pokémon Ativo por 1 dos Pokémon no Banco dele(a).",
				'de-de': "Einmal während deines Zuges (bevor du angreifst) kannst du 1 Water-Energiekarte aus deiner Hand auf deinen Ablagestapel legen. Wenn du das machst, tauscht dein Gegner sein Aktives Pokémon gegen 1 Pokémon auf seiner Bank aus."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Water",
				"Water",
				"Water",
			],
			name: {
				'en-us': "Sauna Blast",
				'fr-fr': "Sauna Explosif",
				'es-es': "Sauna Explosiva",
				'it-it': "Vaporbomba",
				'pt-br': "Sauna Explosiva",
				'de-de': "Saunabombe"
			},
			effect: {
				'en-us': "This attack does 20 damage to each of your opponent’s Benched Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Cette attaque inflige 20 dégâts à chacun des Pokémon de Banc de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				'es-es': "Este ataque hace 20 puntos de daño a cada uno de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
				'it-it': "Questo attacco infligge 20 danni a ciascun Pokémon nella panchina del tuo avversario. Ricorda che non puoi applicare debolezza e resistenza ai Pokémon in panchina.",
				'pt-br': "Este ataque causa 20 pontos de dano a cada um dos Pokémon no Banco do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
				'de-de': "Diese Attacke fügt jedem Pokémon auf der Bank deines Gegners 20 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},
			damage: 100,

		},
		{
			cost: [
				"Water",
				"Water",
				"Water",
			],
			name: {
				'fr-fr': "Sauna Explosif",
			},
			effect: {
				'fr-fr': "Cette attaque inflige 20 dégâts à chacun des Pokémon de Banc de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			},
			damage: 100,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		'en-us': "It expels its internal steam from the arms on its back. It has enough power to blow away a mountain.",
	},

	thirdParty: {
		cardmarket: 355550
	}
}

export default card
