import { Card } from '../../../interfaces'
import Set from '../Platinum'

const card: Card = {
	name: {
		en: "Delcatty",
		fr: "Delcatty",
		de: "Enekoro"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [301],

	hp: 90,

	types: [
		"Colorless"
	],

	evolveFrom: {
		en: "Skitty",
		fr: "Skitty",
		de: "Eneco"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Power Circulation",
				fr: "Circulation de puissance",
				de: "Kraft-Kreislauf"
			},
			effect: {
				en: "Once during your turn (before your attack), you may search your discard pile for up to 2 basic Energy cards, show them to your opponent, and put those cards on top of your deck in any order. If you do, put 2 damage counters on Delcatty. This power can't be used if Delcatty is affected by a Special Condition.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez choisir dans votre pile de défausse jusqu'à 2 cartes Énergie de base. Montrez-les à votre adversaire et placez-les au dessus de votre deck dans n'importe quel ordre. Placez alors 2 marqueurs de dégât sur Delcatty. Ce pouvoir ne peut pas être utilisé si Delcatty est affecté par un État Spécial.",
				de: "Einmal während deines Zuges (vor deinem Angriff) kannst du deinen Ablagestapel nach bis zu 2 Basis-Energiekarten durchsuchen, sie deinem Gegner zeigen und in beliebiger Reihenfolge auf dein Deck legen. Wenn du das machst, lege 2 Schadensmarken auf Enekoro. Diese Poké-Power kann nicht benutzt werden, wenn Enekoro von einem Speziellen Zustand betroffen ist."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Power Heal",
				fr: "Pouvoir guérissant",
				de: "Heilkraft"
			},
			effect: {
				en: "Does 10 damage plus 10 more damage for each damage counter on Delcatty. Then, remove 2 damage counters from Delcatty.",
				fr: "Inflige 10 dégâts plus 10 dégâts supplémentaires pour chaque marqueur de dégât sur Delcatty. Ensuite, retirez à Delcatty 2 marqueurs de dégât.",
				de: "Dieser Angriff fügt 10 Schadenspunkte plus 10 weitere Schadenspunkte für jede Schadensmarke auf Enekoro zu. Danach entferne 2 Schadensmarken von Enekoro."
			},
			damage: "10+",

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Rear Kick",
				fr: "Pouvoir guérisseur",
				de: "Rückwärtskick"
			},

			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+20"
		},
	],

	retreat: 1,

	variants: [
		{
			type:"holo",
			thirdParty: {
				tcgplayer: 84741,
				cardmarket: 278425
			}
		},
		{
			type:"reverse",
			thirdParty: {
				cardmarket: 278425,
				tcgplayer: 84741
			}
		}
	],

}

export default card
