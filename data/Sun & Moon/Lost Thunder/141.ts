import { Card } from '../../../interfaces'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		en: "Gardevoir",
		fr: "Gardevoir",
		es: "Gardevoir",
		it: "Gardevoir",
		pt: "Gardevoir",
		de: "Guardevoir"
	},

	illustrator: "Ryota Murayama",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		282,
	],

	hp: 130,

	types: [
		"Fairy",
	],

	evolveFrom: {
		en: "Kirlia",
		fr: "Kirlia",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Fairy",
			],
			name: {
				en: "Brilliant Search",
				fr: "Recherche Brillante",
				es: "Búsqueda Brillante",
				it: "Splendicerca",
				pt: "Busca Brilhante",
				de: "Brillante Suche"
			},
			effect: {
				en: "Search your deck for up to 3 cards and put them into your hand. Then, shuffle your deck.",
				fr: "Cherchez jusqu’à 3 cartes dans votre deck et ajoutez-les à votre main. Mélangez ensuite votre deck.",
				es: "Busca en tu baraja hasta 3 cartas y ponlas en tu mano. Después, baraja las cartas de tu baraja.",
				it: "Cerca nel tuo mazzo fino a tre carte e aggiungile alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
				pt: "Procure por até 3 cartas no seu baralho e coloque-as na sua mão. Em seguida, embaralhe o seu baralho.",
				de: "Durchsuche dein Deck nach bis zu 3 Karten und nimm sie auf deine Hand. Mische anschließend dein Deck."
			},

		},
		{
			cost: [
				"Fairy",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Sensitive Ray",
				fr: "Rayon Sensible",
				es: "Rayo Sensible",
				it: "Raggio Sensibile",
				pt: "Raio Sensível",
				de: "Feinfühliger Strahl"
			},
			effect: {
				en: "If you played a Supporter card from your hand during this turn, this attack does 90 more damage.",
				fr: "Si vous avez joué une carte Supporter de votre main pendant ce tour, cette attaque inflige 90 dégâts supplémentaires.",
				es: "Si has jugado 1 carta de Partidario de tu mano durante este turno, este ataque hace 90 puntos de daño más.",
				it: "Se hai giocato una carta Aiuto dalla tua mano durante questo turno, questo attacco infligge 90 danni in più.",
				pt: "Se você jogou 1 carta de Apoiador da sua mão durante esta vez de jogar, este ataque causará 90 pontos de dano a mais.",
				de: "Wenn du eine Unterstützerkarte während dieses Zuges aus deiner Hand gespielt hast, fügt diese Attacke 90 Schadenspunkte mehr zu."
			},
			damage: "70+",

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Darkness",
			value: "-20"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 365778,
		tcgplayer: 178960
	}
}

export default card
