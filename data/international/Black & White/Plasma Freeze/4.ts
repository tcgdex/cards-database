import { Card } from 'models/database/card'
import Set from '../Plasma Freeze'

const card: Card = {
	name: {
		'en-us': "Exeggcute",
		'fr-fr': "Noeunoeuf",
		'es-es': "Exeggcute",
		'it-it': "Exeggcute",
		'pt-br': "Exeggcute",
		'de-de': "Owei"
	},

	illustrator: "Shigenori Negishi",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		102,
	],

	hp: 30,

	types: [
		"Grass",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Propagation",
				'fr-fr': "Propagation",
				'es-es': "Propagación",
				'it-it': "Propagazione",
				'pt-br': "Propagação",
				'de-de': "Ausbreitung"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), if this Pokémon is in your discard pile, you may put this Pokémon into your hand.",
				'fr-fr': "Une seule fois pendant votre tour (avant votre attaque), si ce Pokémon est dans votre pile de défausse, vous pouvez ajouter ce Pokémon à votre main.",
				'es-es': "Una vez durante tu turno (antes de tu ataque), si este Pokémon está en tu pila de descartes, puedes ponerlo en tu mano.",
				'it-it': "Una sola volta durante il tuo turno, prima di attaccare, se questo Pokémon è nella tua pila degli scarti, puoi aggiungerlo alle carte che hai in mano.",
				'pt-br': "Uma vez durante sua vez de jogar (antes de atacar), se este Pokémon estiver em sua pilha de descarte, você poderá colocá-lo em sua mão.",
				'de-de': "Einmal während deines Zuges (vor deinem Angriff) kannst du, wenn sich dieses Pokémon auf deinem Ablagestapel befindet, dieses Pokémon auf deine Hand nehmen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Seed Bomb",
				'fr-fr': "Canon Graine",
			},

			damage: 20,

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
			type: "Water",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Its six eggs converse using telepathy. They can quickly gather if they become separated.",
	},

	thirdParty: {
		cardmarket: 280882,
		tcgplayer: 85350
	}
}

export default card
