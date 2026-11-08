import { Card } from "models/database/card"
import Set from "../Brilliant Stars Trainer Gallery"

const card: Card = {
	dexId: [197],
	set: Set,

	name: {
		'en-us': "Umbreon VMAX",
		'fr-fr': "Noctali VMAX",
		'es-es': "Umbreon VMAX",
		'it-it': "Umbreon VMAX",
		'pt-br': "Umbreon VMAX",
		'de-de': "Nachtara VMAX"
	},

	illustrator: "kawayoo",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 310,
	types: ["Darkness"],

	evolveFrom: {
		'en-us': "Umbreon V",
		'fr-fr': "Noctali-V",
		'es-es': "Umbreon V",
		'it-it': "Umbreon-V",
		'pt-br': "Umbreon V",
		'de-de': "Nachtara-V"
	},

	stage: "VMAX",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Dark Signal",
			'fr-fr': "Signal Obscur",
			'es-es': "Señal Oscura",
			'it-it': "Segnale Oscuro",
			'pt-br': "Sinal Sombrio",
			'de-de': "Dunkles Signal"
		},

		effect: {
			'en-us': "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may switch 1 of your opponent's Benched Pokémon with their Active Pokémon.",
			'fr-fr': "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer l'un de vos Pokémon pendant votre tour, vous pouvez échanger l'un des Pokémon de Banc de votre adversaire contre son Pokémon Actif.",
			'es-es': "Cuando juegas este Pokémon de tu mano para hacer evolucionar a 1 de tus Pokémon durante tu turno, puedes cambiar 1 de los Pokémon en Banca de tu rival por su Pokémon Activo.",
			'it-it': "Quando giochi questo Pokémon dalla tua mano per far evolvere uno dei tuoi Pokémon durante il tuo turno, puoi scambiare uno dei Pokémon nella panchina del tuo avversario con il suo Pokémon attivo.",
			'pt-br': "Quando você jogar este Pokémon da sua mão para evoluir 1 dos seus Pokémon durante o seu turno, você poderá trocar 1 dos Pokémon no Banco do seu oponente pelo Pokémon Ativo dele(a).",
			'de-de': "Wenn du dieses Pokémon aus deiner Hand spielst, um 1 deiner Pokémon während deines Zuges zu entwickeln, kannst du 1 Pokémon auf der Bank deines Gegners gegen sein Aktives Pokémon austauschen."
		}
	}],

	attacks: [{
		cost: ["Darkness", "Colorless", "Colorless"],

		name: {
			'en-us': "Max Darkness",
			'fr-fr': "Sinistromax",
			'es-es': "Maxisombra",
			'it-it': "Dynatenebre",
			'pt-br': "Escuridão Max",
			'de-de': "Dyna-Dunkel"
		},

		damage: 160
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "E",


	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 608755,
				tcgplayer: 264206
			}
		},
	],
}

export default card
