import { Card } from '../../../interfaces'
import Set from '../Team Up'

const card: Card = {
	name: {
		en: "Moltres",
		fr: "Sulfura",
		es: "Moltres",
		it: "Moltres",
		pt: "Moltres",
		de: "Lavados"
	},
	illustrator: "Shin Nagasawa",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		146,
	],
	hp: 120,
	types: [
		"Fire",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Top Burner",
				fr: "Super Pyro",
				es: "Cima Ardiente",
				it: "Cimardente",
				pt: "Superqueimador",
				de: "Top-Burner"
			},
			effect: {
				en: "Discard all Fire Energy from this Pokémon. Then, discard a card from the top of your opponent’s deck for each Energy you discarded in this way.",
				fr: "Défaussez toute l’Énergie Fire de ce Pokémon. Ensuite, défaussez une carte du dessus du deck de votre adversaire pour chaque Énergie défaussée de cette façon.",
				es: "Descarta todas las Energías Fire de este Pokémon. Después, descarta 1 carta de la parte superior de la baraja de tu rival por cada Energía que hayas descartado de esta manera.",
				it: "Scarta tutte le Energie Fire assegnate a questo Pokémon. Poi scarta una carta dalla cima del mazzo del tuo avversario per ogni Energia che hai scartato in questo modo.",
				pt: "Descarte todas as Energias Fire deste Pokémon. Em seguida, descarte a primeira carta do baralho do seu oponente para cada Energia descartada desta forma.",
				de: "Lege alle Fire-Energien von diesem Pokémon auf deinen Ablagestapel. Lege anschließend für jede auf diese Weise auf deinen Ablagestapel gelegte Energie 1 Karte vom Deck deines Gegners auf seinen Ablagestapel."
			},

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				en: "Fire Spin",
				fr: "Danse Flamme",
				es: "Giro Fuego",
				it: "Turbofuoco",
				pt: "Chama Furacão",
				de: "Feuerwirbel"
			},
			effect: {
				en: "Discard 3 Energy from this Pokémon.",
				fr: "Défaussez 3 Énergies de ce Pokémon.",
				es: "Descarta 3 Energías de este Pokémon.",
				it: "Scarta tre Energie assegnate a questo Pokémon.",
				pt: "Descarte 3 Energias deste Pokémon.",
				de: "Lege 3 Energien von diesem Pokémon auf deinen Ablagestapel."
			},
			damage: 180,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],
	retreat: 2,



}

export default card
