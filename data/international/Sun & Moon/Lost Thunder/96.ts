import { Card } from 'models/database/card'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		'en-us': "Sableye",
		'fr-fr': "Ténéfix",
		'es-es': "Sableye",
		'it-it': "Sableye",
		'pt-br': "Sableye",
		'de-de': "Zobiris"
	},

	illustrator: "Miki Tanaka",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		302,
	],

	hp: 80,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Quick Hunt",
				'fr-fr': "Chasse Express",
				'es-es': "Caza Rápida",
				'it-it': "Caccia Rapida",
				'pt-br': "Caçada Ligeira",
				'de-de': "Schnelle Jagd"
			},
			effect: {
				'en-us': "If you go first, you can use this attack on your first turn. Search your deck for a card and put it into your hand. Then, shuffle your deck.",
				'fr-fr': "Si vous jouez en premier, vous pouvez utiliser cette attaque lors de votre premier tour. Cherchez une carte dans votre deck, puis ajoutez-la à votre main. Mélangez ensuite votre deck.",
				'es-es': "Si sales primero, puedes usar este ataque durante tu primer turno. Busca en tu baraja 1 carta y ponla en tu mano. Después, baraja las cartas de tu baraja.",
				'it-it': "Se inizi per primo, puoi usare questo attacco durante il tuo primo turno. Cerca nel tuo mazzo una carta qualsiasi e aggiungila a quelle che hai in mano. Poi rimischia le carte del tuo mazzo.",
				'pt-br': "Se você for primeiro, poderá usar este ataque na sua primeira vez de jogar. Procure por 1 carta no seu baralho e coloque-a na sua mão. Em seguida, embaralhe o seu baralho.",
				'de-de': "Wenn du als Erster am Zug bist, kannst du diese Attacke während deines ersten Zuges einsetzen. Durchsuche dein Deck nach 1 Karte und nimm sie auf deine Hand. Mische anschließend dein Deck."
			},

		},
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Cursed Drop",
				'fr-fr': "Chute Maudite",
				'es-es': "Caída Maldita",
				'it-it': "Caduta Maledetta",
				'pt-br': "Queda Amaldiçoada",
				'de-de': "Verfluchter Fall"
			},
			effect: {
				'en-us': "Put 3 damage counters on your opponent’s Pokémon in any way you like.",
				'fr-fr': "Placez 3 marqueurs de dégâts sur les Pokémon de votre adversaire de la manière que vous voulez.",
				'es-es': "Pon 3 contadores de daño en los Pokémon de tu rival de la manera que desees.",
				'it-it': "Distribuisci a piacimento tre segnalini danno sui Pokémon del tuo avversario.",
				'pt-br': "Coloque 3 contadores de dano nos Pokémon do seu oponente como desejar.",
				'de-de': "Lege 3 Schadensmarken beliebig auf die Pokémon deines Gegners."
			},

		},
	],

	retreat: 1,

	description: {
		'en-us': "This Pokémon is feared. When its gemstone eyes begin to glow with a sinister shine, it's believed that Sableye will steal people's spirits away.",
	},

	thirdParty: {
		cardmarket: 365733,
		tcgplayer: 178907
	}
}

export default card
