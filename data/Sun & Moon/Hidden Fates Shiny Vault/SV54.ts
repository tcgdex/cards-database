import { Card } from '../../../interfaces'
import Set from '../Hidden Fates Shiny Vault'

const card: Card = {
	name: {
		en: "Articuno-GX",
		fr: "Artikodin-GX",
		de: "Arktos-GX"
	},
	illustrator: "5ban Graphics",
	rarity: "Shiny rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		144,
	],
	hp: 170,
	types: [
		"Water",
	],


	suffix: "GX",
	abilities: [
		{
			type: "Ability",
			name: {
				en: "Legendary Ascent",
				fr: "Ascension Légendaire",
				de: "Legendärer Aufstieg"
			},
			effect: {
				en: "When you play this Pokémon from your hand onto your Bench during your turn, you may switch it with your Active Pokémon. If you do, move any number of Water Energy from your other Pokémon to this Pokémon.",
				fr: "Lorsque vous jouez ce Pokémon de votre main sur votre Banc pendant votre tour, vous pouvez l’échanger avec votre Pokémon Actif. Dans ce cas, déplacez autant d’Énergies Water que vous voulez de vos autres Pokémon vers ce Pokémon.",
				de: "Wenn du dieses Pokémon während deines Zuges aus deiner Hand auf deine Bank spielst, kannst du es gegen dein Aktives Pokémon austauschen. Wenn du das machst, verschiebe beliebig viele {W}-Energien von deinen anderen Pokémon auf dieses Pokémon."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				en: "Ice Wing",
				fr: "Aile Glace",
				de: "Frostschwinge"
			},

			damage: 130,

		},
		{
			cost: [
				"Water",
			],
			name: {
				en: "Cold Crush-GX",
				fr: "Écraser Net-GX",
				de: "Eiskalt zerquetscht-GX"
			},
			effect: {
				en: "Discard all Energy from both Active Pokémon. (You can't use more than 1 GX attack in a game.)",
				fr: "Défaussez toute l’Énergie des deux Pokémon Actifs. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				de: "Lege alle Energien von beiden Aktiven Pokémon auf den Ablagestapel. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
			},

		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
