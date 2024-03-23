import { Card } from "../../../interfaces"
import Set from "../Paldean Fates"

const card: Card = {
	set: Set,

	name: {
		en: "Xatu",
		fr: "Xatu",
		es: "Xatu",
		it: "Xatu",
		pt: "Xatu"
	},

	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 100,
	types: ["Psychic"],
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Clairvoyant Sense",
			fr: "Don de Clairvoyance",
			es: "Sentido Clarividente",
			it: "Senso Chiaroveggente",
			pt: "Sentido Clarividente"
		},

		effect: {
			en: "Once during your turn, you may attach a Basic Psychic Energy card from your hand to 1 of your Benched Pokémon. If you attached Energy to a Pokémon in this way, draw 2 cards.",
			fr: "Une fois pendant votre tour, vous pouvez attacher une carte Énergie Psychic de base de votre main à l'un de vos Pokémon de Banc. Si vous avez attaché de l'Énergie à un Pokémon de cette façon, piochez 2 cartes.",
			es: "Una vez durante tu turno, puedes unir 1 carta de Energía Psychic Básica de tu mano a uno de tus Pokémon en Banca. Si has unido Energía a un Pokémon de esta manera, roba 2 cartas.",
			it: "Una sola volta durante il tuo turno, puoi assegnare a uno dei tuoi Pokémon in panchina una carta Energia base Psychic dalla tua mano. Se hai assegnato dell'Energia a un Pokémon in questo modo, pesca due carte.",
			pt: "Uma vez durante o seu turno, você poderá ligar uma carta de Energia Psychic Básica da sua mão a 1 dos seus Pokémon no Banco. Se você ligou Energia a um Pokémon desta forma, compre 2 cartas."
		}
	}],

	attacks: [{
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			en: "Super Psy Bolt",
			fr: "Super Psy",
			es: "Superrayo Psi",
			it: "Superpsico",
			pt: "Super-raio Psíquico"
		},

		damage: 80
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card