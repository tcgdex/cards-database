import { Card } from 'models/database/card'
import Set from '../Primal Clash'

const card: Card = {
	name: {
		'en-us': "Huntail",
		'fr-fr': "Serpang",
		'es-es': "Huntail",
		'it-it': "Huntail",
		'pt-br': "Huntail",
		'de-de': "Aalabyss"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		367,
	],

	hp: 100,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Clamperl",
		'fr-fr': "Coquiperl",
		'es-es': "Clamperl",
		'it-it': "Clamperl",
		'pt-br': "Clamperl",
		'de-de': "Perlu"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Powerful Storm",
				'fr-fr': "Tempête Puissante",
				'es-es': "Tormenta Recia",
				'it-it': "Tempestona",
				'pt-br': "Tempestade Poderosa",
				'de-de': "Mächtiger Sturm"
			},
			effect: {
				'en-us': "This attack does 20 damage times the amount of Energy attached to all of your Pokémon.",
				'fr-fr': "Cette attaque inflige 20 dégâts multipliés par le nombre d'Énergies attachées à tous vos Pokémon.",
				'es-es': "Este ataque hace 20 puntos de daño por cada Energía unida a todos tus Pokémon.",
				'it-it': "Questo attacco infligge 20 danni per ogni Energia assegnata ai tuoi Pokémon.",
				'pt-br': "Esse ataque causa 20 de danos vezes a quantidade de Energia ligada a todos os seus Pokémon.",
				'de-de': "Dieser Angriff fügt 20 Schadenspunkte mal der Anzahl der an all deine Pokémon angelegten Energien zu."
			},
			damage: "20×",

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Crunch",
				'fr-fr': "Mâchouille",
				'es-es': "Triturar",
				'it-it': "Sgranocchio",
				'pt-br': "Mastigada",
				'de-de': "Knirscher"
			},
			effect: {
				'en-us': "Flip a coin. If heads, discard an Energy attached to your opponent's Active Pokémon.",
				'fr-fr': "Lancez une pièce. Si c'est face, défaussez une Énergie attachée au Pokémon Actif de votre adversaire.",
				'es-es': "Lanza 1 moneda. Si sale cara, descarta 1 Energía unida al Pokémon Activo de tu rival.",
				'it-it': "Lancia una moneta. Se esce testa, scarta un'Energia assegnata al Pokémon attivo del tuo avversario.",
				'pt-br': "Jogue uma moeda. Se sair cara, descarte uma Energia ligada ao Pokémon Ativo do seu oponente.",
				'de-de': "Wirf 1 Münze. Lege bei \"Kopf\" 1 an das Aktive Pokémon deines Gegners angelegte Energie auf den Ablagestapel deines Gegners."
			},
			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It lives deep in the sea. With a tail shaped like a small fish, it attracts unsuspecting prey.",
	},

	thirdParty: {
		cardmarket: 273581,
		tcgplayer: 95948
	}
}

export default card
