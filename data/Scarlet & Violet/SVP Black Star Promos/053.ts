import { Card } from "../../../interfaces"
import Set from "../SVP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Mew ex",
		fr: "Mew-ex",
		es: "Mew ex",
		it: "Mew-ex",
		pt: "Mew ex",
		de: "Mew-ex"
	},

	rarity: "None",
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
			pt: "Recomeçar",
			de: "Neuanfang"
		},

		effect: {
			en: "Once during your turn, you may draw cards until you have 3 cards in your hand.",
			fr: "Une fois pendant votre tour, vous pouvez piocher des cartes jusqu'à en avoir 3 en main.",
			es: "Una vez durante tu turno, puedes robar cartas hasta que tengas 3 cartas en tu mano.",
			it: "Una sola volta durante il tuo turno, puoi pescare fino ad avere tre carte in mano.",
			pt: "Uma vez durante o seu turno, você poderá comprar cartas até ter 3 cartas na sua mão.",
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
			pt: "Hackear Genoma",
			de: "Genom-Hacking"
		},

		effect: {
			en: "Choose 1 of your opponent's Active Pokémon's attacks and use it as this attack.",
			fr: "Choisissez l'une des attaques du Pokémon Actif de votre adversaire et utilisez-la en tant que cette attaque.",
			es: "Elige uno de los ataques del Pokémon Activo de tu rival y úsalo para este ataque.",
			it: "Scegli un attacco del Pokémon attivo del tuo avversario e usalo al posto di questo attacco.",
			pt: "Escolha 1 dos ataques do Pokémon Ativo do seu oponente e use-o como este ataque.",
			de: "Wähle 1 Attacke des Aktiven Pokémon deines Gegners und setze sie als diese Attacke ein."
		}
	}],

	retreat: 0,
	regulationMark: "G",
	illustrator: "Natsumi Yoshida"
}

export default card