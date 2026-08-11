import { Card } from 'models/database/card'
import Set from '../Darkness Ablaze'

const card: Card = {
	dexId: [855],

	name: {
		'en-us': "Polteageist",
		'fr-fr': "Polthégeist",
		'es-es': "Polteageist",
		'it-it': "Polteageist",
		'pt-br': "Polteageist",
		'de-de': "Mortipot"
	},

	illustrator: "kirisAki",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,
	hp: 60,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Sinistea",
		'fr-fr': "Théffroi",
		'es-es': "Sinistea",
		'it-it': "Sinistea",
		'pt-br': "Sinistea",
		'de-de': "Fatalitee"
	},

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Tea Break",
				'fr-fr': "Heure du Thé",
				'es-es': "Momento del Té",
				'it-it': "Pausa Tè",
				'pt-br': "Intervalo do Chá",
				'de-de': "Teepause"
			},
			effect: {
				'en-us': "You must discard a Pokémon that has the Mad Party attack from your hand in order to use this Ability. Once during your turn, you may draw 2 cards.",
				'fr-fr': "Vous devez défausser un Pokémon qui a l'attaque Folle Aventure de votre main pour pouvoir utiliser ce talent. Une fois pendant votre tour, vous pouvez piocher 2 cartes.",
				'es-es': "Debes descartar de tu mano 1 Pokémon que tenga el ataque Merienda de Locos para poder usar esta habilidad. Una vez durante tu turno, puedes robar 2 cartas.",
				'it-it': "Devi scartare un Pokémon che ha l'attacco Festa di Matti dalla tua mano per usare questa abilità. Una sola volta durante il tuo turno, puoi pescare due carte.",
				'pt-br': "Você deve descartar 1 Pokémon que tiver o ataque Festa Maluca da sua mão para usar esta Habilidade. Uma vez durante o seu turno, você poderá comprar 2 cartas.",
				'de-de': "Du musst 1 Pokémon, das die Attacke Verrückte Party hat, aus deiner Hand auf deinen Ablagestapel legen, um diese Fähigkeit einzusetzen. Einmal während deines Zuges kannst du 2 Karten ziehen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Mad Party",
				'fr-fr': "Folle Aventure",
				'es-es': "Merienda de Locos",
				'it-it': "Festa di Matti",
				'pt-br': "Festa Maluca",
				'de-de': "Verrückte Party"
			},
			effect: {
				'en-us': "This attack does 20 damage for each Pokémon in your discard pile that has the Mad Party attack.",
				'fr-fr': "Cette attaque inflige 20 dégâts pour chaque Pokémon dans votre pile de défausse qui a l'attaque Folle Aventure.",
				'es-es': "Este ataque hace 20 puntos de daño por cada Pokémon en tu pila de descartes que tenga el ataque Merienda de Locos.",
				'it-it': "Questo attacco infligge 20 danni per ogni Pokémon nella tua pila degli scarti che ha l'attacco Festa di Matti.",
				'pt-br': "Este ataque causa 20 pontos de dano para cada Pokémon na sua pilha de descarte que tiver o ataque Festa Maluca.",
				'de-de': "Diese Attacke fügt für jedes Pokémon in deinem Ablagestapel, das die Attacke Verrückte Party hat, 20 Schadenspunkte zu."
			},
			damage: "20×",

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	retreat: 1,
	regulationMark: "D",


	stage: "Stage1",

	description: {
		'en-us': "This species lives in antique teapots. Most pots are forgeries, but on rare occasions, an authentic work is found."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 483294,
				tcgplayer: 219470
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 483294,
				tcgplayer: 219470
			}
		},
	],
}

export default card
