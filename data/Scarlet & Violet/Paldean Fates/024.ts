import { Card } from "../../../interfaces"
import Set from "../Paldean Fates"

const card: Card = {
	set: Set,

	name: {
		en: "Exeggutor",
		fr: "Noadkoko",
		es: "Exeggutor",
		it: "Exeggutor",
		pt: "Exeggutor"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Psychic"],
	stage: "Stage1",

	attacks: [{
		cost: ["Psychic", "Colorless"],

		name: {
			en: "Hypnoblast",
			fr: "Hypnoblast",
			es: "Hipnorrayo",
			it: "Ipnobomba",
			pt: "Borrifada Hipnótica"
		},

		effect: {
			en: "Your opponent's Active Pokémon is now Asleep.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
			es: "El Pokémon Activo de tu rival pasa a estar Dormido.",
			it: "Il Pokémon attivo del tuo avversario viene addormentato.",
			pt: "O Pokémon Ativo do seu oponente agora está Adormecido."
		},

		damage: 30
	}, {
		cost: ["Psychic", "Psychic", "Colorless"],

		name: {
			en: "Psychic Loop",
			fr: "Boucle Psy",
			es: "Bucle Psíquico",
			it: "Circuito Psichico",
			pt: "Loop Psíquico"
		},

		effect: {
			en: "Put 2 Energy attached to this Pokémon into your hand.",
			fr: "Ajoutez à votre main 2 Énergies attachées à ce Pokémon.",
			es: "Pon 2 Energías unidas a este Pokémon en tu mano.",
			it: "Prendi due Energie assegnate a questo Pokémon e aggiungile alle carte che hai in mano.",
			pt: "Coloque 2 Energias ligadas a este Pokémon na sua mão."
		},

		damage: 160
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card