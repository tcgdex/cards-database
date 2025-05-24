import { Card } from '../../../interfaces'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	dexId: [778],
	set: Set,

	variants: {
		normal: false,
		reverse: false,
		holo: false,
		firstEdition: false
	},

	name: {
		en: "Mimikyu",
		fr: "Mimiqui",
		de: "Mimigma",
		es: "Mimikyu",
		pt: "Mimikyu",
		it: "Mimikyu"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			fr: "Maraudage",
			de: "Mopsen",
			es: "Birlar",
			pt: "Furtar",
			it: "Furtarello",
			en: "Filch"
		},

		effect: {
			fr: "Piochez 2 cartes.",
			de: "Ziehe 2 Karten.",
			es: "Roba 2 cartas.",
			pt: "Compre 2 cartas.",
			it: "Pesca due carte.",
			en: "Draw 2 cards."
		}
	}, {
		cost: ["Water", "Colorless"],

		name: {
			fr: "Griffe Trempée",
			de: "Nasse Klaue",
			es: "Garra Húmeda",
			pt: "Garra Molhada",
			it: "Artiglio Bagnato",
			en: "Wet Claw"
		},

		effect: {
			fr: "Ajoutez à la main de votre adversaire une Énergie attachée à son Pokémon Actif.",
			de: "Gib deinem Gegner 1 an sein Aktives Pokémon angelegte Energie auf seine Hand.",
			es: "Pon 1 Energía unida al Pokémon Activo de tu rival en su mano.",
			pt: "Coloque 1 Energia ligada ao Pokémon Ativo do seu oponente na mão dele(a).",
			it: "Prendi un'Energia assegnata al Pokémon attivo del tuo avversario e aggiungila alle carte che ha in mano.",
			en: "Put an Energy attached to your opponent's Active Pokémon into their hand."
		},

		damage: 40
	}],

	retreat: 1
}

export default card