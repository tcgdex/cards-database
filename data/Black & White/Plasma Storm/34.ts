import { Card } from '../../../interfaces'
import Set from '../Plasma Storm'

const card: Card = {
	name: {
		en: "Manaphy",
		fr: "Manaphy",
		es: "Manaphy",
		it: "Manaphy",
		pt: "Manaphy",
		de: "Manaphy"
	},
	illustrator: "Naoki Saito",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		490,
	],
	hp: 70,
	types: [
		"Water",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Final Wish",
				fr: "Dernier Souhait",
				es: "Último Deseo",
				it: "Ultimo Desiderio",
				pt: "Desejo Final",
				de: "Letzter Wunsch"
			},
			effect: {
				en: "When this Pokémon is Knocked Out by damage from an opponent’s attack, search your deck for a card and put it into your hand. Shuffle your deck afterward.",
				fr: "Lorsque ce Pokémon est mis K.O. par les dégâts d’une attaque de votre adversaire, cherchez une carte dans votre deck puis ajoutez-la à votre main. Mélangez ensuite votre deck.",
				es: "Cuando este Pokémon quede Fuera de Combate por el daño de un ataque de tu rival, busca en tu baraja una carta y ponla en tu mano. Baraja las cartas de tu baraja después.",
				it: "Quando questo Pokémon viene messo K.O. dai danni inflitti da un attacco del tuo avversario, cerca nel tuo mazzo una carta qualsiasi e aggiungila a quelle che hai in mano. Poi rimischia le carte del tuo mazzo.",
				pt: "Quando esse Pokémon é Nocauteado por danos causados pelo ataque de um oponente, procure um card em seu baralho e coloque-o em sua mão. Em seguida, embaralhe seus cards.",
				de: "Wenn dieses Pokémon durch Schaden eines gegnerischen Angriffs kampfunfähig wird, durchsuche dein Deck nach 1 Karte und nimm sie auf deine Hand. Mische anschließend dein Deck."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Seafaring",
				fr: "Voyage en Mer",
			},
			effect: {
				en: "Flip 3 coins. For each heads, attach a Water Energy card from your discard pile to your Benched Pokémon in any way you like.",
				fr: "Lancez 3 pièces. Pour chaque côté face, attachez une carte Énergie Water de votre pile de défausse à vos Pokémon de Banc, de la manière que vous voulez.",
			},

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
