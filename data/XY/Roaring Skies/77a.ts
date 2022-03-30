import { Card } from '../../../interfaces'
import Set from '../Roaring Skies'

const card: Card = {
	name: {
		en: "Shaymin EX",
		fr: "Shaymin EX",
		es: "Shaymin EX",
		it: "Shaymin EX",
		pt: "Shaymin EX",
		de: "Shaymin EX"
	},

	illustrator: "Ayaka Yoshida",
	rarity: "Rare",
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
				en: "Set Up",
				fr: "Mise en Place",
				es: "Disposición",
				it: "Preparativi",
				pt: "Acerto",
				de: "Aufbauen"
			},
			effect: {
				en: "When you play this Pokémon from your hand onto your Bench, you may draw cards until you have 6 cards in your hand.",
				fr: "Lorsque vous jouez ce Pokémon de votre main sur votre Banc, vous pouvez piocher des cartes jusqu'à ce que vous ayez 6 cartes en main.",
				es: "Cuando juegues este Pokémon de tu mano a tu Banca, puedes robar cartas hasta que tengas 6 cartas en tu mano.",
				it: "Quando giochi questo Pokémon dalla tua mano e lo metti in panchina, puoi pescare fino ad avere sei carte in mano.",
				pt: "Ao jogar este Pokémon da sua mão em seu Banco, você poderá comprar cards até ter 6 cards na mão.",
				de: "Wenn du dieses Pokémon von deiner Hand spielst und auf deine Bank legst, kannst du so viele Karten ziehen, bis du 6 Karten auf der Hand hast."
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
				en: "Sky Return",
				fr: "Retour Aérien",
				es: "Vuelta Celestial",
				it: "Aeroritorno",
				pt: "Retorno para o Céu",
				de: "Himmelsgabe"
			},
			effect: {
				en: "Return this Pokémon and all cards attached to it to your hand.",
				fr: "Reprenez ce Pokémon et toutes les cartes qui lui sont attachées dans votre main.",
				es: "Devuelve este Pokémon y todas las cartas unidas a él a tu mano.",
				it: "Riprendi in mano questo Pokémon e tutte le carte a esso assegnate.",
				pt: "Devolva este Pokémon e todos os cards ligados a ele para sua mão.",
				de: "Nimm dieses Pokémon und alle daran angelegten Karten zurück auf deine Hand."
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

	stage: "Basic",
	retreat: 1
}

export default card
