import { Card } from 'models/database/card'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		'en-us': "Alolan Raticate GX",
		'fr-fr': "Rattatac d’Alola GX",
		'es-es': "Raticate de Alola GX",
		'it-it': "Raticate di Alola GX",
		'pt-br': "Raticate de Alola GX",
		'de-de': "Alola-Rattikarl GX"
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		20,
	],

	hp: 200,

	types: [
		"Darkness",
	],

	evolveFrom: {
		'en-us': "Alolan Rattata",
		'fr-fr': "Rattata d’Alola",
	},

	suffix: "GX",

	attacks: [
		{

			name: {
				'en-us': "Chuck Away",
				'fr-fr': "Bazarder",
				'es-es': "Prescindir",
				'it-it': "Lancio Mirato",
				'pt-br': "Jogar Fora",
				'de-de': "Wegwerfen"
			},
			effect: {
				'en-us': "Discard up to 2 cards from your hand. This attack does 40 damage for each card you discarded in this way.",
				'fr-fr': "Défaussez jusqu’à 2 cartes de votre main. Cette attaque inflige 40 dégâts pour chaque carte défaussée de cette façon.",
				'es-es': "Descarta hasta 2 cartas de tu mano. Este ataque hace 40 puntos de daño por cada carta que hayas descartado de esta manera.",
				'it-it': "Scarta fino a due carte che hai in mano. Questo attacco infligge 40 danni per ogni carta che hai scartato in questo modo.",
				'pt-br': "Descarte até 2 cartas da sua mão. Este ataque causa 40 pontos de dano para cada carta descartada desta forma.",
				'de-de': "Lege bis zu 2 Karten aus deiner Hand auf deinen Ablagestapel. Diese Attacke fügt 40 Schadenspunkte mal der Anzahl der auf diese Weise auf deinen Ablagestapel gelegten Karten zu."
			},
			damage: "40×",

		},
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Hyper Fang",
				'fr-fr': "Croc de Mort",
				'es-es': "Hipercolmillo",
				'it-it': "Iperzanna",
				'pt-br': "Hiperpresa",
				'de-de': "Hyperzahn"
			},
			effect: {
				'en-us': "Flip a coin. If tails, this attack does nothing.",
				'fr-fr': "Lancez une pièce. Si c’est pile, cette attaque ne fait rien.",
				'es-es': "Lanza 1 moneda. Si sale cruz, este ataque no hace nada.",
				'it-it': "Lancia una moneta. Se esce croce, questo attacco non ha effetto.",
				'pt-br': "Jogue 1 moeda. Se sair coroa, este ataque não fará nada.",
				'de-de': "Wirf 1 Münze. Bei Zahl hat diese Attacke keine Auswirkungen."
			},
			damage: 150,

		},
		{

			name: {
				'en-us': "Item Maniac GX",
				'fr-fr': "Fou d’Objets GX",
				'es-es': "Maníaco de Objetos GX",
				'it-it': "Maniaco degli Strumenti-GX",
				'pt-br': "Maníaco do Item GX",
				'de-de': "Item-Fanatiker GX"
			},
			effect: {
				'en-us': "Search your deck for up to 6 Item cards, reveal them, and put them into your hand. Then, shuffle your deck. (You can’t use more than 1 GX attack in a game.)",
				'fr-fr': "Cherchez jusqu’à 6 cartes Objet dans votre deck, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				'es-es': "Busca en tu baraja hasta 6 cartas de Objeto, enséñalas y ponlas en tu mano. Después, baraja las cartas de tu baraja. (No puedes usar más de 1 ataque GX en una partida).",
				'it-it': "Cerca nel tuo mazzo fino a sei carte Strumento, mostrale e aggiungile alle carte che hai in mano. Poi rimischia le carte del tuo mazzo. Non puoi usare più di un attacco GX a partita.",
				'pt-br': "Procure por até 6 cartas de Item no seu baralho, revele-as e coloque-as na sua mão. Em seguida, embaralhe o seu baralho (você não pode usar mais de 1 ataque GX por partida).",
				'de-de': "Durchsuche dein Deck nach bis zu 6 Itemkarten, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
			},

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 3,

	thirdParty: {
		cardmarket: 360924,
		tcgplayer: 170907
	}
}

export default card
