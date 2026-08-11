import { Card } from 'models/database/card'
import Set from '../Sun & Moon'

const card: Card = {
	name: {
		'en-us': "Decidueye GX",
		'fr-fr': "Archéduc GX",
		'es-es': "Decidueye GX",
		'it-it': "Decidueye GX",
		'pt-br': "Decidueye GX",
		'de-de': "Silvarro GX"
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		724,
	],

	hp: 240,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Dartrix",
		'fr-fr': "Efflèche",
	},

	suffix: "GX",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Feather Arrow",
				'fr-fr': "Flèche Empennée",
				'es-es': "Flecha Pluma",
				'it-it': "Freccia Piumata",
				'pt-br': "Flecha de Pena",
				'de-de': "Federpfeil"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), you may put 2 damage counters on 1 of your opponent’s Pokémon.",
				'fr-fr': "Une seule fois pendant votre tour (avant votre attaque), vous pouvez placer 2 marqueurs de dégâts sur l’un des Pokémon de votre adversaire.",
				'es-es': "Una vez durante tu turno (antes de tu ataque), puedes poner 2 contadores de daño en 1 de los Pokémon de tu rival.",
				'it-it': "Una sola volta durante il tuo turno, prima di attaccare, puoi mettere due segnalini danno su uno dei Pokémon del tuo avversario.",
				'pt-br': "Uma vez durante a sua vez de jogar (antes de atacar), você pode colocar 2 contadores de dano em 1 dos Pokémon do seu oponente.",
				'de-de': "Einmal während deines Zuges (bevor du angreifst) kannst du 2 Schadensmarken auf 1 Pokémon deines Gegners legen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Razor Leaf",
				'fr-fr': "Tranch’Herbe",
				'es-es': "Hoja Afilada",
				'it-it': "Foglielama",
				'pt-br': "Folha Gilete",
				'de-de': "Rasierblatt"
			},

			damage: 90,

		},
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Hollow Hunt GX",
				'fr-fr': "Chasse Éthérée GX",
				'es-es': "Caza Hueca GX",
				'it-it': "Caccia Vacua-GX",
				'pt-br': "Caça Aeriforme GX",
				'de-de': "Pirschjagd GX"
			},
			effect: {
				'en-us': "Put 3 cards from your discard pile into your hand. (You can’t use more than 1 GX attack in a game.)",
				'fr-fr': "Prenez 3 cartes dans votre pile de défausse et ajoutez-les à votre main. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				'es-es': "Pon 3 cartas de tu pila de descartes en tu mano. (No puedes usar más de 1 ataque GX en una partida).",
				'it-it': "Prendi tre carte dalla tua pila degli scarti e aggiungile a quelle che hai in mano. Non puoi usare più di un attacco GX a partita.",
				'pt-br': "Coloque 3 cartas da sua pilha de descarte na sua mão (você não pode usar mais de 1 ataque GX por partida).",
				'de-de': "Nimm 3 Karten aus deinem Ablagestapel auf deine Hand. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
			},

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
		cardmarket: 295319,
		tcgplayer: 126883
	}
}

export default card
