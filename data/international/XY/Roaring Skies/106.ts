import { Card } from 'models/database/card'
import Set from '../Roaring Skies'

const card: Card = {
	name: {
		'en-us': "Shaymin EX",
		'fr-fr': "Shaymin EX",
		'es-es': "Shaymin EX",
		'it-it': "Shaymin EX",
		'pt-br': "Shaymin EX",
		'de-de': "Shaymin EX"
	},

	illustrator: "Ryo Ueda",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		492,
	],

	hp: 110,

	types: [
		"Colorless",
	],

	suffix: "EX",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Set Up",
				'fr-fr': "Mise en Place",
				'es-es': "Disposición",
				'it-it': "Preparativi",
				'pt-br': "Acerto",
				'de-de': "Aufbauen"
			},
			effect: {
				'en-us': "When you play this Pokémon from your hand onto your Bench, you may draw cards until you have 6 cards in your hand.",
				'fr-fr': "Lorsque vous jouez ce Pokémon de votre main sur votre Banc, vous pouvez piocher des cartes jusqu'à ce que vous ayez 6 cartes en main.",
				'es-es': "Cuando juegues este Pokémon de tu mano a tu Banca, puedes robar cartas hasta que tengas 6 cartas en tu mano.",
				'it-it': "Quando giochi questo Pokémon dalla tua mano e lo metti in panchina, puoi pescare fino ad avere sei carte in mano.",
				'pt-br': "Ao jogar este Pokémon da sua mão em seu Banco, você poderá comprar cards até ter 6 cards na mão.",
				'de-de': "Wenn du dieses Pokémon von deiner Hand spielst und auf deine Bank legst, kannst du so viele Karten ziehen, bis du 6 Karten auf der Hand hast."
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
				'en-us': "Sky Return",
				'fr-fr': "Retour Aérien",
				'es-es': "Vuelta Celestial",
				'it-it': "Aeroritorno",
				'pt-br': "Retorno para o Céu",
				'de-de': "Himmelsgabe"
			},
			effect: {
				'en-us': "Return this Pokémon and all cards attached to it to your hand.",
				'fr-fr': "Reprenez ce Pokémon et toutes les cartes qui lui sont attachées dans votre main.",
				'es-es': "Devuelve este Pokémon y todas las cartas unidas a él a tu mano.",
				'it-it': "Riprendi in mano questo Pokémon e tutte le carte a esso assegnate.",
				'pt-br': "Devolva este Pokémon e todos os cards ligados a ele para sua mão.",
				'de-de': "Nimm dieses Pokémon und alle daran angelegten Karten zurück auf deine Hand."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 1,
	stage: "Basic",

	thirdParty: {
		cardmarket: 282745,
		tcgplayer: 98142
	}
}

export default card
