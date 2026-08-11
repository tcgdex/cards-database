import { Card } from "models/database/card"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [615],
	set: Set,

	name: {
		'fr-fr': "Hexagel",
		'en-us': "Cryogonal",
		'es-es': "Cryogonal",
		'it-it': "Cryogonal",
		'pt-br': "Cryogonal",
		'de-de': "Frigometri"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'fr-fr': "Premier Gel",
			'en-us': "First Freeze",
			'es-es': "Primera Congelación",
			'it-it': "Prima Gelata",
			'pt-br': "Congelamento Primário",
			'de-de': "Erster Frost"
		},

		effect: {
			'fr-fr': "Si vous jouez en second et que c'est votre premier tour, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
			'en-us': "If you go second and it's your first turn, your opponent's Active Pokémon is now Paralyzed.",
			'es-es': "Si sales en segundo lugar y es tu primer turno, el Pokémon Activo de tu rival pasa a estar Paralizado.",
			'it-it': "Se inizi per secondo ed è il tuo primo turno, il Pokémon attivo del tuo avversario viene paralizzato.",
			'pt-br': "Se você for o segundo a jogar e este for o seu primeiro turno, o Pokémon Ativo do seu oponente agora estará Paralisado.",
			'de-de': "Wenn du als Zweiter am Zug bist und es dein erster Zug ist, ist das Aktive Pokémon deines Gegners jetzt paralysiert."
		},

		damage: 30
	}],

	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	description: {
		'en-us': "Cryogonal appear during cold seasons. It is said that people and Pokémon who die on snowy mountains are reborn into these Pokémon.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 725135,
				tcgplayer: 509802,
				cardtrader: 255615
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 725135,
				tcgplayer: 509802,
				cardtrader: 255615
			}
		},
	],

	illustrator: "kirisAki",

	
}

export default card
