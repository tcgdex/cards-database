import { Card } from "../../../interfaces"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	dexId: [873],

	name: {
		en: "Frosmoth",
		fr: "Beldeneige",
		es: "Frosmoth",
		'es-mx': "Frosmoth",
		de: "Mottineva",
		it: "Frosmoth",
		pt: "Frosmoth"
	},

	illustrator: "cochi8i",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Alluring Wings",
			fr: "Ailes Envoûtantes",
			es: "Alas Seductoras",
			'es-mx': "Alas Atrayentes",
			de: "Verlockende Flügel",
			it: "Ali Irresistibili",
			pt: "Asas Cativantes"
		},

		effect: {
			en: "Once during your turn, if this Pokémon is in the Active Spot, you may use this Ability. Each player draws a card.",
			fr: "Une fois pendant votre tour, si ce Pokémon est sur le Poste Actif, vous pouvez utiliser ce talent. Chaque personne pioche une carte.",
			es: "Una vez durante tu turno, si este Pokémon está en el Puesto Activo, puedes usar esta habilidad. Cada jugador roba 1 carta.",
			'es-mx': "Una vez durante tu turno, si este Pokémon está en el Puesto Activo, puedes usar esta Habilidad. Cada jugador roba 1 carta.",
			de: "Einmal während deines Zuges, wenn dieses Pokémon in der Aktiven Position ist, kannst du diese Fähigkeit einsetzen. Jeder Spieler zieht 1 Karte.",
			it: "Una sola volta durante il tuo turno, se questo Pokémon è in posizione attiva, puoi usare questa abilità. Ciascun giocatore pesca una carta.",
			pt: "Uma vez durante o seu turno, se este Pokémon estiver no Campo Ativo, você poderá usar esta Habilidade. Cada jogador compra uma carta."
		}
	}],

	attacks: [{
		cost: ["Water", "Water"],

		name: {
			en: "Cold Cyclone",
			fr: "Cyclone Froid",
			es: "Ciclón Frío",
			'es-mx': "Ciclón Frío",
			de: "Kältewirbel",
			it: "Criociclone",
			pt: "Ciclone Gelado"
		},

		effect: {
			en: "Move a {W} Energy from this Pokémon to 1 of your Benched Pokémon.",
			fr: "Déplacez une Énergie {W} de ce Pokémon vers l'un de vos Pokémon de Banc.",
			es: "Mueve 1 Energía {W} de este Pokémon a uno de tus Pokémon en Banca.",
			'es-mx': "Mueve 1 Energía {W} de este Pokémon a 1 de tus Pokémon en Banca.",
			de: "Verschiebe 1 {W}-Energie von diesem Pokémon auf 1 Pokémon auf deiner Bank.",
			it: "Sposta un'Energia {W} da questo Pokémon a uno di quelli nella tua panchina.",
			pt: "Mova uma Energia {W} deste Pokémon para 1 dos seus Pokémon no Banco."
		},

		damage: 90
	}],

	retreat: 2,
	regulationMark: "I",

	thirdParty: {
		tcgplayer: 675865,
		cardmarket: 869664
	}
}

export default card