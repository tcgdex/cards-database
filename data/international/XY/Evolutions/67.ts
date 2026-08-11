import { Card } from 'models/database/card'
import Set from '../Evolutions'

const card: Card = {
	name: {
		'en-us': "Raticate",
		'fr-fr': "Rattatac",
		'es-es': "Raticate",
		'it-it': "Raticate",
		'pt-br': "Raticate",
		'de-de': "Rattikarl"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		20,
	],

	hp: 60,

	types: [
		"Colorless",
	],

	evolveFrom: {
		'en-us': "Rattata",
		'fr-fr': "Rattata",
		'es-es': "Rattata",
		'it-it': "Rattata",
		'pt-br': "Rattata",
		'de-de': "Rattfratz"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
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
				'en-us': "Discard an Energy attached to your opponent's Active Pokémon.",
				'fr-fr': "Défaussez une Énergie attachée au Pokémon Actif de votre adversaire.",
				'es-es': "Descarta 1 Energía unida al Pokémon Activo de tu rival.",
				'it-it': "Scarta un'Energia assegnata al Pokémon attivo del tuo avversario.",
				'pt-br': "Descarte uma Energia ligada ao Pokémon Ativo do seu oponente.",
				'de-de': "Lege 1 an das Aktive Pokémon deines Gegners angelegte Energie auf den Ablagestapel deines Gegners."
			},
			damage: 10,

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Shadowy Bite",
				'fr-fr': "Morsure d'Ombre",
				'es-es': "Mordisco Sombrío",
				'it-it': "Morso Oscuro",
				'pt-br': "Mordida das Trevas",
				'de-de': "Schattenbiss"
			},
			effect: {
				'en-us': "This attack does 60 damage times the number of Special Energy cards in your opponent's discard pile.",
				'fr-fr': "Cette attaque inflige 60 dégâts multipliés par le nombre de cartes Énergie spéciale dans la pile de défausse de votre adversaire.",
				'es-es': "Este ataque hace 60 puntos de daño por cada carta de Energía Especial en la pila de descartes de tu rival.",
				'it-it': "Questo attacco infligge 60 danni per ogni carta Energia speciale presente nella pila degli scarti del tuo avversario.",
				'pt-br': "Este ataque causa 60 de danos vezes o número de cards de Energia Especial na pilha de descarte do seu oponente.",
				'de-de': "Dieser Angriff fügt 60 Schadenspunkte mal der Anzahl der Spezial-Energiekarten im Ablagestapel deines Gegners zu."
			},
			damage: "60×",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Its rear feet have three toes each. They are webbed, enabling it to swim across rivers.",
	},

	thirdParty: {
		cardmarket: 293420,
		tcgplayer: 124080
	}
}

export default card
