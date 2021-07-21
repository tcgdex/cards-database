import { Card } from '../../../interfaces'
import Set from '../Crimson Invasion'

const card: Card = {
	name: {
		en: "Kommo-o",
		fr: "Ékaïser",
		es: "Kommo-o",
		it: "Kommo-o",
		pt: "Kommo-o",
		de: "Grandiras"
	},
	illustrator: "kawayoo",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		784,
	],
	hp: 160,
	types: [
		"Dragon",
	],
	evolveFrom: {
		en: "Hakamo-o",
		fr: "Écaïd",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "War Cry",
				fr: "Cri de Guerre",
				es: "Grito de Guerra",
				it: "Grido di Guerra",
				pt: "Grito de Guerra",
				de: "Schlachtruf"
			},
			effect: {
				en: "If you have fewer Pokémon in play than your opponent, this attack does 90 more damage.",
				fr: "S’il vous reste moins de Pokémon en jeu que votre adversaire, cette attaque inflige 90 dégâts supplémentaires.",
				es: "Si tienes menos Pokémon en juego que tu rival, este ataque hace 90 puntos de daño más.",
				it: "Se hai meno Pokémon in gioco del tuo avversario, questo attacco infligge 90 danni in più.",
				pt: "Se você tiver menos Pokémon em jogo do que seu oponente, este ataque causará 90 pontos de dano a mais.",
				de: "Wenn du weniger Pokémon im Spiel hast als dein Gegner, fügt diese Attacke 90 Schadenspunkte mehr zu."
			},
			damage: "30+",

		},
		{
			cost: [
				"Fighting",
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Clanging Scales",
				fr: "Vibrécaille",
				es: "Fragor Escamas",
				it: "Clamorsquame",
				pt: "Batida de Escamas",
				de: "Schuppenrasseln"
			},
			effect: {
				en: "During your opponent’s next turn, this Pokémon takes 30 more damage from attacks (after applying Weakness and Resistance).",
				fr: "Pendant le prochain tour de votre adversaire, ce Pokémon subit 30 dégâts supplémentaires provenant des attaques (après application de la Faiblesse et de la Résistance).",
				es: "Durante el próximo turno de tu rival, los ataques hacen 30 puntos de daño más a este Pokémon (después de aplicar Debilidad y Resistencia).",
				it: "Durante il prossimo turno del tuo avversario, questo Pokémon subisce 30 danni in più dagli attacchi, dopo aver applicato debolezza e resistenza.",
				pt: "Durante a próxima vez de jogar do seu oponente, este Pokémon receberá 30 pontos de dano a mais de ataques (após a aplicação de Fraqueza e Resistência).",
				de: "Während des nächsten Zuges deines Gegners werden diesem Pokémon durch Attacken 30 Schadenspunkte mehr zugefügt (nachdem Schwäche und Resistenz verrechnet wurden)."
			},
			damage: 130,

		},
	],
	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
