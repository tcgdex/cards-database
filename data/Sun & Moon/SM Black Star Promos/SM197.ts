import { Card } from '../../../interfaces'
import Set from '../SM Black Star Promos'

const card: Card = {
	name: {
		en: "Greninja-GX",
		fr: "Amphinobi-GX",
		es: "Greninja-GX",
		it: "Greninja-GX",
		pt: "Greninja-GX",
		de: "Quajutsu-GX"
	},

	illustrator: "MPC Film",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		658,
	],

	hp: 230,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Frogadier",
	},

	suffix: "GX",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Elusive Master",
				fr: "Maître Évasif",
				es: "Maestría de Evasión",
				it: "Maestro Sfuggente",
				pt: "Mestre Evasivo",
				de: "Meisterzug"
			},
			effect: {
				en: "Once during your turn (before your attack), if this Pokémon is the last card in your hand, you may play it onto your Bench. If you do, draw 3 cards.",
				fr: "Cette attaque inflige 50 dégâts à l’un des Pokémon de votre adversaire. Ces dégâts ne sont pas affectés par la Faiblesse ou la Résistance.",
				es: "Una vez durante tu turno (antes de tu ataque), si este Pokémon es la última carta en tu mano, puedes jugarlo a tu Banca. Si lo haces, roba 3 cartas.",
				it: "Una sola volta durante il tuo turno, prima di attaccare, se questo Pokémon è l’ultima carta che hai in mano, puoi giocarlo e metterlo in panchina. Se lo fai, pesca tre carte.",
				pt: "Uma vez durante a sua vez de jogar (antes de atacar), se este Pokémon for a última carta na sua mão, você poderá colocá-lo no seu Banco. Se fizer isto, compre 3 cartas.",
				de: "Einmal während deines Zuges (bevor du angreifst), wenn dieses Pokémon die letzte Karte auf deiner Hand ist, kannst du es auf deine Bank spielen. Wenn du das machst, ziehe 3 Karten."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Mist Slash",
				fr: "Tranche-Brume",
				es: "Golpe Niebla",
				it: "Squarcianebbia",
				pt: "Golpe de Névoa",
				de: "Schleierschlitzer"
			},
			effect: {
				en: "This attack’s damage isn’t affected by Weakness, Resistance, or any other effects on your opponent’s Active Pokémon.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Confus.",
				es: "El daño de este ataque no se ve afectado por Debilidad, Resistencia o cualquier otro efecto en el Pokémon Activo de tu rival.",
				it: "I danni di questo attacco non sono influenzati dalla debolezza, dalla resistenza o da qualsiasi altro effetto presente sul Pokémon attivo del tuo avversario.",
				pt: "O dano deste ataque não é afetado por Fraqueza, Resistência ou quaisquer outros efeitos no Pokémon Ativo do seu oponente.",
				de: "Der Schaden dieser Attacke wird durch Schwäche, Resistenz oder alle anderen Effekte auf dem Aktiven Pokémon deines Gegners nicht verändert."
			},
			damage: 130,

		},
		{
			cost: [
				"Water",
			],
			name: {
				en: "Dark Mist GX",
				fr: "Brume Obscure GX",
				es: "Niebla Oscura GX",
				it: "Foscanebbia GX",
				pt: "Névoa Sombria GX",
				de: "Dunkelnebel GX"
			},
			effect: {
				en: "Put 1 of your opponent’s Benched Pokémon and all cards attached to it into your opponent’s hand. (You can’t use more than 1 GX attack in a game.)",
				fr: "Évitez tous les dégâts infligés à ce Pokémon par des attaques pendant le prochain tour de votre adversaire. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				es: "Pon 1 de los Pokémon en Banca de tu rival y todas las cartas unidas a él en la mano de tu rival. (No puedes usar más de 1 ataque GX en una partida).",
				it: "Prendi uno dei Pokémon in panchina del tuo avversario e tutte le carte assegnategli e aggiungili alle carte che ha in mano. Non puoi usare più di un attacco GX a partita.",
				pt: "Coloque 1 dos Pokémon no Banco do seu oponente e todas as cartas ligadas a ele na mão do seu oponente (você não pode usar mais de 1 ataque GX por partida).",
				de: "Gib deinem Gegner 1 Pokémon von seiner Bank und alle an es angelegten Karten auf seine Hand. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
			},

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1
}

export default card
