import { Card } from 'models/database/card'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		'en-us': "Bastiodon",
		'fr-fr': "Bastiodon",
		'de-de': "Bollterus"
	},

	illustrator: "Kazuyuki Kano",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		411,
	],

	hp: 130,

	types: [
		"Metal",
	],

	evolveFrom: {
		'en-us': "Shieldon",
		'fr-fr': "Dinoclier"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Protective Wall",
				'fr-fr': "Mur protecteur",
				'de-de': "Schutzwall"
			},
			effect: {
				'en-us': "Prevent all damage done to your Benched Pokémon by your opponent's attacks.",
				'fr-fr': "Prévenez tous les dégâts infligés à vos Pokémon de Banc par des attaques de votre adversaire.",
				'de-de': "Verhindere allen Schaden, der Pokémon auf deiner Bank durch gegnerische Angriffe zugefügt wird."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
			],
			name: {
				'en-us': "Anger Revenge",
				'fr-fr': "Vengeance furieuse",
				'de-de': "Zornesrache"
			},
			effect: {
				'en-us': "If Bastiodon was damaged by an attack during your opponent's last turn, this attack does 40 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Si des dégâts ont été infligés à Bastiodon par une attaque lors du dernier tour de votre adversaire, cette attaque inflige 40 dégâts à 1 des Pokémon de Banc de votre adversaire. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
				'de-de': "Wenn Bollterus im letzten Zug deines Gegners durch einen Angriff Schaden zugefügt wurde, fügt dieser Angriff 1 Pokémon auf der Bank deines Gegners 40 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+40"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],
	retreat: 3,


	description: {
		'en-us': "Any frontal attack is repulsed. It is a docile Pokémon that feeds on grass and berries.",
		'fr-fr': "Il résiste à toute attaque frontale. C'est un Pokémon docile qui se nourrit d'herbe et de Baies."
	},

	thirdParty: {
		cardmarket: 277650,
		tcgplayer: 93321
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse",
		},
		{
			type: "holo",
			foil: "cosmos"
		}
	]
}

export default card
