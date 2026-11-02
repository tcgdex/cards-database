import { Card } from '../../../interfaces'
import Set from '../Plasma Blast'

const card: Card = {
	name: {
		en: "Escavalier",
		fr: "Lançargot",
		es: "Escavalier",
		it: "Escavalier",
		pt: "Escavalier",
		de: "Cavalanzas"
	},

	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		589,
	],

	hp: 100,

	types: [
		"Metal",
	],

	evolveFrom: {
		en: "Karrablast",
		fr: "Carabing",
		de: "Laukaps"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Metal",
				"Colorless",
			],
			name: {
				en: "Steamroll",
				fr: "Rouleau Compresseur",
				de: "Überrollen"
			},
			effect: {
				en: "Does 20 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Inflige 20 dégâts à 1 des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				de: "Dieser Angriff fügt 1 Pokémon auf der Bank deines Gegners 20 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},
			damage: 40,

		},
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Slashing Strike",
				fr: "Coup Déchirant",
				de: "Schlitzender Schlag"
			},
			effect: {
				en: "This Pokémon can't use Slashing Strike during your next turn.",
				fr: "Ce Pokémon ne peut pas utiliser Coup Déchirant pendant votre prochain tour.",
				de: "Dieses Pokémon kann Schlitzender Schlag während deines nächsten Zuges nicht einsetzen."
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
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
		en: "Wearing the shell covering they stole from Shelmet, they defend themselves and attack with two lances.",
		de: "Eine von einem Schnuthelm gestohlene Muschel dient ihm als Helm. Es greift Gegner mit seinen beiden Lanzen an."
	},

	thirdParty: {
		cardmarket: 281082,
		tcgplayer: 85315
	}
}

export default card
