import { Card } from "models/database/card"
import Set from "../SVP Black Star Promos"

const card: Card = {
	dexId: [909],
	set: Set,

	name: {
		'en-us': "Fuecoco",
		'fr-fr': "Chochodile",
		'es-es': "Fuecoco",
		'it-it': "Fuecoco",
		'pt-br': "Fuecoco",
		'de-de': "Krokel"
	},

	rarity: "Promo",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Fire", "Fire", "Colorless"],

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

		damage: 30
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",
	illustrator: "Ryuta Fuse",
	description: {
		'en-us': "It lies on warm rocks and uses the heat absorbed by its square-shaped scales to create fire energy.",
	},
	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 690962,
				tcgplayer: 477182
			},
		}
	],
}

export default card
