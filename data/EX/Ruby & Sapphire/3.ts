import { Card } from '../../../interfaces'
import Set from '../Ruby & Sapphire'

const card: Card = {
	name: {
		en: "Blaziken",
		fr: "Braségali",
		de: "Lohgock"
	},

	illustrator: "Kouki Saitou",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [257],

	hp: 100,

	types: [
		"Fire"
	],

	evolveFrom: {
		en: "Combusken",
		fr: "Galifeu",
		de: "Jungglut"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Firestarter",
				fr: "Pyroteknik",
				de: "Brandstiftung"
			},
			effect: {
				en: "Once during your turn (before your attack), you may attach a Fire Energy card from your discard pile to 1 of your Benched Pokémon. This power can't be used if Blaziken is affected by a Special Condition.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez attacher une Carte Énergie {R} de votre pile de défausse à un des Pokémon de votre Banc. Ce pouvoir ne peut être utilisé si Brasegali est affecté par un État Spécial.",
				de: "Während deines Zuges (vor deinem Angriff) kannst du einmal eine {R}-Energiekarte von deinem Ablagestapel nehmen und an 1 Pokémon auf deiner Bank anlegen. Diese Poké-Power kann nicht verwendet werden, falls Lohgock von einem Speziellen Zustand betroffen ist."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Fire Stream",
				fr: "Courant de feu",
				de: "Feuerstrom"
			},
			effect: {
				en: "Discard a Fire Energy card attached to Blaziken. If you do, this attack does 10 damage to each of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Vous pouvez défausser une Carte Énergie {R} attachée à Brasegali. Cette attaque inflige alors 10 dégâts à chacun des Pokémon du Banc de votre adversaire. (Ne pas appliquer la Faiblesse et la Résistance aux Pokémon du Banc.)",
				de: "Entferne eine {R}-Energiekarte von Lohgock und lege sie auf den Ablagestapel. Wenn du das machst, fügt dieser Angriff jedem gegnerischen Pokémon auf der Bank 10 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],


	retreat: 2,


	variants: [		{
			type: "holo",
			thirdParty: {
				cardmarket: 275651,
				tcgplayer: 83903
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275651,
				tcgplayer: 83903
			}
		},
		{
			type: "holo",
			subtype: "no-e-reader",
			thirdParty: {
				tcgplayer: 125113
			}
		},
		{
			type: "reverse",
			subtype: "no-e-reader",
			thirdParty: {
				cardmarket: 275651,
			},

		},
		{
			type: "holo",
			stamp: ["chris-fulop"],
			thirdParty: {
				tcgplayer: 477367
			}
		}
	],

}

export default card
