import { Card } from "../../../interfaces"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [429],
	set: Set,

	name: {
		fr: "Magirêve",
		en: "Mismagius",
		es: "Mismagius",
		it: "Mismagius",
		pt: "Mismagius",
		de: "Traunmagil"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			fr: "Pichenette Magique",
			en: "Magical Flick",
			es: "Chasquido Mágico",
			it: "Colpetto da Stregone",
			pt: "Pitada Mágica",
			de: "Magischer Schnipser"
		},

		effect: {
			fr: "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer l'un de vos Pokémon pendant votre tour, vous pouvez déplacer une Énergie attachée au Pokémon Actif de votre adversaire vers l'un de ses Pokémon de Banc.",
			en: "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may move an Energy from your opponent's Active Pokémon to 1 of their Benched Pokémon.",
			es: "Cuando juegas este Pokémon de tu mano para hacer evolucionar a uno de tus Pokémon durante tu turno, puedes mover 1 Energía del Pokémon Activo de tu rival a uno de sus Pokémon en Banca.",
			it: "Quando giochi questo Pokémon dalla tua mano per far evolvere uno dei tuoi Pokémon durante il tuo turno, puoi spostare un'Energia dal Pokémon attivo del tuo avversario a uno dei suoi Pokémon in panchina.",
			pt: "Quando você jogar este Pokémon da sua mão para evoluir 1 dos seus Pokémon durante o seu turno, você poderá mover uma Energia do Pokémon Ativo do seu oponente para 1 dos Pokémon no Banco dele.",
			de: "Wenn du dieses Pokémon aus deiner Hand spielst, um 1 deiner Pokémon während deines Zuges zu entwickeln, kannst du 1 Energie vom Aktiven Pokémon deines Gegners auf 1 Pokémon auf seiner Bank verschieben."
		}
	}],

	attacks: [{
		cost: ["Psychic", "Colorless"],

		name: {
			fr: "Sphère Psy",
			en: "Psychic Sphere",
			es: "Esfera Psíquica",
			it: "Psicosfera",
			pt: "Esfera Psíquica",
			de: "Psychosphäre"
		},

		damage: 60
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card