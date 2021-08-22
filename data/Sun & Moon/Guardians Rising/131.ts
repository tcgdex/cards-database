import { Card } from '../../../interfaces'
import Set from '../Guardians Rising'

const card: Card = {
	name: {
		en: "Turtonator GX",
		fr: "Boumata GX",
		es: "Turtonator GX",
		it: "Turtonator GX",
		pt: "Turtonator GX",
		de: "Tortunator GX"
	},
	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
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
				en: "Shell Trap",
				fr: "Carapiège",
				es: "Coraza Trampa",
				it: "Gusciotrappola",
				pt: "Armadilha de Carapaça",
				de: "Panzerfalle"
			},
			effect: {
				en: "During your opponent’s next turn, if this Pokémon is damaged by an attack (even if this Pokémon is Knocked Out), put 8 damage counters on the Attacking Pokémon.",
				fr: "Pendant le prochain tour de votre adversaire, si ce Pokémon subit les dégâts d’une attaque (même si ce Pokémon est mis K.O.), placez 8 marqueurs de dégâts sur le Pokémon Attaquant.",
				es: "Durante el próximo turno de tu rival, si este Pokémon resulta dañado por un ataque (incluso si este Pokémon queda Fuera de Combate), pon 8 contadores de daño en el Pokémon Atacante.",
				it: "Durante il prossimo turno del tuo avversario, se questo Pokémon è danneggiato da un attacco, anche se viene messo KO, metti otto segnalini danno sul Pokémon attaccante.",
				pt: "Durante a próxima vez de jogar do seu oponente, se este Pokémon for danificado por um ataque (mesmo que este Pokémon seja Nocauteado), coloque 8 contadores de dano no Pokémon Atacante.",
				de: "Wenn diesem Pokémon während des nächsten Zuges deines Gegners durch eine Attacke Schaden zugefügt wird (auch wenn dieses Pokémon dadurch kampfunfähig wird), lege 8 Schadensmarken auf das Angreifende Pokémon."
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
				en: "Bright Flame",
				fr: "Flamme Éclatante",
				es: "Llama Viva",
				it: "Splendifiamma",
				pt: "Chama Reluzente",
				de: "Helle Flamme"
			},
			effect: {
				en: "Discard 2 Fire Energy from this Pokémon.",
				fr: "Défaussez 2 Énergies Fire de ce Pokémon.",
				es: "Descarta 2 Energías Fire de este Pokémon.",
				it: "Scarta due Energie Fire assegnate a questo Pokémon.",
				pt: "Descarte 2 Energias Fire deste Pokémon.",
				de: "Lege 2 Fire-Energien von diesem Pokémon auf deinen Ablagestapel."
			},
			damage: 160,

		},
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Nitro Tank GX",
				fr: "Réservoir Nitro GX",
				es: "Nitrotanque GX",
				it: "Serbatoio Nitrico-GX",
				pt: "Tanque de Nitro GX",
				de: "Nitrotank GX"
			},
			effect: {
				en: "Attach 5 Fire Energy cards from your discard pile to your Pokémon in any way you like. (You can’t use more than 1 GX attack in a game.)",
				fr: "Attachez 5 cartes Énergie Fire de votre pile de défausse à vos Pokémon, de la manière que vous voulez. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				es: "Une 5 cartas de Energía Fire de tu pila de descartes a tus Pokémon de la manera que desees. (No puedes usar más de 1 ataque GX en una partida).",
				it: "Assegna a piacimento ai tuoi Pokémon cinque carte Energia Fire dalla tua pila degli scarti. Non puoi usare più di un attacco GX a partita.",
				pt: "Ligue 5 cartas de Energia Fire da sua pilha de descarte aos seus Pokémon como desejar (você não pode usar mais de 1 ataque GX por partida).",
				de: "Lege 5 Fire-Energiekarten aus deinem Ablagestapel beliebig an deine Pokémon an. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
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



}

export default card
