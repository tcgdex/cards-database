import { Card } from '../../../interfaces'
import Set from '../BREAKthrough'

const card: Card = {
	name: {
		en: "Mamoswine",
		fr: "Mammochon",
		es: "Mamoswine",
		it: "Mamoswine",
		pt: "Mamoswine",
		de: "Mamutel"
	},
	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		473,
	],
	hp: 160,
	types: [
		"Fighting",
	],
	evolveFrom: {
		en: "Piloswine",
		fr: "Cochignon",
		es: "Piloswine",
		it: "Piloswine",
		pt: "Piloswine",
		de: "Keifel"
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Thick Fat",
				fr: "Isograisse",
				es: "Sebo",
				it: "Grassospesso",
				pt: "Gordura Espessa",
				de: "Speckschicht"
			},
			effect: {
				en: "Any damage done to this Pokémon by attacks from your opponent's Fire or Water Pokémon is reduced by 30 (after applying Weakness and Resistance).",
				fr: "Tous les dégâts infligés à ce Pokémon par des attaques des Pokémon Fire ou Water de votre adversaire sont réduits de 30 (après application de la Faiblesse et de la Résistance).",
				es: "Cualquier daño infligido a este Pokémon por ataques de los Pokémon Fire o Water de tu rival se reduce en 30 (después de aplicar Debilidad y Resistencia).",
				it: "I danni inflitti a questo Pokémon dagli attacchi dei Pokémon Fire o Water del tuo avversario sono ridotti di 30, dopo aver applicato debolezza e resistenza.",
				pt: "Qualquer dano feito a este Pokémon por ataques de Pokémon Fire ou Water do seu oponente será reduzido em 30 (após a aplicação de Fraqueza e Resistência).",
				de: "Schaden, der diesem Pokémon durch Angriffe der Fire- oder Water- Pokémon deines Gegners zugefügt wird, wird um 30 Schadenspunkte reduziert (nachdem Schwäche und Resistenz verrechnet wurden)."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Primordial Boom",
				fr: "Boom Originel",
				es: "Estruendo Primordial",
				it: "Boato Primordiale",
				pt: "Explosão Primordial",
				de: "Urdonner"
			},
			effect: {
				en: "If you have a Stadium card in play, this attack does 40 more damage. If your opponent has a Stadium card in play, heal 40 damage from this Pokémon.",
				fr: "Si vous avez une carte Stade en jeu, cette attaque inflige 40 dégâts supplémentaires. Si votre adversaire a une carte Stade en jeu, soignez 40 dégâts à ce Pokémon.",
				es: "Si tienes alguna carta de Estadio en juego, este ataque hace 40 puntos de daño más. Si tu rival tiene alguna carta de Estadio en juego, cura 40 puntos de daño a este Pokémon.",
				it: "Se hai in gioco una carta Stadio, questo attacco infligge 40 danni in più. Se il tuo avversario ha in gioco una carta Stadio, cura questo Pokémon da 40 danni.",
				pt: "Se você tiver um card de Estádio em jogo, este ataque causará 40 de danos adicionais. Se o seu oponente tiver um card de Estádio em jogo, cure 40 de danos deste Pokémon.",
				de: "Wenn du eine Stadionkarte im Spiel hast, fügt dieser Angriff 40 weitere Schadenspunkte zu. Wenn dein Gegner eine Stadionkarte im Spiel hat, heile 40 Schadenspunkte bei diesem Pokémon."
			},
			damage: "80+",

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 4,



}

export default card
