import { Card } from '../../../interfaces'
import Set from '../Hidden Fates Shiny Vault'

const card: Card = {
	name: {
		en: "Kartana-GX",
		fr: "Katagami-GX",
		de: "Katagami-GX"
	},
	illustrator: "5ban Graphics",
	rarity: "Shiny rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		798,
	],
	hp: 170,
	types: [
		"Metal",
	],


	suffix: "GX",
	abilities: [
		{
			type: "Ability",
			name: {
				en: "Slice Off",
				fr: "Trancher",
				de: "Abschneiden"
			},
			effect: {
				en: "When you play this Pokémon from your hand onto your Bench during your turn, you may discard a Special Energy from 1 of your opponent's Pokémon.",
				fr: "Lorsque vous jouez ce Pokémon de votre main sur votre Banc pendant votre tour, vous pouvez défausser une Énergie spéciale attachée à l’un des Pokémon de votre adversaire.",
				de: "Wenn du dieses Pokémon während deines Zuges aus deiner Hand auf deine Bank spielst, kannst du 1 Spezial-Energie von 1 Pokémon deines Gegners auf seinen Ablagestapel legen."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Gale Blade",
				fr: "Lame Bourrasque",
				de: "Sturmschwert"
			},
			effect: {
				en: "You may shuffle this Pokémon and all cards attached to it into your deck.",
				fr: "Vous pouvez mélanger ce Pokémon et toutes les cartes qui lui sont attachées avec votre deck.",
				de: "Du kannst dieses Pokémon und alle an es angelegten Karten in dein Deck mischen."
			},
			damage: 70,

		},
		{
			cost: [
				"Metal",
			],
			name: {
				en: "Blade-GX",
				fr: "Lame-GX",
				de: "Schwerthieb-GX"
			},
			effect: {
				en: "Take a Prize card. (You can't use more than 1 GX attack in a game.)",
				fr: "Récupérez une carte Récompense. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				de: "Nimm 1 Preiskarte. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
			},

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
