import { Card } from "models/database/card"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Frosmoth",
		'fr-fr': "Beldeneige",
		'es-es': "Frosmoth",
		'es-mx': "Frosmoth",
		'de-de': "Mottineva",
		'it-it': "Frosmoth",
		'pt-br': "Frosmoth"
	},

	evolveFrom: {
		'en-us': "Snom",
		'fr-fr': "Frissonille",
		'es-es': "Snom",
		'es-mx': "Snom",
		'de-de': "Snomnom",
		'it-it': "Snom",
		'pt-br': "Snom",
	},

	illustrator: "cochi8i",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [873],
	hp: 110,
	types: ["Water"],
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Alluring Wings",
			'fr-fr': "Ailes Envoûtantes",
			'es-es': "Alas Seductoras",
			'es-mx': "Alas Atrayentes",
			'de-de': "Verlockende Flügel",
			'it-it': "Ali Irresistibili",
			'pt-br': "Asas Cativantes"
		},

		effect: {
			'en-us': "Once during your turn, if this Pokémon is in the Active Spot, you may use this Ability. Each player draws a card.",
			'fr-fr': "Une fois pendant votre tour, si ce Pokémon est sur le Poste Actif, vous pouvez utiliser ce talent. Chaque personne pioche une carte.",
			'es-es': "Una vez durante tu turno, si este Pokémon está en el Puesto Activo, puedes usar esta habilidad. Cada jugador roba 1 carta.",
			'es-mx': "Una vez durante tu turno, si este Pokémon está en el Puesto Activo, puedes usar esta Habilidad. Cada jugador roba 1 carta.",
			'de-de': "Einmal während deines Zuges, wenn dieses Pokémon in der Aktiven Position ist, kannst du diese Fähigkeit einsetzen. Jeder Spieler zieht 1 Karte.",
			'it-it': "Una sola volta durante il tuo turno, se questo Pokémon è in posizione attiva, puoi usare questa abilità. Ciascun giocatore pesca una carta.",
			'pt-br': "Uma vez durante o seu turno, se este Pokémon estiver no Campo Ativo, você poderá usar esta Habilidade. Cada jogador compra uma carta."
		}
	}],

	attacks: [{
		cost: ["Water", "Water"],

		name: {
			'en-us': "Cold Cyclone",
			'fr-fr': "Cyclone Froid",
			'es-es': "Ciclón Frío",
			'es-mx': "Ciclón Frío",
			'de-de': "Kältewirbel",
			'it-it': "Criociclone",
			'pt-br': "Ciclone Gelado"
		},

		effect: {
			'en-us': "Move a {W} Energy from this Pokémon to 1 of your Benched Pokémon.",
			'fr-fr': "Déplacez une Énergie {W} de ce Pokémon vers l'un de vos Pokémon de Banc.",
			'es-es': "Mueve 1 Energía {W} de este Pokémon a uno de tus Pokémon en Banca.",
			'es-mx': "Mueve 1 Energía {W} de este Pokémon a 1 de tus Pokémon en Banca.",
			'de-de': "Verschiebe 1 {W}-Energie von diesem Pokémon auf 1 Pokémon auf deiner Bank.",
			'it-it': "Sposta un'Energia {W} da questo Pokémon a uno di quelli nella tua panchina.",
			'pt-br': "Mova uma Energia {W} deste Pokémon para 1 dos seus Pokémon no Banco."
		},

		damage: 90
	}],

	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "I",

	description: {
		'en-us': "It causes blizzards as it flies around with its huge, chill-emanating wings. Clean meltwater is its favorite thing to drink.",
	},

	variants: [
	{
		type: "normal",
		thirdParty: {
			cardmarket: 869664,
			tcgplayer: 675865
		}
	},
	{
		type: "reverse",
		foil: "friendball",
		thirdParty: {
			cardmarket: 870222,
			tcgplayer: 676895
		}
	},
	{
		type: "reverse",
		foil: "energy",
		thirdParty: {
			cardmarket: 870221,
			tcgplayer: 677035
		}
	},
],
}

export default card
