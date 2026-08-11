import { Card } from 'models/database/card'
import Set from '../Steam Siege'

const card: Card = {
	name: {
		'en-us': "Shiftry",
		'fr-fr': "Tengalice",
		'es-es': "Shiftry",
		'it-it': "Shiftry",
		'pt-br': "Shiftry",
		'de-de': "Tengulist"
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
		'en-us': "Nuzleaf",
		'fr-fr': "Pifeuil",
		'es-es': "Nuzleaf",
		'it-it': "Nuzleaf",
		'pt-br': "Nuzleaf",
		'de-de': "Blanas"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Wicked Wind",
				'fr-fr': "Vent Infernal",
				'es-es': "Viento Malvado",
				'it-it': "Vento Malefico",
				'pt-br': "Vento Enfeitiçado",
				'de-de': "Arglistiger Wind"
			},
			effect: {
				'en-us': "Until the end of your opponent's next turn, each Stadium or Pokémon Tool card in play has no effect. (This includes cards that come into play on that turn.)",
				'fr-fr': "Jusqu'à la fin du prochain tour de votre adversaire, aucune des cartes Stade ou Outil Pokémon en jeu n'a d'effet. (Cela comprend les cartes qui sont en jeu pendant ce tour.)",
				'es-es': "Hasta el final del próximo turno de tu rival, las cartas de Estadio o Herramienta Pokémon en juego no tienen efecto. (Esto incluye cartas que entran en juego durante ese turno).",
				'it-it': "Fino alla fine del prossimo turno del tuo avversario, nessuna delle carte Stadio e Oggetto Pokémon in gioco ha effetto (incluse le carte entrate in gioco in quel turno).",
				'pt-br': "Até o final da próxima vez de jogar do seu oponente, nenhum card de Estádio ou de Ferramenta Pokémon em jogo terá efeito. (Isso inclui os cards que entram em jogo naquela rodada.)",
				'de-de': "Bis zum Ende des nächsten Zuges deines Gegners hat jede Stadionkarte oder Pokémon-Ausrüstung im Spiel keine Wirkung. (Dazu gehören Karten, die während des Zuges ins Spiel kommen.)"
			},
			damage: 40,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Extrasensory",
				'fr-fr': "Extrasenseur",
				'es-es': "Paranormal",
				'it-it': "Extrasenso",
				'pt-br': "Extrassensorial",
				'de-de': "Sondersensor"
			},
			effect: {
				'en-us': "If you have the same number of cards in your hand as your opponent, this attack does 60 more damage.",
				'fr-fr': "Si vous avez le même nombre de cartes dans votre main que votre adversaire, cette attaque inflige 60 dégâts supplémentaires.",
				'es-es': "Si tienes el mismo número de cartas en tu mano que tu rival, este ataque hace 60 puntos de daño más.",
				'it-it': "Se hai lo stesso numero di carte in mano rispetto al tuo avversario, questo attacco infligge 60 danni in più.",
				'pt-br': "Se você tiver o mesmo número de cards em sua mão que seu oponente, este ataque causará 60 de danos adicionais.",
				'de-de': "Wenn du die gleiche Anzahl Karten auf der Hand hast wie dein Gegner, fügt dieser Angriff 60 weitere Schadenspunkte zu."
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

	description: {
		'en-us': "By flapping its leafy fan, it can whip up gusts of 100 ft/second that can level houses.",
	},

	thirdParty: {
		cardmarket: 291518,
		tcgplayer: 121000
	}
}

export default card
