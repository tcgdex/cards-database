import { Card } from 'models/database/card'
import Set from '../Battle Styles'

const card: Card = {
	dexId: [71],
	set: Set,

	name: {
		'en-us': "Victreebel",
		'fr-fr': "Empiflor",
		'es-es': "Victreebel",
		'it-it': "Victreebel",
		'pt-br': "Victreebel",
		'de-de': "Sarzenia"
	},

	illustrator: "Tika Matsuno",
	rarity: "Rare",
	category: "Pokemon",
	hp: 150,
	types: ["Grass"],

	evolveFrom: {
		'en-us': "Weepinbell",
		'fr-fr': "Boustiflor",
		'es-es': "Weepinbell",
		'it-it': "Weepinbell",
		'pt-br': "Weepinbell",
		'de-de': "Ultrigaria"
	},

	attacks: [{
		name: {
			'en-us': "Panic Vine",
			'fr-fr': "Liane en Panique",
			'es-es': "Liana del Pánico",
			'it-it': "Lianapanico",
			'pt-br': "Vinha do Pânico",
			'de-de': "Panikranke"
		},

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Confused. During your opponent's next turn, that Pokémon can't retreat.",
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Confus. Pendant le prochain tour de votre adversaire, ce Pokémon-là ne peut pas battre en retraite.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Confundido. Durante el próximo turno de tu rival, ese Pokémon no puede retirarse.",
			'it-it': "Il Pokémon attivo del tuo avversario viene confuso. Durante il prossimo turno del tuo avversario, quel Pokémon non può ritirarsi.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Confuso. Durante o próximo turno do seu oponente, aquele Pokémon não poderá recuar.",
			'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verwirrt. Während des nächsten Zuges deines Gegners kann sich jenes Pokémon nicht zurückziehen."
		},

		damage: 40,
		cost: ["Grass"]
	}, {
		name: {
			'en-us': "Solar Beam",
			'fr-fr': "Lance-Soleil",
			'es-es': "Rayo Solar",
			'it-it': "Solarraggio",
			'pt-br': "Raio Solar",
			'de-de': "Solarstrahl"
		},

		damage: 120,
		cost: ["Grass", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "E",


	stage: "Stage2",

	description: {
		'en-us': "Once ingested into this Pokémon's body, even the hardest object will melt into nothing."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 544911,
				tcgplayer: 234038
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 544911,
				tcgplayer: 234038
			}
		},
	],
}

export default card
