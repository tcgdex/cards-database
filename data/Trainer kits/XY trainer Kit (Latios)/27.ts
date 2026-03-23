import { Card } from '../../../interfaces'
import Set from '../XY trainer Kit (Latios)'

const card: Card = {
	dexId: [300],
	set: Set,

	name: {
		en: "Skitty",
		fr: "Skitty",
		es: "Skitty",
		it: "Skitty",
		pt: "Skitty",
		de: "Eneco"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 50,
	types: ["Colorless"],
	stage: "Basic",
	retreat: 1,

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				fr: "Charme",
			},
			effect: {
				fr: "Pendant le prochain tour de votre adversaire, tous les dégâts infligés par des attaques du Pokémon Défenseur sont réduits de 20 (avant application de la Faiblesse et de la Résistance).",
			},
		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				fr: "Coup de Queue",
			},
			damage: "20",
		},
	],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	thirdParty: {
		tcgplayer: 98348
	}
}

export default card