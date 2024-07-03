import { Card } from "../../../interfaces"
import Set from "../Paldea Evolved"

const card: Card = {
	set: Set,

	name: {
		fr: "Deusolourdo",
		en: "Dudunsparce",
		es: "Dudunsparce",
		it: "Dudunsparce",
		pt: "Dudunsparce",
		de: "Dummimisel"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 140,
	types: ["Colorless"],
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			fr: "Coud'Boue",
			en: "Mud-Slap",
			es: "Bofetón Lodo",
			it: "Fangosberla",
			pt: "Tapa de Lama",
			de: "Lehmschelle"
		},

		damage: 30
	}, {
		cost: ["Colorless", "Colorless", "Colorless", "Colorless"],

		name: {
			fr: "Creuse Flash",
			en: "Dig Away Flash",
			es: "Destello Excavación",
			it: "Scava Tana Flash",
			pt: "Cavada Atordoante",
			de: "Buddelblitz"
		},

		effect: {
			fr: "Le Pokémon Actif de votre adversaire est maintenant Paralysé. Mélangez avec votre deck ce Pokémon et toutes les cartes qui lui sont attachées.",
			en: "Your opponent's Active Pokémon is now Paralyzed. Shuffle this Pokémon and all attached cards into your deck.",
			es: "El Pokémon Activo de tu rival pasa a estar Paralizado. Pon este Pokémon y todas las cartas unidas a él en tu baraja, y baraja todas las cartas.",
			it: "Il Pokémon attivo del tuo avversario viene paralizzato. Rimischia questo Pokémon e tutte le carte a esso assegnate nel tuo mazzo.",
			pt: "O Pokémon Ativo do seu oponente agora está Paralisado. Embaralhe este Pokémon e todas as cartas ligadas a ele no seu baralho.",
			de: "Das Aktive Pokémon deines Gegners ist jetzt paralysiert. Mische dieses Pokémon und alle angelegten Karten in dein Deck."
		},

		damage: 100
	}],

	retreat: 3,
	regulationMark: "G",

	variants: {
		holo: false
	}
}

export default card