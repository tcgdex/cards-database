import { Card } from "../../../interfaces"
import Set from "../Lost Origin"

const card: Card = {
	set: Set,

	name: {
		en: "Shiftry",
		fr: "Tengalice",
		es: "Shiftry",
		it: "Shiftry",
		pt: "Shiftry",
		de: "Tengulist"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 160,
	types: ["Grass"],

	evolveFrom: {
		en: "Nuzleaf",
		fr: "Pifeuil",
		es: "Nuzleaf",
		it: "Nuzleaf",
		pt: "Nuzleaf",
		de: "Blanas"
	},

	stage: "Stage2",

	attacks: [{
		cost: ["Grass"],

		name: {
			en: "Fan Tornado",
			fr: "Tornade Soufflante",
			es: "Tornado Ventilador",
			it: "Ventagliociclone",
			pt: "Tornado de Leques",
			de: "Fächertornado"
		},

		effect: {
			en: "You may have your opponent switch their Active Pokémon with 1 of their Benched Pokémon.",
			fr: "Vous pouvez demander à votre adversaire d'échanger son Pokémon Actif contre l'un de ses Pokémon de Banc.",
			es: "Puedes hacer que tu rival cambie su Pokémon Activo por 1 de sus Pokémon en Banca.",
			it: "Puoi far scambiare al tuo avversario il suo Pokémon attivo con uno della sua panchina.",
			pt: "Você pode fazer com que o seu oponente troque o próprio Pokémon Ativo por 1 dos Pokémon no Banco dele(a).",
			de: "Du kannst deinen Gegner dazu veranlassen, sein Aktives Pokémon gegen 1 Pokémon auf seiner Bank auszutauschen."
		},

		damage: 50
	}, {
		cost: ["Grass"],

		name: {
			en: "Tearing Gust",
			fr: "Rafale Déchirante",
			es: "Ráfaga Desgarradora",
			it: "Strapparaffica",
			pt: "Ventania Cortante",
			de: "Reißender Windstoß"
		},

		effect: {
			en: "Put this Pokémon and all attached cards in the Lost Zone.",
			fr: "Placez ce Pokémon et toutes les cartes attachées dans la Zone Perdue.",
			es: "Pon este Pokémon y todas las cartas unidas a él en la Zona Perdida.",
			it: "Prendi questo Pokémon e tutte le carte a esso assegnate e mettili nell'area perduta.",
			pt: "Coloque este Pokémon e todas as cartas ligadas a ele na Zona Perdida.",
			de: "Lege dieses Pokémon und alle angelegten Karten ins Nirgendwo."
		},

		damage: 210
	}],

	retreat: 2,
	regulationMark: "F",
	variants: {
		"normal": false,
		"reverse": true,
		"holo": true
	}
}

export default card
