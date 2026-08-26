import { Card } from '../../../interfaces'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		en: "Electrode",
		fr: "Électrode",
		de: "Lektrobal"
	},

	illustrator: "Shin-ichi Yoshida",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [101],

	hp: 70,

	types: [
		"Lightning"
	],

	evolveFrom: {
		en: "Voltorb",
		fr: "Voltorbe",
		de: "Voltobal"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Super Dynamo",
				fr: "Super dynamo",
				de: "Super-Dynamo"
			},
			effect: {
				en: "Once during your turn (before your attack), if Electrode is your Active Pokémon, you may flip a coin. If heads, choose a Lightning Energy card from your discard pile and attach it to 1 of your Pokémon. This power can't be used if Electrode is affected by a Special Condition.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), si Électrode est votre Pokémon Actif, vous pouvez lancer une pièce. Si c'est face, attachez une carte Énergie {L} de votre pile de défausse sur un de vos Pokémon. Ce pouvoir ne peut pas être utilisé si Électrode est affecté par un État spécial.",
				de: "Einmal während deines Zuges (vor deinem Angriff) kannst du, falls Lektrobal dein Aktives Pokémon ist, eine Münze werfen. Nimm bei „Kopf“ eine {L}-Energiekarte aus deinem Ablagestapel und lege sie an 1 deiner Pokémon an. Diese Fähigkeit kann nicht verwendet werden, falls Lektrobal von einem Speziellen Zustand betroffen ist."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Swift",
				fr: "Météores",
				de: "Sternschauer"
			},
			effect: {
				en: "This attack's damage isn't affected by Weakness, Resistance, Poké-Powers, Poké-Bodies, or any other effects on the Defending Pokémon.",
				fr: "Les dégâts de cette attaque ne sont pas affectés par la Faiblesse, la Résistance, les Poké-Powers, les Poké-Bodies ou tout autre effet en action sur le Pokémon Défenseur.",
				de: "Die Schadenspunkte dieses Angriffs werden nicht durch Schwäche, Resistenz, Poké-Powers, Poké-Bodies oder andere das Verteidigende Pokémon betreffende Effekte beeinflusst."
			},
			damage: 30,

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
				tcgplayer: 85148,
				cardmarket: 275063
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				tcgplayer: 85148,
				cardmarket: 275063
			}
		},
	]
}

export default card
