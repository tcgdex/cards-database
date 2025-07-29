import { Card } from '../../../interfaces'
import Set from '../Guardians Rising'

const card: Card = {
	name: {
		en: "Whiscash",
		fr: "Barbicha",
		es: "Whiscash",
		it: "Whiscash",
		pt: "Whiscash",
		de: "Welsar"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		340,
	],

	hp: 130,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Barboach",
		fr: "Barloche",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Water Pulse",
				fr: "Vibraqua",
				es: "Hidropulso",
				it: "Idropulsar",
				pt: "Pulso d’Água",
				de: "Aquawelle"
			},
			effect: {
				en: "Your opponent’s Active Pokémon is now Asleep.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
				es: "El Pokémon Activo de tu rival pasa a estar Dormido.",
				it: "Il Pokémon attivo del tuo avversario viene addormentato.",
				pt: "O Pokémon Ativo do seu oponente agora está Adormecido.",
				de: "Das Aktive Pokémon deines Gegners schläft jetzt."
			},
			damage: 60,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Landslip",
				fr: "Affaissement de Terrain",
				es: "Deslizamiento",
				it: "Franamento",
				pt: "Deslize",
				de: "Erdsturz"
			},
			effect: {
				en: "Discard the top 3 cards of your deck. This attack does 100 damage for each Energy card you discarded in this way.",
				fr: "Défaussez les 3 cartes du dessus de votre deck. Cette attaque inflige 100 dégâts pour chaque carte Énergie défaussée de cette façon.",
				es: "Descarta las 3 primeras cartas de tu baraja. Este ataque hace 100 puntos de daño por cada carta de Energía descartada de esta manera.",
				it: "Scarta le prime tre carte del tuo mazzo. Questo attacco infligge 100 danni per ogni carta Energia che hai scartato in questo modo.",
				pt: "Descarte as 3 primeiras cartas do seu baralho. Este ataque causa 100 pontos de dano para cada carta de Energia descartada desta forma.",
				de: "Lege die obersten 3 Karten deines Decks auf deinen Ablagestapel. Diese Attacke fügt 100 Schadenspunkte mal der Anzahl der auf diese Weise auf deinen Ablagestapel gelegten Energiekarten zu."
			},
			damage: "100×",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 3,

	thirdParty: {
		cardmarket: 297532
	}
}

export default card
