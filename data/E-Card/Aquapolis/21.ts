import { Card } from '../../../interfaces'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		en: "Lanturn",
		fr: "Lanturn",
		de: "Lanturn"
	},

	illustrator: "Yuka Morii",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [171],

	hp: 80,

	types: [
		"Lightning"
	],

	evolveFrom: {
		en: "Chinchou",
		fr: "Loupio",
		de: "Lampi"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Ion Coating",
				fr: "Couche ionique",
				de: "Ionen-Umfärbung"
			},
			effect: {
				en: "You may use this power once during each of your turns (before your attack). All Lightning Energy attached to your Active Pokémon becomes Water Energy for the rest of the turn. (This effect ends if your Active Pokémon retreats or is returned to your hand.) This power can't be used if Lanturn is affected by a Special Condition.",
				fr: "Vous pouvez utiliser ce pouvoir une seule fois pendant chacun de vos tours (avant votre attaque). Toutes les Énergies {L} attachées à votre Pokémon Actif deviennent de l'Énergie {W} pour le reste de votre tour. (Cet effet cesse si votre Pokémon Actif bat en retraite ou s'il revient dans votre main.) Ce pouvoir ne peut pas être utilisé si Lanturn est affecté par un État spécial.",
				de: "Du kannst diese Power während jedem deiner Züge (vor deinem Angriff) verwenden. Alle an dein Aktives Pokémon angelegte {L}-Energie wird bis zum Ende des Zuges zu {W}-Energie. (Dieser Effekt endet, wenn sich dein Aktives Pokémon zurückzieht oder auf deine Hand zurückgeht.) Diese Fähigkeit kann nicht verwendet werden, falls Lanturn von einem Speziellen Zustand betroffen ist."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Electric Tackle",
				fr: "Plaquage électrik",
				de: "Elektrischer Tackle"
			},
			effect: {
				en: "This attack does 20 damage plus 10 damage for each Lightning Energy attached to Lanturn. Flip a coin. If tails, Lanturn does 10 damage to itself for each Lightning Energy attached to it.",
				fr: "Cette attaque inflige 20 dégâts plus 10 dégâts pour chaque énergie {L} attachée à Lanturn. Lancez une pièce. Si c'est pile, Lanturn s'inflige 10 dégâts pour chaque Énergie {L} qui lui est attachée.",
				de: "Dieser Angriff fügt 20 Schadenspunkte plus weitere 10 Schadenspunkte für jede an Lanturn angelegte {L}-Energie zu. Wirf eine Münze. Bei „Zahl“ fügt sich Lanturn für jede an es angelegte {L}-Energiekarte 10 Schadenspunkte selber zu."
			},
			damage: "20+",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "x2"
		},
	],
	retreat: 1,


	variants: [
		{
			type: 'normal',
			thirdParty: {
				tcgplayer: 86601,
				cardmarket: 275092
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				tcgplayer: 86601,
				cardmarket: 275092
			}
		},
	]
}

export default card
