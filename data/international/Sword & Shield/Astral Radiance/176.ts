import { Card } from "models/database/card"
import Set from "../Astral Radiance"

const card: Card = {
	dexId: [503],
	set: Set,

	name: {
		'en-us': "Hisuian Samurott V",
		'fr-fr': "Clamiral de Hisui V",
		'es-es': "Samurott de Hisui V",
		'it-it': "Samurott di Hisui V",
		'pt-br': "Samurott de Hisui V",
		'de-de': "Hisui-Admurai V"
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 220,
	types: ["Darkness"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		cost: ["Darkness"],

		name: {
			'en-us': "Basket Crash",
			'fr-fr': "Panier Percé",
			'es-es': "Cesta al Suelo",
			'it-it': "Cestoschianto",
			'pt-br': "Virar o Cesto",
			'de-de': "Kippender Korb"
		},

		effect: {
			'en-us': "Discard up to 2 Pokémon Tools from your opponent's Pokémon.",
			'fr-fr': "Défaussez jusqu'à 2 Outils Pokémon des Pokémon de votre adversaire.",
			'es-es': "Descarta hasta 2 Herramientas Pokémon de los Pokémon de tu rival.",
			'it-it': "Scarta fino a due carte Oggetto Pokémon dai Pokémon del tuo avversario.",
			'pt-br': "Descarte até 2 Ferramentas Pokémon dos Pokémon do seu oponente.",
			'de-de': "Lege bis zu 2 Pokémon-Ausrüstungen von Pokémon deines Gegners auf seinen Ablagestapel."
		}
	}, {
		cost: ["Darkness", "Darkness", "Darkness"],

		name: {
			'en-us': "Shadow Slash",
			'fr-fr': "Tranche Ombre",
			'es-es': "Tajo Sombrío",
			'it-it': "Lacerombra",
			'pt-br': "Talho das Sombras",
			'de-de': "Schattenschlitzer"
		},

		effect: {
			'en-us': "Discard an Energy from this Pokémon.",
			'fr-fr': "Défaussez une Énergie de ce Pokémon.",
			'es-es': "Descarta 1 Energía de este Pokémon.",
			'it-it': "Scarta un'Energia da questo Pokémon.",
			'pt-br': "Descarte 1 Energia deste Pokémon.",
			'de-de': "Lege 1 Energie von diesem Pokémon auf deinen Ablagestapel."
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


	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 658837,
				tcgplayer: 272426
			}
		},
	],
}

export default card
