import { Card } from "models/database/card"
import Set from "../Crown Zenith"

const card: Card = {
	dexId: [758],
	set: Set,

	name: {
		'en-us': "Salazzle",
		'fr-fr': "Malamandre",
		'es-es': "Salazzle",
		'it-it': "Salazzle",
		'pt-br': "Salazzle",
		'de-de': "Amfira"
	},

	illustrator: "aoki",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Fire"],

	evolveFrom: {
		'en-us': "Salandit",
		'fr-fr': "Tritox",
		'es-es': "Salandit",
		'it-it': "Salandit",
		'pt-br': "Salandit",
		'de-de': "Molunk"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Tail Trickery",
			'fr-fr': "Queue Étourdissante",
			'es-es': "Cola Engaño",
			'it-it': "Confondicoda",
			'pt-br': "Truques de Cauda",
			'de-de': "Schweiftrick"
		},

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Confused.",
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Confus.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Confundido.",
			'it-it': "Il Pokémon attivo del tuo avversario viene confuso.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Confuso.",
			'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verwirrt."
		},

		damage: 20
	}, {
		cost: ["Fire", "Colorless"],

		name: {
			'en-us': "Super Singe",
			'fr-fr': "Super Roussi",
			'es-es': "Superquemadura",
			'it-it': "Super Scottata",
			'pt-br': "Superchamuscada",
			'de-de': "Super-Versengung"
		},

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Burned.",
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Brûlé.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Quemado.",
			'it-it': "Il Pokémon attivo del tuo avversario viene bruciato.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Queimado.",
			'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verbrannt."
		},

		damage: 60
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "F",


	description: {
		'en-us': "Only female Salazzle exist. They emit a gas laden with pheromones to captivate male Salandit.",
	},

	

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 691745,
				tcgplayer: 478126
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 691745,
				tcgplayer: 478126
			}
		},
	],
}

export default card
