import { Card } from 'models/database/card'
import Set from '../Crimson Invasion'

const card: Card = {
	name: {
		'en-us': "Alolan Marowak",
		'fr-fr': "Ossatueur d’Alola",
		'es-es': "Marowak de Alola",
		'it-it': "Marowak di Alola",
		'pt-br': "Marowak de Alola",
		'de-de': "Alola-Knogga"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		105,
	],

	hp: 100,

	types: [
		"Fire",
	],

	evolveFrom: {
		'en-us': "Cubone",
		'fr-fr': "Osselait",
	},

	stage: "Stage1",

	attacks: [
		{

			name: {
				'en-us': "Dance of Flames",
				'fr-fr': "Flammes Dansantes",
				'es-es': "Baile de Llamas",
				'it-it': "Danzafiamma",
				'pt-br': "Dança das Chamas",
				'de-de': "Tanz der Flammen"
			},
			effect: {
				'en-us': "For each Energy attached to your opponent’s Pokémon, attach a Fire Energy card from your discard pile to your Pokémon in any way you like.",
				'fr-fr': "Pour chaque Énergie attachée au Pokémon de votre adversaire, attachez une carte Énergie Fire de votre pile de défausse à vos Pokémon de la manière que vous voulez.",
				'es-es': "Por cada Energía unida a los Pokémon de tu rival, une 1 carta de Energía Fire de tu pila de descartes a tus Pokémon de la manera que desees.",
				'it-it': "Per ogni Energia assegnata ai Pokémon del tuo avversario, assegna a piacimento ai tuoi Pokémon una carta Energia Fire dalla tua pila degli scarti.",
				'pt-br': "Para cada Energia ligada aos Pokémon do seu oponente, ligue 1 carta de Energia Fire da sua pilha de descarte aos seus Pokémon como desejar.",
				'de-de': "Lege für jede an die Pokémon deines Gegners angelegte Energie 1 Fire-Energiekarte aus deinem Ablagestapel beliebig an deine Pokémon an."
			},

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Burning Bonemerang",
				'fr-fr': "Osmerang Enflammé",
				'es-es': "Huesomerang Ardiente",
				'it-it': "Ossomerang Ardente",
				'pt-br': "Ossomerangue Ardente",
				'de-de': "Brennender Knochmerang"
			},
			effect: {
				'en-us': "Flip 2 coins. This attack does 70 damage for each heads. If either of them is heads, your opponent’s Active Pokémon is now Burned.",
				'fr-fr': "Lancez 2 pièces. Cette attaque inflige 70 dégâts multipliés par le nombre de côtés face. Si vous obtenez au moins un côté face, le Pokémon Actif de votre adversaire est maintenant Brûlé.",
				'es-es': "Lanza 2 monedas. Este ataque hace 70 puntos de daño por cada cara. Si sale cara en alguna de ellas, el Pokémon Activo de tu rival pasa a estar Quemado.",
				'it-it': "Lancia due volte una moneta. Questo attacco infligge 70 danni ogni volta che esce testa. Se esce almeno una volta testa, il Pokémon attivo del tuo avversario viene bruciato.",
				'pt-br': "Jogue 2 moedas. Este ataque causa 70 pontos de dano para cada cara. Se qualquer uma delas sair cara, o Pokémon Ativo do seu oponente será Queimado.",
				'de-de': "Wirf 2 Münzen. Diese Attacke fügt 70 Schadenspunkte pro Kopf zu. Wenn eine oder beide Münzen Kopf zeigen, ist das Aktive Pokémon deines Gegners jetzt verbrannt."
			},
			damage: "70×",

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "The bones it possesses were once its mother's. Its mother's regrets have become like a vengeful spirit protecting this Pokémon.",
	},

	thirdParty: {
		cardmarket: 311862,
		tcgplayer: 149033
	}
}

export default card
