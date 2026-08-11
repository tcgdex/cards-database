import { Card } from 'models/database/card'
import Set from '../Celebrations'

const card: Card = {
	set: Set,


	name: {
		'en-us': "Groudon",
		'fr-fr': "Groudon",
		'es-es': "Groudon",
		'it-it': "Groudon",
		'pt-br': "Groudon",
		'de-de': "Groudon"
	},

	rarity: "Rare",
	category: "Pokemon",
	types: ["Fighting"],
	illustrator: "Ryuta Fuse",
	hp: 130,
	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				'fr-fr': "Rayon Obscur",
			},
			effect: {
				'fr-fr': "Une seule fois lors de votre tour, lorsque vous placez Noctali Star de votre main sur votre Banc, vous pouvez choisir 1 carte de la main de votre adversaire sans regarder et la défausser.",
			},
		},
	],

	attacks: [{
		name: {
			'en-us': "Magma Volcano",
			'fr-fr': "Volcan Magma",
			'es-es': "Volcán Magma",
			'it-it': "Vulcano Magma",
			'pt-br': "Vulcão Magma",
			'de-de': "Magmavulkan"
		},

		effect: {
			'en-us': "Discard the top 5 cards of your deck. This attack does 80 damage for each Energy card you discarded in this way.",
			'fr-fr': "Défaussez les 5 cartes du dessus de votre deck. Cette attaque inflige 80 dégâts pour chaque carte Énergie défaussée de cette façon.",
			'es-es': "Descarta las 5 primeras cartas de tu baraja. Este ataque hace 80 puntos de daño por cada carta de Energía que hayas descartado de esta manera.",
			'it-it': "Scarta le prime cinque carte del tuo mazzo. Questo attacco infligge 80 danni per ogni carta Energia che hai scartato in questo modo.",
			'pt-br': "Descarte as 5 cartas de cima do seu baralho. Este ataque causa 80 pontos de dano para cada carta de Energia descartada desta forma.",
			'de-de': "Lege die obersten 5 Karten deines Decks auf deinen Ablagestapel. Diese Attacke fügt für jede auf diese Weise abgelegte Energiekarte 80 Schadenspunkte zu."
		},

		damage: "80×",
		cost: ["Fighting", "Fighting", "Colorless"]
	}, {
		name: {
			'en-us': "Massive Rend",
			'fr-fr': "Déchirure Massive",
			'es-es': "Corte Masivo",
			'it-it': "Supersquarcio",
			'pt-br': "Laceração Massiva",
			'de-de': "Riesiger Riss"
		},

		damage: 120,
		cost: ["Fighting", "Fighting", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "E",

	description: {
		'en-us': "This legendary Pokémon is said to represent the land. It went to sleep after dueling Kyogre."
	},

	dexId: [383],

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 576762,
				tcgplayer: 250314
			}
		},
	],
}

export default card
