import { Card } from 'models/database/card'
import Set from '../Great Encounters'

const card: Card = {
	name: {
		'en-us': "Huntail",
		'fr-fr': "Serpang",
		'de-de': "Aalabyss"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		367,
	],

	hp: 90,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Clamperl",
		'fr-fr': "Coquiperl",
	},

	stage: "Stage1",

	attacks: [
		{

			name: {
				'en-us': "Scary Face",
				'fr-fr': "Grimace",
				'de-de': "Grimasse"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon can't attack or retreat during your opponent's next turn.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur ne peut pas attaquer ou battre en retraite lors du prochain tour de votre adversaire.",
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" kann das Verteidigende Pokémon im nächsten Zug deines Gegners weder angreifen noch sich zurückziehen."
			},

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Threaten and Drop",
				'fr-fr': "Menacer et lâcher",
				'de-de': "Bedrohen und Abwerfen"
			},
			effect: {
				'en-us': "If Huntail has any Darkness Energy attached to it, this attack does 30 damage plus 20 more damage and discard a Special Energy card, if any, attached to the Defending Pokémon.",
				'fr-fr': "Si Serpang possède de l'Énergie Darkness, cette attaque inflige 30 dégâts plus 20 dégâts supplémentaires. Défaussez une carte Énergie spéciale attachée au Pokémon Défenseur, s'il en a.",
				'de-de': "Wenn an Aalabyss mindestens 1 -Energie angelegt ist, fügt dieser Angriff 30 Schadenspunkte plus 20 weitere Schadenspunkte zu und lege, falls am Verteidigenden Pokémon eine Spezialenergiekarte angelegt ist, diese auf den Ablagestapel deines Gegners."
			},
			damage: "30+",

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "+20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It lives deep in the sea. With a tail shaped like a small fish, it attracts unsuspecting prey.",
	},

	thirdParty: {
		cardmarket: 277944,
		tcgplayer: 86238
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	]
}

export default card
