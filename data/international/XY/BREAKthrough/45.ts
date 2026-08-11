import { Card } from 'models/database/card'
import Set from '../BREAKthrough'

const card: Card = {
	name: {
		'en-us': "Vanilluxe",
		'fr-fr': "Sorbouboul",
		'es-es': "Vanilluxe",
		'it-it': "Vanilluxe",
		'pt-br': "Vanilluxe",
		'de-de': "Gelatwino"
	},

	illustrator: "Ayaka Yoshida",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		584,
	],

	hp: 130,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Vanillish",
		'fr-fr': "Sorboul",
		'es-es': "Vanillish",
		'it-it': "Vanillish",
		'pt-br': "Vanillish",
		'de-de': "Gelatroppo"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Frigid Breath",
				'fr-fr': "Souffle Glaçon",
				'es-es': "Aliento Frígido",
				'it-it': "Alitopolare",
				'pt-br': "Hálito Glacial",
				'de-de': "Kühler Atem"
			},
			effect: {
				'en-us': "Until the end of your next turn, each player can't play any Supporter or Stadium cards from his or her hand.",
				'fr-fr': "Jusqu'à la fin de votre prochain tour, aucun joueur ne peut jouer de cartes Supporter ou Stade de sa main.",
				'es-es': "Hasta el final de tu próximo turno, los jugadores no pueden jugar ninguna carta de Partidario o Estadio de su mano.",
				'it-it': "Nessun giocatore può giocare carte Aiuto o Stadio dalla propria mano fino alla fine del tuo prossimo turno.",
				'pt-br': "Até o fim da sua próxima vez de jogar, nenhum jogador poderá jogar um card de Apoiador ou de Estádio da sua mão.",
				'de-de': "Bis zum Ende deines nächsten Zuges darf kein Spieler Unterstützer- oder Stadionkarten von seiner Hand spielen."
			},
			damage: 30,

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Deep Freeze",
				'fr-fr': "Gel Intense",
				'es-es': "Congelación Profunda",
				'it-it': "Grande Freddo",
				'pt-br': "Congelamento Profundo",
				'de-de': "Tiefkühlung"
			},
			effect: {
				'en-us': "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed. If tails, your opponent's Active Pokémon is now Confused.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé. Si c'est pile, le Pokémon Actif de votre adversaire est maintenant Confus.",
				'es-es': "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado. Si sale cruz, el Pokémon Activo de tu rival pasa a estar Confundido.",
				'it-it': "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato. Se esce croce, il Pokémon attivo del tuo avversario viene confuso.",
				'pt-br': "Jogue uma moeda. Se sair cara, o Pokémon Ativo do seu oponente será Paralisado. Se sair coroa, o Pokémon Ativo do seu oponente ficará Confuso.",
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" ist das Aktive Pokémon deines Gegners jetzt paralysiert. Bei \"Zahl\" ist das Aktive Pokémon deines Gegners jetzt verwirrt."
			},
			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Swallowing large amounts of water, they make snow clouds inside their bodies and, when angry, cause violent blizzards.",
	},

	thirdParty: {
		cardmarket: 286291,
		tcgplayer: 107164
	}
}

export default card
