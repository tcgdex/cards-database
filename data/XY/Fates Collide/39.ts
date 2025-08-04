import { Card } from '../../../interfaces'
import Set from '../Fates Collide'

const card: Card = {
	name: {
		en: "Kabutops",
		fr: "Kabutops",
		es: "Kabutops",
		it: "Kabutops",
		pt: "Kabutops",
		de: "Kabutops"
	},

	illustrator: "Kyoko Umemoto",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		141,
	],

	hp: 150,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Kabuto",
		fr: "Kabuto",
		es: "Kabuto",
		it: "Kabuto",
		pt: "Kabuto",
		de: "Kabuto"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Cling",
				fr: "Corps à Corps",
				es: "Agarrarse",
				it: "Aggrappare",
				pt: "Agarrar",
				de: "Klammern"
			},
			effect: {
				en: "Heal from this Pokémon the same amount of damage you did to your opponent's Active Pokémon.",
				fr: "Soignez à ce Pokémon la même quantité de dégâts que vous avez infligée au Pokémon Actif de votre adversaire.",
				es: "Cura a este Pokémon el mismo número de puntos de daño que hayas infligido al Pokémon Activo de tu rival.",
				it: "Cura questo Pokémon da una quantità di danni pari a quelli inflitti al Pokémon attivo del tuo avversario.",
				pt: "Cure deste Pokémon a mesma quantidade de danos que você causou ao Pokémon Ativo do seu oponente.",
				de: "Heile bei diesem Pokémon genauso viel Schaden, wie du dem Aktiven Pokémon deines Gegners zugefügt hast."
			},
			damage: 50,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "X-Scissor",
				fr: "Plaie-Croix",
				es: "Tijera X",
				it: "Forbice X",
				pt: "Tesoura X",
				de: "Kreuzschere"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 60 more damage.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 60 dégâts supplémentaires.",
				es: "Lanza 1 moneda. Si sale cara, este ataque hace 60 puntos de daño más.",
				it: "Lancia una moneta. Se esce testa, questo attacco infligge 60 danni in più.",
				pt: "Jogue uma moeda. Se sair cara, este ataque causará 60 de danos adicionais.",
				de: "Wirf 1 Münze. Bei \"Kopf\" fügt dieser Angriff 60 weitere Schadenspunkte zu."
			},
			damage: "80+",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 289865,
		tcgplayer: 117799
	}
}

export default card
