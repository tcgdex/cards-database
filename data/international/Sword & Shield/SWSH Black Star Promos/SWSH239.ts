import { Card } from "models/database/card"
import Set from "../SWSH Black Star Promos"

const card: Card = {
	dexId: [503],
	set: Set,

	name: {
		'fr-fr': "Clamiral de Hisui V",
		'de-de': "Hisui-Admurai V",
		'es-es': "Samurott de Hisui V",
		'pt-br': "Samurott de Hisui V",
		'it-it': "Samurott di Hisui V",
		'en-us': "Hisuian Samurott V"
	},

	rarity: "Promo",
	category: "Pokemon",
	hp: 220,
	types: ["Darkness"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		cost: ["Darkness"],

		name: {
			'fr-fr': "Panier Percé",
			'de-de': "Kippender Korb",
			'es-es': "Cesta al Suelo",
			'pt-br': "Virar o Cesto",
			'it-it': "Cestoschianto",
			'en-us': "Basket Crash"
		},

		effect: {
			'fr-fr': "Défaussez jusqu'à 2 Outils Pokémon des Pokémon de votre adversaire.",
			'de-de': "Lege bis zu 2 Pokémon-Ausrüstungen von Pokémon deines Gegners auf seinen Ablagestapel.",
			'es-es': "Descarta hasta 2 Herramientas Pokémon de los Pokémon de tu rival.",
			'pt-br': "Descarte até 2 Ferramentas Pokémon dos Pokémon do seu oponente.",
			'it-it': "Scarta fino a due carte Oggetto Pokémon dai Pokémon del tuo avversario.",
			'en-us': "Discard up to 2 Pokémon Tools from your opponent's Pokémon."
		}
	}, {
		cost: ["Darkness", "Darkness", "Darkness"],

		name: {
			'fr-fr': "Tranche Ombre",
			'de-de': "Schattenschlitzer",
			'es-es': "Tajo Sombrío",
			'pt-br': "Talho das Sombras",
			'it-it': "Lacerombra",
			'en-us': "Shadow Slash"
		},

		effect: {
			'fr-fr': "Défaussez une Énergie de ce Pokémon.",
			'de-de': "Lege 1 Energie von diesem Pokémon auf deinen Ablagestapel.",
			'es-es': "Descarta 1 Energía de este Pokémon.",
			'pt-br': "Descarte 1 Energia deste Pokémon.",
			'it-it': "Scarta un'Energia da questo Pokémon.",
			'en-us': "Discard an Energy from this Pokémon."
		},

		damage: 180
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "F",

	thirdParty: {
		cardmarket: 650949
	}
}

export default card
