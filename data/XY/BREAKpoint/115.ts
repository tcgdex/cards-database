import { Card } from '../../../interfaces'
import Set from '../BREAKpoint'

const card: Card = {
	name: {
		en: "M Gyarados EX",
		fr: "M-Léviator EX",
		es: "M-Gyarados EX",
		it: "M Gyarados EX",
		pt: "M-Gyarados EX",
		de: "M-Garados EX"
	},
	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		130,
	],
	hp: 240,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Gyarados-EX",
		fr: "Léviator-eEX",
	},
	stage: "MEGA",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Blast Geyser",
				fr: "Geyser Explosif",
				es: "Explosión Géiser",
				it: "Geyser Esplosivo",
				pt: "Gêiser Explosivo",
				de: "Gewaltiger Geysir"
			},
			effect: {
				en: "You may do 20 more damage for each Water Energy attached to this Pokémon. If you do, discard the top 2 cards of your deck.",
				fr: "Vous pouvez infliger 20 dégâts supplémentaires pour chaque Énergie Water attachée à ce Pokémon. Dans ce cas, défaussez les 2 cartes du dessus de votre deck.",
				es: "Puedes hacer 20 puntos de daño más por cada Energía Water unida a este Pokémon. Si lo haces, descarta las 2 primeras cartas de tu baraja.",
				it: "Puoi infliggere 20 danni in più per ogni Energia Water assegnata a questo Pokémon. Se lo fai, scarta le prime due carte del tuo mazzo.",
				pt: "Você pode causar 20 de danos adicionais para cada Energia Water ligada a este Pokémon. Se fizer isso, descarte os 2 cards de cima do seu baralho.",
				de: "Du kannst mit diesem Angriff 20 weitere Schadenspunkte für jede an dieses Pokémon angelegte Water-Energie zufügen. Wenn du das machst, lege die obersten 2 Karten deines Decks auf deinen Ablagestapel."
			},
			damage: "120+",

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
