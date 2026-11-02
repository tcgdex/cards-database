import { Card } from '../../../interfaces'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		en: "Slowbro",
		fr: "Flagadoss",
		de: "Lahmus"
	},

	illustrator: "Aya Kusube",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	cameoDexIds: [129],

	dexId: [80],

	hp: 80,

	types: [
		"Water"
	],

	evolveFrom: {
		en: "Slowpoke",
		fr: "Ramoloss",
		de: "Flegmon"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Dense Body",
				fr: "Corps dense",
				de: "Dichter Körper"
			},
			effect: {
				en: "Any damage done to Slowbro by attacks from Basic Pokémon (excluding Baby Pokémon) is reduced by 20.",
				fr: "Tous les dégâts infligés à Flagadoss par des attaques de Pokémon de base (sans compter les Bébés Pokémon) sont réduits de 20.",
				de: "Aller Schaden, der Lahmus durch Angriffe von Basis-Pokémon (ausgenommen Baby-Pokémon) zugefügt wird, wird um 20 reduziert."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Energy Cannon",
				fr: "Canon à énergie",
				de: "Energiekanone"
			},
			effect: {
				en: "This attack does 30 damage plus 10 damage for each Energy attached to Slowbro but not used to pay for this attack's Energy cost. You can't add more than 20 damage in this way.",
				fr: "Cette attaque inflige 30 dégâts plus 10 dégâts supplémentaires pour chaque Énergie attachée à Flagadoss mais non utilisée pour payer le coût d'Énergie de cette attaque. Vous ne pouvez pas ajouter plus de 20 dégâts de cette façon.",
				de: "Dieser Angriff fügt 30 Schadenspunkte plus 10 weitere Schadenspunkte für jede an Lahmus angelegte Energiekarte, die nicht verwendet wurde, um für die Energiekosten dieses Angriffs zu bezahlen, zu. Du kannst auf diese Weise höchstens 20 weitere Schadenspunkte zufügen."
			},
			damage: "30+",

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "x2"
		},
	],
	retreat: 2,


	variants: [
		{
			type: 'normal',
			thirdParty: {
				tcgplayer: 89302,
				cardmarket: 275105
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				tcgplayer: 89302,
				cardmarket: 275105
			}
		},
	]
}

export default card
