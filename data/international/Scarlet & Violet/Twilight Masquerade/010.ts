import { Card } from "models/database/card"
import Set from "../Twilight Masquerade"

const card: Card = {
	dexId: [314],
	set: Set,

	name: {
		'en-us': "Illumise",
		'fr-fr': "Lumivole",
		'es-es': "Illumise",
		'it-it': "Illumise",
		'pt-br': "Illumise",
		'de-de': "Illumise"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Slowing Perfume",
			'fr-fr': "Parfum Ralentissant",
			'es-es': "Aroma Ralentizador",
			'it-it': "Profumo Frenante",
			'pt-br': "Fragrância Desaceleradora",
			'de-de': "Bremsendes Parfüm"
		},

		effect: {
			'en-us': "You can use this attack only if you go second, and only during your first turn. Shuffle 1 of your opponent's Benched Pokémon and all attached cards into their deck.",
			'fr-fr': "Vous ne pouvez utiliser cette attaque que si vous jouez en second et uniquement pendant votre premier tour. Mélangez l'un des Pokémon de Banc de votre adversaire et toutes les cartes qui lui sont attachées avec son deck.",
			'es-es': "Puedes usar este ataque solo si sales en segundo lugar, y solo durante tu primer turno. Pon 1 de los Pokémon en Banca de tu rival y todas las cartas unidas a él en su baraja, y barájalas todas.",
			'it-it': "Puoi usare questo attacco solo se inizi per secondo e solo durante il tuo primo turno. Rimischia uno dei Pokémon nella panchina del tuo avversario e tutte le carte a esso assegnate nel suo mazzo.",
			'pt-br': "Você só pode usar este ataque se for o segundo a jogar e somente durante o seu primeiro turno. Embaralhe 1 dos Pokémon no Banco do seu oponente e todas as cartas ligadas a ele no baralho dele.",
			'de-de': "Du kannst diese Attacke nur einsetzen, wenn du als Zweiter am Zug bist, und nur während deines ersten Zuges. Mische 1 Pokémon auf der Bank deines Gegners und alle angelegten Karten in sein Deck."
		}
	}, {
		cost: ["Grass", "Colorless"],

		name: {
			'en-us': "Glide",
			'fr-fr': "Glissement",
			'es-es': "Planeo",
			'it-it': "Aliante",
			'pt-br': "Planeio",
			'de-de': "Gleiten"
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
	regulationMark: "H",

	description: {
		'en-us': "It guides Volbeat to draw signs in the night sky. There are scholars who research the meaning of these signs.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 769184,
				tcgplayer: 550054
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 769184,
				tcgplayer: 550054
			}
		},
	],

	illustrator: "Orca",

}

export default card