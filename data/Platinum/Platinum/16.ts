import { Card } from '../../../interfaces'
import Set from '../Platinum'

const card: Card = {
	name: {
		en: "Slaking",
		fr: "Monaflèmit",
		de: "Letarking"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [289],

	hp: 150,

	types: [
		"Colorless"
	],

	evolveFrom: {
		en: "Vigoroth",
		fr: "Vigoroth",
		de: "Muntier"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Lazy Paunch",
				fr: "Ventre paresseux",
				de: "Träge Wampe"
			},
			effect: {
				en: "If Slaking used any attacks during your last turn, Slaking can't attack.",
				fr: "Si Monaflemit a utilisé des attaques lors de votre tour précédent, il ne peut pas attaquer.",
				de: "Wenn Letarking in deinem letzten Zug einen Angriff eingesetzt hat, kann Letarking nicht angreifen."
			}
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
				en: "Best Dash",
				fr: "Meilleure ruée",
				de: "Endspurt"
			},
			effect: {
				en: "During your opponent's next turn, any damage done to Slaking by attacks is increased by 50 (after applying Weakness and Resistance).",
				fr: "Lors du prochain tour de votre adversaire, tous dégâts infligés à Monaflemit par des attaques sont augmentés de 50 (après application de la Faiblesse et de la Résistance).",
				de: "Während des nächsten Zuges deines Gegners wird Schaden, der Letarking durch Angriffe zugefügt wird, um 50 Schadenspunkte erhöht (nachdem Schwäche und Resistenz verrechnet wurden)."
			},
			damage: 150,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+30"
		},
	],

	retreat: 4,

	description: {
		en: "The world's laziest Pokémon. When it is lounging, it is actually saving energy for striking back.",
		de: "Das faulste PKMN der Welt. Wenn es faulenzt, sammelt es in Wahrheit Energie, um zuzuschlagen."
	},

	variants: [
		{
			type:"holo",
			thirdParty: {
				tcgplayer: 89292,
				cardmarket: 278437
			}
		},
		{
			type:"reverse",
			thirdParty: {
				cardmarket: 278437,
				tcgplayer: 89292
			}
		}
	],

}

export default card
