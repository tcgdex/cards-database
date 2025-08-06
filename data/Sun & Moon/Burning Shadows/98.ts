import { Card } from '../../../interfaces'
import Set from '../Burning Shadows'

const card: Card = {
	name: {
		en: "Shiinotic",
		fr: "Lampignon",
		es: "Shiinotic",
		it: "Shiinotic",
		pt: "Shiinotic",
		de: "Lamellux"
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
		en: "Morelull",
		fr: "Spododo",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fairy",
				"Colorless",
			],
			name: {
				en: "Strength Sap",
				fr: "Vol-Force",
				es: "Absorbefuerza",
				it: "Assorbiforza",
				pt: "Seiva Forte",
				de: "Kraftabsorber"
			},
			effect: {
				en: "Heal from this Pokémon 30 damage times the amount of Energy attached to your opponent’s Active Pokémon.",
				fr: "Soignez à ce Pokémon 30 dégâts multipliés par le nombre d’Énergies attachées au Pokémon Actif de votre adversaire.",
				es: "Cura a este Pokémon 30 puntos de daño por cada Energía unida al Pokémon Activo de tu rival.",
				it: "Cura questo Pokémon da 30 danni per ogni Energia assegnata al Pokémon attivo del tuo avversario.",
				pt: "Cure 30 pontos de dano deste Pokémon vezes a quantidade de Energia ligada ao Pokémon Ativo do seu oponente.",
				de: "Heile bei diesem Pokémon 30 Schadenspunkte mal der Anzahl der an das Aktive Pokémon deines Gegners angelegten Energien."
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
				en: "Sleep Pulse",
				fr: "Pouls Dodo",
				es: "Pulso Soñoliento",
				it: "Sonnopulsar",
				pt: "Pulso Sonolento",
				de: "Schlafimpuls"
			},
			effect: {
				en: "Your opponent’s Active Pokémon is now Asleep.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
				es: "El Pokémon Activo de tu rival pasa a estar Dormido.",
				it: "Il Pokémon attivo del tuo avversario viene addormentato.",
				pt: "O Pokémon Ativo do seu oponente agora está Adormecido.",
				de: "Das Aktive Pokémon deines Gegners schläft jetzt."
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

	thirdParty: {
		cardmarket: 299499,
		tcgplayer: 138592
	}
}

export default card
