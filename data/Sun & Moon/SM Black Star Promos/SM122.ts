import { Card } from '../../../interfaces'
import Set from '../SM Black Star Promos'

const card: Card = {
	name: {
		en: "Zygarde GX",
		fr: "Zygarde GX",
		es: "Zygarde GX",
		it: "Zygarde GX",
		pt: "Zygarde GX",
		de: "Zygarde GX"
	},
	illustrator: "5ban Graphics",
	rarity: "Rare",
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
				en: "Vibration",
				fr: "Vibration",
				es: "Vibración",
				it: "Vibrazione",
				pt: "Vibração",
				de: "Schwingung"
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
				en: "Cell Storm",
				fr: "Tempête Cellulaire",
				es: "Tormenta Celular",
				it: "Tempesta Cellulare",
				pt: "Célula de Tempestade",
				de: "Zellsturm"
			},
			effect: {
				en: "Heal 30 damage from this Pokémon.",
				fr: "Soignez 30 dégâts à ce Pokémon.",
				es: "Cura 30 puntos de daño a este Pokémon.",
				it: "Cura questo Pokémon da 30 danni.",
				pt: "Cure 30 pontos de dano deste Pokémon.",
				de: "Heile 30 Schadenspunkte bei diesem Pokémon."
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
				en: "Liberation GX",
				fr: "Libération GX",
				es: "Liberación GX",
				it: "Liberazione GX",
				pt: "Liberação GX",
				de: "Befreiungsschlag GX"
			},
			effect: {
				en: "Your opponent reveals their hand. This attack does 120 damage for each Energy card you find there. (You can’t use more than 1 GX attack in a game.)",
				fr: "Votre adversaire dévoile sa main. Cette attaque inflige 120 dégâts pour chaque carte Énergie que vous y trouvez. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				es: "Tu rival enseña las cartas de su mano. Este ataque hace 120 puntos de daño por cada carta de Energía que encuentres entre ellas. (No puedes usar más de 1 ataque GX en una partida).",
				it: "Il tuo avversario mostra le carte che ha in mano. Questo attacco infligge 120 danni per ogni carta Energia presente tra quelle carte. Non puoi usare più di un attacco GX a partita.",
				pt: "Seu oponente revela a própria mão. Este ataque causa 120 pontos de dano para cada carta de Energia que encontrar lá (você não pode usar mais de 1 ataque GX por partida).",
				de: "Dein Gegner zeigt dir seine Handkarten. Diese Attacke fügt 120 Schadenspunkte mal der Anzahl der Energiekarten zu, die du dort findest. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
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
