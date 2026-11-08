import { Card } from 'models/database/card'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,


	name: {
		'en-us': "Eldegoss",
		'fr-fr': "Blancoton",
		'es-es': "Eldegoss",
		'it-it': "Eldegoss",
		'pt-br': "Eldegoss",
		'de-de': "Cottomi"
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],
	stage: "Stage1",
	illustrator: "Kouki Saitou",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Cotton Lift",
			'fr-fr': "Coton Tonique",
			'es-es': "Impulso Algodón",
			'it-it': "Sollevacotone",
			'pt-br': "Cotton Lift",
			'de-de': "Wattelift"
		},

		effect: {
			'en-us': "Once during your turn, you may search your deck for up to 2 basic Energy cards, reveal them, and put them into your hand. Then, shuffle your deck.",
			'fr-fr': "Une fois pendant votre tour, vous pouvez chercher dans votre deck jusqu'à 2 cartes Énergie de base, les montrer, puis les ajouter à votre main. Mélangez ensuite votre deck.",
			'es-es': "Una vez durante tu turno, puedes buscar en tu baraja hasta 2 cartas de Energía Básica, enseñarlas y ponerlas en tu mano. Después, baraja las cartas de tu baraja.",
			'it-it': "Una sola volta durante il tuo turno, puoi cercare nel tuo mazzo fino a due carte Energia base, mostrarle e aggiungerle alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
			'pt-br': "Once during your turn, you may search your deck for up to 2 basic Energy cards, reveal them, and put them into your hand. Then, shuffle your deck.",
			'de-de': "Einmal während deines Zuges kannst du dein Deck nach bis zu 2 Basis-Energiekarten durchsuchen, sie deinem Gegner zeigen und auf deine Hand nehmen. Mische anschließend dein Deck."
		}
	}],

	attacks: [{
		name: {
			'en-us': "Cotton Guard",
			'fr-fr': "Cotogarde",
			'es-es': "Rizo Algodón",
			'it-it': "Cotonscudo",
			'pt-br': "Cotton Guard",
			'de-de': "Watteschild"
		},

		effect: {
			'en-us': "During your opponent's next turn, this Pokémon takes 30 less damage from attacks (after applying Weakness and Resistance).",
			'fr-fr': "Pendant le prochain tour de votre adversaire, ce Pokémon subit 30 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
			'es-es': "Durante el próximo turno de tu rival, los ataques hacen 30 puntos de daño menos a este Pokémon (después de aplicar Debilidad y Resistencia).",
			'it-it': "Durante il prossimo turno del tuo avversario, questo Pokémon subisce 30 danni in meno dagli attacchi, dopo aver applicato debolezza e resistenza.",
			'pt-br': "During your opponent's next turn, this Pokémon takes 30 less damage from attacks (after applying Weakness and Resistance).",
			'de-de': "Während des nächsten Zuges deines Gegners werden diesem Pokémon durch Attacken 30 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden)."
		},

		damage: 30,
		cost: ["Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,

	evolveFrom: {
		'en-us': "Gossifleur",
		'fr-fr': "Tournicoton",
		'es-es': "Gossifleur",
		'it-it': "Gossifleur",
		'pt-br': "Gossifleur",
		'de-de': "Cottini"
	},

	description: {
		'en-us': "The cotton on the head of this Pokémon can be spun into a glossy, gorgeous yarn—a Galar regional specialty."
	},

	dexId: [830],
	regulationMark: "E",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 574040,
				tcgplayer: 246831
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 574040,
				tcgplayer: 246831
			}
		},
	],
}

export default card
