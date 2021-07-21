import { Card } from '../../../interfaces'
import Set from '../Crimson Invasion'

const card: Card = {
	name: {
		en: "Alolan Marowak",
		fr: "Ossatueur d’Alola",
		es: "Marowak de Alola",
		it: "Marowak di Alola",
		pt: "Marowak de Alola",
		de: "Alola-Knogga"
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
		en: "Cubone",
		fr: "Osselait",
	},
	stage: "Stage1",


	attacks: [
		{

			name: {
				en: "Dance of Flames",
				fr: "Flammes Dansantes",
				es: "Baile de Llamas",
				it: "Danzafiamma",
				pt: "Dança das Chamas",
				de: "Tanz der Flammen"
			},
			effect: {
				en: "For each Energy attached to your opponent’s Pokémon, attach a Fire Energy card from your discard pile to your Pokémon in any way you like.",
				fr: "Pour chaque Énergie attachée au Pokémon de votre adversaire, attachez une carte Énergie Fire de votre pile de défausse à vos Pokémon de la manière que vous voulez.",
				es: "Por cada Energía unida a los Pokémon de tu rival, une 1 carta de Energía Fire de tu pila de descartes a tus Pokémon de la manera que desees.",
				it: "Per ogni Energia assegnata ai Pokémon del tuo avversario, assegna a piacimento ai tuoi Pokémon una carta Energia Fire dalla tua pila degli scarti.",
				pt: "Para cada Energia ligada aos Pokémon do seu oponente, ligue 1 carta de Energia Fire da sua pilha de descarte aos seus Pokémon como desejar.",
				de: "Lege für jede an die Pokémon deines Gegners angelegte Energie 1 Fire-Energiekarte aus deinem Ablagestapel beliebig an deine Pokémon an."
			},

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				en: "Burning Bonemerang",
				fr: "Osmerang Enflammé",
				es: "Huesomerang Ardiente",
				it: "Ossomerang Ardente",
				pt: "Ossomerangue Ardente",
				de: "Brennender Knochmerang"
			},
			effect: {
				en: "Flip 2 coins. This attack does 70 damage for each heads. If either of them is heads, your opponent’s Active Pokémon is now Burned.",
				fr: "Lancez 2 pièces. Cette attaque inflige 70 dégâts multipliés par le nombre de côtés face. Si vous obtenez au moins un côté face, le Pokémon Actif de votre adversaire est maintenant Brûlé.",
				es: "Lanza 2 monedas. Este ataque hace 70 puntos de daño por cada cara. Si sale cara en alguna de ellas, el Pokémon Activo de tu rival pasa a estar Quemado.",
				it: "Lancia due volte una moneta. Questo attacco infligge 70 danni ogni volta che esce testa. Se esce almeno una volta testa, il Pokémon attivo del tuo avversario viene bruciato.",
				pt: "Jogue 2 moedas. Este ataque causa 70 pontos de dano para cada cara. Se qualquer uma delas sair cara, o Pokémon Ativo do seu oponente será Queimado.",
				de: "Wirf 2 Münzen. Diese Attacke fügt 70 Schadenspunkte pro Kopf zu. Wenn eine oder beide Münzen Kopf zeigen, ist das Aktive Pokémon deines Gegners jetzt verbrannt."
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



}

export default card
