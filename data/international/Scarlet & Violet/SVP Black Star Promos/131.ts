import { Card } from "models/database/card"
import Set from "../SVP Black Star Promos"

const card: Card = {
	dexId: [230],
	set: Set,

	name: {
		'en-us': "Kingdra ex",
		'fr-fr': "Hyporoi-ex",
		'es-es': "Kingdra ex",
		'it-it': "Kingdra-ex",
		'pt-br': "Kingdra ex",
		'de-de': "Seedraking-ex"
	},

	rarity: "Promo",
	category: "Pokemon",
	hp: 310,
	types: ["Water"],
	evolveFrom: {
		'en-us': "Seadra",
		'fr-fr': "Hypocéan",
		'es-es': "Seadra",
		'it-it': "Seadra",
		'pt-br': "Seadra",
		'de-de': "Seemon"
	},
	stage: "Stage2",

	attacks: [{
		cost: ["Water"],

		name: {
			'en-us': "King's Order",
			'fr-fr': "Ordre du Roi",
			'es-es': "Mandato Real",
			'it-it': "Ordine Sovrano",
			'pt-br': "Decreto do Rei",
			'de-de': "Auftrag des Königs"
		},

		effect: {
			'en-us': "Put up to 3 {W} Pokémon from your discard pile onto your Bench.",
			'fr-fr': "Placez jusqu'à 3 Pokémon {W} de votre pile de défausse sur votre Banc.",
			'es-es': "Pon hasta 3 Pokémon {W} de tu pila de descartes en tu Banca.",
			'it-it': "Prendi fino a tre Pokémon {W} dalla tua pila degli scarti e mettili nella tua panchina.",
			'pt-br': "Coloque até 3 Pokémon {W} da sua pilha de descarte no seu Banco.",
			'de-de': "Lege bis zu 3 {W}-Pokémon aus deinem Ablagestapel auf deine Bank."
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Hydro Pump",
			'fr-fr': "Hydrocanon",
			'es-es': "Hidrobomba",
			'it-it': "Idropompa",
			'pt-br': "Jato d'Água",
			'de-de': "Hydropumpe"
		},

		effect: {
			'en-us': "This attack does 50 more damage for each {W} Energy attached to this Pokémon.",
			'fr-fr': "Cette attaque inflige 50 dégâts supplémentaires pour chaque Énergie {W} attachée à ce Pokémon.",
			'es-es': "Este ataque hace 50 puntos de daño más por cada Energía {W} unida a este Pokémon.",
			'it-it': "Questo attacco infligge 50 danni in più per ogni Energia {W} assegnata a questo Pokémon.",
			'pt-br': "Este ataque causa 50 pontos de dano a mais para cada Energia {W} ligada a este Pokémon.",
			'de-de': "Diese Attacke fügt für jede an dieses Pokémon angelegte {W}-Energie 50 Schadenspunkte mehr zu."
		},

		damage: "50+"
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",
	suffix: "ex",
	illustrator: "akagi",
	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 780811,
				tcgplayer: 562019
			},
		}
	],
}

export default card
