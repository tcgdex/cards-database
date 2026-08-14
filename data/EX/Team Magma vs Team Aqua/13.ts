import { Card } from '../../../interfaces'
import Set from '../Team Magma vs Team Aqua'

const card: Card = {
	name: {
		en: "Raichu",
		fr: "Raichu",
		de: "Raichu"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [26],

	hp: 80,

	types: [
		"Lightning"
	],

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Spark",
				fr: "Étincelle",
				de: "Funkenregen"
			},
			effect: {
				en: "Does 10 damage to 2 of your opponent's Benched Pokémon (1 if there is only 1). (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Inflige 10 dégâts à 2 des Pokémon de Banc de votre adversaire (ou 1 s'il n'y en a qu'1). (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
				de: "Fügt 2 gegnerischen Pokémon auf der Bank (einem, falls nur 1 vorhanden) 10 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},
			damage: 20,

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Kerzap",
				fr: "Décharge électrique",
				de: "Kerzap"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 40 damage plus 40 more damage to the Defending Pokémon and discard all Lightning Energy cards attached to Raichu.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 40 dégâts plus 40 dégâts supplémentaires au Pokémon Défenseur et défausse toutes les cartes Énergie  attachées à Raichu.",
				de: "Wirf 1 Münze. Bei „Kopf“ fügt dieser Angriff 40 Schadenspunkte plus 40 weitere Schadenspunkte zu und du legst alle an Raichu angelegten {L}-Energien auf deinen Ablagestapel."
			},
			damage: "40+",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],


	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 275790,
				tcgplayer: 88506
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275790,
				tcgplayer: 88506
			}
		},
	],

}

export default card
