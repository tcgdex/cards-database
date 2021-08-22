import { Card } from '../../../interfaces'
import Set from '../Battle Styles'

const card: Card = {
	set: Set,

	name: {
		en: "Empoleon V",
		fr: "Pingoléon V",
		es: "Empoleon V",
		it: "Empoleon V",
		pt: "Empoleon V",
		de: "Impoleon V"
	},

	illustrator: "Ayaka Yoshida",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 210,
	types: ["Water"],

	abilities: [{
		type: "Ability",

		name: {
			en: "Emperor’s Eyes",
			fr: "Regard de l’Empereur",
			es: "Ojos del Emperador",
			it: "Sguardo dell’Imperatore",
			pt: "Olhos do Imperador",
			de: "Kaiserliche Augen"
		},

		effect: {
			en: "As long as this Pokémon is in the Active Spot, your opponent’s Basic Pokémon in play have no Abilities, except for Pokémon with a Rule Box (Pokémon V, Pokémon-GX, etc. have Rule Boxes).",
			fr: "Tant que ce Pokémon est sur le Poste Actif, les Pokémon de base en jeu de votre adversaire n’ont pas de talent, à l’exception des Pokémon ayant un encadré Règle(les Pokémon-V, Pokémon-GX, etc. ont des encadrés Règle).",
			es: "Mientras este Pokémon esté en el Puesto Activo, los Pokémon Básicos en juego de tu rival no tienen ninguna habilidad, excepto los Pokémon con un recuadro de regla (Pokémon V, Pokémon-GX, etc. tienen recuadros de regla).",
			it: "Fintanto che questo Pokémon è in posizione attiva, i Pokémon Base in gioco del tuo avversario non hanno abilità, a eccezione di quelli che hanno una regola speciale. I Pokémon-V, i Pokémon-GX, ecc. hanno regole speciali.",
			pt: "Enquanto este Pokémon estiver no Campo Ativo, os Pokémon Básicos em jogo do seu oponente não têm Habilidades, exceto por Pokémon que tenham uma Caixa de Regras (Pokémon V, Pokémon-GX, etc. têm Caixas de Regras).",
			de: "Solange dieses Pokémon in der Aktiven Position ist, haben die Basis-Pokémon deines Gegners im Spiel keine Fähigkeiten, außer Pokémon, die ein Regelfeld haben (Pokémon-V, Pokémon-GX usw. haben Regelfelder)."
		}
	}],

	attacks: [{
		name: {
			en: "Swirling Slice",
			fr: "Coupe Tourbillonnante",
			es: "Tajo Remolino",
			it: "Taglio Vorticoso",
			pt: "Corte em Espiral",
			de: "Wirbelnder Schnitt"
		},

		effect: {
			en: "Move an Energy from this Pokémon to 1 of your Benched Pokémon.",
			fr: "Déplacez une Énergie de ce Pokémon vers l’un de vos Pokémon de Banc.",
			es: "Mueve 1 Energía de este Pokémon a 1 de tus Pokémon en Banca.",
			it: "Sposta un’Energia da questo Pokémon a uno di quelli nella tua panchina.",
			pt: "Mova 1 Energia deste Pokémon para 1 dos seus Pokémon no Banco.",
			de: "Verschiebe 1 Energie von diesem Pokémon auf 1 Pokémon auf deiner Bank."
		},

		damage: 130,
		cost: ["Water", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	stage: "Basic",
	suffix: "V"
}

export default card