import { Card } from '../../../interfaces'
import Set from '../Stormfront'

const card: Card = {
	name: {
		en: "Roserade",
		fr: "Roserade",
		de: "Roserade"
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		407,
	],
	hp: 90,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Roselia",
		fr: "Roselia",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Hidden Poison",
				fr: "Poison caché",
				de: "Verborgenes Gift"
			},
			effect: {
				en: "If Roserade is your Active Pokémon and is damaged by an opponent's attack (even if Roserade is Knocked Out), the Defending Pokémon is now Poisoned.",
				fr: "Si Roserade est votre Pokémon Actif et qu'une attaque de votre adversaire lui inflige des dégâts (même si Roserade est K.O), le Pokémon Attaquant est maintenant Empoisonné.",
				de: "Wenn Roserade dein Aktives Pokémon ist und durch einen gegnerischen Angriff Schaden erhält (auch wenn Roserade dadurch kampfunfähig wird), ist das Angreifende Pokémon jetzt vergiftet."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Bowed Whip",
				fr: "Fouet courbé",
				de: "Bogenpeitsche"
			},
			effect: {
				en: "Choose 1 of your opponent's Pokémon. This attack does 30 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.) Flip a coin. If heads, discard an Energy card attached to that Pokémon.",
				fr: "Choisissez 1 des Pokémon de votre adversaire. Cette attaque lui inflige 30 dégâts. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.) Lancez une pièce. Si c'est face, défaussez une carte Énergie attachée à ce Pokémon.",
				de: "Wähle 1 Pokémon deines Gegners. Dieser Angriff fügt dem gewählten Pokémon 30 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.) Wirf 1 Münze. Bei \"Kopf\" lege 1 Energiekarte, die am gewählten Pokémon angelegt ist, auf den Ablagestapel deines Gegners."
			},

		},
		{
			cost: [
				"Psychic",
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Deep Poison",
				fr: "Poison profond",
				de: "Tiefengift"
			},
			effect: {
				en: "If the Defending Pokémon is Poisoned, this attack does 50 damage plus 30 more damage.",
				fr: "Si le Pokémon Défenseur est Empoisonné, cette attaque inflige 50 dégâts plus 30 dégâts supplémentaires.",
				de: "Wenn das Verteidigende Pokémon vergiftet ist, fügt dieser Angriff 50 Schadenspunkte plus 30 weitere Schadenspunkte zu."
			},
			damage: "50+",

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "+20"
		},
	],

	retreat: 1,



}

export default card
