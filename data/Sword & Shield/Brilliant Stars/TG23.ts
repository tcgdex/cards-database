import { Card } from "../../../interfaces"
import Set from "../Brilliant Stars"

const card: Card = {
	set: Set,

	name: {
		en: "Umbreon VMAX",
		fr: "Noctali VMAX",
		es: "Umbreon VMAX",
		it: "Umbreon VMAX",
		pt: "Umbreon VMAX",
		de: "Nachtara VMAX"
	},

	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 310,
	types: ["Darkness"],

	evolveFrom: {
		en: "Umbreon V",
		fr: "Noctali-V",
		es: "Umbreon V",
		it: "Umbreon-V",
		pt: "Umbreon V",
		de: "Nachtara-V"
	},

	stage: "VMAX",

	abilities: [{
		type: "Ability",

		name: {
			en: "Dark Signal",
			fr: "Signal Obscur",
			es: "Señal Oscura",
			it: "Segnale Oscuro",
			pt: "Sinal Sombrio",
			de: "Dunkles Signal"
		},

		effect: {
			en: "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may switch 1 of your opponent's Benched Pokémon with their Active Pokémon.",
			fr: "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer l'un de vos Pokémon pendant votre tour, vous pouvez échanger l'un des Pokémon de Banc de votre adversaire contre son Pokémon Actif.",
			es: "Cuando juegas este Pokémon de tu mano para hacer evolucionar a 1 de tus Pokémon durante tu turno, puedes cambiar 1 de los Pokémon en Banca de tu rival por su Pokémon Activo.",
			it: "Quando giochi questo Pokémon dalla tua mano per far evolvere uno dei tuoi Pokémon durante il tuo turno, puoi scambiare uno dei Pokémon nella panchina del tuo avversario con il suo Pokémon attivo.",
			pt: "Quando você jogar este Pokémon da sua mão para evoluir 1 dos seus Pokémon durante o seu turno, você poderá trocar 1 dos Pokémon no Banco do seu oponente pelo Pokémon Ativo dele(a).",
			de: "Wenn du dieses Pokémon aus deiner Hand spielst, um 1 deiner Pokémon während deines Zuges zu entwickeln, kannst du 1 Pokémon auf der Bank deines Gegners gegen sein Aktives Pokémon austauschen."
		}
	}],

	attacks: [{
		cost: ["Darkness", "Colorless", "Colorless"],

		name: {
			en: "Max Darkness",
			fr: "Sinistromax",
			es: "Maxisombra",
			it: "Dynatenebre",
			pt: "Escuridão Max",
			de: "Dyna-Dunkel"
		},

		damage: 160
	}],

	retreat: 2,
	regulationMark: "E",
	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	}
}

export default card