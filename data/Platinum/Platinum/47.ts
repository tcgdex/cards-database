import { Card } from '../../../interfaces'
import Set from '../Platinum'

const card: Card = {
	name: {
		en: "Crobat G",
		fr: "Nostenfert G",
		de: "Iksbat G"
	},

	illustrator: "Makoto Imai",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [169],

	hp: 80,

	types: [
		"Psychic"
	],

	stage: "Basic",
	suffix: "SP",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Flash Bite",
				fr: "Morsure flash",
				de: "Blitzbiss"
			},
			effect: {
				en: "Once during your turn, when you put Crobat G from your hand onto your Bench, you may put 1 damage counter on 1 of your opponent's Pokémon.",
				fr: "Une seule fois lors de votre tour, lorsque vous placez Nostenfert  de votre main sur votre Banc, vous pouvez placer 1 marqueur de dégât sur 1 des Pokémon de votre adversaire.",
				de: "Einmal während deines Zuges kannst du, wenn du Iksbat G von deiner Hand auf deine Bank legst, 1 Schadensmarke auf 1 Pokémon deines Gegners legen."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Toxic Fang",
				fr: "Croc toxik",
				de: "Giftiger Reißzahn"
			},
			effect: {
				en: "The Defending Pokémon is now Poisoned. Put 2 damage counters instead of 1 on the Defending Pokémon between turns.",
				fr: "Le Pokémon Défenseur est maintenant Empoisonné. Placez 2 marqueurs de dégât au lieu d'1 sur le Pokémon Défenseur entre deux tours.",
				de: "Das Verteidigende Pokémon ist jetzt vergiftet. Lege zwischen den Zügen 2 Schadensmarken anstelle von 1 Schadensmarke auf das Verteidigende Pokémon."
			},

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	variants: [		{
			type:"normal",
			thirdParty: {
				tcgplayer: 84494,
				cardmarket: 278468
			}
		},
		{
			type:"reverse",
			thirdParty: {
				cardmarket: 278468,
				tcgplayer: 84494
			}
		},
		{
			type:"normal",
			stamp: ["tsubasa-nakamura"],
			thirdParty: {
				tcgplayer: 479874
			}
		},
		{
			type:"normal",
			stamp: ["stephen-silvestro"],
			thirdParty: {
				tcgplayer: 479875
			}
		},
		{
			type:"normal",
			stamp: ["jason-martinez"],
			thirdParty: {
				tcgplayer: 479876
			}
		},
		{
			type:"normal",
			stamp: ["mychael-bryan"],
			thirdParty: {
				tcgplayer: 480020
			}
		},
		{
			type:"normal",
			stamp: ["yuta-komatsuda"],
			thirdParty: {
				tcgplayer: 480021
			}
		},
		{
			type:"normal",
			stamp: ["yuka-furusawa"],
			thirdParty: {
				tcgplayer: 480022
			}
		}
	],

	retreat: 0
}

export default card
