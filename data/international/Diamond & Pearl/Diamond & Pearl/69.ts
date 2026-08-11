import { Card } from 'models/database/card'
import Set from '../Diamond & Pearl'

const card: Card = {
	name: {
		'en-us': "Azurill",
		'fr-fr': "Azurill",
		'de-de': "Azurill"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		298,
	],

	hp: 40,

	types: [
		"Colorless",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				'en-us': "Baby Evolution",
				'fr-fr': "Évolution bébé",
				'de-de': "Baby Evolution"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), you may put Marill from your hand onto Azurill (this counts as evolving Azurill) and remove all damage counters from Azurill.",
				'fr-fr': "Une seule fois lors de votre tour (avant votre attaque), vous pouvez placer Marill de votre main sur Azurill (vous le faites ainsi évoluer) et retirer à Azurill tous ses marqueurs de dégât.",
				'de-de': "Einmal während deines Zuges (vor deinem Angriff) kannst du Marill von deiner Hand auf Azurill legen (das zählt als Entwickeln von Azurill). Entferne alle Schadensmarken von Azurill."
			},
		},
	],

	attacks: [
		{

			name: {
				'en-us': "Delivery",
				'fr-fr': "Livraison",
				'de-de': "Anlieferung"
			},
			effect: {
				'en-us': "Put any 1 card from your discard pile into your hand.",
				'fr-fr': "Placez n'importe quelle carte de votre pile de défausse dans votre main.",
				'de-de': "Wähle 1 Karte aus deinem Ablagestapel und nimm sie auf deine Hand."
			},

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+10"
		},
	],

	retreat: 1,

	description: {
		'en-us': "A Pokémon that lives by water. It moves quickly on land by bouncing on its big tail.",
		'fr-fr': "Un Pokémon qui vit près de l'eau. Au sol, il se déplace rapidement en rebondissant sur sa grosse queue"
	},

	thirdParty: {
		cardmarket: 277568,
		tcgplayer: 83690
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse"
		}
	]
}

export default card
