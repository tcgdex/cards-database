import { Card } from "models/database/card"
import Set from "../Astral Radiance"

const card: Card = {
	dexId: [492],
	set: Set,

	name: {
		'en-us': "Shaymin",
		'fr-fr': "Shaymin",
		'es-es': "Shaymin",
		'it-it': "Shaymin",
		'pt-br': "Shaymin",
		'de-de': "Shaymin"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Encouraging Gift",
			'fr-fr': "Cadeau Vivifiant",
			'es-es': "Regalo Prometedor",
			'it-it': "Dono Incoraggiante",
			'pt-br': "Presente Encorajador",
			'de-de': "Aufheiterndes Geschenk"
		},

		effect: {
			'en-us': "You can use this attack only if you go second, and only during your first turn. Search your deck for up to 3 cards and put them into your hand. Then, shuffle your deck.",
			'fr-fr': "Vous ne pouvez utiliser cette attaque que si vous jouez en second et uniquement pendant votre premier tour. Cherchez dans votre deck jusqu'à 3 cartes et ajoutez-les à votre main. Mélangez ensuite votre deck.",
			'es-es': "Puedes usar este ataque solo si sales segundo, y solo durante tu primer turno. Busca en tu baraja hasta 3 cartas y ponlas en tu mano. Después, baraja las cartas de tu baraja.",
			'it-it': "Puoi usare questo attacco solo se inizi per secondo e solo durante il tuo primo turno. Cerca nel tuo mazzo fino a tre carte e aggiungile a quelle che hai in mano. Poi rimischia le carte del tuo mazzo.",
			'pt-br': "Você só pode usar este ataque se for o segundo a jogar e somente no seu primeiro turno. Procure por até 3 cartas no seu baralho e coloque-as na sua mão. Em seguida, embaralhe o seu baralho.",
			'de-de': "Du kannst diese Attacke nur einsetzen, wenn du als Zweiter am Zug bist, und nur während deines ersten Zuges. Durchsuche dein Deck nach bis zu 3 Karten und nimm sie auf deine Hand. Mische anschließend dein Deck."
		}
	}, {
		cost: ["Grass"],

		name: {
			'en-us': "Flop",
			'fr-fr': "Flop",
			'es-es': "Vuelta",
			'it-it': "Tonfo",
			'pt-br': "Baque",
			'de-de': "Plumps"
		},

		damage: 30
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "F",


	description: {
		'en-us': "When the turning of seasons brings the cruel winter to its end and the joyous people give thanks to the heavens, Shaymin appears and covers the withered land with flowers.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 658507,
				tcgplayer: 272214
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 658507,
				tcgplayer: 272214
			}
		},
	],
}

export default card
