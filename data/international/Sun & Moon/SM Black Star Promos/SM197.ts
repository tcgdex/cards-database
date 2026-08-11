import { Card } from 'models/database/card'
import Set from '../SM Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Greninja GX",
		'fr-fr': "Amphinobi GX",
		'es-es': "Greninja GX",
		'it-it': "Greninja GX",
		'pt-br': "Greninja GX",
		'de-de': "Quajutsu GX"
	},

	illustrator: "MPC Film",
	rarity: "Promo",
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
		'en-us': "Frogadier",
		'fr-fr': "Croâporal"
	},

	suffix: "GX",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Elusive Master",
				'fr-fr': "Maître Évasif",
				'es-es': "Maestría de Evasión",
				'it-it': "Maestro Sfuggente",
				'pt-br': "Mestre Evasivo",
				'de-de': "Meisterzug"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), if this Pokémon is the last card in your hand, you may play it onto your Bench. If you do, draw 3 cards.",
				'fr-fr': "Cette attaque inflige 50 dégâts à l’un des Pokémon de votre adversaire. Ces dégâts ne sont pas affectés par la Faiblesse ou la Résistance.",
				'es-es': "Una vez durante tu turno (antes de tu ataque), si este Pokémon es la última carta en tu mano, puedes jugarlo a tu Banca. Si lo haces, roba 3 cartas.",
				'it-it': "Una sola volta durante il tuo turno, prima di attaccare, se questo Pokémon è l’ultima carta che hai in mano, puoi giocarlo e metterlo in panchina. Se lo fai, pesca tre carte.",
				'pt-br': "Uma vez durante a sua vez de jogar (antes de atacar), se este Pokémon for a última carta na sua mão, você poderá colocá-lo no seu Banco. Se fizer isto, compre 3 cartas.",
				'de-de': "Einmal während deines Zuges (bevor du angreifst), wenn dieses Pokémon die letzte Karte auf deiner Hand ist, kannst du es auf deine Bank spielen. Wenn du das machst, ziehe 3 Karten."
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
				'en-us': "Mist Slash",
				'fr-fr': "Tranche-Brume",
				'es-es': "Golpe Niebla",
				'it-it': "Squarcianebbia",
				'pt-br': "Golpe de Névoa",
				'de-de': "Schleierschlitzer"
			},
			effect: {
				'en-us': "This attack’s damage isn’t affected by Weakness, Resistance, or any other effects on your opponent’s Active Pokémon.",
				'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Confus.",
				'es-es': "El daño de este ataque no se ve afectado por Debilidad, Resistencia o cualquier otro efecto en el Pokémon Activo de tu rival.",
				'it-it': "I danni di questo attacco non sono influenzati dalla debolezza, dalla resistenza o da qualsiasi altro effetto presente sul Pokémon attivo del tuo avversario.",
				'pt-br': "O dano deste ataque não é afetado por Fraqueza, Resistência ou quaisquer outros efeitos no Pokémon Ativo do seu oponente.",
				'de-de': "Der Schaden dieser Attacke wird durch Schwäche, Resistenz oder alle anderen Effekte auf dem Aktiven Pokémon deines Gegners nicht verändert."
			},
			damage: 130,

		},
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Dark Mist GX",
				'fr-fr': "Brume Obscure GX",
				'es-es': "Niebla Oscura GX",
				'it-it': "Foscanebbia GX",
				'pt-br': "Névoa Sombria GX",
				'de-de': "Dunkelnebel GX"
			},
			effect: {
				'en-us': "Put 1 of your opponent’s Benched Pokémon and all cards attached to it into your opponent’s hand. (You can’t use more than 1 GX attack in a game.)",
				'fr-fr': "Évitez tous les dégâts infligés à ce Pokémon par des attaques pendant le prochain tour de votre adversaire. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				'es-es': "Pon 1 de los Pokémon en Banca de tu rival y todas las cartas unidas a él en la mano de tu rival. (No puedes usar más de 1 ataque GX en una partida).",
				'it-it': "Prendi uno dei Pokémon in panchina del tuo avversario e tutte le carte assegnategli e aggiungili alle carte che ha in mano. Non puoi usare più di un attacco GX a partita.",
				'pt-br': "Coloque 1 dos Pokémon no Banco do seu oponente e todas as cartas ligadas a ele na mão do seu oponente (você não pode usar mais de 1 ataque GX por partida).",
				'de-de': "Gib deinem Gegner 1 Pokémon von seiner Bank und alle an es angelegten Karten auf seine Hand. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
			},

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,
}

export default card
