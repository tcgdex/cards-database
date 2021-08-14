import { Card } from '../../../interfaces'
import Set from '../Ultra Prism'

const card: Card = {
	name: {
		en: "Pheromosa GX",
		fr: "Cancrelove GX",
		es: "Pheromosa GX",
		it: "Pheromosa GX",
		pt: "Pheromosa GX",
		de: "Schabelle GX"
	},
	illustrator: "5ban Graphics",
	rarity: "Secret Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		795,
	],
	hp: 170,
	types: [
		"Grass",
	],


	suffix: "GX",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Fast Raid",
				fr: "Raid Éclair",
				es: "Raid Rápido",
				it: "Raid Veloce",
				pt: "Incursão Rápida",
				de: "Rasanter Raubzug"
			},
			effect: {
				en: "If you go first, you can use this attack on your first turn.",
				fr: "Si vous jouez en premier, vous pouvez utiliser cette attaque lors de votre premier tour.",
				es: "Si sales primero, puedes usar este ataque durante tu primer turno.",
				it: "Se inizi per primo, puoi usare questo attacco durante il tuo primo turno.",
				pt: "Se você for primeiro, poderá usar este ataque na sua primeira vez de jogar.",
				de: "Wenn du als Erster am Zug bist, kannst du diese Attacke während deines ersten Zuges einsetzen."
			},
			damage: 30,

		},
		{
			cost: [
				"Grass",
				"Grass",
			],
			name: {
				en: "Cruel Spike",
				fr: "Piquant Cruel",
				es: "Aguja Cruel",
				it: "Punte Crudeli",
				pt: "Pungente Cruel",
				de: "Grausamer Stachel"
			},
			effect: {
				en: "Your opponent’s Active Pokémon is now Confused.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Confus.",
				es: "El Pokémon Activo de tu rival pasa a estar Confundido.",
				it: "Il Pokémon attivo del tuo avversario viene confuso.",
				pt: "O Pokémon Ativo do seu oponente agora está Confuso.",
				de: "Das Aktive Pokémon deines Gegners ist jetzt verwirrt."
			},
			damage: 60,

		},
		{
			cost: [
				"Grass",
				"Grass",
			],
			name: {
				en: "Beauty GX",
				fr: "Beauté-GX",
				es: "Elegancia GX",
				it: "Elegantia-GX",
				pt: "Beleza GX",
				de: "Anmut GX"
			},
			effect: {
				en: "This attack does 50 damage for each Prize card your opponent has taken. (You can’t use more than 1 GX attack in a game.)",
				fr: "Cette attaque inflige 50 dégâts pour chaque carte Récompense que votre adversaire a récupérée. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				es: "Este ataque hace 50 puntos de daño por cada carta de Premio que haya cogido tu rival. (No puedes usar más de 1 ataque GX en una partida).",
				it: "Questo attacco infligge 50 danni per ogni carta Premio presa dal tuo avversario. Non puoi usare più di un attacco GX a partita.",
				pt: "Este ataque causa 50 pontos de dano para cada carta de Prêmio que seu oponente pegou (você não pode usar mais de 1 ataque GX por partida).",
				de: "Diese Attacke fügt 50 Schadenspunkte mal der Anzahl der von deinem Gegner genommenen Preiskarten zu. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
			},
			damage: "50×",

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
