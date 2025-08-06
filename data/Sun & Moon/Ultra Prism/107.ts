import { Card } from '../../../interfaces'
import Set from '../Ultra Prism'

const card: Card = {
	name: {
		en: "Lopunny",
		fr: "Lockpin",
		es: "Lopunny",
		it: "Lopunny",
		pt: "Lopunny",
		de: "Schlapor"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		428,
	],

	hp: 90,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Buneary",
		fr: "Laporeille",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Stompy Stomp",
				fr: "Pied-Piétine",
				es: "Pisotonazo",
				it: "Pesto Ripesto",
				pt: "Pisada",
				de: "Hopphopphurra"
			},
			effect: {
				en: "Flip 2 coins. This attack does 40 damage for each heads.",
				fr: "Lancez 2 pièces. Cette attaque inflige 40 dégâts multipliés par le nombre de côtés face.",
				es: "Lanza 2 monedas. Este ataque hace 40 puntos de daño por cada cara.",
				it: "Lancia due volte una moneta. Questo attacco infligge 40 danni ogni volta che esce testa.",
				pt: "Jogue 2 moedas. Este ataque causa 40 pontos de dano para cada cara.",
				de: "Wirf 2 Münzen. Diese Attacke fügt 40 Schadenspunkte pro Kopf zu."
			},
			damage: "40×",

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Happy Turn",
				fr: "Tour de Chance",
				es: "Giro Feliz",
				it: "Svolta Fortunata",
				pt: "Vez Feliz",
				de: "Willkommene Wende"
			},
			effect: {
				en: "You may shuffle this Pokémon and all cards attached to it into your deck.",
				fr: "Vous pouvez mélanger ce Pokémon et toutes les cartes qui lui sont attachées avec votre deck.",
				es: "Puedes poner este Pokémon y todas las cartas unidas a él en tu baraja y barajarlas todas.",
				it: "Puoi rimischiare questo Pokémon e tutte le carte a esso assegnate nel tuo mazzo.",
				pt: "Você pode embaralhar este Pokémon e todas as cartas ligadas a ele no seu baralho.",
				de: "Du kannst dieses Pokémon und alle an es angelegten Karten in dein Deck mischen."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 316033,
		tcgplayer: 157724
	}
}

export default card
