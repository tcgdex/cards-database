import { Card } from '../../../interfaces'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		en: "Marowak",
		fr: "Meganium",
		de: "Meganie"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [105],

	hp: 70,

	types: [
		"Fighting"
	],

	evolveFrom: {
		en: "Bayleef",
		fr: "Macronium"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Soothing Aroma",
				fr: "Arôme apaisant",
				de: "Beruhigendes Aroma"
			},
			effect: {
				en: "Once during your turn (before your attack), you may flip a coin. If heads, remove 1 damage counter from each of your Pokémon that has any. This power can't be used if Meganium is affected by a Special Condition.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez lancer une pièce. Si c'est face, retirez un marqueur de dégât de chacun de vos Pokémon ayant des marqueurs de dégâts. Ce pouvoir ne peut pas être utilisé si Meganium est affecté par un État spécial.",
				de: "Einmal während deines Zuges (vor deinem Angriff) kannst du eine Münze werfen. Entferne bei \"Kopf\" von jedem deiner Pokémon, auf dem Schadensmarken liegen, 1 der Schadensmarken. Diese Fähigkeit kann nicht verwendet werden, falls Meganie von einem Speziellen Zustand betroffen ist."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Triple Bone",
				fr: "Poudre toxik",
				de: "Giftpuder"
			},
			effect: {
				en: "Choose 1 of your opponent's Benched Pokémon. Flip 3 coins. This attack does 10 damage times the number of heads to that Pokémon. Don't apply Weakness and Resistance.",
				fr: "Le Pokémon Défenseur est maintenant Empoisonné.",
				de: "Das Verteidigende Pokémon ist jetzt vergiftet."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "x2"
		},
	],
	resistances: [
		{
			type: "Lightning",
			value: "-30"
		},
	],
	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 87290,
				cardmarket: 274893
			},
		},
		{
			type: "reverse",
		}
	],
}

export default card
