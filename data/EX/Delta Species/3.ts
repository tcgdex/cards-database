import { Card } from '../../../interfaces'
import Set from '../Delta Species'

const card: Card = {
	name: {
		en: "Dragonite δ",
		fr: "Dracolosse δ",
		de: "Dragoran"
	},

	illustrator: "Ryo Ueda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		149,
	],

	hp: 100,

	types: [
		"Lightning",
		"Metal",
	],

	evolveFrom: {
		en: "Dragonair",
		fr: "Draco"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Delta Charge",
				fr: "Charge Delta",
				de: "Delta-Aufladung"
			},
			effect: {
				en: "Once during your turn (before your attack), you may attach a Lightning Energy card from your discard pile to 1 of your Benched Pokémon. This power can't be used if Dragonite is affected by a Special Condition.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez attacher une carte Énergie  de votre pile de défausse à 1 de vos Pokémon de Banc. Ce pouvoir ne peut pas être utilisé si Dracolosse est affecté par un État Spécial.",
				de: "Einmal während deines Zuges (vor deinem Angriff) kannst du eine -Energiekarte von deinem Ablagestapel nehmen und an 1 Pokémon auf deiner Bank anlegen. Diese Poké-Power kann nicht verwendet werden, falls Dragoran von einem Speziellen Zustand betroffen ist."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Lightning",
			],
			name: {
				en: "Agility",
				fr: "Hâte",
				de: "Agilität"
			},
			effect: {
				en: "Flip a coin. If heads, prevent all effects of an attack, including damage, done to Dragonite during your opponent's next turn.",
				fr: "Lancez une pièce. Si c'est face, prévenez tous le effets d'une attaque, dégâts inclus, infligés à Dracolosse lors du prochain tour de votre adversaire.",
				de: "Wirf 1 Münze. Verhindere bei \"Kopf\" während des nächsten Zuges deines Gegners alle Effekte von Angriffen (einschließlich Schaden), die Dragoran zugefügt werden."
			},
			damage: 30,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Lightning",
				"Metal",
			],
			name: {
				en: "Heavy Impact",
				fr: "Gros impact",
				de: "Schwerer Einschlag"
			},

			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Colorless",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Grass",
			value: "-30"
		},
		{
			type: "Fighting",
			value: "-30"
		},
	],


	retreat: 2,

	thirdParty: {
		cardmarket: 276766
	},

	variants: [
		{
			type: "holo"
		},
		{
			type: "holo",
			stamp: ["set-logo"]
		}
	]
}

export default card
