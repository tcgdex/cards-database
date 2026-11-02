import { Card } from '../../../interfaces'
import Set from '../Neo Revelation'

const card: Card = {
	name: {
		en: "Suicune",
		fr: "Suicune",
		de: "Suicune"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		245,
	],

	hp: 70,

	types: [
		"Water",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				en: "Crystal Body",
				fr: "Corps de cristal",
				de: "Kristallkörper"
			},
			effect: {
				en: "Prevent all effects of your opponent's attacks, other than damage, done to Suicune. This power stops working while Suicune is Asleep, Confused, or Paralyzed.",
				fr: "Prévenez tous les effets des attaques de votre adversaire, excepté les dégâts, infligés à Suicune. Ce pouvoir cesse de fonctionner si Suicune est Endormi, Confus ou Paralysé.",
				de: "Verhindere alle Auswirkungen der Angriffe deines Gegners außer Schaden, die Suicune zugefügt werden. Diese Fähigkeit verliert ihre Wirkung, solange Suicune schläft, verwirrt oder gelähmt ist."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Water",
				"Water",
				"Water",
			],
			name: {
				en: "Aurora Wave",
				fr: "Vague boréale",
				de: "Nordlichtschein"
			},
			effect: {
				en: "Flip 2 coins. If both are heads, the Defending Pokémon is now Paralyzed. If only 1 is heads, the Defending Pokémon is now Asleep.",
				fr: "Lancez 2 pièces. Si c'est face dans les deux cas, le Pokémon Défenseur est Paralysé. Si vous obtenez une face, le Pokémon Défenseur est maintenant Endormi.",
				de: "Wirf zwei Münzen. Wenn beide „Kopf“ zeigen, ist das verteidigende Pokémon jetzt gelähmt. Wenn nur eine „Kopf“ zeigt, schläft das verteidigende Pokémon jetzt."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],
	retreat: 1,


	description: {
		en: "Said to be the reincarnation of north winds, it can instantly purify filthy, murky water.",
		fr: "On dit de lui qu'il est la réincarnation des vents boréals. Il peut instantanément purifier l'eau sale et boueuse.",
		de: "Ihm wird nachgesagt, dass es eine Wiedergeburt der Nordwinde ist und dadurch verdrecktes und schlammiges Wasser von allem Dreck befreien kann."
	},


	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 274600,
				tcgplayer: 89597
			}
		},
		{
			type: "holo",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274600,
				tcgplayer: 89597
			}
		}
	]
}

export default card
