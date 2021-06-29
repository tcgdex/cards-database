import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	name: {
		en: "Shuppet",
		fr: "Polichombr",
		es: "Shuppet",
		it: "Shuppet",
		pt: "Shuppet",
		de: "Shuppet"
	},

	illustrator: "Miki Tanaka",
	rarity: "Common",
	category: "Pokemon",
	set: Set,
	hp: 60,

	types: [
		"Psychic",
	],

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Haunt",
				fr: "Hanter",
				es: "Espanto",
				it: "Infestare",
				pt: "Assombrar",
				de: "Spuk"
			},
			effect: {
				en: "Put 1 damage counter on your opponent’s Active Pokémon.",
				fr: "Placez un marqueur de dégâts sur le Pokémon Actif de votre adversaire.",
				es: "Pon 1 contador de daño en el Pokémon Activo de tu rival.",
				it: "Metti un segnalino danno sul Pokémon attivo del tuo avversario.",
				pt: "Coloque 1 contador de dano no Pokémon Ativo do seu oponente.",
				de: "Lege 1 Schadensmarke auf das Aktive Pokémon deines Gegners."
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
			value: "-30"
		},
	],

	retreat: 1,
	regulationMark: "D"
}

export default card
