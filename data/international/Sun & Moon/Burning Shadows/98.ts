import { Card } from 'models/database/card'
import Set from '../Burning Shadows'

const card: Card = {
	name: {
		'en-us': "Shiinotic",
		'fr-fr': "Lampignon",
		'es-es': "Shiinotic",
		'it-it': "Shiinotic",
		'pt-br': "Shiinotic",
		'de-de': "Lamellux"
	},

	illustrator: "Naoki Saito",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		756,
	],

	hp: 100,

	types: [
		"Fairy",
	],

	evolveFrom: {
		'en-us': "Morelull",
		'fr-fr': "Spododo",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fairy",
				"Colorless",
			],
			name: {
				'en-us': "Strength Sap",
				'fr-fr': "Vol-Force",
				'es-es': "Absorbefuerza",
				'it-it': "Assorbiforza",
				'pt-br': "Seiva Forte",
				'de-de': "Kraftabsorber"
			},
			effect: {
				'en-us': "Heal from this Pokémon 30 damage times the amount of Energy attached to your opponent’s Active Pokémon.",
				'fr-fr': "Soignez à ce Pokémon 30 dégâts multipliés par le nombre d’Énergies attachées au Pokémon Actif de votre adversaire.",
				'es-es': "Cura a este Pokémon 30 puntos de daño por cada Energía unida al Pokémon Activo de tu rival.",
				'it-it': "Cura questo Pokémon da 30 danni per ogni Energia assegnata al Pokémon attivo del tuo avversario.",
				'pt-br': "Cure 30 pontos de dano deste Pokémon vezes a quantidade de Energia ligada ao Pokémon Ativo do seu oponente.",
				'de-de': "Heile bei diesem Pokémon 30 Schadenspunkte mal der Anzahl der an das Aktive Pokémon deines Gegners angelegten Energien."
			},
			damage: 30,

		},
		{
			cost: [
				"Fairy",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Sleep Pulse",
				'fr-fr': "Pouls Dodo",
				'es-es': "Pulso Soñoliento",
				'it-it': "Sonnopulsar",
				'pt-br': "Pulso Sonolento",
				'de-de': "Schlafimpuls"
			},
			effect: {
				'en-us': "Your opponent’s Active Pokémon is now Asleep.",
				'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
				'es-es': "El Pokémon Activo de tu rival pasa a estar Dormido.",
				'it-it': "Il Pokémon attivo del tuo avversario viene addormentato.",
				'pt-br': "O Pokémon Ativo do seu oponente agora está Adormecido.",
				'de-de': "Das Aktive Pokémon deines Gegners schläft jetzt."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Darkness",
			value: "-20"
		},
	],

	retreat: 2,

	description: {
		'en-us': "Forests where Shiinotic live are treacherous to enter at night. People confused by its strange lights can never find their way home again.",
	},

	thirdParty: {
		cardmarket: 299499,
		tcgplayer: 138592
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	]
}

export default card
