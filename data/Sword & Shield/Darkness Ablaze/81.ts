import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	name: {
		en: "Mimikyu",
		fr: "Mimiqui",
		es: "Mimikyu",
		it: "Mimikyu",
		pt: "Mimikyu",
		de: "Mimigma"
	},

	illustrator: "Ryota Murayama",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 70,

	types: [
		"Psychic",
	],

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Heal Jamming",
				fr: "Soins Suspendus",
				es: "Bloqueo Curación",
				it: "Interferenza Malsana",
				pt: "Interferência de Cura",
				de: "Heilstörung"
			},
			effect: {
				en: "Your opponent’s Benched Pokémon can’t be healed.",
				fr: "Les Pokémon de Banc de votre adversaire ne peuvent pas être soignés.",
				es: "Los Pokémon en Banca de tu rival no pueden ser curados.",
				it: "I Pokémon nella panchina del tuo avversario non possono essere curati.",
				pt: "Os Pokémon no Banco do seu oponente não podem ser curados.",
				de: "Die Pokémon auf der Bank deines Gegners können nicht geheilt werden."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Claw Slash",
				fr: "Tranch’Griffe",
				es: "Cuchillada Garra",
				it: "Lacerartiglio",
				pt: "Golpe de Garra",
				de: "Klauenschlitzer"
			},

			damage: 30,

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
