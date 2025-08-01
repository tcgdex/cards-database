import { Card } from '../../../interfaces'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		en: "Alolan Raticate GX",
		fr: "Rattatac d’Alola GX",
		es: "Raticate de Alola GX",
		it: "Raticate di Alola GX",
		pt: "Raticate de Alola GX",
		de: "Alola-Rattikarl GX"
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
		en: "Alolan Rattata",
		fr: "Rattata d’Alola",
	},

	suffix: "GX",

	attacks: [
		{

			name: {
				en: "Chuck Away",
				fr: "Bazarder",
				es: "Prescindir",
				it: "Lancio Mirato",
				pt: "Jogar Fora",
				de: "Wegwerfen"
			},
			effect: {
				en: "Discard up to 2 cards from your hand. This attack does 40 damage for each card you discarded in this way.",
				fr: "Défaussez jusqu’à 2 cartes de votre main. Cette attaque inflige 40 dégâts pour chaque carte défaussée de cette façon.",
				es: "Descarta hasta 2 cartas de tu mano. Este ataque hace 40 puntos de daño por cada carta que hayas descartado de esta manera.",
				it: "Scarta fino a due carte che hai in mano. Questo attacco infligge 40 danni per ogni carta che hai scartato in questo modo.",
				pt: "Descarte até 2 cartas da sua mão. Este ataque causa 40 pontos de dano para cada carta descartada desta forma.",
				de: "Lege bis zu 2 Karten aus deiner Hand auf deinen Ablagestapel. Diese Attacke fügt 40 Schadenspunkte mal der Anzahl der auf diese Weise auf deinen Ablagestapel gelegten Karten zu."
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
				en: "Hyper Fang",
				fr: "Croc de Mort",
				es: "Hipercolmillo",
				it: "Iperzanna",
				pt: "Hiperpresa",
				de: "Hyperzahn"
			},
			effect: {
				en: "Flip a coin. If tails, this attack does nothing.",
				fr: "Lancez une pièce. Si c’est pile, cette attaque ne fait rien.",
				es: "Lanza 1 moneda. Si sale cruz, este ataque no hace nada.",
				it: "Lancia una moneta. Se esce croce, questo attacco non ha effetto.",
				pt: "Jogue 1 moeda. Se sair coroa, este ataque não fará nada.",
				de: "Wirf 1 Münze. Bei Zahl hat diese Attacke keine Auswirkungen."
			},
			damage: 150,

		},
		{

			name: {
				en: "Item Maniac GX",
				fr: "Fou d’Objets GX",
				es: "Maníaco de Objetos GX",
				it: "Maniaco degli Strumenti-GX",
				pt: "Maníaco do Item GX",
				de: "Item-Fanatiker GX"
			},
			effect: {
				en: "Search your deck for up to 6 Item cards, reveal them, and put them into your hand. Then, shuffle your deck. (You can’t use more than 1 GX attack in a game.)",
				fr: "Cherchez jusqu’à 6 cartes Objet dans votre deck, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				es: "Busca en tu baraja hasta 6 cartas de Objeto, enséñalas y ponlas en tu mano. Después, baraja las cartas de tu baraja. (No puedes usar más de 1 ataque GX en una partida).",
				it: "Cerca nel tuo mazzo fino a sei carte Strumento, mostrale e aggiungile alle carte che hai in mano. Poi rimischia le carte del tuo mazzo. Non puoi usare più di un attacco GX a partita.",
				pt: "Procure por até 6 cartas de Item no seu baralho, revele-as e coloque-as na sua mão. Em seguida, embaralhe o seu baralho (você não pode usar mais de 1 ataque GX por partida).",
				de: "Durchsuche dein Deck nach bis zu 6 Itemkarten, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
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
		cardmarket: 360924
	}
}

export default card
