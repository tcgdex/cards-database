import { Card } from "../../../interfaces"
import Set from "../Scarlet & Violet"

const card: Card = {
	dexId: [844],
	set: Set,

	name: {
		en: "Sandaconda",
		fr: "Dunaconda",
		es: "Sandaconda",
		it: "Sandaconda",
		pt: "Sandaconda",
		de: "Sanaconda"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 140,
	types: ["Fighting"],

	evolveFrom: {
		en: "Silicobra"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Fighting", "Fighting", "Colorless"],

		name: {
			en: "Skull Bash",
			fr: "Coud'Krâne",
			es: "Cabezazo",
			it: "Capocciata",
			pt: "Quebra-crânio",
			de: "Schädelwumme"
		},

		damage: 120
	}, {
		cost: ["Fighting", "Fighting", "Fighting", "Colorless"],

		name: {
			en: "Sandstorm Spray",
			fr: "Jet Sirocco",
			es: "Tormenta de Arena Pulverizada",
			it: "Spruzzo Terrempesta",
			pt: "Spray Arenoso",
			de: "Sandsturmspray"
		},

		effect: {
			en: "Discard 2 Energy from this Pokémon. If you discarded any Energy in this way, your opponent shuffles their Active Pokémon and all attached cards into their deck.",
			fr: "Défaussez 2 Énergies de ce Pokémon. Si vous avez défaussé au moins une Énergie de cette façon, votre adversaire mélange son Pokémon Actif et toutes les cartes qui lui sont attachées avec son deck.",
			es: "Descarta 2 Energías de este Pokémon. Si has descartado alguna Energía de esta manera, tu rival pone su Pokémon Activo y todas las cartas unidas a él en su baraja, y baraja todas las cartas.",
			it: "Scarta due Energie da questo Pokémon. Se hai scartato delle Energie in questo modo, il tuo avversario rimischia il suo Pokémon attivo e tutte le carte a esso assegnate nel suo mazzo.",
			pt: "Descarte 2 Energias deste Pokémon. Se você descartou qualquer Energia desta forma, seu oponente embaralha o Pokémon Ativo dele e todas as cartas ligadas a ele no baralho dele.",
			de: "Lege 2 Energien von diesem Pokémon auf deinen Ablagestapel. Wenn du auf diese Weise mindestens 1 Energie auf deinen Ablagestapel gelegt hast, mischt dein Gegner sein Aktives Pokémon und alle angelegten Karten in sein Deck."
		}
	}],

	retreat: 3,
	regulationMark: "G",
	illustrator: "Yuya Oka",

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	variants: {
		holo: false
	},

	thirdParty: {
		cardmarket: 702416
	}
}

export default card