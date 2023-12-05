import { Card } from '../../../interfaces'
import Set from '../Neo Revelation'

const card: Card = {
	name: {
		en: "Shining Gyarados",
		fr: "Léviator Brillant",
		de: "Schimmerndes Garados"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		130,
	],

	hp: 100,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
				"Fighting",
				"Fighting",
			],
			name: {
				en: "Outrage",
				fr: "Colère",
				de: "Wutanfall"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 30 damage plus 10 more damage for each damage counter on Shining Gyarados. If tails, this attack does nothing.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts plus 10 dégâts supplémentaires pour chaque marqueur de dégâts sur Léviator Brillant. Si c'est pile, cette attaque ne fait rien.",
				de: "Wirf eine Münze. Bei Kopf fügt dieser Angriff 30 Schadenspunkte plus 10 weitere Schadenspunkte mal der Anzahl an Schadensmarken auf dem Schimmernden Garadoszu. Bei Zahl hat dieser Angriff keine Auswirkungen."
			},
			damage: "30+",

		},
		{
			cost: [
				"Water",
				"Water",
				"Fire",
				"Fire",
			],
			name: {
				en: "Devastate",
				fr: "Dévastation",
				de: "Verwüsten"
			},
			effect: {
				en: "Discard 2 Energy cards attached to Shining Gyarados or this attack does nothing. This attack does 10 damage to each of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.) Then, flip a coin. If heads, choose 1 Energy card attached to each of your opponent's Pokémon that has any Energy cards attached to it and discard those Energy cards.",
				fr: "Défaussez 2 cartes Énergie  attachées à Léviator Brillant pour utiliser cette attaque. Elle inflige 10 dégâts à tous les Pokémon du Banc de votre adversaire (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon du Banc.) Puis lancez une pièce. Si c'est face, défaussez une carte Énergie attachée à chaque Pokémon du Banc de votre adversaire ayant au moins une carte Énergie.",
				de: "Lege 2 an Schimmerndes Garados angelegte  -Energiekarte auf deinen Ablagestapel,oder dieser Angriff hat keine Ausirkungen. Dieser Angriff fügt jedem Pokémon auf der gegnerischen Bank 10 Schadenspunkte zu. (Wende Schwäche und Resistenz für Pokémon auf der Bank nicht an.) Wirf dann eine Münze. Wähle bei Kopf bei jedem Pokémon deines Gegners, an das mindestens eine Energiearten angelegt ist, eine dieser Energiekarten und lege sie auf den Ablagestapel deines Gegners."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	description: {
		fr: "Dès qu'il apparaît, il devient violent. Il reste enragé jusqu'à ce que tout ce qui l'entoure soit détruit."
	}
}

export default card
