import { Card } from 'models/database/card'
import Set from '../Phantom Forces'

const card: Card = {
	name: {
		'en-us': "Lampent",
		'fr-fr': "Mélancolux",
		'es-es': "Lampent",
		'it-it': "Lampent",
		'pt-br': "Lampent",
		'de-de': "Laternecto"
	},

	illustrator: "kawayoo",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		608,
	],

	hp: 70,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Litwick",
		'fr-fr': "Funécire",
		'es-es': "Litwick",
		'it-it': "Litwick",
		'pt-br': "Litwick",
		'de-de': "Lichtel"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Cursed Drop",
				'fr-fr': "Chute Maudite",
				'es-es': "Caída Maldita",
				'it-it': "Caduta Maledetta",
				'pt-br': "Queda Amaldiçoada",
				'de-de': "Verfluchter Fall"
			},
			effect: {
				'en-us': "Put 3 damage counters on your opponent's Pokémon in any way you like.",
				'fr-fr': "Placez 3 marqueurs de dégâts sur les Pokémon de votre adversaire, de la manière que vous voulez.",
				'es-es': "Pon 3 contadores de daño en los Pokémon de tu rival de la manera que desees.",
				'it-it': "Distribuisci a piacimento tre segnalini danno sui Pokémon del tuo avversario.",
				'pt-br': "Coloque 3 contadores de danos nos Pokémon do seu oponente do jeito que desejar.",
				'de-de': "Verteile 3 Schadensmarken beliebig auf die Pokémon deines Gegners."
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Night March",
				'fr-fr': "Marche Nocturne",
				'es-es': "Marcha Nocturna",
				'it-it': "Marcia Notturna",
				'pt-br': "Marcha Noturna",
				'de-de': "Nachtwanderung"
			},
			effect: {
				'en-us': "This attack does 20 damage times the number of Pokémon in your discard pile that have the Night March attack.",
				'fr-fr': "Cette attaque inflige 20 dégâts multipliés par le nombre de Pokémon dans votre pile de défausse possédant l'attaque Marche Nocturne.",
				'es-es': "Este ataque hace 20 puntos de daño por cada Pokémon en tu pila de descartes que tenga el ataque Marcha Nocturna.",
				'it-it': "Questo attacco infligge 20 danni per ogni Pokémon nella tua pila degli scarti che conosce l'attacco Marcia Notturna.",
				'pt-br': "Esse ataque causa 20 de danos vezes o número de Pokémon em sua pilha de descarte que possuem o ataque Marcha Noturna.",
				'de-de': "Dieser Angriff fügt 20 Schadenspunkte mal der Anzahl der Pokémon in deinem Ablagestapel, die Nachtwanderung beherrschen, zu."
			},
			damage: "20×",

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 2,

	description: {
		'en-us': "The spirits it absorbs fuel its baleful fire. It hangs around hospitals waiting for people to pass on.",
	},

	thirdParty: {
		cardmarket: 281848,
		tcgplayer: 94500
	}
}

export default card
