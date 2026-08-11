import { Card } from "models/database/card"
import Set from "../White Flare"

const card: Card = {
	dexId: [640],
	set: Set,

	name: {
		'en-us': "Virizion",
		'fr-fr': "Viridium",
		'de-de': "Viridium",
		'it-it': "Virizion",
		'pt-br': "Virizion",
		'es-es': "Virizion",
		'es-mx': "Virizion"
	},

	illustrator: "Felicia Chen",
	rarity: "Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			'en-us': "Giga Drain",
			'fr-fr': "Giga-Sangsue",
			'de-de': "Gigasauger",
			'it-it': "Gigassorbimento",
			'pt-br': "Gigadreno",
			'es-es': "Gigadrenado",
			'es-mx': "Gigadrenado"
		},

		effect: {
			'en-us': "Heal from this Pokémon the same amount of damage you did to your opponent's Active Pokémon.",
			'fr-fr': "Soignez ce Pokémon du nombre de dégâts que vous avez infligés au Pokémon Actif de votre adversaire.",
			'de-de': "Heile bei diesem Pokémon genauso viel Schaden, wie du dem Aktiven Pokémon deines Gegners zugefügt hast.",
			'it-it': "Cura questo Pokémon da una quantità di danni pari a quelli che hai inflitto al Pokémon attivo del tuo avversario.",
			'pt-br': "Cure deste Pokémon a mesma quantidade de dano que você causou ao Pokémon Ativo do seu oponente.",
			'es-es': "Cura a este Pokémon la misma cantidad de puntos de daño que hayas infligido al Pokémon Activo de tu rival.",
			'es-mx': "Cura a este Pokémon la misma cantidad de puntos de daño que infligiste al Pokémon Activo de tu rival."
		},

		damage: 30
	}, {
		cost: ["Grass", "Grass", "Colorless"],

		name: {
			'en-us': "Emerald Blade",
			'fr-fr': "Lame Émeraude",
			'de-de': "Smaragdgrüne Klinge",
			'it-it': "Lamasmeraldo",
			'pt-br': "Lâmina Esmeralda",
			'es-es': "Hoja Esmeralda",
			'es-mx': "Cuchilla Esmeralda"
		},

		effect: {
			'en-us': "During your next turn, this Pokémon can't use attacks.",
			'fr-fr': "Pendant votre prochain tour, ce Pokémon ne peut pas utiliser d'attaques.",
			'de-de': "Während deines nächsten Zuges kann dieses Pokémon keine Attacken einsetzen.",
			'it-it': "Durante il tuo prossimo turno, questo Pokémon non può usare attacchi.",
			'pt-br': "Durante o seu próximo turno, este Pokémon não poderá usar ataques.",
			'es-es': "Durante tu próximo turno, este Pokémon no puede usar ataques.",
			'es-mx': "Durante tu próximo turno, este Pokémon no puede usar ataques."
		},

		damage: 130
	}],

	retreat: 1,
	regulationMark: "I",

	variants: [
	{
		type: "reverse",
		thirdParty: {
			cardmarket: 835920,
			tcgplayer: 642125
		}
	},
	{
		type: "holo",
		thirdParty: {
			cardmarket: 835920,
			tcgplayer: 642125
		}
	},
	{
		type: "reverse",
		foil: "pokeball",
		thirdParty: {
			cardmarket: 836509,
			tcgplayer: 642370
		}
	},
	{
		type: "reverse",
		foil: "masterball",
		thirdParty: {
			cardmarket: 836510,
			tcgplayer: 642298
		}
	},
],
}

export default card
