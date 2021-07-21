import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Chandelure",
		fr: "Lugulabre",
		es: "Chandelure",
		it: "Chandelure",
		pt: "Chandelure",
		de: "Skelabra"
	},
	illustrator: "kirisAki",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		609,
	],
	hp: 140,
	types: [
		"Fire",
	],
	evolveFrom: {
		en: "Lampent",
		fr: "Mélancolux",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Spirit Burner",
				fr: "Brûleur d’Esprit",
				es: "Absorbealmas",
				it: "Falò delle Anime",
				pt: "Queimador de Espírito",
				de: "Seelenbrand"
			},
			effect: {
				en: "Discard the top 5 cards of your deck. This attack does 60 more damage for each Pokémon you discarded in this way. Then, put any number of Fire Pokémon you discarded in this way onto your Bench.",
				fr: "Défaussez les 5 cartes du dessus de votre deck. Cette attaque inflige 60 dégâts supplémentaires pour chaque Pokémon défaussé de cette façon. Ensuite, placez autant de Pokémon Fire défaussés de cette façon que vous le voulez sur votre Banc.",
				es: "Descarta las 5 primeras cartas de tu baraja. Este ataque hace 60 puntos de daño más por cada Pokémon que hayas descartado de esta manera. Después, pon cualquier cantidad de Pokémon Fire que hayas descartado de esta manera en tu Banca.",
				it: "Scarta le prime cinque carte del tuo mazzo. Questo attacco infligge 60 danni in più per ogni Pokémon scartato in questo modo. Poi metti un numero qualsiasi di Pokémon Fire che hai scartato in questo modo nella tua panchina.",
				pt: "Descarte as 5 primeiras cartas do seu baralho. Este ataque causa 60 pontos de dano a mais para cada Pokémon descartado desta forma. Em seguida, coloque qualquer número de Pokémon Fire descartado desta forma no seu Banco.",
				de: "Lege die obersten 5 Karten deines Decks auf deinen Ablagestapel. Diese Attacke fügt 60 Schadenspunkte mehr mal der Anzahl der auf diese Weise auf deinen Ablagestapel gelegten Pokémon zu. Lege anschließend beliebig viele der auf diese Weise auf deinen Ablagestapel gelegten Fire-Pokémon auf deine Bank."
			},
			damage: "10+",

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
