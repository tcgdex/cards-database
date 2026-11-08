import { Card } from 'models/database/card'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		'en-us': "Garchomp",
		'fr-fr': "Carchacrok",
		'de-de': "Knakrack"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [445],

	hp: 130,

	types: [
		"Colorless"
	],

	evolveFrom: {
		'en-us': "Gabite",
		'fr-fr': "Carmache"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Dragon Intimidation",
				'fr-fr': "Draco-intimidation",
				'de-de': "Drachendroher"
			},
			effect: {
				'en-us': "If Garchomp is your Active Pokémon and is damaged by an opponent's attack (even if Garchomp is Knocked Out), choose an Energy card attached to the Attacking Pokémon and put it into your opponent's hand.",
				'fr-fr': "Si Carchacrok est votre Pokémon Actif et qu'une attaque de votre adversaire lui inflige des dégâts (même si Carchacrok est mis K.O.), choisissez une carte Énergie attachée au Pokémon Attaquant et placez-la dans la main de votre adversaire.",
				'de-de': "Wenn Knakrack dein Aktives Pokémon ist und durch einen gegnerischen Angriff Schaden erhält (auch wenn Knakrack dadurch kampfunfähig wird), wähle 1 Energiekarte, die am Angreifenden Pokémon angelegt ist und dein Gegner nimmt diese auf die Hand."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Guard Claw",
				'fr-fr': "Griffe de garde",
				'de-de': "Abwehrklaue"
			},
			effect: {
				'en-us': "During your opponent's next turn, any damage done to Garchomp by attacks is reduced by 20 (after applying Weakness and Resistance).",
				'fr-fr': "Lors du prochain tour de votre adversaire, tous les dégâts infligés à Carchacrok par des attaques sont réduits de 20 (après application de la Faiblesse et de la Résistance).",
				'de-de': "Während des nächsten Zuges deines Gegners wird Schaden, der Knakrack durch Angriffe zugefügt wird, um 20 Schadenspunkte reduziert (nachdem Schwäche und Resistenz verrechnet wurden)."
			},
			damage: 40,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Speed Impact",
				'fr-fr': "Impact soudain",
				'de-de': "Turboaufprall"
			},
			effect: {
				'en-us': "Does 120 damage minus 20 damage for each Energy attached to the Defending Pokémon.",
				'fr-fr': "Inflige 120 dégâts moins 20 dégâts pour chaque Énergie attachée au Pokémon Défenseur.",
				'de-de': "Dieser Angriff fügt 120 Schadenspunkte minus 20 Schadenspunkte für jede Energie, die am Verteidigenden Pokémon angelegt ist, zu."
			},
			damage: "120-",

		},
	],

	weaknesses: [
		{
			type: "Colorless",
			value: "+30"
		},
	],
	retreat: 0,

	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 85623,
				cardmarket: 449568
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278696,
				tcgplayer: 85623
			}
		},
		{
			type: "holo",
			foil: "cracked-ice",
			thirdParty: {
				tcgplayer: 117601
			}
		},
		{
			type: "holo",
			foil: 'league',
			thirdParty: {
				cardmarket: 449568,
				tcgplayer: 164206
			}
		},
		{
			type: "holo",
			foil: 'league',
			stamp: ["staff"],
			thirdParty: {
				tcgplayer: 164207
			}
		}
	],

}

export default card
