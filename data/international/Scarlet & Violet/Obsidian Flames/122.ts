import { Card } from "models/database/card"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [969],
	set: Set,

	name: {
		'fr-fr': "Germéclat",
		'en-us': "Glimmet",
		'es-es': "Glimmet",
		'it-it': "Glimmet",
		'pt-br': "Glimmet",
		'de-de': "Lumispross"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Fighting", "Fighting"],

		name: {
			'fr-fr': "Éclat Empoisonné",
			'en-us': "Poison Shard",
			'es-es': "Esquirla Veneno",
			'it-it': "Velenoscheggia",
			'pt-br': "Estilhaço Venenoso",
			'de-de': "Giftsplitter"
		},

		effect: {
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
			'en-us': "Your opponent's Active Pokémon is now Poisoned.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Envenenado.",
			'it-it': "Il Pokémon attivo del tuo avversario viene avvelenato.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Envenenado.",
			'de-de': "Das Aktive Pokémon deines Gegners ist jetzt vergiftet."
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",

	description: {
		'en-us': "It absorbs nutrients from cave walls. The petals it wears are made of crystallized poison.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 725202,
				tcgplayer: 509875,
				cardtrader: 255807
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 725202,
				tcgplayer: 509875,
				cardtrader: 255807
			}
		},
	],

	illustrator: "GIDORA",

	
}

export default card
