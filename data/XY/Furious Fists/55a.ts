import { Card } from '../../../interfaces'
import Set from '../Furious Fists'

const card: Card = {
	name: {
		en: "M Lucario EX",
		fr: "M-Lucario EX",
		es: "M-Lucario EX",
		it: "M Lucario EX",
		pt: "M-Lucario EX",
		de: "M Lucario EX"
	},

	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		448,
	],

	hp: 220,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Lucario-EX",
		fr: "Lucario-EX",
		es: "Lucario-EX",
		it: "Lucario-EX",
		pt: "Lucario-EX",
		de: "Lucario-EX"
	},

	stage: "MEGA",

	attacks: [
		{
			cost: [
				"Fighting",
				"Fighting",
				"Fighting",
			],
			name: {
				en: "Rising Fist",
				fr: "Poing Imminent",
				es: "Puño Ascendente",
				it: "Sollevapugno",
				pt: "Punho Ascendente",
				de: "Vorschnellende Faust"
			},
			effect: {
				en: "Discard an Energy attached to your opponent's Active Pokémon.",
				fr: "Défaussez une Énergie attachée au Pokémon Actif de votre adversaire.",
				es: "Descarta 1 Energía unida al Pokémon Activo de tu rival.",
				it: "Scarta un'Energia assegnata al Pokémon attivo del tuo avversario.",
				pt: "Descarte uma Energia ligada ao Pokémon Ativo do seu oponente.",
				de: "Lege 1 an das Aktive Pokémon deines Gegners angelegte Energie auf den Ablagestapel deines Gegners."
			},
			damage: 140,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	suffix: "EX",
	retreat: 2
}

export default card
