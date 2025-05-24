import { Card } from "../../../interfaces"
import Set from "../Paradox Rift"

const card: Card = {
	set: Set,

	name: {
		en: "Iron Bundle",
		fr: "Hotte-de-Fer",
		es: "Ferrosaco",
		it: "Saccoferreo",
		pt: "Pacote Férreo",
		de: "Eisenbündel"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 100,
	types: ["Water"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Hyper Blower",
			fr: "Hyper Souffleuse",
			es: "Hipersoplador",
			it: "Iperventola",
			pt: "Ultrassoprador",
			de: "Hypergebläse"
		},

		effect: {
			en: "Once during your turn, if this Pokémon is on your Bench, you may switch out your opponent's Active Pokémon to the Bench. (Your opponent chooses the new Active Pokémon.) If you do, discard this Pokémon and all attached cards.",
			fr: "Une fois pendant votre tour, si ce Pokémon est sur votre Banc, vous pouvez envoyer le Pokémon Actif de votre adversaire sur le Banc. (Votre adversaire choisit le nouveau Pokémon Actif.) Dans ce cas, défaussez ce Pokémon et toutes les cartes qui lui sont attachées.",
			es: "Una vez durante tu turno, si este Pokémon está en tu Banca, puedes mover el Pokémon Activo de tu rival a la Banca. (Tu rival elige el nuevo Pokémon Activo). Si lo haces, descarta este Pokémon y todas las cartas unidas a él.",
			it: "Una sola volta durante il tuo turno, se questo Pokémon è nella tua panchina, puoi spostare il Pokémon attivo del tuo avversario nella sua panchina. Il tuo avversario sceglie il nuovo Pokémon attivo. Se lo fai, scarta questo Pokémon e tutte le carte a esso assegnate.",
			pt: "Uma vez durante o seu turno, se este Pokémon estiver no seu Banco, você poderá mandar o Pokémon Ativo do seu oponente para o Banco. (O seu oponente escolhe o novo Pokémon Ativo.) Se fizer isto, descarte este Pokémon e todas as cartas ligadas a ele.",
			de: "Einmal während deines Zuges, wenn sich dieses Pokémon auf deiner Bank befindet, kannst du das Aktive Pokémon deines Gegners auf seine Bank auswechseln. (Dein Gegner wählt das neue Aktive Pokémon.) Wenn du das machst, lege dieses Pokémon und alle angelegten Karten auf deinen Ablagestapel."
		}
	}],

	attacks: [{
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			en: "Refrigerated Stream",
			fr: "Flux Réfrigéré",
			es: "Corriente Refrigerada",
			it: "Refrigetto",
			pt: "Fluxo Refrigerado",
			de: "Tiefkühlströmung"
		},

		effect: {
			en: "If the Defending Pokémon is an Evolution Pokémon, it can't attack during your opponent's next turn.",
			fr: "Si le Pokémon Défenseur est un Pokémon Évolutif, il ne peut pas attaquer pendant le prochain tour de votre adversaire.",
			es: "Si el Pokémon Defensor es un Pokémon Evolución, no puede atacar durante el próximo turno de tu rival.",
			it: "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può attaccare se è un Pokémon Evoluzione.",
			pt: "Se o Pokémon Defensor for um Pokémon de Evolução, ele não poderá atacar durante o próximo turno do seu oponente.",
			de: "Wenn das Verteidigende Pokémon ein Entwicklungs-Pokémon ist, kann es während des nächsten Zuges deines Gegners nicht angreifen."
		},

		damage: 80
	}],

	retreat: 1,
	regulationMark: "G",

	variants: {
		holo: false
	},

	illustrator: "Oswaldo KATO"
}

export default card