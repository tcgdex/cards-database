import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Breloom",
		fr: "Chapignon",
		es: "Breloom",
		it: "Breloom",
		pt: "Breloom",
		de: "Kapilz"
	},
	illustrator: "Atsuko Nishida",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		286,
	],
	hp: 120,
	types: [
		"Fighting",
	],
	evolveFrom: {
		en: "Shroomish",
		fr: "Balignon",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Spore",
				fr: "Spore",
				es: "Espora",
				it: "Spora",
				pt: "Esporos",
				de: "Pilzspore"
			},
			effect: {
				en: "Your opponent’s Active Pokémon is now Asleep.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
				es: "El Pokémon Activo de tu rival pasa a estar Dormido.",
				it: "Il Pokémon attivo del tuo avversario viene addormentato.",
				pt: "O Pokémon Ativo do seu oponente agora está Adormecido.",
				de: "Das Aktive Pokémon deines Gegners schläft jetzt."
			},

		},
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Pre-Dawn Strike",
				fr: "Frappe Matinale",
				es: "Golpe al Amanecer",
				it: "Colpo Mattiniero",
				pt: "Golpe de Ninar",
				de: "Angriff im Morgengrauen"
			},
			effect: {
				en: "If your opponent’s Active Pokémon is Asleep, this attack does 90 more damage.",
				fr: "Si le Pokémon Actif de votre adversaire est Endormi, cette attaque inflige 90 dégâts supplémentaires.",
				es: "Si el Pokémon Activo de tu rival está Dormido, este ataque hace 90 puntos de daño más.",
				it: "Se il Pokémon attivo del tuo avversario è addormentato, questo attacco infligge 90 danni in più.",
				pt: "Se o Pokémon Ativo do seu oponente estiver Adormecido, este ataque causará 90 pontos de dano a mais.",
				de: "Wenn das Aktive Pokémon deines Gegners schläft, fügt diese Attacke 90 Schadenspunkte mehr zu."
			},
			damage: "30+",

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
