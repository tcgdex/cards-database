import { Card } from "models/database/card"
import Set from "../Journey Together"

const card: Card = {
	dexId: [908],
	set: Set,

	name: {
		'en-us': "Meowscarada",
		'fr-fr': "Miascarade",
		'es-es': "Meowscarada",
		'de-de': "Maskagato",
		'it-it': "Meowscarada",
		'pt-br': "Meowscarada",
		'es-mx': "Meowscarada"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 160,
	types: ["Grass"],
	evolveFrom: {
		'en-us': "Floragato",
		'fr-fr': "Matourgeon",
		'es-es': "Floragato",
		'de-de': "Feliospa",
		'it-it': "Floragato",
		'pt-br': "Floragato",
		'es-mx': "Floragato"
	},
	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Showtime",
			'fr-fr': "Entrée en Scène",
			'es-es': "Hora del Espectáculo",
			'de-de': "Showtime",
			'it-it': "Ora della Ribalta",
			'pt-br': "Hora do Show",
			'es-mx': "Hora del Show"
		},

		effect: {
			'en-us': "Once during your turn, if this Pokémon is on your Bench, you may switch it with your Active Pokémon.",
			'fr-fr': "Une fois pendant votre tour, si ce Pokémon est sur votre Banc, vous pouvez l'échanger contre votre Pokémon Actif.",
			'es-es': "Una vez durante tu turno, si este Pokémon está en tu Banca, puedes cambiarlo por tu Pokémon Activo.",
			'de-de': "Einmal während deines Zuges, wenn sich dieses Pokémon auf deiner Bank befindet, kannst du es gegen dein Aktives Pokémon austauschen.",
			'it-it': "Una sola volta durante il tuo turno, se questo Pokémon è nella tua panchina, puoi scambiarlo con il tuo Pokémon attivo.",
			'pt-br': "Uma vez durante o seu turno, se este Pokémon estiver no seu Banco, você poderá trocá-lo pelo seu Pokémon Ativo.",
			'es-mx': "Una vez durante tu turno, si este Pokémon está en tu Banca, puedes cambiarlo por tu Pokémon Activo."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Rising Bloom",
			'fr-fr': "Floraison Ascendante",
			'es-es': "Floración Creciente",
			'de-de': "Aufblühen",
			'it-it': "Fioritura Crescente",
			'pt-br': "Florescer Crescente",
			'es-mx': "Floración Creciente"
		},

		effect: {
			'en-us': "If your opponent's Active Pokémon is a Pokémon ex, this attack does 90 more damage.",
			'fr-fr': "Si le Pokémon Actif de votre adversaire est un Pokémon-ex, cette attaque inflige 90 dégâts supplémentaires.",
			'es-es': "Si el Pokémon Activo de tu rival es un Pokémon ex, este ataque hace 90 puntos de daño más.",
			'de-de': "Wenn das Aktive Pokémon deines Gegners ein Pokémon-ex ist, fügt diese Attacke 90 Schadenspunkte mehr zu.",
			'it-it': "Se il Pokémon attivo del tuo avversario è un Pokémon-ex, questo attacco infligge 90 danni in più.",
			'pt-br': "Se o Pokémon Ativo do seu oponente for um Pokémon ex, este ataque causará 90 pontos de dano a mais.",
			'es-mx': "Si el Pokémon Activo de tu rival es un Pokémon ex, este ataque hace 90 puntos de daño más."
		},

		damage: "90+"
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "I",
	illustrator: "kodama",

	variants: [
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 817170,
				tcgplayer: 623445
			}
		},
		{
			type: "holo",
			thirdParty: {
				cardmarket: 817170,
				tcgplayer: 623445
			}
		},
		{
			type: "holo",
			foil: "cosmos",
			thirdParty: {
				cardmarket: 851016,
			}
		},
	],
}

export default card