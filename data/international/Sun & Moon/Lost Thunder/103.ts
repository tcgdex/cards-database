import { Card } from 'models/database/card'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		'en-us': "Chandelure",
		'fr-fr': "Lugulabre",
		'es-es': "Chandelure",
		'it-it': "Chandelure",
		'pt-br': "Chandelure",
		'de-de': "Skelabra"
	},

	illustrator: "so-taro",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		609,
	],

	hp: 140,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Lampent",
		'fr-fr': "Mélancolux",
	},

	stage: "Stage2",

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
				'en-us': "Put 4 damage counters on your opponent’s Pokémon in any way you like.",
				'fr-fr': "Placez 4 marqueurs de dégâts sur les Pokémon de votre adversaire de la manière que vous voulez.",
				'es-es': "Pon 4 contadores de daño en los Pokémon de tu rival de la manera que desees.",
				'it-it': "Distribuisci a piacimento quattro segnalini danno sui Pokémon del tuo avversario.",
				'pt-br': "Coloque 4 contadores de dano nos Pokémon do seu oponente como desejar.",
				'de-de': "Lege 4 Schadensmarken beliebig auf die Pokémon deines Gegners."
			},

		},
		{
			cost: [
				"Psychic",
				"Psychic",
			],
			name: {
				'en-us': "Vortex of Pain",
				'fr-fr': "Vortex Douloureux",
				'es-es': "Vórtice de Dolor",
				'it-it': "Vortice Infausto",
				'pt-br': "Vórtice de Dor",
				'de-de': "Wirbel der Qual"
			},
			effect: {
				'en-us': "This attack does 20 damage for each damage counter on all of your opponent’s Pokémon.",
				'fr-fr': "Cette attaque inflige 20 dégâts pour chaque marqueur de dégâts placé sur les Pokémon de votre adversaire.",
				'es-es': "Este ataque hace 20 puntos de daño por cada contador de daño en todos los Pokémon de tu rival.",
				'it-it': "Questo attacco infligge 20 danni per ogni segnalino danno presente sui Pokémon del tuo avversario.",
				'pt-br': "Este ataque causa 20 pontos de dano para cada contador de dano em todos os Pokémon do seu oponente.",
				'de-de': "Diese Attacke fügt 20 Schadenspunkte mal der Anzahl der Schadensmarken auf allen Pokémon deines Gegners zu."
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
		'en-us': "The spirits burned up in its ominous flame lose their way and wander this world forever.",
	},

	thirdParty: {
		cardmarket: 365740,
		tcgplayer: 178916
	}
}

export default card
