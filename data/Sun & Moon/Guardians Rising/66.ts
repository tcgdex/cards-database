import { Card } from '../../../interfaces'
import Set from '../Guardians Rising'

const card: Card = {
	name: {
		en: "Sudowoodo",
		fr: "Simularbre",
		es: "Sudowoodo",
		it: "Sudowoodo",
		pt: "Sudowoodo",
		de: "Mogelbaum"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		185,
	],

	hp: 100,

	types: [
		"Fighting",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Roadblock",
				fr: "Barrage Routier",
				es: "Barricada",
				it: "Blocco Stradale",
				pt: "Obstáculo",
				de: "Hindernis"
			},
			effect: {
				en: "Your opponent can’t have more than 4 Benched Pokémon. If they have 5 or more Benched Pokémon, they discard Benched Pokémon until they have 4 Pokémon on the Bench. If more than one effect changes the number of Benched Pokémon allowed, use the smaller number.",
				fr: "Votre adversaire ne peut pas avoir plus de 4 Pokémon de Banc. S’il a 5 Pokémon de Banc ou plus, il doit défausser des Pokémon de Banc jusqu’à en avoir 4 sur le Banc. Si plus d’un effet change le nombre de Pokémon de Banc autorisés, utilisez le nombre le plus petit.",
				es: "Tu rival no puede tener más de 4 Pokémon en Banca. Si tiene 5 o más Pokémon en Banca, tu rival descarta Pokémon en Banca hasta tener 4 Pokémon en Banca. Si más de un efecto cambia el número de Pokémon en Banca permitidos, se usa el número inferior.",
				it: "Il tuo avversario non può avere più di quattro Pokémon in panchina. Se ha cinque o più Pokémon in panchina, ne scarta fino ad averne quattro. Se più di un effetto modifica il numero di Pokémon in panchina permessi, adotta il numero più piccolo.",
				pt: "Seu oponente não pode ter mais de 4 Pokémon no Banco. Se o seu oponente tiver 5 ou mais Pokémon no Banco, ele(a) deverá descartar Pokémon até ter 4 Pokémon no Banco. Se mais de um efeito alterar o número permitido de Pokémon no Banco, use o menor número.",
				de: "Dein Gegner kann nicht mehr als 4 Pokémon auf seiner Bank haben. Wenn er 5 Pokémon oder mehr auf seiner Bank hat, legt er so lange Pokémon von seiner Bank auf seinen Ablagestapel, bis er 4 Pokémon auf seiner Bank hat. Wenn mehr als 1 Effekt die Anzahl der auf der Bank erlaubten Pokémon verändert, verwende die kleinere Anzahl."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Rock Throw",
				fr: "Jet-Pierres",
				es: "Lanzarrocas",
				it: "Sassata",
				pt: "Lançamento de Rocha",
				de: "Steinwurf"
			},

			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 297527
	}
}

export default card
