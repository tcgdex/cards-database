import { Card } from 'models/database/card'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,
	illustrator: "Misa Tsutsui",
	category: "Pokemon",

	description: {
		'en-us': "This species lives in antique teapots. Most pots are forgeries, but on rare occasions, an authentic work is found."
	},

	stage: "Stage1",

	name: {
		'en-us': "Polteageist",
		'fr-fr': "Polthégeist",
		'de-de': "Mortipot",
		'es-es': "Polteageist",
		'pt-br': "Polteageist",
		'it-it': "Polteageist"
	},

	rarity: "Promo",
	dexId: [855],
	hp: 60,
	types: ["Psychic"],

	evolveFrom: {
		'en-us': "Sinistea",
		'fr-fr': "Théffroi",
		'de-de': "Fatalitee",
		'es-es': "Sinistea",
		'pt-br': "Sinistea",
		'it-it': "Sinistea"
	},

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Tea Break",
			'fr-fr': "Heure du Thé",
			'de-de': "Teepause",
			'es-es': "Momento del Té",
			'pt-br': "Intervalo do Chá",
			'it-it': "Pausa Tè"
		},

		effect: {
			'en-us': "You must discard a Pokémon that has the Mad Party attack from your hand in order to use this Ability. Once during your turn, you may draw 2 cards.",
			'fr-fr': "Vous devez défausser un Pokémon qui a l'attaque Folle Aventure de votre main pour pouvoir utiliser ce talent. Une fois pendant votre tour, vous pouvez piocher 2 cartes.",
			'de-de': "Du musst 1 Pokémon, das die Attacke Verrückte Party hat, aus deiner Hand auf deinen Ablagestapel legen, um diese Fähigkeit einzusetzen. Einmal während deines Zuges kannst du 2 Karten ziehen.",
			'es-es': "Debes descartar de tu mano 1 Pokémon que tenga el ataque Merienda de Locos para poder usar esta habilidad. Una vez durante tu turno, puedes robar 2 cartas.",
			'pt-br': "Você deve descartar 1 Pokémon que tiver o ataque Festa Maluca da sua mão para usar esta Habilidade. Uma vez durante o seu turno, você poderá comprar 2 cartas.",
			'it-it': "Devi scartare un Pokémon che ha l'attacco Festa di Matti dalla tua mano per usare questa abilità. Una sola volta durante il tuo turno, puoi pescare due carte."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Mad Party",
			'fr-fr': "Folle Aventure",
			'de-de': "Verrückte Party",
			'es-es': "Merienda de Locos",
			'pt-br': "Festa Maluca",
			'it-it': "Festa di Matti"
		},

		effect: {
			'en-us': "This attack does 20 damage for each Pokémon in your discard pile that has the Mad Party attack.",
			'fr-fr': "Cette attaque inflige 20 dégâts pour chaque Pokémon dans votre pile de défausse qui a l'attaque Folle Aventure.",
			'de-de': "Diese Attacke fügt für jedes Pokémon in deinem Ablagestapel, das die Attacke Verrückte Party hat, 20 Schadenspunkte zu.",
			'es-es': "Este ataque hace 20 puntos de daño por cada Pokémon en tu pila de descartes que tenga el ataque Merienda de Locos.",
			'pt-br': "Este ataque causa 20 pontos de dano para cada Pokémon na sua pilha de descarte que tiver o ataque Festa Maluca.",
			'it-it': "Questo attacco infligge 20 danni per ogni Pokémon nella tua pila degli scarti che ha l'attacco Festa di Matti."
		},

		damage: "20×"
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	regulationMark: "D",

	thirdParty: {
		cardmarket: 461664
	}
}

export default card
