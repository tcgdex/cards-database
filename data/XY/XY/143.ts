import { Card } from '../../../interfaces'
import Set from '../XY'

const card: Card = {
	name: {
		en: "Emolga EX",
		fr: "Emolga EX",
		es: "Emolga EX",
		it: "Emolga EX",
		pt: "Emolga EX",
		de: "Emolga EX"
	},

	illustrator: "Ryo Ueda",
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
				en: "Energy Glide",
				fr: "Glisse-Énergie",
				es: "Planeo de Energía",
				it: "Energialiante",
				pt: "Planeio de Energia",
				de: "Energiefluss"
			},
			effect: {
				en: "Search your deck for a Lightning Energy card and attach it to this Pokémon. Shuffle your deck afterward. If you attached Energy in this way, switch this Pokémon with 1 of your Benched Pokémon.",
				fr: "Cherchez une carte Énergie Lightning dans votre deck et attachez-la à ce Pokémon. Mélangez ensuite votre deck. Si vous avez attaché de l'Énergie de cette façon, échangez ce Pokémon avec l'un de vos Pokémon de Banc.",
				es: "Busca en tu baraja 1 carta de Energía Lightning y únela a este Pokémon. Baraja las cartas de tu baraja después. Si has unido Energía de esta manera, cambia este Pokémon por 1 de tus Pokémon en Banca.",
				it: "Cerca nel tuo mazzo una carta Energia Lightning e assegnala a questo Pokémon. Poi rimischia le carte del tuo mazzo. Se assegni Energia in questo modo, scambia questo Pokémon con uno della tua panchina.",
				pt: "Procure em seu baralho um card de Energia Lightning e ligue-o a este Pokémon. Em seguida, embaralhe seus cards. Se você ligou Energia desta forma, troque este Pokémon por 1 dos seus Pokémon no Banco.",
				de: "Durchsuche dein Deck nach 1 Lightning-Energiekarte und lege sie an dieses Pokémon an. Mische anschließend dein Deck. Falls du auf diese Weise Energie angelegt hast, tausche dieses Pokémon gegen 1 Pokémon auf deiner Bank aus."
			},

		},
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Electron Crush",
				fr: "Électron Écrasant",
				es: "Machaque Electrón",
				it: "Elettrostritolamento",
				pt: "Esmagamento de Elétrons",
				de: "Zerquetschende Elektronen"
			},
			effect: {
				en: "You may discard an Energy attached to this Pokémon. If you do, this attack does 30 more damage.",
				fr: "Vous pouvez défausser une Énergie attachée à ce Pokémon. Dans ce cas, cette attaque inflige 30 dégâts supplémentaires.",
				es: "Puedes descartar 1 Energía unida a este Pokémon. Si lo haces, este ataque hace 30 puntos de daño más.",
				it: "Puoi scartare un'Energia assegnata a questo Pokémon. Se lo fai, questo attacco infligge 30 danni in più.",
				pt: "Você pode descartar uma Energia ligada a este Pokémon. Se fizer isso, esse ataque causará 30 de danos adicionais.",
				de: "Du kannst 1 an dieses Pokémon angelegte Energie auf deinen Ablagestapel legen. Wenn du das machst, fügt dieser Angriff 30 weitere Schadenspunkte zu."
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
		tcgplayer: 85196
	}
}

export default card
