import { Card } from 'models/database/card'
import Set from '../Legends Awakened'

const card: Card = {
	name: {
		'en-us': "Regigigas",
		'fr-fr': "Regigigas",
		'de-de': "Regigigas"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		486,
	],

	hp: 100,

	types: [
		"Colorless",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Recover Mechanism",
				'fr-fr': "Mécanisme de récupération",
				'de-de': "Erhol-Mechanismus"
			},
			effect: {
				'en-us': "When you attach an Energy card from your hand to Regigigas, remove all Special Conditions from Regigigas.",
				'fr-fr': "Lorsque vous attachez une carte Énergie de votre main à Regigigas, retirez-lui tous ses États Spéciaux.",
				'de-de': "Wenn du 1 Energiekarte von deiner Hand an Regigigas anlegst, entferne alle Speziellen Zustände von Regigigas."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Gigaton Punch",
				'fr-fr': "Gigaton poing",
				'de-de': "Gigatonnenhieb"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 60 damage plus 20 more damage and does 20 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 60 dégâts plus 20 dégâts supplémentaires et inflige 20 dégâts à 1 des Pokémon de Banc de votre adversaire. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" fügt dieser Angriff 60 Schadenspunkte plus 20 weitere Schadenspunkte zu und fügt 1 Pokémon auf der Bank deines Gegners 20 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},
			damage: "60+",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 4,

	description: {
		'en-us': "There is an enduring legend that states this Pokémon towed continents with ropes.",
		'fr-fr': "Une légende tenace veut que ce Pokémon ait traîné les continents en les attachant à des cordes."
	},

	thirdParty: {
		cardmarket: 278164,
		tcgplayer: 88662
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		},
		{
			type: "holo",
			foil: "cosmos"
		}
	]
}

export default card
