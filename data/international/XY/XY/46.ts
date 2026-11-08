import { Card } from 'models/database/card'
import Set from '../XY'

const card: Card = {
	name: {
		'en-us': "Emolga EX",
		'fr-fr': "Emolga EX",
		'es-es': "Emolga EX",
		'it-it': "Emolga EX",
		'pt-br': "Emolga EX",
		'de-de': "Emolga EX"
	},

	illustrator: "Eske Yoshinob",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		587,
	],

	hp: 110,

	types: [
		"Lightning",
	],

	suffix: "EX",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Energy Glide",
				'fr-fr': "Glisse-Énergie",
				'es-es': "Planeo de Energía",
				'it-it': "Energialiante",
				'pt-br': "Planeio de Energia",
				'de-de': "Energiefluss"
			},
			effect: {
				'en-us': "Search your deck for a Lightning Energy card and attach it to this Pokémon. Shuffle your deck afterward. If you attached Energy in this way, switch this Pokémon with 1 of your Benched Pokémon.",
				'fr-fr': "Cherchez une carte Énergie Lightning dans votre deck et attachez-la à ce Pokémon. Mélangez ensuite votre deck. Si vous avez attaché de l'Énergie de cette façon, échangez ce Pokémon avec l'un de vos Pokémon de Banc.",
				'es-es': "Busca en tu baraja 1 carta de Energía Lightning y únela a este Pokémon. Baraja las cartas de tu baraja después. Si has unido Energía de esta manera, cambia este Pokémon por 1 de tus Pokémon en Banca.",
				'it-it': "Cerca nel tuo mazzo una carta Energia Lightning e assegnala a questo Pokémon. Poi rimischia le carte del tuo mazzo. Se assegni Energia in questo modo, scambia questo Pokémon con uno della tua panchina.",
				'pt-br': "Procure em seu baralho um card de Energia Lightning e ligue-o a este Pokémon. Em seguida, embaralhe seus cards. Se você ligou Energia desta forma, troque este Pokémon por 1 dos seus Pokémon no Banco.",
				'de-de': "Durchsuche dein Deck nach 1 Lightning-Energiekarte und lege sie an dieses Pokémon an. Mische anschließend dein Deck. Falls du auf diese Weise Energie angelegt hast, tausche dieses Pokémon gegen 1 Pokémon auf deiner Bank aus."
			},

		},
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Electron Crush",
				'fr-fr': "Électron Écrasant",
				'es-es': "Machaque Electrón",
				'it-it': "Elettrostritolamento",
				'pt-br': "Esmagamento de Elétrons",
				'de-de': "Zerquetschende Elektronen"
			},
			effect: {
				'en-us': "You may discard an Energy attached to this Pokémon. If you do, this attack does 30 more damage.",
				'fr-fr': "Vous pouvez défausser une Énergie attachée à ce Pokémon. Dans ce cas, cette attaque inflige 30 dégâts supplémentaires.",
				'es-es': "Puedes descartar 1 Energía unida a este Pokémon. Si lo haces, este ataque hace 30 puntos de daño más.",
				'it-it': "Puoi scartare un'Energia assegnata a questo Pokémon. Se lo fai, questo attacco infligge 30 danni in più.",
				'pt-br': "Você pode descartar uma Energia ligada a este Pokémon. Se fizer isso, esse ataque causará 30 de danos adicionais.",
				'de-de': "Du kannst 1 an dieses Pokémon angelegte Energie auf deinen Ablagestapel legen. Wenn du das machst, fügt dieser Angriff 30 weitere Schadenspunkte zu."
			},
			damage: "60+",

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 0,
	stage: "Basic",

	thirdParty: {
		cardmarket: 281383,
		tcgplayer: 85195
	}
}

export default card
