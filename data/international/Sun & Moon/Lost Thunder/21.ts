import { Card } from 'models/database/card'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		'en-us': "Grovyle",
		'fr-fr': "Massko",
		'es-es': "Grovyle",
		'it-it': "Grovyle",
		'pt-br': "Grovyle",
		'de-de': "Reptain"
	},

	illustrator: "Ayaka Yoshida",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		253,
	],

	hp: 80,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Treecko",
		'fr-fr': "Arcko",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Sunshine Grace",
				'fr-fr': "Grâce Solaire",
				'es-es': "Gracia Solar",
				'it-it': "Belsole",
				'pt-br': "Atração Solar",
				'de-de': "Sonnenmut"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), you may search your deck for a Grass Pokémon, reveal it, and put it into your hand. Then, shuffle your deck.",
				'fr-fr': "Une seule fois pendant votre tour (avant votre attaque), vous pouvez chercher un Pokémon Grass dans votre deck, le montrer, puis l’ajouter à votre main. Mélangez ensuite votre deck.",
				'es-es': "Una vez durante tu turno (antes de tu ataque), puedes buscar en tu baraja 1 Pokémon Grass, enseñarlo y ponerlo en tu mano. Después, baraja las cartas de tu baraja.",
				'it-it': "Una sola volta durante il tuo turno, prima di attaccare, puoi cercare nel tuo mazzo un Pokémon Grass, mostrarlo e aggiungerlo alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
				'pt-br': "Uma vez durante a sua vez de jogar (antes de atacar), você pode procurar por 1 Pokémon Grass no seu baralho, revelá-lo e colocá-lo na sua mão. Em seguida, embaralhe o seu baralho.",
				'de-de': "Einmal während deines Zuges (bevor du angreifst) kannst du dein Deck nach 1 Grass-Pokémon durchsuchen, es deinem Gegner zeigen und auf deine Hand nehmen. Mische anschließend dein Deck."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
				"Grass",
			],
			name: {
				'en-us': "Slicing Blade",
				'fr-fr': "Lame Tranchante",
				'es-es': "Cuchilla Cortante",
				'it-it': "Affettalama",
				'pt-br': "Lâmina Fatiante",
				'de-de': "Schwertschneide"
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

	retreat: 2,

	description: {
		'en-us': "It lives in dense jungles. While closing in on its prey, it leaps from branch to branch.",
	},

	thirdParty: {
		cardmarket: 365614,
		tcgplayer: 178820
	}
}

export default card
