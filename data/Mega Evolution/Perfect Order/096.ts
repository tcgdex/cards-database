import { Card } from '../../../interfaces'
import Set from '../Perfect Order'

const card: Card = {
	name: {
		en: "Probopass",
		fr: "Tarinorme",
		es: "Probopass",
		de: "Voluminas",
		it: "Probopass",
		pt: "Probopass"
	},
	set: Set,
	rarity: "Illustration rare",
	category: "Pokemon",
	dexId: [
		476
	],
	hp: 140,
	types: [
		"Fighting"
	],
	stage: "Stage1",
	evolveFrom: {
		en: "Nosepass",
		fr: "Tarinor",
		es: "Nosepass",
		"es-mx": "Nosepass",
		de: "Nasgnet",
		it: "Nosepass",
		pt: "Nosepass"
	},
	attacks: [
		{
			cost: [
				"Fighting",
				"Fighting"
			],
			name: {
				en: "Rolling Rocks",
				fr: "Rochers Roulants",
				es: "Rocas Rodantes",
				de: "Rollende Steine",
				it: "Massi Rotolanti",
				pt: "Pedras Rolantes"
			},
			damage: "60"
		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Fighting",
				"Colorless"
			],
			name: {
				en: "Obliterating Nose",
				fr: "Nez Destructeur",
				es: "Nariz Destructora",
				de: "Niederstreckende Nase",
				it: "Naso Devastante",
				pt: "Obliteração Nasal"
			},
			damage: "260",
			effect: {
				en: "Discard 3 Energy from this Pokémon.",
				fr: "Défaussez 3 Énergies de ce Pokémon.",
				es: "Descarta 3 Energías de este Pokémon.",
				de: "Lege 3 Energien von diesem Pokémon auf deinen Ablagestapel.",
				it: "Scarta tre Energie da questo Pokémon.",
				pt: "Descarte 3 Energias deste Pokémon."
			}
		}
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		}
	],
	retreat: 3,
	regulationMark: "J",
	illustrator: "Kinu Nishimura",
	variants: [
		{
			type: "holo"
		}
	],
	thirdParty: {
		tcgplayer: 684424,
		cardmarket: 877513
	}
}

export default card
