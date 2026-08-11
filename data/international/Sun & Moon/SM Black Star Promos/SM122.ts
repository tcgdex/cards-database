import { Card } from 'models/database/card'
import Set from '../SM Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Zygarde GX",
		'fr-fr': "Zygarde GX",
		'es-es': "Zygarde GX",
		'it-it': "Zygarde GX",
		'pt-br': "Zygarde GX",
		'de-de': "Zygarde GX"
	},
	illustrator: "5ban Graphics",
	rarity: "Promo",
	category: "Pokemon",

	set: Set,
	dexId: [
		718,
	],
	hp: 180,
	types: [
		"Fighting",
	],


	suffix: "GX",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Vibration",
				'fr-fr': "Vibration",
				'es-es': "Vibración",
				'it-it': "Vibrazione",
				'pt-br': "Vibração",
				'de-de': "Schwingung"
			},

			damage: 20,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Cell Storm",
				'fr-fr': "Tempête Cellulaire",
				'es-es': "Tormenta Celular",
				'it-it': "Tempesta Cellulare",
				'pt-br': "Célula de Tempestade",
				'de-de': "Zellsturm"
			},
			effect: {
				'en-us': "Heal 30 damage from this Pokémon.",
				'fr-fr': "Soignez 30 dégâts à ce Pokémon.",
				'es-es': "Cura 30 puntos de daño a este Pokémon.",
				'it-it': "Cura questo Pokémon da 30 danni.",
				'pt-br': "Cure 30 pontos de dano deste Pokémon.",
				'de-de': "Heile 30 Schadenspunkte bei diesem Pokémon."
			},
			damage: 80,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Liberation GX",
				'fr-fr': "Libération GX",
				'es-es': "Liberación GX",
				'it-it': "Liberazione GX",
				'pt-br': "Liberação GX",
				'de-de': "Befreiungsschlag GX"
			},
			effect: {
				'en-us': "Your opponent reveals their hand. This attack does 120 damage for each Energy card you find there. (You can’t use more than 1 GX attack in a game.)",
				'fr-fr': "Votre adversaire dévoile sa main. Cette attaque inflige 120 dégâts pour chaque carte Énergie que vous y trouvez. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				'es-es': "Tu rival enseña las cartas de su mano. Este ataque hace 120 puntos de daño por cada carta de Energía que encuentres entre ellas. (No puedes usar más de 1 ataque GX en una partida).",
				'it-it': "Il tuo avversario mostra le carte che ha in mano. Questo attacco infligge 120 danni per ogni carta Energia presente tra quelle carte. Non puoi usare più di un attacco GX a partita.",
				'pt-br': "Seu oponente revela a própria mão. Este ataque causa 120 pontos de dano para cada carta de Energia que encontrar lá (você não pode usar mais de 1 ataque GX por partida).",
				'de-de': "Dein Gegner zeigt dir seine Handkarten. Diese Attacke fügt 120 Schadenspunkte mal der Anzahl der Energiekarten zu, die du dort findest. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
			},
			damage: "120×",

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
