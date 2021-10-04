import { Card } from '../../../interfaces'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,

	variants: {
		normal: false,
		reverse: false,
		holo: false,
		firstEdition: false
	},

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
	illustrator: "AKIRA EGAWA",

	abilities: [{
		type: "Ability",

		name: {
			en: "Dark Signal",
			fr: "Signal Obscur",
			es: "Señal Oscura",
			pt: "Dark Signal",
			it: "Segnale Oscuro",
			de: "Dunkles Signal"
		},

		effect: {
			en: "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may switch 1 of your opponent’s Benched Pokémon with their Active Pokémon.",
			fr: "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer l’un de vos Pokémon pendant votre tour, vous pouvez échanger l’un des Pokémon de Banc de votre adversaire contre son Pokémon Actif.",
			es: "Cuando juegas este Pokémon de tu mano para hacer evolucionar a 1 de tus Pokémon durante tu turno, puedes cambiar 1 de los Pokémon en Banca de tu rival por su Pokémon Activo.",
			pt: "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may switch 1 of your opponent’s Benched Pokémon with their Active Pokémon.",
			it: "Quando giochi questo Pokémon dalla tua mano per far evolvere uno dei tuoi Pokémon durante il tuo turno, puoi scambiare uno dei Pokémon nella panchina del tuo avversario con il suo Pokémon attivo.",
			de: "Wenn du dieses Pokémon aus deiner Hand spielst, um 1 deiner Pokémon während deines Zuges zu entwickeln, kannst du 1 Pokémon auf der Bank deines Gegners gegen sein Aktives Pokémon austauschen."
		}
	}],

	attacks: [{
		name: {
			en: "Max Darkness",
			fr: "Sinistromax",
			es: "Maxisombra",
			it: "Dynatenebre",
			pt: "Max Darkness",
			de: "Dyna-Dunkel"
		},

		damage: 160,
		cost: ["Darkness", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	stage: "VMAX",

	evolveFrom: {
		en: "Umbreon V",
		fr: "Noctali-V",
		es: "Umbreon V",
		it: "Umbreon-V",
		pt: "Umbreon V",
		de: "Nachtara-V"
	},

	dexId: [197],
	suffix: "V"
}

export default card
