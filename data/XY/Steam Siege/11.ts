import { Card } from '../../../interfaces'
import Set from '../Steam Siege'

const card: Card = {
	name: {
		en: "Shiftry",
		fr: "Tengalice",
		es: "Shiftry",
		it: "Shiftry",
		pt: "Shiftry",
		de: "Tengulist"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		275,
	],

	hp: 140,

	types: [
		"Grass",
		"Darkness",
	],

	evolveFrom: {
		en: "Nuzleaf",
		fr: "Pifeuil",
		es: "Nuzleaf",
		it: "Nuzleaf",
		pt: "Nuzleaf",
		de: "Blanas"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Wicked Wind",
				fr: "Vent Infernal",
				es: "Viento Malvado",
				it: "Vento Malefico",
				pt: "Vento Enfeitiçado",
				de: "Arglistiger Wind"
			},
			effect: {
				en: "Until the end of your opponent's next turn, each Stadium or Pokémon Tool card in play has no effect. (This includes cards that come into play on that turn.)",
				fr: "Jusqu'à la fin du prochain tour de votre adversaire, aucune des cartes Stade ou Outil Pokémon en jeu n'a d'effet. (Cela comprend les cartes qui sont en jeu pendant ce tour.)",
				es: "Hasta el final del próximo turno de tu rival, las cartas de Estadio o Herramienta Pokémon en juego no tienen efecto. (Esto incluye cartas que entran en juego durante ese turno).",
				it: "Fino alla fine del prossimo turno del tuo avversario, nessuna delle carte Stadio e Oggetto Pokémon in gioco ha effetto (incluse le carte entrate in gioco in quel turno).",
				pt: "Até o final da próxima vez de jogar do seu oponente, nenhum card de Estádio ou de Ferramenta Pokémon em jogo terá efeito. (Isso inclui os cards que entram em jogo naquela rodada.)",
				de: "Bis zum Ende des nächsten Zuges deines Gegners hat jede Stadionkarte oder Pokémon-Ausrüstung im Spiel keine Wirkung. (Dazu gehören Karten, die während des Zuges ins Spiel kommen.)"
			},
			damage: 40,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Extrasensory",
				fr: "Extrasenseur",
				es: "Paranormal",
				it: "Extrasenso",
				pt: "Extrassensorial",
				de: "Sondersensor"
			},
			effect: {
				en: "If you have the same number of cards in your hand as your opponent, this attack does 60 more damage.",
				fr: "Si vous avez le même nombre de cartes dans votre main que votre adversaire, cette attaque inflige 60 dégâts supplémentaires.",
				es: "Si tienes el mismo número de cartas en tu mano que tu rival, este ataque hace 60 puntos de daño más.",
				it: "Se hai lo stesso numero di carte in mano rispetto al tuo avversario, questo attacco infligge 60 danni in più.",
				pt: "Se você tiver o mesmo número de cards em sua mão que seu oponente, este ataque causará 60 de danos adicionais.",
				de: "Wenn du die gleiche Anzahl Karten auf der Hand hast wie dein Gegner, fügt dieser Angriff 60 weitere Schadenspunkte zu."
			},
			damage: "60+",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 291518
	}
}

export default card
