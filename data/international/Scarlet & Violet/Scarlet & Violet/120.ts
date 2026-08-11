import { Card } from "models/database/card"
import Set from "../Scarlet & Violet"

const card: Card = {
	dexId: [844],
	set: Set,

	name: {
		'en-us': "Sandaconda",
		'fr-fr': "Dunaconda",
		'es-es': "Sandaconda",
		'it-it': "Sandaconda",
		'pt-br': "Sandaconda",
		'de-de': "Sanaconda"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 140,
	types: ["Fighting"],

	evolveFrom: {
		'en-us': "Silicobra",
		'fr-fr': "Dunaja"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Fighting", "Fighting", "Colorless"],

		name: {
			'en-us': "Skull Bash",
			'fr-fr': "Coud'Krâne",
			'es-es': "Cabezazo",
			'it-it': "Capocciata",
			'pt-br': "Quebra-crânio",
			'de-de': "Schädelwumme"
		},

		damage: 120
	}, {
		cost: ["Fighting", "Fighting", "Fighting", "Colorless"],

		name: {
			'en-us': "Sandstorm Spray",
			'fr-fr': "Jet Sirocco",
			'es-es': "Tormenta de Arena Pulverizada",
			'it-it': "Spruzzo Terrempesta",
			'pt-br': "Spray Arenoso",
			'de-de': "Sandsturmspray"
		},

		effect: {
			'en-us': "Discard 2 Energy from this Pokémon. If you discarded any Energy in this way, your opponent shuffles their Active Pokémon and all attached cards into their deck.",
			'fr-fr': "Défaussez 2 Énergies de ce Pokémon. Si vous avez défaussé au moins une Énergie de cette façon, votre adversaire mélange son Pokémon Actif et toutes les cartes qui lui sont attachées avec son deck.",
			'es-es': "Descarta 2 Energías de este Pokémon. Si has descartado alguna Energía de esta manera, tu rival pone su Pokémon Activo y todas las cartas unidas a él en su baraja, y baraja todas las cartas.",
			'it-it': "Scarta due Energie da questo Pokémon. Se hai scartato delle Energie in questo modo, il tuo avversario rimischia il suo Pokémon attivo e tutte le carte a esso assegnate nel suo mazzo.",
			'pt-br': "Descarte 2 Energias deste Pokémon. Se você descartou qualquer Energia desta forma, seu oponente embaralha o Pokémon Ativo dele e todas as cartas ligadas a ele no baralho dele.",
			'de-de': "Lege 2 Energien von diesem Pokémon auf deinen Ablagestapel. Wenn du auf diese Weise mindestens 1 Energie auf deinen Ablagestapel gelegt hast, mischt dein Gegner sein Aktives Pokémon und alle angelegten Karten in sein Deck."
		}
	}],

	retreat: 3,
	regulationMark: "G",
	illustrator: "Yuya Oka",

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	],

	description: {
		'en-us': "It will expand its body as much as it can and then contract itself, blasting out sand with enough force to wash away a dump truck.",
	},

	thirdParty: {
        cardmarket: 702416,
        tcgplayer: 488009
    }
}

export default card