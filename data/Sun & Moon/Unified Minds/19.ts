import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Tsareena",
		fr: "Sucreine",
		es: "Tsareena",
		it: "Tsareena",
		pt: "Tsareena",
		de: "Fruyal"
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
		en: "Steenee",
		fr: "Candine",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Queenly Reward",
				fr: "Récompense Royale",
				es: "Recompensa Regia",
				it: "Ricompensa Regale",
				pt: "Recompensa Régia",
				de: "Majestätische Belohnung"
			},
			effect: {
				en: "Once during your turn (before your attack), you may attach a Grass Energy card from your discard pile to your Active Pokémon.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez attacher une carte Énergie Grass de votre pile de défausse à votre Pokémon Actif.",
				es: "Una vez durante tu turno (antes de tu ataque), puedes unir 1 carta de Energía Grass de tu pila de descartes a tu Pokémon Activo.",
				it: "Una sola volta durante il tuo turno, prima di attaccare, puoi assegnare al tuo Pokémon attivo una carta Energia Grass dalla tua pila degli scarti.",
				pt: "Uma vez durante a sua vez de jogar (antes de atacar), você pode ligar 1 carta de Energia Grass da sua pilha de descarte ao seu Pokémon Ativo.",
				de: "Einmal während deines Zuges (bevor du angreifst) kannst du 1 Grass-Energiekarte aus deinem Ablagestapel an dein Aktives Pokémon anlegen."
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
				en: "High Jump Kick",
				fr: "Pied Voltige",
				es: "Patada Salto Alta",
				it: "Calcinvolo",
				pt: "Chute de Pulo Alto",
				de: "Turmkick"
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



}

export default card
