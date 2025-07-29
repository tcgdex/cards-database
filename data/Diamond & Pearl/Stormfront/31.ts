import { Card } from '../../../interfaces'
import Set from '../Stormfront'

const card: Card = {
	name: {
		en: "Vespiquen",
		fr: "Apireine",
		de: "Honweisel"
	},

	illustrator: "Kent Kanetsuna",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		416,
	],

	hp: 100,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Combee",
		fr: "Apitrini",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Green Dignity",
				fr: "Dignité verte",
				de: "Grüne Würde"
			},
			effect: {
				en: "As long as you have more Prize cards left than your opponent, Vespiquen's attacks do 10 more damage for each Grass Pokémon on your Bench to the Active Pokémon (before applying Weakness and Resistance).",
				fr: "Tant qu'il vous reste plus de cartes Récompense que votre adversaire, les attaques d'Apireine inflige 10 dégâts supplémentaires au Pokémon Actif pour chaque Pokémon Grass sur votre Banc (avant application de la Faiblesse et de la Résistance).",
				de: "Solange du mehr Preise übrig hast als dein Gegner, fügt jeder Angriff von Honweisel den Aktiven Pokémon für jedes -Pokémon auf deiner Bank 10 zusätzliche Schadenspunkte zu (bevor Schwäche und Resistenz verrechnet werden)."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Bee Drain",
				fr: "Abeille épuisante",
				de: "Bienensauger"
			},
			effect: {
				en: "After your attack, remove from Vespiquen the number of damage counters equal to the damage you did to the Defending Pokémon.",
				fr: "Après votre attaque, retirez à Apireine autant de marqueurs de dégât que vous avez infligé de dégâts au Pokémon Défenseur.",
				de: "Entferne nach deinem Angriff Schadensmarken von Honweisel entsprechend der Höhe der Schadenspunkte, die dem Verteidigenden Pokémon zugefügt wurden."
			},
			damage: 20,

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Bee Powder",
				fr: "Poudre-abeille",
				de: "Bienenstaub"
			},
			effect: {
				en: "Flip 2 coins. If both of them are heads, the Defending Pokémon is now Burned, Paralyzed, and Poisoned.",
				fr: "Lancez 2 pièces. Si ce sont deux faces, le Pokémon Défenseur est maintenant Brûlé, Paralysé et Empoisonné.",
				de: "Wirf 2 Münzen. Wenn beide Münzen \"Kopf\" gezeigt haben, ist das Verteidigende Pokémon jetzt gelähmt, verbrannt und vergiftet."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+20"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 278329
	}
}

export default card
