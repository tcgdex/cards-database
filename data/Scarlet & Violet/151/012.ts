import { Card } from "../../../interfaces"
import Set from "../151"

const card: Card = {
	dexId: [12],
	set: Set,

	name: {
		fr: "Papilusion",
		en: "Butterfree",
		es: "Butterfree",
		it: "Butterfree",
		pt: "Butterfree",
		de: "Smettbo"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 130,
	types: ["Grass"],
	stage: "Stage2",

	attacks: [{
		cost: ["Grass"],

		name: {
			fr: "Cyclone",
			en: "Whirlwind",
			es: "Remolino",
			it: "Turbine",
			pt: "Ataque de Vento",
			de: "Wirbelwind"
		},

		effect: {
			fr: "Envoyez le Pokémon Actif de l'adversaire sur le Banc. (Votre adversaire choisit le nouveau Pokémon Actif.)",
			en: "Switch out your opponent's Active Pokémon to the Bench. (Your opponent chooses the new Active Pokémon.)",
			es: "Mueve el Pokémon Activo de tu rival a la Banca. (Tu rival elige el nuevo Pokémon Activo).",
			it: "Sposta il Pokémon attivo del tuo avversario nella sua panchina. Il tuo avversario sceglie il nuovo Pokémon attivo.",
			pt: "Mande o Pokémon Ativo do seu oponente para o Banco. (O seu oponente escolhe o novo Pokémon Ativo.)",
			de: "Wechsle das Aktive Pokémon deines Gegners auf seine Bank aus. (Dein Gegner wählt das neue Aktive Pokémon.)"
		},

		damage: 60
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			fr: "Vol d'Adieu",
			en: "Bye-Bye Flight",
			es: "Adiós, Vuelo",
			it: "Volo di Addio",
			pt: "Voo do Adeus",
			de: "Bye-bye-Flug"
		},

		effect: {
			fr: "Choisissez l'un des Pokémon de Banc de votre adversaire. Mélangez avec son deck ce Pokémon-là et toutes les cartes qui lui sont attachées. Ensuite, mélangez avec votre deck ce Pokémon-ci et toutes les cartes qui lui sont attachées. Si votre adversaire n'a aucun Pokémon de Banc, cette attaque ne fait rien.",
			en: "Choose 1 of your opponent's Benched Pokémon. Shuffle that Pokémon and all attached cards into their deck, and then shuffle this Pokémon and all attached cards into your deck. If your opponent has no Benched Pokémon, this attack does nothing.",
			es: "Elige 1 de los Pokémon en Banca de tu rival. Ese Pokémon y todas las cartas unidas a él se ponen en su baraja y se barajan todas. Después, pon este Pokémon y todas las cartas unidas a él en tu baraja, y baraja todas las cartas. Si tu rival no tiene ningún Pokémon en Banca, este ataque no hace nada.",
			it: "Scegli uno dei Pokémon nella panchina del tuo avversario. Rimischia quel Pokémon e tutte le carte a esso assegnate nel suo mazzo e poi rimischia questo Pokémon e tutte le carte a esso assegnate nel tuo mazzo. Se il tuo avversario non ha Pokémon in panchina, questo attacco non ha effetto.",
			pt: "Escolha 1 dos Pokémon no Banco do seu oponente. Embaralhe aquele Pokémon e todas as cartas ligadas a ele no baralho dele e, em seguida, embaralhe este Pokémon e todas as cartas ligadas a ele no seu baralho. Se o seu oponente não tiver Pokémon no Banco, este ataque não fará nada.",
			de: "Wähle 1 Pokémon auf der Bank deines Gegners. Mische jenes Pokémon und alle angelegten Karten in sein Deck und mische anschließend dieses Pokémon und alle angelegten Karten in dein Deck. Wenn dein Gegner kein Pokémon auf der Bank hat, hat diese Attacke keine Auswirkungen."
		}
	}],

	retreat: 1,
	regulationMark: "G",

	variants: {
		holo: false
	},

	evolveFrom: {
		en: "Metapod",
		fr: "Chrysacier",
		es: "Metapod",
		it: "Metapod",
		pt: "Metapod",
		de: "Safcon"
	}
}

export default card