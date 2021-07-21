import { Card } from '../../../interfaces'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		en: "Stakataka-GX",
		fr: "Ama-Ama-GX",
		es: "Stakataka-GX",
		it: "Stakataka-GX",
		pt: "Stakataka-GX",
		de: "Muramura-GX"
	},
	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		805,
	],
	hp: 180,
	types: [
		"Metal",
	],


	suffix: "GX",
	abilities: [
		{
			type: "Ability",
			name: {
				en: "Ultra Wall",
				fr: "Ultra-Mur",
				es: "Ultramuro",
				it: "Ultramuraglia",
				pt: "Ultraparede",
				de: "Ultrawand"
			},
			effect: {
				en: "Your Ultra Beasts take 10 less damage from your opponent’s attacks (after applying Weakness and Resistance).",
				fr: "Vos Ultra-Chimères subissent 10 dégâts de moins provenant des attaques de votre adversaire (après application de la Faiblesse et de la Résistance).",
				es: "Los ataques de tu rival hacen 10 puntos de daño menos a tus Ultraentes (después de aplicar Debilidad y Resistencia).",
				it: "Le tue Ultracreature subiscono 10 danni in meno dagli attacchi del tuo avversario, dopo aver applicato debolezza e resistenza.",
				pt: "Suas Ultracriaturas recebem 10 pontos de dano a menos dos ataques do seu oponente (após a aplicação de Fraqueza e Resistência).",
				de: "Deinen Ultrabestien werden durch Attacken deines Gegners 10 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden)."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
			],
			name: {
				en: "Gigaton Stomp",
				fr: "Écrasement Gigatonne",
				es: "Pisotón Gigatón",
				it: "Pestone Gigatonico",
				pt: "Pisada Gigatônica",
				de: "Gigatonnen-Stampfer"
			},

			damage: 120,

		},
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
			],
			name: {
				en: "Assembly GX",
				fr: "Empilage GX",
				es: "UE Bloques GX",
				it: "Structura-GX",
				pt: "Montagem GX",
				de: "Mauerwerk GX"
			},
			effect: {
				en: "This attack does 50 more damage for each Prize card you have taken. (You can’t use more than 1 GX attack in a game.)",
				fr: "Cette attaque inflige 50 dégâts supplémentaires pour chaque carte Récompense que vous avez récupérée. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				es: "Este ataque hace 50 puntos de daño más por cada carta de Premio que hayas cogido. (No puedes usar más de 1 ataque GX en una partida).",
				it: "Questo attacco infligge 50 danni in più per ogni carta Premio che hai preso. Non puoi usare più di un attacco GX a partita.",
				pt: "Este ataque causa 50 pontos de dano a mais para cada carta de Prêmio que você pegou (você não pode usar mais de 1 ataque GX por partida).",
				de: "Diese Attacke fügt 50 Schadenspunkte mehr mal der Anzahl der von dir genommenen Preiskarten zu. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
			},
			damage: "50+",

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],
	retreat: 3,



}

export default card
