import { Card } from '../../../interfaces'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		en: "Dark Crobat",
		fr: "Nostenfer obscur",
		de: "Dunkles Iksbat"
	},

	illustrator: undefined,
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		169,
	],

	hp: 70,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Dark Golbat",
		fr: "Nosferalto obscur",
		de: "Dunkles Golbat"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				en: "Surprise Bite",
				fr: "Morsure surprise",
				de: "Überraschungsbiss"
			},
			effect: {
				en: "When you play Dark Crobat from your hand, you may choose 1 of your opponent's Pokémon. This power does 20 damage do that Pokémon. (Don't apply Weakness and Resistance.)",
				fr: "Quand vous jouez Nostenfer obscur depuis votre main, vous pouvez choisir un des Pokémon de votre adversaire. Ce pouvoir inflige 20 dégâts à ce Pokémon. (N'appliquez ni la Faiblesse, ni la Résistance.)",
				de: "Wenn du Dunkles Iksbat aus deiner Hand spielst, kannst du 1 der Pokémon deines Gegners wählen. Diese Power fügt diesem Pokémon 20 Schadenspunkte zu. (Wende Schwäche und Resistenz nicht an.)"
			},
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
				"Grass",
			],
			name: {
				en: "Dark Drain",
				fr: "Sombre saignée",
				de: "Finsteres Aussaugen"
			},
			effect: {
				en: "Flip a coin for each of your opponent's Pokémon. For each heads, this attack does 10 damage to that Pokémon. Don't apply Weakness and Resistance. Remove a number of damage counters from Dark Crobat equal to the damage dealt. If Dark Crobat has fewer damage counters than that, remove all of them.",
				fr: "Lancez une pièce pour chaque Pokémon de votre adversaire. Pour chaque face, cette attaque inflige 10 dégâts à ce Pokémon. N'appliquez ni la Faiblesse, ni la Résistance. Retirez un nombre de marqueurs de dégâts sur Nostenfer obscur égal aux dégâts infligés. Si Nostenfer obscur a moins de marqueurs de dégâts, retirez-les tous.",
				de: "Wirf für jedes Pokémon deines Gegners eine Münze. Immer wenn „Kopf“ fällt, fügt dieser Angriff dem entsprechenden Pokémon 10 Schadenspunkte zu. Wende Schwäche und Resistenz nicht an. Zähle, wie oft du insgesamt „Kopf“ geworfen hast, und entferne so viele Schadensmarken von Dunkles Iksbat. Falls Dunkles Iksbat weniger Schadensmarken hat, entferne alle."
			},

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	description: {
		en: "Although the wings it has evolved on its feet allow it to fly at high speeds, they unfortunately make it difficult to perch.",
		fr: "Les ailes supplémentaires qui ornent ses pattes lui permettent de voler très vite, mais elles lui compliquent la vie quand il veut se percher.",
		de: "Seine Flügel, die sich im Beinbereich entwickelt haben, erlauben ihm zwar, mit hoher Geschwindigkeit zu fliegen, aber machen es kompliziert, gescheit zu sitzen."
	},


	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 274654,
				tcgplayer: 84576
			}
		},
		{
			type: "holo",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274654,
				tcgplayer: 84576
			}
		}
	]
}

export default card
