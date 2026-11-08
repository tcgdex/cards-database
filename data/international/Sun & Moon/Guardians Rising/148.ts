import { Card } from 'models/database/card'
import Set from '../Guardians Rising'

const card: Card = {
	name: {
		'en-us': "Turtonator GX",
		'fr-fr': "Boumata GX",
		'es-es': "Turtonator GX",
		'it-it': "Turtonator GX",
		'pt-br': "Turtonator GX",
		'de-de': "Tortunator GX"
	},

	illustrator: "5ban Graphics",
	rarity: "Secret Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		776,
	],

	hp: 190,

	types: [
		"Fire",
	],

	suffix: "GX",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Shell Trap",
				'fr-fr': "Carapiège",
				'es-es': "Coraza Trampa",
				'it-it': "Gusciotrappola",
				'pt-br': "Armadilha de Carapaça",
				'de-de': "Panzerfalle"
			},
			effect: {
				'en-us': "During your opponent’s next turn, if this Pokémon is damaged by an attack (even if this Pokémon is Knocked Out), put 8 damage counters on the Attacking Pokémon.",
				'fr-fr': "Pendant le prochain tour de votre adversaire, si ce Pokémon subit les dégâts d’une attaque (même si ce Pokémon est mis K.O.), placez 8 marqueurs de dégâts sur le Pokémon Attaquant.",
				'es-es': "Durante el próximo turno de tu rival, si este Pokémon resulta dañado por un ataque (incluso si este Pokémon queda Fuera de Combate), pon 8 contadores de daño en el Pokémon Atacante.",
				'it-it': "Durante il prossimo turno del tuo avversario, se questo Pokémon è danneggiato da un attacco, anche se viene messo KO, metti otto segnalini danno sul Pokémon attaccante.",
				'pt-br': "Durante a próxima vez de jogar do seu oponente, se este Pokémon for danificado por um ataque (mesmo que este Pokémon seja Nocauteado), coloque 8 contadores de dano no Pokémon Atacante.",
				'de-de': "Wenn diesem Pokémon während des nächsten Zuges deines Gegners durch eine Attacke Schaden zugefügt wird (auch wenn dieses Pokémon dadurch kampfunfähig wird), lege 8 Schadensmarken auf das Angreifende Pokémon."
			},
			damage: 20,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Bright Flame",
				'fr-fr': "Flamme Éclatante",
				'es-es': "Llama Viva",
				'it-it': "Splendifiamma",
				'pt-br': "Chama Reluzente",
				'de-de': "Helle Flamme"
			},
			effect: {
				'en-us': "Discard 2 Fire Energy from this Pokémon.",
				'fr-fr': "Défaussez 2 Énergies Fire de ce Pokémon.",
				'es-es': "Descarta 2 Energías Fire de este Pokémon.",
				'it-it': "Scarta due Energie Fire assegnate a questo Pokémon.",
				'pt-br': "Descarte 2 Energias Fire deste Pokémon.",
				'de-de': "Lege 2 Fire-Energien von diesem Pokémon auf deinen Ablagestapel."
			},
			damage: 160,

		},
		{
			cost: [
				"Fire",
			],
			name: {
				'en-us': "Nitro Tank GX",
				'fr-fr': "Réservoir Nitro GX",
				'es-es': "Nitrotanque GX",
				'it-it': "Serbatoio Nitrico-GX",
				'pt-br': "Tanque de Nitro GX",
				'de-de': "Nitrotank GX"
			},
			effect: {
				'en-us': "Attach 5 Fire Energy cards from your discard pile to your Pokémon in any way you like. (You can’t use more than 1 GX attack in a game.)",
				'fr-fr': "Attachez 5 cartes Énergie Fire de votre pile de défausse à vos Pokémon, de la manière que vous voulez. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				'es-es': "Une 5 cartas de Energía Fire de tu pila de descartes a tus Pokémon de la manera que desees. (No puedes usar más de 1 ataque GX en una partida).",
				'it-it': "Assegna a piacimento ai tuoi Pokémon cinque carte Energia Fire dalla tua pila degli scarti. Non puoi usare più di un attacco GX a partita.",
				'pt-br': "Ligue 5 cartas de Energia Fire da sua pilha de descarte aos seus Pokémon como desejar (você não pode usar mais de 1 ataque GX por partida).",
				'de-de': "Lege 5 Fire-Energiekarten aus deinem Ablagestapel beliebig an deine Pokémon an. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
			},

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 3,

	thirdParty: {
		cardmarket: 297597,
		tcgplayer: 130766
	}
}

export default card
