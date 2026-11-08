import { Card } from 'models/database/card'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,

	name: {
		'en-us': "Empoleon V",
		'fr-fr': "Pingoléon V",
		'es-es': "Empoleon V",
		'it-it': "Empoleon V",
		'pt-br': "Empoleon V",
		'de-de': "Impoleon V"
	},

	illustrator: "PLANETA Mochizuki",
	rarity: "Promo",
	category: "Pokemon",
	hp: 210,
	types: ["Water"],

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Emperor's Eyes",
			'fr-fr': "Regard de l'Empereur",
			'es-es': "Ojos del Emperador",
			'it-it': "Sguardo dell'Imperatore",
			'pt-br': "Olhos do Imperador",
			'de-de': "Kaiserliche Augen"
		},

		effect: {
			'en-us': "As long as this Pokémon is in the Active Spot, your opponent's Basic Pokémon in play have no Abilities, except for Pokémon with a Rule Box (Pokémon V, Pokémon-GX, etc. have Rule Boxes).",
			'fr-fr': "Tant que ce Pokémon est sur le Poste Actif, les Pokémon de base en jeu de votre adversaire n'ont pas de talent, à l'exception des Pokémon ayant un encadré Règle(les Pokémon-V, Pokémon-GX, etc. ont des encadrés Règle).",
			'es-es': "Mientras este Pokémon esté en el Puesto Activo, los Pokémon Básicos en juego de tu rival no tienen ninguna habilidad, excepto los Pokémon con un recuadro de regla (Pokémon V, Pokémon-GX, etc. tienen recuadros de regla).",
			'it-it': "Fintanto che questo Pokémon è in posizione attiva, i Pokémon Base in gioco del tuo avversario non hanno abilità, a eccezione di quelli che hanno una regola speciale. I Pokémon-V, i Pokémon-GX, ecc. hanno regole speciali.",
			'pt-br': "Enquanto este Pokémon estiver no Campo Ativo, os Pokémon Básicos em jogo do seu oponente não têm Habilidades, exceto por Pokémon que tenham uma Caixa de Regras (Pokémon V, Pokémon-GX, etc. têm Caixas de Regras).",
			'de-de': "Solange dieses Pokémon in der Aktiven Position ist, haben die Basis-Pokémon deines Gegners im Spiel keine Fähigkeiten, außer Pokémon, die ein Regelfeld haben (Pokémon-V, Pokémon-GX usw. haben Regelfelder)."
		}
	}],

	attacks: [{
		name: {
			'en-us': "Swirling Slice",
			'fr-fr': "Coupe Tourbillonnante",
			'es-es': "Tajo Remolino",
			'it-it': "Taglio Vorticoso",
			'pt-br': "Corte em Espiral",
			'de-de': "Wirbelnder Schnitt"
		},

		effect: {
			'en-us': "Move an Energy from this Pokémon to 1 of your Benched Pokémon.",
			'fr-fr': "Déplacez une Énergie de ce Pokémon vers l'un de vos Pokémon de Banc.",
			'es-es': "Mueve 1 Energía de este Pokémon a 1 de tus Pokémon en Banca.",
			'it-it': "Sposta un'Energia da questo Pokémon a uno di quelli nella tua panchina.",
			'pt-br': "Mova 1 Energia deste Pokémon para 1 dos seus Pokémon no Banco.",
			'de-de': "Verschiebe 1 Energie von diesem Pokémon auf 1 Pokémon auf deiner Bank."
		},

		damage: 130,
		cost: ["Water", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2,
	stage: "Basic",
	dexId: [395],

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	regulationMark: "E",
	suffix: "V",

	thirdParty: {
		cardmarket: 547866
	}
}

export default card
