import { Card } from 'models/database/card'
import Set from '../XY'

const card: Card = {
	name: {
		'en-us': "Bibarel",
		'fr-fr': "Castorno",
		'es-es': "Bibarel",
		'it-it': "Bibarel",
		'pt-br': "Bibarel",
		'de-de': "Bidifas"
	},

	illustrator: "Kyoko Umemoto",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		400,
	],

	hp: 100,

	types: [
		"Colorless",
	],

	evolveFrom: {
		'en-us': "Bidoof",
		'fr-fr': "Keunotor",
		'es-es': "Bidoof",
		'it-it': "Bidoof",
		'pt-br': "Bidoof",
		'de-de': "Bidiza"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Double Headbutt",
				'fr-fr': "Double Coup d'Boule",
				'es-es': "Doble Cabezazo",
				'it-it': "Doppia Bottintesta",
				'pt-br': "Cabeçada Dupla",
				'de-de': "Doppelte Kopfnuss"
			},
			effect: {
				'en-us': "Flip 2 coins. This attack does 30 damage times the number of heads.",
				'fr-fr': "Lancez 2 pièces. Cette attaque inflige 30 dégâts multipliés par le nombre de côtés face.",
				'es-es': "Lanza 2 monedas. Este ataque hace 30 puntos de daño por cada cara.",
				'it-it': "Lancia due volte una moneta. Questo attacco infligge 30 danni ogni volta che esce testa.",
				'pt-br': "Jogue 2 moedas. Esse ataque causa 30 de danos vezes o número de caras.",
				'de-de': "Wirf 2 Münzen. Dieser Angriff fügt 30 Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "30×",

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Hypno Headbutt",
				'fr-fr': "Hypno Coup d'Boule",
				'es-es': "Cabezazo Hipnótico",
				'it-it': "Bottintesta Ipnotica",
				'pt-br': "Cabeçada Hipnótica",
				'de-de': "Hypnokopfstoß"
			},
			effect: {
				'en-us': "You may do 30 more damage. If you do, this Pokémon is now Asleep.",
				'fr-fr': "Vous pouvez infliger 30 dégâts supplémentaires. Dans ce cas, ce Pokémon est maintenant Endormi.",
				'es-es': "Puedes hacer 30 puntos de daño más. Si lo haces, este Pokémon pasa a estar Dormido.",
				'it-it': "Puoi infliggere 30 danni in più. Se lo fai, questo Pokémon viene addormentato.",
				'pt-br': "Você pode causar 30 de danos adicionais. Se você fizer isso, este Pokémon ficará Adormecido.",
				'de-de': "Du kannst mit diesem Angriff 30 weitere Schadenspunkte zufügen. Wenn du das machst, schläft dieses Pokémon jetzt."
			},
			damage: "60+",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		'en-us': "It busily makes its nest with stacks of branches and roots it has cut up with its sharp incisors.",
	},

	thirdParty: {
		cardmarket: 281444,
		tcgplayer: 83822
	}
}

export default card
