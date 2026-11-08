import { Card } from 'models/database/card'
import Set from '../Guardians Rising'

const card: Card = {
	name: {
		'en-us': "Metagross GX",
		'fr-fr': "Métalosse GX",
		'es-es': "Metagross GX",
		'it-it': "Metagross GX",
		'pt-br': "Metagross GX",
		'de-de': "Metagross GX"
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		376,
	],

	hp: 250,

	types: [
		"Metal",
	],

	evolveFrom: {
		'en-us': "Metang",
		'fr-fr': "Métang",
	},

	suffix: "GX",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Geotech System",
				'fr-fr': "Système Géotechnique",
				'es-es': "Sistema Geotécnico",
				'it-it': "Sistema Geotecnico",
				'pt-br': "Sistema Geotecnológico",
				'de-de': "Erdbau"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), you may attach a Psychic or Metal Energy card from your discard pile to your Active Pokémon.",
				'fr-fr': "Une seule fois pendant votre tour (avant votre attaque), vous pouvez attacher une carte Énergie Psychic ou Metal de votre pile de défausse à votre Pokémon Actif.",
				'es-es': "Una vez durante tu turno (antes de tu ataque), puedes unir 1 carta de Energía Psychic o Metal de tu pila de descartes a tu Pokémon Activo.",
				'it-it': "Una sola volta durante il tuo turno, prima di attaccare, puoi assegnare al tuo Pokémon attivo una carta Energia Psychic o Metal dalla tua pila degli scarti.",
				'pt-br': "Uma vez durante a sua vez de jogar (antes de atacar), você pode ligar 1 carta de Energia Psychic ou Metal da sua pilha de descarte ao seu Pokémon Ativo.",
				'de-de': "Einmal während deines Zuges (bevor du angreifst) kannst du 1 Psychic- oder 1 Metal-Energiekarte aus deinem Ablagestapel an dein Aktives Pokémon anlegen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
			],
			name: {
				'en-us': "Giga Hammer",
				'fr-fr': "Giga Marteau",
				'es-es': "Gigamartillo",
				'it-it': "Gigamartello",
				'pt-br': "Gigamartelo",
				'de-de': "Gigahammer"
			},
			effect: {
				'en-us': "This Pokémon can’t use Giga Hammer during your next turn.",
				'fr-fr': "Ce Pokémon ne peut pas utiliser Giga Marteau pendant votre prochain tour.",
				'es-es': "Este Pokémon no puede usar Gigamartillo durante tu próximo turno.",
				'it-it': "Durante il tuo prossimo turno, questo Pokémon non può usare Gigamartello.",
				'pt-br': "Este Pokémon não poderá usar Gigamartelo durante a sua próxima vez de jogar.",
				'de-de': "Dieses Pokémon kann Gigahammer während deines nächsten Zuges nicht einsetzen."
			},
			damage: 150,

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Algorithm GX",
				'fr-fr': "Algorithme GX",
				'es-es': "Algoritmo GX",
				'it-it': "Algoritmo-GX",
				'pt-br': "Algoritmo GX",
				'de-de': "Algorithmus GX"
			},
			effect: {
				'en-us': "Search your deck for up to 5 cards and put them into your hand. Then, shuffle your deck. (You can’t use more than 1 GX attack in a game.)",
				'fr-fr': "Cherchez jusqu’à 5 cartes dans votre deck et ajoutez-les à votre main. Mélangez ensuite votre deck. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				'es-es': "Busca en tu baraja hasta 5 cartas y ponlas en tu mano. Después, baraja las cartas de tu baraja. (No puedes usar más de 1 ataque GX en una partida).",
				'it-it': "Cerca nel tuo mazzo fino a cinque carte e aggiungile alle carte che hai in mano. Poi rimischia le carte del tuo mazzo. Non puoi usare più di un attacco GX a partita.",
				'pt-br': "Procure por até 5 cartas no seu baralho e coloque-as na sua mão. Em seguida, embaralhe o seu baralho (você não pode usar mais de 1 ataque GX por partida).",
				'de-de': "Durchsuche dein Deck nach bis zu 5 Karten und nimm sie auf deine Hand. Mische anschließend dein Deck. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
			},

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 3,

	thirdParty: {
		cardmarket: 297591,
		tcgplayer: 130998
	}
}

export default card
