import { Card } from '../../../interfaces'
import Set from '../Legends Awakened'

const card: Card = {
	name: {
		en: "Giratina",
		fr: "Giratina",
		de: "Giratina"
	},

	illustrator: "Kazuaki Aihara",
	rarity: "Rare Holo",
	category: "Pokemon",
	set: Set,

	dexId: [
		487,
	],

	hp: 100,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Shadow Force",
				fr: "Revenant",
				de: "Schemenkraft"
			},
			effect: {
				en: "Choose 1 of your opponent's Benched Pokémon. This attack does 20 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.) Flip a coin. If heads, prevent all effects of an attack, including damage, done to Giratina during your opponent's next turn.",
				fr: "Choisissez 1 des Pokémon de Banc de votre adversaire. Cette attaque lui inflige 20 dégâts. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.) Lancez une pièce. Si c'est face, prévenez tous les effets d'une attaque, dégâts inclus, infligés à Giratina lors du prochain tour de votre adversaire.",
				de: "Wähle 1 Pokémon auf der Bank deines Gegners. Dieser Angriff fügt dem gewählten Pokémon 20 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.) Wirf 1 Münze. Bei \"Kopf\" verhindere während des nächsten Zuges deines Gegners alle Effekte eines Angriffs, einschließlich Schaden, die Giratina zugefügt würden."
			},

		},
		{
			cost: [
				"Psychic",
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Brutal Edge",
				fr: "Tranche brutale",
				de: "Brutalklinge"
			},
			effect: {
				en: "Does 50 damage plus 10 more damage for each damage counter on the Defending Pokémon.",
				fr: "Inflige 50 dégâts plus 10 dégâts supplémentaires pour chaque marqueur de dégât sur le Pokémon Défenseur.",
				de: "Dieser Angriff fügt 50 Schadenspunkte plus 10 weitere Schadenspunkte für jede Schadensmarke auf dem Verteidigenden Pokémon zu."
			},
			damage: "50+",

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Colorless",
			value: "-20"
		},
	],

	retreat: 3,

	description: {
		fr: "Un Pokémon censé vivre dans un monde à l'opposé du nôtre. Il apparaît dans un cimetière ancien."
	},

	thirdParty: {
		cardmarket: 278153,
		tcgplayer: 85733
	}
}

export default card
