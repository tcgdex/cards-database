import { Card } from '../../../interfaces'
import Set from '../Ancient Origins'

const card: Card = {
	name: {
		en: "Golurk",
		fr: "Golemastoc",
		es: "Golurk",
		it: "Golurk",
		pt: "Golurk",
		de: "Golgantes"
	},
	illustrator: "Suwama Chiaki",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		623,
	],
	hp: 130,
	types: [
		"Fighting",
	],
	evolveFrom: {
		en: "Golett",
		fr: "Gringolem",
		es: "Golett",
		it: "Golett",
		pt: "Golett",
		de: "Golbit"
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Dig Out",
				fr: "Excavation",
				es: "Cavar",
				it: "Scavata",
				pt: "Escavar",
				de: "Freischaufeln"
			},
			effect: {
				en: "Discard the top card of your deck. If that card is a Fighting Energy card, attach it to this Pokémon.",
				fr: "Défaussez la carte du dessus de votre deck. Si c'est une carte Énergie Fighting, attachez-la à ce Pokémon.",
				es: "Descarta la primera carta de tu baraja. Si es una carta de Energía Fighting, únela a este Pokémon.",
				it: "Scarta la carta in cima al tuo mazzo. Se è una carta Energia Fighting, assegnala a questo Pokémon.",
				pt: "Descarte o card de cima do seu baralho. Se este card for um card de Energia Fighting, ligue-o a este Pokémon.",
				de: "Lege die oberste Karte deines Decks auf deinen Ablagestapel. Handelt es sich um eine Fighting-Energiekarte, lege sie an dieses Pokémon an."
			},
			damage: 20,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Double Lariat",
				fr: "Double Lasso",
				es: "Doble Lazo",
				it: "Doppio Lazzo",
				pt: "Laço Duplo",
				de: "Doppel-Lasso"
			},
			effect: {
				en: "Flip 2 coins. This attack does 90 damage times the number of heads.",
				fr: "Lancez 2 pièces. Cette attaque inflige 90 dégâts multipliés par le nombre de côtés face.",
				es: "Lanza 2 monedas. Este ataque hace 90 puntos de daño por cada cara.",
				it: "Lancia due volte una moneta. Questo attacco infligge 90 danni ogni volta che esce testa.",
				pt: "Jogue 2 moedas. Este ataque causa 90 de danos vezes o número de caras.",
				de: "Wirf 2 Münzen. Dieser Angriff fügt 90 Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "90×",

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 4,



}

export default card
