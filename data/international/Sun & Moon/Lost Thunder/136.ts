import { Card } from 'models/database/card'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		'en-us': "Azumarill",
		'fr-fr': "Azumarill",
		'es-es': "Azumarill",
		'it-it': "Azumarill",
		'pt-br': "Azumarill",
		'de-de': "Azumarill"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		184,
	],

	hp: 100,

	types: [
		"Fairy",
	],

	evolveFrom: {
		'en-us': "Marill",
		'fr-fr': "Marill",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fairy",
			],
			name: {
				'en-us': "Polka-Dot Search",
				'fr-fr': "Quête à Pois",
				'es-es': "Búsqueda Lunares",
				'it-it': "Ricerca a Pois",
				'pt-br': "Busca de Poás",
				'de-de': "Pünktchensuche"
			},
			effect: {
				'en-us': "Look at the top 8 cards of your deck and attach any number of Energy cards you find there to your Pokémon in any way you like. Shuffle the other cards back into your deck.",
				'fr-fr': "Regardez les 8 cartes du dessus de votre deck et attachez le nombre désiré de cartes Énergie que vous y trouvez à vos Pokémon, de la manière que vous voulez. Mélangez les autres cartes avec votre deck.",
				'es-es': "Mira las 8 primeras cartas de tu baraja y une cualquier cantidad de cartas de Energía que encuentres entre ellas a tus Pokémon de la manera que desees. Pon el resto de cartas de nuevo en tu baraja y barájalas todas.",
				'it-it': "Guarda le prime otto carte del tuo mazzo e assegna a piacimento un numero qualsiasi di carte Energia presenti tra esse ai tuoi Pokémon. Poi rimischia le altre carte nel tuo mazzo.",
				'pt-br': "Olhe as 8 primeiras cartas do seu baralho e ligue qualquer número de cartas de Energia que encontrar lá aos seus Pokémon como desejar. Embaralhe as demais cartas de volta no seu baralho.",
				'de-de': "Schau dir die obersten 8 Karten deines Decks an und lege beliebig viele Energiekarten, die du dort findest, beliebig an deine Pokémon an. Mische die anderen Karten zurück in dein Deck."
			},

		},
		{
			cost: [
				"Fairy",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Play Rough",
				'fr-fr': "Câlinerie",
				'es-es': "Carantoña",
				'it-it': "Carineria",
				'pt-br': "Jogo Duro",
				'de-de': "Knuddler"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 30 more damage.",
				'fr-fr': "Lancez une pièce. Si c’est face, cette attaque inflige 30 dégâts supplémentaires.",
				'es-es': "Lanza 1 moneda. Si sale cara, este ataque hace 30 puntos de daño más.",
				'it-it': "Lancia una moneta. Se esce testa, questo attacco infligge 30 danni in più.",
				'pt-br': "Jogue 1 moeda. Se sair cara, este ataque causará 30 pontos de dano a mais.",
				'de-de': "Wirf 1 Münze. Bei Kopf fügt diese Attacke 30 Schadenspunkte mehr zu."
			},
			damage: "60+",

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

	description: {
		'en-us': "The bubble-like pattern on its stomach helps it camouflage itself when it's in the water.",
	},

	thirdParty: {
		cardmarket: 365773,
		tcgplayer: 178955
	}
}

export default card
