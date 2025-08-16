import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	dexId: [455],

	name: {
		en: "Carnivine",
		fr: "Vortente",
		es: "Carnivine",
		it: "Carnivine",
		pt: "Carnivine",
		de: "Venuflibis"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,
	hp: 90,

	types: [
		"Grass",
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Return",
				fr: "Retour",
				es: "Retribución",
				it: "Ritorno",
				pt: "Retorno",
				de: "Rückkehr"
			},
			effect: {
				en: "You may draw cards until you have 5 cards in your hand.",
				fr: "Vous pouvez piocher des cartes jusqu'à en avoir 5 en main.",
				es: "Puedes robar cartas hasta que tengas 5 cartas en tu mano.",
				it: "Puoi pescare fino ad avere cinque carte in mano.",
				pt: "Você pode comprar cartas até ter 5 cartas na sua mão.",
				de: "Du kannst so lange Karten ziehen, bis du 5 Karten auf deiner Hand hast."
			},
			damage: 20,

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Giga Drain",
				fr: "Giga-Sangsue",
				es: "Gigadrenado",
				it: "Gigassorbimento",
				pt: "Gigadreno",
				de: "Gigasauger"
			},
			effect: {
				en: "Heal from this Pokémon the same amount of damage you did to your opponent's Active Pokémon.",
				fr: "Soignez ce Pokémon du nombre de dégâts que vous avez infligés au Pokémon Actif de votre adversaire.",
				es: "Cura a este Pokémon la misma cantidad de puntos de daño que hayas infligido al Pokémon Activo de tu rival.",
				it: "Cura questo Pokémon da una quantità di danni pari a quelli che hai inflitto al Pokémon attivo del tuo avversario.",
				pt: "Cure deste Pokémon a mesma quantidade de dano que você causou ao Pokémon Ativo do seu oponente.",
				de: "Heile bei diesem Pokémon genauso viel Schaden, wie du dem Aktiven Pokémon deines Gegners zugefügt hast."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	stage: "Basic",

	description: {
		en: "It binds itself to trees in marshes. It attracts prey with its sweet-smelling drool and gulps them down."
	},

	thirdParty: {
		cardmarket: 482899,
		tcgplayer: 219069
	}
}

export default card
