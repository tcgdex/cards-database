import { Card } from 'models/database/card'
import Set from '../Dragon Majesty'

const card: Card = {
	name: {
		'en-us': "Heatmor",
		'fr-fr': "Aflamanoir",
		'es-es': "Heatmor",
		'it-it': "Heatmor",
		'pt-br': "Heatmor",
		'de-de': "Furnifraß"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		631,
	],

	hp: 110,

	types: [
		"Fire",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				'en-us': "Singe",
				'fr-fr': "Roussi",
				'es-es': "Quemadura",
				'it-it': "Scottata",
				'pt-br': "Chamuscada",
				'de-de': "Versengung"
			},
			effect: {
				'en-us': "Your opponent’s Active Pokémon is now Burned.",
				'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Brûlé.",
				'es-es': "El Pokémon Activo de tu rival pasa a estar Quemado.",
				'it-it': "Il Pokémon attivo del tuo avversario viene bruciato.",
				'pt-br': "O Pokémon Ativo do seu oponente agora está Queimado.",
				'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verbrannt."
			},

		},
		{
			cost: [
				"Fire",
				"Fire",
			],
			name: {
				'en-us': "Charring Breath",
				'fr-fr': "Souffle Incendiaire",
				'es-es': "Aliento Incendiario",
				'it-it': "Incenerespiro",
				'pt-br': "Hálito Carbonizador",
				'de-de': "Schwelender Atem"
			},
			effect: {
				'en-us': "If your opponent’s Active Pokémon isn’t Burned, this attack does nothing.",
				'fr-fr': "Si le Pokémon Actif de votre adversaire n’est pas Brûlé, cette attaque ne fait rien.",
				'es-es': "Si el Pokémon Activo de tu rival no está Quemado, este ataque no hace nada.",
				'it-it': "Se il Pokémon attivo del tuo avversario non è bruciato, questo attacco non ha effetto.",
				'pt-br': "Se o Pokémon Ativo do seu oponente não estiver Queimado, este ataque não fará nada.",
				'de-de': "Wenn das Aktive Pokémon deines Gegners nicht verbrannt ist, hat diese Attacke keine Auswirkungen."
			},
			damage: 120,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "It draws in air through its tail, transforms it into fire, and uses it like a tongue. It melts Durant and eats them.",
	},

	thirdParty: {
		cardmarket: 363482,
		tcgplayer: 175312
	}
}

export default card
