import { Card } from '../../../interfaces'
import Set from '../Forbidden Light'

const card: Card = {
	name: {
		en: "Volcanion ◇",
		fr: "Volcanion ◇",
		es: "Volcanion ◇",
		it: "Volcanion ◇",
		pt: "Volcanion ◇",
		de: "Volcanion ◇"
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
				en: "Jet Geyser",
				fr: "Propulsion Geyser",
				es: "Jet Géiser",
				it: "Getto Geyser",
				pt: "Jato de Gêiser",
				de: "Geysirdüse"
			},
			effect: {
				en: "Once during your turn (before your attack), you may discard a Water Energy card from your hand. If you do, your opponent switches their Active Pokémon with 1 of their Benched Pokémon.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez défausser une carte Énergie Water de votre main. Dans ce cas, votre adversaire échange son Pokémon Actif avec l’un de ses Pokémon de Banc.",
				es: "Una vez durante tu turno (antes de tu ataque), puedes descartar 1 carta de Energía Water de tu mano. Si lo haces, tu rival cambia su Pokémon Activo por 1 de sus Pokémon en Banca.",
				it: "Una sola volta durante il tuo turno, prima di attaccare, puoi scartare una carta Energia Water dalla tua mano. Se lo fai, il tuo avversario scambia il suo Pokémon attivo con uno dei suoi Pokémon in panchina.",
				pt: "Uma vez durante a sua vez de jogar (antes de atacar), você pode descartar 1 carta de Energia Water da sua mão. Se fizer isto, seu oponente troca o próprio Pokémon Ativo por 1 dos Pokémon no Banco dele(a).",
				de: "Einmal während deines Zuges (bevor du angreifst) kannst du 1 Water-Energiekarte aus deiner Hand auf deinen Ablagestapel legen. Wenn du das machst, tauscht dein Gegner sein Aktives Pokémon gegen 1 Pokémon auf seiner Bank aus."
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
				en: "Sauna Blast",
				fr: "Sauna Explosif",
				es: "Sauna Explosiva",
				it: "Vaporbomba",
				pt: "Sauna Explosiva",
				de: "Saunabombe"
			},
			effect: {
				en: "This attack does 20 damage to each of your opponent’s Benched Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Cette attaque inflige 20 dégâts à chacun des Pokémon de Banc de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				es: "Este ataque hace 20 puntos de daño a cada uno de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
				it: "Questo attacco infligge 20 danni a ciascun Pokémon nella panchina del tuo avversario. Ricorda che non puoi applicare debolezza e resistenza ai Pokémon in panchina.",
				pt: "Este ataque causa 20 pontos de dano a cada um dos Pokémon no Banco do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
				de: "Diese Attacke fügt jedem Pokémon auf der Bank deines Gegners 20 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
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
				fr: "Sauna Explosif",
			},
			effect: {
				fr: "Cette attaque inflige 20 dégâts à chacun des Pokémon de Banc de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
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



}

export default card
