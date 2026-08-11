import { Card } from 'models/database/card'
import Set from '../Ultra Prism'

const card: Card = {
	name: {
		'en-us': "Pheromosa GX",
		'fr-fr': "Cancrelove GX",
		'es-es': "Pheromosa GX",
		'it-it': "Pheromosa GX",
		'pt-br': "Pheromosa GX",
		'de-de': "Schabelle GX"
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
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
				'en-us': "Fast Raid",
				'fr-fr': "Raid Éclair",
				'es-es': "Raid Rápido",
				'it-it': "Raid Veloce",
				'pt-br': "Incursão Rápida",
				'de-de': "Rasanter Raubzug"
			},
			effect: {
				'en-us': "If you go first, you can use this attack on your first turn.",
				'fr-fr': "Si vous jouez en premier, vous pouvez utiliser cette attaque lors de votre premier tour.",
				'es-es': "Si sales primero, puedes usar este ataque durante tu primer turno.",
				'it-it': "Se inizi per primo, puoi usare questo attacco durante il tuo primo turno.",
				'pt-br': "Se você for primeiro, poderá usar este ataque na sua primeira vez de jogar.",
				'de-de': "Wenn du als Erster am Zug bist, kannst du diese Attacke während deines ersten Zuges einsetzen."
			},
			damage: 30,

		},
		{
			cost: [
				"Grass",
				"Grass",
			],
			name: {
				'en-us': "Cruel Spike",
				'fr-fr': "Piquant Cruel",
				'es-es': "Aguja Cruel",
				'it-it': "Punte Crudeli",
				'pt-br': "Pungente Cruel",
				'de-de': "Grausamer Stachel"
			},
			effect: {
				'en-us': "Your opponent’s Active Pokémon is now Confused.",
				'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Confus.",
				'es-es': "El Pokémon Activo de tu rival pasa a estar Confundido.",
				'it-it': "Il Pokémon attivo del tuo avversario viene confuso.",
				'pt-br': "O Pokémon Ativo do seu oponente agora está Confuso.",
				'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verwirrt."
			},
			damage: 60,

		},
		{
			cost: [
				"Grass",
				"Grass",
			],
			name: {
				'en-us': "Beauty GX",
				'fr-fr': "Beauté-GX",
				'es-es': "Elegancia GX",
				'it-it': "Elegantia-GX",
				'pt-br': "Beleza GX",
				'de-de': "Anmut GX"
			},
			effect: {
				'en-us': "This attack does 50 damage for each Prize card your opponent has taken. (You can’t use more than 1 GX attack in a game.)",
				'fr-fr': "Cette attaque inflige 50 dégâts pour chaque carte Récompense que votre adversaire a récupérée. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				'es-es': "Este ataque hace 50 puntos de daño por cada carta de Premio que haya cogido tu rival. (No puedes usar más de 1 ataque GX en una partida).",
				'it-it': "Questo attacco infligge 50 danni per ogni carta Premio presa dal tuo avversario. Non puoi usare più di un attacco GX a partita.",
				'pt-br': "Este ataque causa 50 pontos de dano para cada carta de Prêmio que seu oponente pegou (você não pode usar mais de 1 ataque GX por partida).",
				'de-de': "Diese Attacke fügt 50 Schadenspunkte mal der Anzahl der von deinem Gegner genommenen Preiskarten zu. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
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

	thirdParty: {
		cardmarket: 316064,
		tcgplayer: 157756
	}
}

export default card
