import { Card } from '../../../interfaces'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		en: "Light Machamp",
		fr: "Mackogneur lumineux",
		de: "Helles Machomei"
	},

	illustrator: "Miki Tanaka",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		68,
	],

	hp: 100,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Machoke",
		fr: "Machopeur lumineux",
		de: "Maschock"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Fighting",
				"Fighting",
				"Fighting",
			],

			name: {
				en: "Beatdown",
				fr: "Combat",
				de: "Niederprügler"
			},

			effect: {
				en: "If the Defending Pokémon has Dark in its name or is a Pokémon, flip a coin. If heads, this attack does 100 damage instead of 50.",
				fr: "Si le Pokémon Défenseur est un Pokémon obscur ou si c'est un Pokémon , lancez une pièce. Si c'est face, cette attaque inflige 100 dégâts au lieu de 50.",
				de: "Wirf eine Münze, wenn das verteidigende Pokémon „Dunkles“ in seinem Namen hat oder ein {D}-Pokémon ist. Bei „Kopf“ fügt dieser Angriff 100 Schadenspunkte statt 50 zu."
			},

			damage: 50
		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],
	retreat: 2,


	description: {
		en: "It uses its four arms in combat to unleash a ceaseless flurry of punches.",
		fr: "Il utilise ses quatre bras au combat pour délivrer une véritable ruée de coups.",
		de: "Es verwendet seine vier Arme im Kampf, um seinen Gegner mit einem unglaublichen Schlaghagel einzudecken."
	},

	abilities: [{
		name: {
			fr: "Tandem",
			de: "Kampfpartner",
			en: "Tag Team",
		},

		effect: {
			fr: "Quand vous jouez Mackogneur depuis votre main, si vous le placez sur votre Banc, retirez 3 marqueurs de dégâts de votre Pokémon Actif. S'il a moins de 3 marqueurs de dégâts, retirez-les tous. Échangez ensuite Mackogneur lumineux contre votre Pokémon Actif.",
			en: "When you play Light Machamp from your hand, if is on your Bench, remove 3 damage counters than that, remove all of them. Then, switch Light Machamp with your Active Pokémon.",
			de: "Wenn du Helles Machomei aus deiner Hand spielst und es auf deine Bank legst, entferne 3 Schadensmarken von deinem aktiven Pokémon. Wenn es weniger Schadensmarken hat, entferne alle. Tausche dann Helles Machomei mit deinem aktiven Pokémon."
		},

		type: "Pokemon Power"
	}],


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274677,
				tcgplayer: 86744
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274677,
				tcgplayer: 86744
			}
		}
	]
}

export default card
