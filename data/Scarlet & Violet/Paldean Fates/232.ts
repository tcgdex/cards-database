import { Card } from "../../../interfaces"
import Set from "../Paldean Fates"

const card: Card = {
	dexId: [151],
	set: Set,

	name: {
		en: "Mew ex",
		fr: "Mew-ex",
		es: "Mew ex",
		it: "Mew-ex",
		de: "Mew-ex"
	},

	rarity: "Special illustration rare",
	category: "Pokemon",
	hp: 180,
	types: ["Psychic"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Restart",
			fr: "Nouveau Départ",
			es: "Reinicio",
			it: "Riavvio",
			de: "Neuanfang"
		},

		effect: {
			en: "Once during your turn, you may draw cards until you have 3 cards in your hand.",
			fr: "Une fois pendant votre tour, vous pouvez piocher des cartes jusqu'à en avoir 3 en main.",
			es: "Una vez durante tu turno, puedes robar cartas hasta que tengas 3 cartas en tu mano.",
			it: "Una sola volta durante il tuo turno, puoi pescare fino ad avere tre carte in mano.",
			de: "Einmal während deines Zuges kannst du so lange Karten ziehen, bis du 3 Karten auf deiner Hand hast."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Genome Hacking",
			fr: "Piratage de Génome",
			es: "Hackeo Genoma",
			it: "Hacking del Genoma",
			de: "Genom-Hacking"
		},

		effect: {
			en: "Choose 1 of your opponent's Active Pokémon's attacks and use it as this attack.",
			fr: "Choisissez l'une des attaques du Pokémon Actif de votre adversaire et utilisez-la en tant que cette attaque.",
			es: "Elige uno de los ataques del Pokémon Activo de tu rival y úsalo para este ataque.",
			it: "Scegli un attacco del Pokémon attivo del tuo avversario e usalo al posto di questo attacco.",
			de: "Wähle 1 Attacke des Aktiven Pokémon deines Gegners und setze sie als diese Attacke ein."
		}
	}],

	retreat: 0,
	regulationMark: "G"
}

export default card