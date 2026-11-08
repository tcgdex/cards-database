import { Card } from "models/database/card"
import Set from "../Temporal Forces"

const card: Card = {
	dexId: [851],
	set: Set,

	name: {
		'en-us': "Centiskorch",
		'fr-fr': "Scolocendre",
		'es-es': "Centiskorch",
		'it-it': "Centiskorch",
		'pt-br': "Centiskorch",
		'de-de': "Infernopod"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 140,
	types: ["Fire"],
	evolveFrom: {
		'en-us': "Sizzlipede",
		'fr-fr': "Grillepattes",
		'es-es': "Sizzlipede",
		'it-it': "Sizzlipede",
		'pt-br': "Sizzlipede",
		'de-de': "Thermopod"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Fire"],

		name: {
			'en-us': "Singe",
			'fr-fr': "Roussi",
			'es-es': "Quemadura",
			'it-it': "Scottata",
			'pt-br': "Chamuscada",
			'de-de': "Versengung"
		},

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Burned.",
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Brûlé.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Quemado.",
			'it-it': "Il Pokémon attivo del tuo avversario viene bruciato.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Queimado.",
			'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verbrannt."
		}
	}, {
		cost: ["Fire", "Fire"],

		name: {
			'en-us': "Charring Breath",
			'fr-fr': "Souffle Incendiaire",
			'es-es': "Aliento Incendiario",
			'it-it': "Incenerespiro",
			'pt-br': "Hálito Carbonizador",
			'de-de': "Schwelender Atem"
		},

		effect: {
			'en-us': "If your opponent's Active Pokémon isn't Burned, this attack does nothing.",
			'fr-fr': "Si le Pokémon Actif de votre adversaire n'est pas Brûlé, cette attaque ne fait rien.",
			'es-es': "Si el Pokémon Activo de tu rival no está Quemado, este ataque no hace nada.",
			'it-it': "Se il Pokémon attivo del tuo avversario non è bruciato, questo attacco non ha effetto.",
			'pt-br': "Se o Pokémon Ativo do seu oponente não estiver Queimado, este ataque não fará nada.",
			'de-de': "Wenn das Aktive Pokémon deines Gegners nicht verbrannt ist, hat diese Attacke keine Auswirkungen."
		},

		damage: 180
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "H",

	description: {
		'en-us': "When it heats up, its body temperature reaches about 1,500 degrees Fahrenheit. It lashes its body like a whip and launches itself at enemies.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 760667,
				tcgplayer: 542781
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 760667,
				tcgplayer: 542781
			}
		},
	],

	illustrator: "Krgc",

}

export default card