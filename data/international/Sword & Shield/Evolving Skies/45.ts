import { Card } from 'models/database/card'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,


	name: {
		'en-us': "Avalugg",
		'fr-fr': "Séracrawl",
		'es-es': "Avalugg",
		'it-it': "Avalugg",
		'pt-br': "Avalugg",
		'de-de': "Arktilas"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 150,
	types: ["Water"],
	stage: "Stage1",
	illustrator: "Kouki Saitou",

	attacks: [{
		name: {
			'en-us': "Frost Barrier",
			'fr-fr': "Barrière de Givre",
			'es-es': "Barrera Gélida",
			'it-it': "Gelobarriera",
			'pt-br': "Frost Barrier",
			'de-de': "Frostschutz"
		},

		effect: {
			'en-us': "During your opponent's next turn, this Pokémon takes 30 less damage from attacks (after applying Weakness and Resistance).",
			'fr-fr': "Pendant le prochain tour de votre adversaire, ce Pokémon subit 30 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
			'es-es': "Durante el próximo turno de tu rival, los ataques hacen 30 puntos de daño menos a este Pokémon (después de aplicar Debilidad y Resistencia).",
			'it-it': "Durante il prossimo turno del tuo avversario, questo Pokémon subisce 30 danni in meno dagli attacchi, dopo aver applicato debolezza e resistenza.",
			'pt-br': "During your opponent's next turn, this Pokémon takes 30 less damage from attacks (after applying Weakness and Resistance).",
			'de-de': "Während des nächsten Zuges deines Gegners werden diesem Pokémon durch Attacken 30 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden)."
		},

		damage: 80,
		cost: ["Water", "Colorless", "Colorless"]
	}, {
		name: {
			'en-us': "Hammer In",
			'fr-fr': "Enfoncement",
			'es-es': "Martillear",
			'it-it': "Martello",
			'pt-br': "Hammer In",
			'de-de': "Einhämmern"
		},

		damage: 140,
		cost: ["Water", "Water", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 4,

	evolveFrom: {
		'en-us': "Bergmite",
		'fr-fr': "Grelaçon",
		'es-es': "Bergmite",
		'it-it': "Bergmite",
		'pt-br': "Bergmite",
		'de-de': "Arktip"
	},

	description: {
		'en-us': "As Avalugg moves about during the day, the cracks in its body deepen. The Pokémon's body returns to a pristine state overnight."
	},

	dexId: [713],
	regulationMark: "E",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 574069,
				tcgplayer: 246870
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 574069,
				tcgplayer: 246870
			}
		},
	],
}

export default card
