import { Card } from "models/database/card"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Iron Defender",
		'fr-fr': "Défense de Fer",
		'es-es': "Defensor Férreo",
		'es-mx': "Defensa Férrea",
		'de-de': "Eisendefensive",
		'it-it': "Difensore Ferreo",
		'pt-br': "Defensor Férreo"
	},

	illustrator: "Studio Bora Inc.",
	rarity: "Ultra Rare",
	category: "Trainer",
	trainerType: "Item",
	regulationMark: "I",

	effect: {
		'en-us': "During your opponent's next turn, all of your {M} Pokémon take 30 less damage from attacks from your opponent's Pokémon (after applying Weakness and Resistance). (This includes new Pokémon that come into play.)",
		'fr-fr': "Pendant le prochain tour de votre adversaire, tous vos Pokémon {M} subissent 30 dégâts de moins provenant des attaques des Pokémon de votre adversaire (après application de la Faiblesse et de la Résistance). (Cela comprend les nouveaux Pokémon qui sont mis en jeu.)",
		'es-es': "Durante el próximo turno de tu rival, los ataques de los Pokémon de tu rival hacen 30 puntos de daño menos a todos tus Pokémon {M} (después de aplicar Debilidad y Resistencia). (Esto incluye los nuevos Pokémon que entren en juego).",
		'es-mx': "Durante el próximo turno de tu rival, todos tus Pokémon {M} reciben 30 puntos de daño menos de los ataques de los Pokémon de tu rival (después de aplicar Debilidad y Resistencia). (Esto incluye los nuevos Pokémon que entren en juego).",
		'de-de': "Während des nächsten Zuges deines Gegners werden allen deinen {M}-Pokémon durch Attacken von Pokémon deines Gegners 30 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden). (Dies schließt neue Pokémon ein, die ins Spiel gebracht werden.)",
		'it-it': "Durante il prossimo turno del tuo avversario, i tuoi Pokémon {M} subiscono 30 danni in meno dagli attacchi dei Pokémon del tuo avversario, dopo aver applicato debolezza e resistenza. Questo include i nuovi Pokémon entrati in gioco.",
		'pt-br': "Durante o próximo turno do seu oponente, todos os seus Pokémon {M} receberão 30 pontos de dano a menos de ataques dos Pokémon do seu oponente (depois de aplicar Fraqueza e Resistência). (Isso inclui novos Pokémon que entrarem em jogo.)"
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 895895,
				tcgplayer: 704867
			}
		},
	],
}

export default card
