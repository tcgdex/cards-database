import { Card } from "models/database/card"
import Set from "../Lost Origin"

const card: Card = {
	dexId: [275],
	set: Set,

	name: {
		'en-us': "Shiftry",
		'fr-fr': "Tengalice",
		'es-es': "Shiftry",
		'it-it': "Shiftry",
		'pt-br': "Shiftry",
		'de-de': "Tengulist"
	},

	illustrator: "kawayoo",
	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 160,
	types: ["Grass"],

	evolveFrom: {
		'en-us': "Nuzleaf",
		'fr-fr': "Pifeuil",
		'es-es': "Nuzleaf",
		'it-it': "Nuzleaf",
		'pt-br': "Nuzleaf",
		'de-de': "Blanas"
	},

	stage: "Stage2",

	attacks: [{
		cost: ["Grass"],

		name: {
			'en-us': "Fan Tornado",
			'fr-fr': "Tornade Soufflante",
			'es-es': "Tornado Ventilador",
			'it-it': "Ventagliociclone",
			'pt-br': "Tornado de Leques",
			'de-de': "Fächertornado"
		},

		effect: {
			'en-us': "You may have your opponent switch their Active Pokémon with 1 of their Benched Pokémon.",
			'fr-fr': "Vous pouvez demander à votre adversaire d'échanger son Pokémon Actif contre l'un de ses Pokémon de Banc.",
			'es-es': "Puedes hacer que tu rival cambie su Pokémon Activo por 1 de sus Pokémon en Banca.",
			'it-it': "Puoi far scambiare al tuo avversario il suo Pokémon attivo con uno della sua panchina.",
			'pt-br': "Você pode fazer com que o seu oponente troque o próprio Pokémon Ativo por 1 dos Pokémon no Banco dele(a).",
			'de-de': "Du kannst deinen Gegner dazu veranlassen, sein Aktives Pokémon gegen 1 Pokémon auf seiner Bank auszutauschen."
		},

		damage: 50
	}, {
		cost: ["Grass"],

		name: {
			'en-us': "Tearing Gust",
			'fr-fr': "Rafale Déchirante",
			'es-es': "Ráfaga Desgarradora",
			'it-it': "Strapparaffica",
			'pt-br': "Ventania Cortante",
			'de-de': "Reißender Windstoß"
		},

		effect: {
			'en-us': "Put this Pokémon and all attached cards in the Lost Zone.",
			'fr-fr': "Placez ce Pokémon et toutes les cartes attachées dans la Zone Perdue.",
			'es-es': "Pon este Pokémon y todas las cartas unidas a él en la Zona Perdida.",
			'it-it': "Prendi questo Pokémon e tutte le carte a esso assegnate e mettili nell'area perduta.",
			'pt-br': "Coloque este Pokémon e todas as cartas ligadas a ele na Zona Perdida.",
			'de-de': "Lege dieses Pokémon und alle angelegten Karten ins Nirgendwo."
		},

		damage: 210
	}],

	retreat: 2,
	regulationMark: "F",


	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 674024,
				tcgplayer: 283879
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 674024,
				tcgplayer: 283879
			}
		},
	],
}

export default card
