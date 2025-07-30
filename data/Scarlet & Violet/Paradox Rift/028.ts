import { Card } from "../../../interfaces"
import Set from "../Paradox Rift"

const card: Card = {
	set: Set,

	name: {
		en: "Iron Moth",
		fr: "Mite-de-Fer",
		es: "Ferropolilla",
		it: "Falenaferrea",
		pt: "Mariposa Férrea",
		de: "Eisenfalter"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Fire"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Thermal Reactor",
			fr: "Réacteur Thermique",
			es: "Reactor Térmico",
			it: "Termoreattore",
			pt: "Reator Térmico",
			de: "Thermo-Reaktor"
		},

		effect: {
			en: "Once during your turn, when this Pokémon moves from your Bench to the Active Spot, you may move any amount of {R} Energy from your other Pokémon to it.",
			fr: "Une fois pendant votre tour, lorsque ce Pokémon se déplace de votre Banc vers le Poste Actif, vous pouvez déplacer autant d'Énergies {R} que vous le voulez de vos autres Pokémon vers celui-ci.",
			es: "Una vez durante tu turno, cuando este Pokémon se mueve de tu Banca al Puesto Activo, puedes mover cualquier cantidad de Energías {R} de tus otros Pokémon a este Pokémon.",
			it: "Una sola volta durante il tuo turno, quando questo Pokémon si sposta dalla tua panchina in posizione attiva, puoi spostare un numero qualsiasi di Energie {R} dai tuoi altri Pokémon su questo Pokémon.",
			pt: "Uma vez durante o seu turno, quando este Pokémon for movido do seu Banco para o Campo Ativo, você poderá mover qualquer quantidade de Energia {R} dos seus outros Pokémon para este Pokémon.",
			de: "Einmal während deines Zuges, wenn dieses Pokémon von deiner Bank in die Aktive Position wechselt, kannst du beliebig viele {R}-Energien von deinen anderen Pokémon auf dieses Pokémon verschieben."
		}
	}],

	attacks: [{
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			en: "Heat Ray",
			fr: "Rayon de Chaleur",
			es: "Rayo Calorífico",
			it: "Calorraggio",
			pt: "Raio Ardente",
			de: "Hitzestrahl"
		},

		effect: {
			en: "During your next turn, this Pokémon can't use Heat Ray.",
			fr: "Pendant votre prochain tour, ce Pokémon ne peut pas utiliser Rayon de Chaleur.",
			es: "Durante tu próximo turno, este Pokémon no puede usar Rayo Calorífico.",
			it: "Durante il tuo prossimo turno, questo Pokémon non può usare Calorraggio.",
			pt: "Durante o seu próximo turno, este Pokémon não poderá usar Raio Ardente.",
			de: "Während deines nächsten Zuges kann dieses Pokémon Hitzestrahl nicht einsetzen."
		},

		damage: 120
	}],

	retreat: 2,
	regulationMark: "G",

	variants: {
		normal: false,
		reverse: false
	},

	illustrator: "Kouki Saitou",

	thirdParty: {
		cardmarket: 740504
	}
}

export default card