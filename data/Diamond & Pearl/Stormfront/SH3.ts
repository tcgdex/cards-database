import { Card } from '../../../interfaces'
import Set from '../Stormfront'

const card: Card = {
	name: {
		en: "Voltorb",
		fr: "Voltorbe",
		de: "Voltobal"
	},
	illustrator: "Kent Kanetsuna",
	rarity: "Rare Holo LV.X",
	category: "Pokemon",

	set: Set,
	dexId: [
		100,
	],
	hp: 60,
	types: [
		"Lightning",
	],
	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Fastball",
				fr: "Balle rapide",
				de: "Tempoball"
			},
			effect: {
				en: "Choose 1 of your opponent's Pokémon.  Flip a coin.  If heads, this attack does 20 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Choisissez 1 des Pokémon de votre adversaire. Lancez une pièce. Si c'est face, cette attaque lui inflige 20 dégâts. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
				de: "Wähle 1 Pokémon deines Gegners. Wirf 1 Münze. Bei \"Kopf\" fügt dieser Angriff dem gewählten Pokémon 20 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},

		},
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Charge Beam",
				fr: "Rayon chargé",
				de: "Ladestrahl"
			},
			effect: {
				en: "Search your discard pile for a lightning Energy card and attach it to Voltorb.",
				fr: "Choisissez dans votre pile de défausse une carte Énergie Lightning et attachez-la à Voltorbe.",
				de: "Durchsuche deinen Ablagestapel nach 1 -Energiekarte und lege sie an Voltobal an."
			},
			damage: 10,

		},
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Thundershock",
				fr: "Éclair",
				de: "Donnerschock"
			},
			effect: {
				en: "Flip a coin.  If heads, the Defending Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
				de: "Wirf 1 Münze. Bei \"Kopf\" ist das Verteidigende Pokémon jetzt gelähmt."
			},
			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "+10"
		},
	],
	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
