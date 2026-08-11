import { Card } from 'models/database/card'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		'en-us': "Sableye",
		'fr-fr': "Ténéfix",
		'es-es': "Sableye",
		'it-it': "Sableye",
		'pt-br': "Sableye",
		'de-de': "Zobiris"
	},

	illustrator: "Yukiko Baba",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		302,
	],

	hp: 70,

	types: [
		"Darkness",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Excavate",
				'fr-fr': "Déterrer",
				'es-es': "Ahondar",
				'it-it': "Scavare",
				'pt-br': "Cavoucar",
				'de-de': "Ausgraben"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), you may look at the top card of your deck. You may discard that card.",
				'fr-fr': "Une seule fois pendant votre tour (avant votre attaque), vous pouvez regarder la carte du dessus de votre deck. Vous pouvez défausser cette carte.",
				'es-es': "Una vez durante tu turno (antes de tu ataque), puedes mirar la primera carta de tu baraja. Puedes descartar esa carta.",
				'it-it': "Una sola volta durante il tuo turno, prima di attaccare, puoi guardare la prima carta del tuo mazzo. Puoi scartare quella carta.",
				'pt-br': "Uma vez durante a sua vez de jogar (antes de atacar), você pode olhar a primeira carta do seu baralho. Você pode descartar aquela carta.",
				'de-de': "Einmal während deines Zuges (bevor du angreifst) kannst du dir die oberste Karte deines Decks anschauen. Du kannst jene Karte auf deinen Ablagestapel legen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Disable",
				'fr-fr': "Entrave",
				'es-es': "Anulación",
				'it-it': "Inibitore",
				'pt-br': "Inabilitar",
				'de-de': "Aussetzer"
			},
			effect: {
				'en-us': "Choose 1 of your opponent’s Active Pokémon’s attacks. That Pokémon can’t use that attack during your opponent’s next turn.",
				'fr-fr': "Choisissez l’une des attaques du Pokémon Actif de votre adversaire. Ce Pokémon ne peut pas utiliser cette attaque pendant le prochain tour de votre adversaire.",
				'es-es': "Elige 1 de los ataques del Pokémon Activo de tu rival. Ese Pokémon no puede usar ese ataque durante el próximo turno de tu rival.",
				'it-it': "Scegli un attacco del Pokémon attivo del tuo avversario. Durante il prossimo turno del tuo avversario, quel Pokémon non potrà utilizzarlo.",
				'pt-br': "Escolha 1 dos ataques do Pokémon Ativo do seu oponente. Aquele Pokémon não poderá usar aquele ataque durante a próxima vez de jogar do seu oponente.",
				'de-de': "Wähle 1 Attacke des Aktiven Pokémon deines Gegners. Jenes Pokémon kann jene Attacke während des nächsten Zuges deines Gegners nicht einsetzen."
			},
			damage: 10,

		},
	],

	retreat: 1,

	description: {
		'en-us': "This Pokémon is feared. When its gemstone eyes begin to glow with a sinister shine, it's believed that Sableye will steal people's spirits away.",
	},

	thirdParty: {
		cardmarket: 361332,
		tcgplayer: 170910
	}
}

export default card
