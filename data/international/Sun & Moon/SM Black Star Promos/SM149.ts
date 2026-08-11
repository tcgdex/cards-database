import { Card } from 'models/database/card'
import Set from '../SM Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Suicune",
		'fr-fr': "Suicune",
		'es-es': "Suicune",
		'it-it': "Suicune",
		'pt-br': "Suicune",
		'de-de': "Suicune"
	},
	illustrator: "Kouki Saitou",
	rarity: "Promo",
	category: "Pokemon",

	set: Set,
	dexId: [
		245,
	],
	hp: 110,
	types: [
		"Water",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Frozen Flow",
				'fr-fr': "Flot Gelé",
				'es-es': "Flujo Congelado",
				'it-it': "Flusso Artico",
				'pt-br': "Fluxo Congelado",
				'de-de': "Starrer Strom"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), if this Pokémon is your Active Pokémon, you may have your opponent switch their Active Pokémon with 1 of their Benched Pokémon.",
				'fr-fr': "Une seule fois pendant votre tour (avant votre attaque), si ce Pokémon est votre Pokémon Actif, vous pouvez demander à votre adversaire d’échanger son Pokémon Actif avec l’un de ses Pokémon de Banc.",
				'es-es': "Una vez durante tu turno (antes de tu ataque), si este Pokémon es tu Pokémon Activo, puedes hacer que tu rival cambie su Pokémon Activo por 1 de sus Pokémon en Banca.",
				'it-it': "Una sola volta durante il tuo turno, prima di attaccare, se questo Pokémon è il tuo Pokémon attivo, puoi far scambiare al tuo avversario il suo Pokémon attivo con uno della sua panchina.",
				'pt-br': "Uma vez durante a sua vez de jogar (antes de atacar), se este Pokémon for o seu Pokémon Ativo, você poderá fazer com que o seu oponente troque o próprio Pokémon Ativo por 1 dos Pokémon no Banco dele(a).",
				'de-de': "Einmal während deines Zuges (bevor du angreifst), wenn dieses Pokémon dein Aktives Pokémon ist, kannst du deinen Gegner dazu veranlassen, sein Aktives Pokémon gegen 1 Pokémon auf seiner Bank auszutauschen."
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
				'en-us': "Aurora Gain",
				'fr-fr': "Puissance Boréale",
				'es-es': "Ganar Aurora",
				'it-it': "Prendiaurora",
				'pt-br': "Aurora",
				'de-de': "Aurora-Verstärkung"
			},
			effect: {
				'en-us': "Heal 30 damage from this Pokémon.",
				'fr-fr': "Soignez 30 dégâts à ce Pokémon.",
				'es-es': "Cura 30 puntos de daño a este Pokémon.",
				'it-it': "Cura questo Pokémon da 30 danni.",
				'pt-br': "Cure 30 pontos de dano deste Pokémon.",
				'de-de': "Heile 30 Schadenspunkte bei diesem Pokémon."
			},
			damage: 70,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,




	description: {
		'en-us': "Said to be the embodiment of north winds, it can instantly purify filthy, murky water.",
	},
}

export default card
