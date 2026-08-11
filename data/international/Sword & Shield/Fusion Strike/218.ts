import { Card } from "models/database/card"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [820],
	set: Set,

	name: {
		'en-us': "Greedent VMAX",
		'fr-fr': "Rongrigou VMAX",
		'es-es': "Greedent VMAX",
		'it-it': "Greedent VMAX",
		'pt-br': "Greedent VMAX",
		'de-de': "Schlaraffel VMAX"
	},

	rarity: "Holo Rare VMAX",
	category: "Pokemon",
	hp: 320,
	types: ["Colorless"],

	evolveFrom: {
		'en-us': "Greedent V",
		'fr-fr': "Rongrigou-V",
		'es-es': "Greedent V",
		'it-it': "Greedent-V",
		'pt-br': "Greedent V",
		'de-de': "Schlaraffel-V"
	},

	stage: "VMAX",
	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "E",
	illustrator: "PLANETA Mochizuki",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Turn a Profit",
			'fr-fr': "Tout Bénef",
			'de-de': "Profit machen",
			'es-es': "Sacar Provecho",
			'pt-br': "Sair no Lucro",
			'it-it': "Buon Profitto"
		},

		damage: 30,

		effect: {
			'en-us': "If your opponent's Basic Pokémon is Knocked Out by damage from this attack, take 2 more Prize cards.",
			'fr-fr': "Si le Pokémon de base de votre adversaire est mis K.O. par les dégâts de cette attaque, récupérez 2 cartes Récompense supplémentaires.",
			'de-de': "Wenn ein Basis-Pokémon deines Gegners durch Schaden dieser Attacke kampfunfähig wird, nimm 2 Preiskarten mehr.",
			'es-es': "Si un Pokémon Básico de tu rival queda Fuera de Combate por el daño de este ataque, coge 2 cartas de Premio más.",
			'pt-br': "Se o Pokémon Básico do seu oponente for Nocauteado pelo dano deste ataque, pegue 2 cartas de Prêmio a mais.",
			'it-it': "Se un Pokémon Base del tuo avversario viene messo KO dai danni di questo attacco, prendi due carte Premio in più."
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Max Gimme Gimme",
			'fr-fr': "Piochomax",
			'de-de': "Dyna-Gierschlund",
			'es-es': "Maxidame Dame",
			'pt-br': "Quero Max",
			'it-it': "Dynadammi Dammi"
		},

		damage: 160,

		effect: {
			'en-us': "Draw 3 cards.",
			'fr-fr': "Piochez 3 cartes.",
			'de-de': "Ziehe 3 Karten.",
			'es-es': "Roba 3 cartas.",
			'pt-br': "Compre 3 cartas.",
			'it-it': "Pesca tre carte."
		}
	}],


	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 582954,
				tcgplayer: 253317
			}
		},
	],
}

export default card
