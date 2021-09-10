import { Card } from '../../../interfaces'
import Set from '../Steam Siege'

const card: Card = {
	name: {
		en: "Klefki",
		fr: "Trousselin",
		es: "Klefki",
		it: "Klefki",
		pt: "Klefki",
		de: "Clavion"
	},
	illustrator: "Saya Tsuruta",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		707,
	],
	hp: 70,
	types: [
		"Fairy",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Wonder Lock",
				fr: "Serrure Merveille",
				es: "Cerrojo Asombroso",
				it: "Mirabilblocco",
				pt: "Cadeado Assombroso",
				de: "Wunderschloss"
			},
			effect: {
				en: "Once during your turn (before your attack), if this Pokémon is on your Bench, you may discard all cards attached to this Pokémon and attach it to 1 of your Pokémon as a Pokémon Tool card. Prevent any damage done to the Pokémon this card is attached to by attacks from your opponent’s Mega Evolution Pokémon. If this card is attached to a Pokémon, discard this card at the end of your opponent’s turn.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), si ce Pokémon est sur votre Banc, vous pouvez défausser toutes les cartes attachées à ce Pokémon et l’attacher à l’un de vos Pokémon en tant que carte Outil Pokémon. Évitez tous les dégâts infligés au Pokémon auquel cette carte est attachée par les attaques des Pokémon Méga-Évolution de votre adversaire. Si cette carte est attachée à un Pokémon, défaussez-la à la fin du tour de votre adversaire.",
				es: "Una vez durante tu turno (antes de tu ataque), si este Pokémon está en tu Banca, puedes descartar todas las cartas unidas a este Pokémon y unirlo a 1 de tus Pokémon como una carta de Herramienta Pokémon. Evita cualquier daño infligido al Pokémon al que esté unida esta carta por ataques de los Pokémon Megaevolución de tu rival. Si esta carta está unida a un Pokémon, descarta esta carta al final del turno de tu rival.",
				it: "Una sola volta durante il tuo turno, prima di attaccare, se questo Pokémon è nella tua panchina, puoi scartare tutte le carte assegnate a questo Pokémon e assegnarlo a uno dei tuoi Pokémon come carta Oggetto Pokémon. Previeni tutti i danni inflitti al Pokémon a cui è assegnata questa carta da attacchi dei Pokémon Megaevoluzione del tuo avversario. Se questa carta è assegnata a un Pokémon, scartala alla fine del turno del tuo avversario.",
				pt: "Uma vez durante sua vez de jogar (antes de atacar), se este Pokémon estiver no seu Banco, você poderá descartar todos os cards ligados a este Pokémon e o ligar a 1 de seus Pokémon como um card de Ferramenta Pokémon. Previne qualquer dano causado ao Pokémon que este card estiver ligado por ataques dos Pokémon de Megaevolução do seu oponente. Se este card estiver ligado a um Pokémon, descarte-o no final da vez de jogar do seu oponente.",
				de: "Einmal während deines Zuges (vor deinem Angriff) kannst du, wenn sich dieses Pokémon auf deiner Bank befindet, alle Karten, die an dieses Pokémon angelegt sind, auf deinen Ablagestapel legen und es an 1 deiner Pokémon als 1 Pokémon-Ausrüstung anlegen. Verhindere allen Schaden, der dem Pokémon, an das diese Karte angelegt wird, durch Angriffe gegnerischer Mega-Entwicklungs-Pokémon zugefügt wird. Wenn diese Karte an 1 Pokémon angelegt ist, lege sie am Ende des Zuges deines Gegners auf deinen Ablagestapel."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fairy",
				"Colorless",
			],
			name: {
				en: "Fairy Wind",
				fr: "Vent Féérique",
				es: "Viento Feérico",
				it: "Vento di Fata",
				pt: "Vento de Fada",
				de: "Feenbrise"
			},

			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Darkness",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
