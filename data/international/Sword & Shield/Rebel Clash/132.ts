import { Card } from 'models/database/card'
import Set from '../Rebel Clash'

const card: Card = {
	dexId: [632],

	name: {
		'en-us': "Durant",
		'fr-fr': "Fermite",
		'es-es': "Durant",
		'it-it': "Durant",
		'pt-br': "Durant",
		'de-de': "Fermicula"
	},

	illustrator: "Hideki Ishikawa",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Gathering Food",
				'fr-fr': "Amas de Denrées",
				'es-es': "Acopio de Alimentos",
				'it-it': "Radunacibo",
				'pt-br': "Coletar Comida",
				'de-de': "Futtersuche"
			},
			effect: {
				'en-us': "For each Energy attached to this Pokémon, search your deck for a Trainer card, reveal it, and put it into your hand. Then, shuffle your deck.",
				'fr-fr': "Pour chaque Énergie attachée à ce Pokémon, cherchez dans votre deck une carte Dresseur, montrez-la, puis ajoutez-la à votre main. Mélangez ensuite votre deck.",
				'es-es': "Por cada Energía unida a este Pokémon, busca en tu baraja 1 carta de Entrenador, enséñala y ponla en tu mano. Después, baraja las cartas de tu baraja.",
				'it-it': "Per ogni Energia assegnata a questo Pokémon, cerca nel tuo mazzo una carta Allenatore, mostrala e aggiungila alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
				'pt-br': "Para cada Energia ligada a este Pokémon, procure por 1 carta de Treinador no seu baralho, revele-a e coloque-a na sua mão. Em seguida, embaralhe o seu baralho.",
				'de-de': "Durchsuche für jede an dieses Pokémon angelegte Energie dein Deck nach 1 Trainerkarte, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck."
			},

		},
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Metal Claw",
				'fr-fr': "Griffe Acier",
				'es-es': "Garra Metal",
				'it-it': "Ferrartigli",
				'pt-br': "Garra de Metal",
				'de-de': "Metallklaue"
			},

			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Grass",
			value: "-30"
		},
	],

	retreat: 1,
	hp: 100,
	types: ["Metal"],
	regulationMark: "D",


	stage: "Basic",

	description: {
		'en-us': "They lay their eggs deep inside their nests. When attacked by Heatmor, they retaliate using their massive mandibles."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 458058,
				tcgplayer: 213228
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 458058,
				tcgplayer: 213228
			}
		},
	],
}

export default card
