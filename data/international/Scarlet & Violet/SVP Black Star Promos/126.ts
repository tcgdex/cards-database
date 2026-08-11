import { Card } from "models/database/card"
import Set from "../SVP Black Star Promos"

const card: Card = {
	dexId: [964],
	set: Set,

	name: {
		'en-us': "Palafin ex",
		'fr-fr': "Superdofin-ex",
		'es-es': "Palafin ex",
		'it-it': "Palafin-ex",
		'pt-br': "Palafin ex",
		'de-de': "Delfinator-ex"
	},

	rarity: "Promo",
	category: "Pokemon",
	hp: 340,
	types: ["Water"],
	evolveFrom: {
		'en-us': "Finizen",
		'fr-fr': "Dofin",
		'es-es': "Finizen",
		'it-it': "Finizen",
		'pt-br': "Finizen",
		'de-de': "Normifin"
	},
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Hero's Spirit",
			'fr-fr': "Âme Héroïque",
			'es-es': "Espíritu Heroico",
			'it-it': "Spirito dell'Eroe",
			'pt-br': "Espírito de Herói",
			'de-de': "Superheldenmut"
		},

		effect: {
			'en-us': "Put this Pokémon into play only with the effect of Palafin's Zero to Hero Ability.",
			'fr-fr': "Ce Pokémon ne peut être mis en jeu que par l'effet du talent Supermutation de Superdofin.",
			'es-es': "Pon este Pokémon en juego solo con el efecto de la habilidad Cambio Heroico de Palafin.",
			'it-it': "Metti questo Pokémon in gioco solo per effetto dell'abilità Supercambio di Palafin.",
			'pt-br': "Coloque este Pokémon em jogo somente com o efeito da Habilidade Do Abismo ao Heroísmo de Palafin.",
			'de-de': "Bringe dieses Pokémon nur mit dem Effekt von Delfinators Fähigkeit Superwechsel ins Spiel."
		}
	}],

	attacks: [{
		cost: ["Water"],

		name: {
			'en-us': "Giga Impact",
			'fr-fr': "Giga Impact",
			'es-es': "Gigaimpacto",
			'it-it': "Gigaimpatto",
			'pt-br': "Gigaimpacto",
			'de-de': "Gigastoß"
		},

		effect: {
			'en-us': "During your next turn, this Pokémon can't attack.",
			'fr-fr': "Pendant votre prochain tour, ce Pokémon ne peut pas attaquer.",
			'es-es': "Durante tu próximo turno, este Pokémon no puede atacar.",
			'it-it': "Durante il tuo prossimo turno, questo Pokémon non può attaccare.",
			'pt-br': "Durante o seu próximo turno, este Pokémon não poderá atacar.",
			'de-de': "Während deines nächsten Zuges kann dieses Pokémon nicht angreifen."
		},

		damage: 250
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "H",
	suffix: "ex",
	illustrator: "PLANETA Mochizuki",
	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 769423,
				tcgplayer: 556449
			},
		},
		{
			type: "holo",
			size: "jumbo",
			thirdParty: {
				cardmarket: 769424,
				tcgplayer: 560085
			}
		}
	],
}

export default card
