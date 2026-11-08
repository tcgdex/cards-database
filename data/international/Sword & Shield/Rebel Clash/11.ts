import { Card } from 'models/database/card'
import Set from '../Rebel Clash'

const card: Card = {
	dexId: [284],

	name: {
		'en-us': "Masquerain",
		'fr-fr': "Maskadra",
		'es-es': "Masquerain",
		'it-it': "Masquerain",
		'pt-br': "Masquerain",
		'de-de': "Maskeregen"
	},

	illustrator: "chibi",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	evolveFrom: {
		'en-us': "Surskit",
		'fr-fr': "Arakdo",
		'es-es': "Surskit",
		'it-it': "Surskit",
		'pt-br': "Surskit",
		'de-de': "Gehweiher"
	},

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Threatening Pattern",
				'fr-fr': "Motif Menaçant",
				'es-es': "Patrón Amenazador",
				'it-it': "Disegno Minaccioso",
				'pt-br': "Padrão Ameaçador",
				'de-de': "Bedrohliches Muster"
			},
			effect: {
				'en-us': "During your opponent's next turn, Energy can't be attached from your opponent's hand to the Defending Pokémon.",
				'fr-fr': "Pendant le prochain tour de votre adversaire, de l'Énergie ne peut pas être attachée de la main de votre adversaire au Pokémon Défenseur.",
				'es-es': "Durante el próximo turno de tu rival, no se puede unir Energía de la mano de tu rival al Pokémon Defensor.",
				'it-it': "Durante il prossimo turno del tuo avversario, nessuna Energia può essere assegnata dalla mano del tuo avversario al Pokémon difensore.",
				'pt-br': "Durante o próximo turno do seu oponente, Energias não poderão ser ligadas da mão do seu oponente ao Pokémon Defensor.",
				'de-de': "Während des nächsten Zuges deines Gegners kann keine Energie aus der Hand deines Gegners an das Verteidigende Pokémon angelegt werden."
			},
			damage: 30,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "U-turn",
				'fr-fr': "Demi-Tour",
				'es-es': "Ida y Vuelta",
				'it-it': "Retromarcia",
				'pt-br': "Fazer Retorno",
				'de-de': "Kehrtwende"
			},
			effect: {
				'en-us': "Switch this Pokémon with 1 of your Benched Pokémon.",
				'fr-fr': "Échangez ce Pokémon contre l'un de vos Pokémon de Banc.",
				'es-es': "Cambia este Pokémon por 1 de tus Pokémon en Banca.",
				'it-it': "Scambia questo Pokémon con uno della tua panchina.",
				'pt-br': "Troque este Pokémon por 1 dos seus Pokémon no Banco.",
				'de-de': "Tausche dieses Pokémon gegen 1 Pokémon auf deiner Bank aus."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,
	hp: 90,
	types: ["Grass"],
	regulationMark: "D",


	stage: "Stage1",

	description: {
		'en-us': "Its thin, winglike antennae are highly absorbent. It waits out rainy days in tree hollows."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 457448,
				tcgplayer: 213081
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 457448,
				tcgplayer: 213081
			}
		},
	],
}

export default card
