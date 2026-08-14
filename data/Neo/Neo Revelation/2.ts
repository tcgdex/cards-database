import { Card } from '../../../interfaces'
import Set from '../Neo Revelation'

const card: Card = {
	name: {
		en: "Blissey",
		fr: "Leuphorie",
		de: "Heiteira"
	},

	illustrator: "Yuka Morii",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		242,
	],

	hp: 120,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Chansey",
		fr: "Leveinard",
		de: "Chaneira"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				en: "Softboiled",
				fr: "Œuf-coque",
				de: "Weichei"
			},
			effect: {
				en: "When you play Blissey from your hand, you may flip a coin. If heads, remove 8 damage counters from Blissey. If tails, remove 4 damage counters from Blissey. Either way, if Blissey has fewer damage counters than that, remove all of them.",
				fr: "Lorsque vous jouez Leuphorie depuis votre main, vous pouvez lancer une pièce. Si c'est face, retirez 8 marqueurs de dégâts sur Leuphorie. Si c'est pile, retirez-en 4. Dans les deux cas, si le nombre de marqueurs de dégâts sur Leuphorie est inférieur au nombre demandé, retirez-les tous.",
				de: "Wenn du Heiteira aus deiner Hand spielst, kannst du eine Münze werfen. Entferne bei „Kopf“ 8 Schadensmarken von Heiteira. Entferne bei „Zahl“ 4 Schadensmarken von Heiteira. Falls Heiteira weniger Schadensmarken hat, entferne alle."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Body Slam",
				fr: "Plaquage",
				de: "Bodyslam"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
				de: "Wirf eine Münze. Bei „Kopf“ ist das verteidigende Pokémon jetzt gelähmt."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-30"
		},
	],
	retreat: 2,


	description: {
		en: "Anyone who takes even one bite of Blissey's egg becomes unfailingly caring and pleasant to everyone.",
		fr: "Quiconque mange une bouchée de l'œuf de Leuphorie devient tout de suite gentil avec tout le monde.",
		de: "Jeder, der auch nur den kleinsten Biss von Heiteiras Ei nascht, wird garantiert liebevoll und nett zu allen."
	},


	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 274588,
				tcgplayer: 83918
			}
		},
		{
			type: "holo",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274588,
				tcgplayer: 83918
			}
		}
	]
}

export default card
