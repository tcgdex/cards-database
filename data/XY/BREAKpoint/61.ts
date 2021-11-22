import { Card } from '../../../interfaces'
import Set from '../BREAKpoint'

const card: Card = {
	name: {
		en: "Doublade",
		fr: "Dimoclès",
		es: "Doublade",
		it: "Doublade",
		pt: "Doublade",
		de: "Duokles"
	},
	illustrator: "Hajime Kusajima",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		680,
	],
	hp: 80,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Honedge",
		fr: "Monorpale",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Stab Deeply",
				fr: "Blessure Profonde",
				es: "Puñalada Profunda",
				it: "Pugnalata Affondo",
				pt: "Facada Profunda",
				de: "Tiefer Stich"
			},
			effect: {
				en: "Put 3 damage counters on your opponent's Active Pokémon.",
				fr: "Placez 3 marqueurs de dégâts sur le Pokémon Actif de votre adversaire.",
				es: "Pon 3 contadores de daño en el Pokémon Activo de tu rival.",
				it: "Metti tre segnalini danno sul Pokémon attivo del tuo avversario.",
				pt: "Coloque 3 contadores de danos no Pokémon Ativo do seu oponente.",
				de: "Lege 3 Schadensmarken auf das Aktive Pokémon deines Gegners."
			},

		},
	],
	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],
	retreat: 2,



}

export default card
