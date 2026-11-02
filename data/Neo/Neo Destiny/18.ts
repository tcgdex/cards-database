import { Card } from '../../../interfaces'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		en: "Dark Magcargo",
		fr: "Volcaropod obscur",
		de: "Dunkles Magcargo"
	},

	illustrator: "Toshinao Aoki",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		219,
	],

	hp: 60,

	types: [
		"Fire",
	],

	evolveFrom: {
		en: "Slugma",
		fr: "Limagma",
		de: "Schneckmag"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				en: "Hot Plate",
				fr: "Assiette chaude",
				de: "Heißer Boden"
			},
			effect: {
				en: "As long as Dark Magcargo is your Active Pokémon, whenever a player puts a Baby Pokémon or Basic Pokémon onto his or her Bench from his or her hand, this power does 10 damage to that Pokémon. (Don't apply Weakness and Resistance.) This power stops working if Dark Magcargo is Asleep, Confused, or Paralyzed.",
				fr: "Tant que Volcaropod obscur est votre Pokémon Actif, quand un joueur place un Bébé Pokémon ou un Pokémon de base sur son Banc depuis sa main, ce pouvoir inflige 10 dégâts à ce Pokémon. (N'appliquez ni la Faiblesse ni la Résistance.) Ce pouvoir cesse de fonctionner si Volcaropod obscur est Endormi, Confus ou Paralysé.",
				de: "Solange Dunkles Magcargo dein aktives Pokémon ist, fügt diese Fähigkeit immer, wenn ein Spieler ein Baby-Pokémon oder ein Basis-Pokémon aus seiner Hand auf seine Bank legt, diesem Pokémon 10 Schadenspunkte zu. (Wende Schwäche und Resistenz nicht an.) Diese Fähigkeit verliert ihre Wirkung, solange Dunkles Magcargo schläft, verwirrt oder gelähmt ist."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fire",
				"Fire",
			],
			name: {
				en: "Ball of Flame",
				fr: "Boule de flammes",
				de: "Flammenball"
			},
			effect: {
				en: "You may discard a Energy card attached to Dark Magcargo when you use this attack. If you do and if your opponent has any Benched Pokémon, choose 1 of them and this attack does 20 damage to it. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Vous pouvez vous défausser d'une carte Énergie {R} attachée à Volcaropod obscur quand vous utilisez cette attaque. Si vous le faites, et si votre adversaire a des Pokémon sur son Banc, choisissez l'un d'eux et cette attaque lui inflige 20 dégâts (Ne pas appliquer la Faiblesse et la Résistance aux Pokémon du Banc.)",
				de: "Du kannst eine an Dunkles Magcargo angelegte {R}-Energiekarte auf deinen Ablagestapel legen, wenn du diesen Angriff verwendest. Falls du dies tust und falls dein Gegner mindestens ein Pokémon auf der Bank hat, bestimmme eines von diesen. Dieser Angriff fügt diesem Pokémon 20 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],
	retreat: 3,


	description: {
		en: "The shell on its back comes off easily, exposing the flames running through its body.",
		fr: "La carapace qui couvre son dos s'enlève facilement, exposant à l'air son corps enflammé.",
		de: "Die Muschel auf seinem Rücken lässt sich leicht entfernen und legt die Flammen frei, die durch den Körper jagen."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274670,
				tcgplayer: 84622
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274670,
				tcgplayer: 84622
			}
		}
	]
}

export default card
