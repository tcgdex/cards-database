import { Card } from "../../../interfaces"
import Set from "../Brilliant Stars"

const card: Card = {
	dexId: [168],
	set: Set,

	name: {
		en: "Ariados",
		fr: "Migalos",
		es: "Ariados",
		it: "Ariados",
		pt: "Ariados",
		de: "Ariados"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 110,
	types: ["Darkness"],

	evolveFrom: {
		en: "Spinarak",
		fr: "Mimigal",
		es: "Spinarak",
		it: "Spinarak",
		pt: "Spinarak",
		de: "Webarak"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Spider Net",
			fr: "Rets Arachnéens",
			es: "Red de Araña",
			it: "Rete del Ragno",
			pt: "Rede de Aranha",
			de: "Spinnengewebe"
		},

		effect: {
			en: "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may switch 1 of your opponent's Benched Evolution Pokémon with their Active Pokémon.",
			fr: "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer l'un de vos Pokémon pendant votre tour, vous pouvez échanger l'un des Pokémon évolutifs de Banc de votre adversaire contre son Pokémon Actif.",
			es: "Cuando juegas este Pokémon de tu mano para hacer evolucionar a 1 de tus Pokémon durante tu turno, puedes cambiar 1 de los Pokémon Evolución en Banca de tu rival por su Pokémon Activo.",
			it: "Quando giochi questo Pokémon dalla tua mano per far evolvere uno dei tuoi Pokémon durante il tuo turno, puoi scambiare uno dei Pokémon Evoluzione nella panchina del tuo avversario con il suo Pokémon attivo.",
			pt: "Quando você jogar este Pokémon da sua mão para evoluir 1 dos seus Pokémon durante o seu turno, você poderá trocar 1 dos Pokémon de Evolução no Banco do seu oponente pelo Pokémon Ativo dele(a).",
			de: "Wenn du dieses Pokémon aus deiner Hand spielst, um 1 deiner Pokémon während deines Zuges zu entwickeln, kannst du 1 Entwicklungs-Pokémon auf der Bank deines Gegners gegen sein Aktives Pokémon austauschen."
		}
	}],

	attacks: [{
		cost: ["Darkness", "Colorless"],

		name: {
			en: "Poison Sting",
			fr: "Dard-Venin",
			es: "Picotazo Veneno",
			it: "Velenospina",
			pt: "Ferrão Venenoso",
			de: "Giftstachel"
		},

		effect: {
			en: "Your opponent's Active Pokémon is now Poisoned.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
			es: "El Pokémon Activo de tu rival pasa a estar Envenenado.",
			it: "Il Pokémon attivo del tuo avversario viene avvelenato.",
			pt: "O Pokémon Ativo do seu oponente agora está Envenenado.",
			de: "Das Aktive Pokémon deines Gegners ist jetzt vergiftet."
		},

		damage: 30
	}],

	retreat: 2,
	regulationMark: "D",
	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	}
}

export default card