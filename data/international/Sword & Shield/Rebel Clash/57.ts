import { Card } from 'models/database/card'
import Set from '../Rebel Clash'

const card: Card = {
	dexId: [101],

	name: {
		'en-us': "Electrode",
		'fr-fr': "Électrode",
		'es-es': "Electrode",
		'it-it': "Electrode",
		'pt-br': "Electrode",
		'de-de': "Lektrobal"
	},

	illustrator: "otumami",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	evolveFrom: {
		'en-us': "Voltorb",
		'fr-fr': "Voltorbe",
		'es-es': "Voltorb",
		'it-it': "Voltorb",
		'pt-br': "Voltorb",
		'de-de': "Voltobal"
	},

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Orb Collector",
				'fr-fr': "Collectionneur d'Orbes",
				'es-es': "Coleccionista de Orbes",
				'it-it': "Collezionista di Sfere",
				'pt-br': "Colecionador de Esferas",
				'de-de': "Orbsammler"
			},
			effect: {
				'en-us': "Search your deck for up to 3 Energy cards, reveal them, and put them into your hand. Then, shuffle your deck.",
				'fr-fr': "Cherchez dans votre deck jusqu'à 3 cartes Énergie, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
				'es-es': "Busca en tu baraja hasta 3 cartas de Energía, enséñalas y ponlas en tu mano. Después, baraja las cartas de tu baraja.",
				'it-it': "Cerca nel tuo mazzo fino a tre carte Energia, mostrale e aggiungile alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
				'pt-br': "Procure por até 3 cartas de Energia no seu baralho, revele-as e coloque-as na sua mão. Em seguida, embaralhe o seu baralho.",
				'de-de': "Durchsuche dein Deck nach bis zu 3 Energiekarten, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck."
			},

		},
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				'en-us': "Rolling Attack",
				'fr-fr': "Attaque Qui Roule",
				'es-es': "Ataque Giro",
				'it-it': "Attacco Rotolante",
				'pt-br': "Golpe Rolador",
				'de-de': "Rollender Angriff"
			},

			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	hp: 90,
	types: ["Lightning"],
	regulationMark: "D",
	retreat: 0,


	stage: "Stage1",

	description: {
		'en-us': "It stores an overflowing amount of electric energy inside its body. Even a small shock makes it explode."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 457718,
				tcgplayer: 213138
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 457718,
				tcgplayer: 213138
			}
		},
	],
}

export default card
