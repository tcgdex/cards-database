import { Card } from '../../../interfaces'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		en: "Sableye",
		fr: "Ténéfix",
		es: "Sableye",
		it: "Sableye",
		pt: "Sableye",
		de: "Zobiris"
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
				en: "Quick Hunt",
				fr: "Chasse Express",
				es: "Caza Rápida",
				it: "Caccia Rapida",
				pt: "Caçada Ligeira",
				de: "Schnelle Jagd"
			},
			effect: {
				en: "If you go first, you can use this attack on your first turn. Search your deck for a card and put it into your hand. Then, shuffle your deck.",
				fr: "Si vous jouez en premier, vous pouvez utiliser cette attaque lors de votre premier tour. Cherchez une carte dans votre deck, puis ajoutez-la à votre main. Mélangez ensuite votre deck.",
				es: "Si sales primero, puedes usar este ataque durante tu primer turno. Busca en tu baraja 1 carta y ponla en tu mano. Después, baraja las cartas de tu baraja.",
				it: "Se inizi per primo, puoi usare questo attacco durante il tuo primo turno. Cerca nel tuo mazzo una carta qualsiasi e aggiungila a quelle che hai in mano. Poi rimischia le carte del tuo mazzo.",
				pt: "Se você for primeiro, poderá usar este ataque na sua primeira vez de jogar. Procure por 1 carta no seu baralho e coloque-a na sua mão. Em seguida, embaralhe o seu baralho.",
				de: "Wenn du als Erster am Zug bist, kannst du diese Attacke während deines ersten Zuges einsetzen. Durchsuche dein Deck nach 1 Karte und nimm sie auf deine Hand. Mische anschließend dein Deck."
			},

		},
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Cursed Drop",
				fr: "Chute Maudite",
				es: "Caída Maldita",
				it: "Caduta Maledetta",
				pt: "Queda Amaldiçoada",
				de: "Verfluchter Fall"
			},
			effect: {
				en: "Put 3 damage counters on your opponent’s Pokémon in any way you like.",
				fr: "Placez 3 marqueurs de dégâts sur les Pokémon de votre adversaire de la manière que vous voulez.",
				es: "Pon 3 contadores de daño en los Pokémon de tu rival de la manera que desees.",
				it: "Distribuisci a piacimento tre segnalini danno sui Pokémon del tuo avversario.",
				pt: "Coloque 3 contadores de dano nos Pokémon do seu oponente como desejar.",
				de: "Lege 3 Schadensmarken beliebig auf die Pokémon deines Gegners."
			},

		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 365733,
		tcgplayer: 178907
	}
}

export default card
