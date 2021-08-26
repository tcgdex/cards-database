import { Card } from '../../../interfaces'
import Set from '../Team Up'

const card: Card = {
	name: {
		en: "Latias & Latios GX",
		fr: "Latias et Latios GX",
		es: "Latias y Latios GX",
		it: "Latias e Latios GX",
		pt: "Latias e Latios GX",
		de: "Latias & Latios GX"
	},
	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		380,
	],
	hp: 250,
	types: [
		"Dragon",
	],


	suffix: "TAG TEAM-GX",

	attacks: [
		{
			cost: [
				"Water",
				"Psychic",
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Buster Purge",
				fr: "Écrase-Éclat",
				es: "Purificador",
				it: "Abbagliante Distruttivo",
				pt: "Purga Destruidora",
				de: "Sprengwerfer"
			},
			effect: {
				en: "Discard 3 Energy from this Pokémon.",
				fr: "Défaussez 3 Énergies de ce Pokémon.",
				es: "Descarta 3 Energías de este Pokémon.",
				it: "Scarta tre Energie assegnate a questo Pokémon.",
				pt: "Descarte 3 Energias deste Pokémon.",
				de: "Lege 3 Energien von diesem Pokémon auf deinen Ablagestapel."
			},
			damage: 240,

		},
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Aero Unit GX",
				fr: "Unité Aérienne GX",
				es: "Unidad Aérea GX",
				it: "Unità Aerea GX",
				pt: "Unidade Aérea GX",
				de: "Luftstaffel GX"
			},
			effect: {
				en: "Attach 5 basic Energy cards from your discard pile to your Pokémon in any way you like. If this Pokémon has at least 1 extra Energy attached to it (in addition to this attack’s cost), prevent all effects of attacks, including damage, done to it during your opponent’s next turn. (You can’t use more than 1 GX attack in a game.)",
				fr: "Attachez 5 cartes Énergie de base de votre pile de défausse à vos Pokémon, de la manière que vous voulez. Si au moins une Énergie supplémentaire est attachée à ce Pokémon (en plus du coût de cette attaque), évitez tous les effets d’attaques, y compris les dégâts, qui lui sont infligés pendant le prochain tour de votre adversaire. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				es: "Une 5 cartas de Energía Básica de tu pila de descartes a tus Pokémon de la manera que desees. Si este Pokémon tiene por lo menos 1 Energía adicional unida a él (además de las del coste de este ataque), evita todos los efectos de los ataques, incluido el daño, infligidos a este Pokémon durante el próximo turno de tu rival. (No puedes usar más de 1 ataque GX en una partida).",
				it: "Assegna a piacimento ai tuoi Pokémon cinque carte Energia base dalla tua pila degli scarti. Se questo Pokémon ha almeno un’Energia extra assegnata, in aggiunta a quelle del costo di questo attacco, previeni tutti gli effetti degli attacchi dell’avversario, inclusi i danni, inflitti al Pokémon durante il prossimo turno del tuo avversario. Non puoi usare più di un attacco GX a partita.",
				pt: "Ligue 5 cartas de Energia básica da sua pilha de descarte aos seus Pokémon como desejar. Se este Pokémon tiver pelo menos 1 Energia adicional ligada a ele (além do custo deste ataque), prevenirá todos os efeitos de ataques, incluindo dano, causados a ele durante a próxima vez de jogar do seu oponente (você não pode usar mais de 1 ataque GX por partida).",
				de: "Lege 5 Basis-Energiekarten aus deinem Ablagestapel beliebig an deine Pokémon an. Wenn an dieses Pokémon mindestens 1 extra Energie angelegt ist (zusätzlich zu den Kosten dieser Attacke), verhindere während des nächsten Zuges deines Gegners alle Effekte von Attacken, einschließlich Schaden, die diesem Pokémon zugefügt werden. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
			},

		},
	],
	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
