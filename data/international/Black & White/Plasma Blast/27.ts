import { Card } from 'models/database/card'
import Set from '../Plasma Blast'

const card: Card = {
	name: {
		'en-us': "Tirtouga",
		'fr-fr': "Carapagos",
		'es-es': "Tirtouga",
		'it-it': "Tirtouga",
		'pt-br': "Tirtouga",
		'de-de': "Galapaflos"
	},

	illustrator: "Midori Harada",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		564,
	],

	hp: 90,

	types: [
		"Water",
	],

	stage: "RESTORED",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Prehistoric Call",
				'fr-fr': "Appel Préhistorique",
				'es-es': "Llamada Prehistórica",
				'it-it': "Chiamata Preistorica",
				'pt-br': "Chamado Pre-histórico",
				'de-de': "Prähistorischer Ruf"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), if this Pokémon is in your discard pile, you may put this Pokémon on the bottom of your deck.",
				'fr-fr': "Une seule fois pendant votre tour (avant votre attaque), si ce Pokémon est dans votre pile de défausse, vous pouvez placer ce Pokémon en dessous de votre deck.",
				'es-es': "Una vez durante tu turno (antes de tu ataque), si este Pokémon está en tu pila de descartes, puedes ponerlo en la parte inferior de tu baraja.",
				'it-it': "Una sola volta durante il tuo turno, prima di attaccare, se questo Pokémon è nella tua pila degli scarti, puoi metterlo in fondo al tuo mazzo.",
				'pt-br': "Uma vez durante sua vez de jogar (antes de atacar), se este Pokémon estiver na sua pilha de descarte, você pode colocá-lo na base de seu baralho.",
				'de-de': "Einmal während deines Zuges (vor deinem Angriff) kannst du, wenn sich dieses Pokémon in deinem Ablagestapel befindet, dieses Pokémon unter dein Deck legen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Slam",
				'fr-fr': "Souplesse",
			},
			effect: {
				'en-us': "Flip 2 coins. This attack does 30 damage times the number of heads.",
				'fr-fr': "Lancez 2 pièces. Cette attaque inflige 30 dégâts multipliés par le nombre de côtés face.",
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		'en-us': "This Pokémon was restored from a fossil. It swam skillfully and dove to depths beyond half a mile.",
	},

	thirdParty: {
		cardmarket: 281048,
		tcgplayer: 89922
	}
}

export default card
