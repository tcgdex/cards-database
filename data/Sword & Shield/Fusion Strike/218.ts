import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [820],
	set: Set,

	name: {
		en: "Greedent VMAX",
		fr: "Rongrigou VMAX",
		es: "Greedent VMAX",
		it: "Greedent VMAX",
		pt: "Greedent VMAX",
		de: "Schlaraffel VMAX"
	},

	rarity: "Holo Rare VMAX",
	category: "Pokemon",
	hp: 320,
	types: ["Colorless"],

	evolveFrom: {
		en: "Greedent V",
		fr: "Rongrigou-V",
		es: "Greedent V",
		it: "Greedent-V",
		pt: "Greedent V",
		de: "Schlaraffel-V"
	},

	stage: "VMAX",
	retreat: 3,
	regulationMark: "E",
	illustrator: "PLANETA Mochizuki",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Turn a Profit",
			fr: "Tout Bénef",
			de: "Profit machen",
			es: "Sacar Provecho",
			pt: "Sair no Lucro",
			it: "Buon Profitto"
		},

		damage: 30,

		effect: {
			en: "If your opponent's Basic Pokémon is Knocked Out by damage from this attack, take 2 more Prize cards.",
			fr: "Si le Pokémon de base de votre adversaire est mis K.O. par les dégâts de cette attaque, récupérez 2 cartes Récompense supplémentaires.",
			de: "Wenn ein Basis-Pokémon deines Gegners durch Schaden dieser Attacke kampfunfähig wird, nimm 2 Preiskarten mehr.",
			es: "Si un Pokémon Básico de tu rival queda Fuera de Combate por el daño de este ataque, coge 2 cartas de Premio más.",
			pt: "Se o Pokémon Básico do seu oponente for Nocauteado pelo dano deste ataque, pegue 2 cartas de Prêmio a mais.",
			it: "Se un Pokémon Base del tuo avversario viene messo KO dai danni di questo attacco, prendi due carte Premio in più."
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Max Gimme Gimme",
			fr: "Piochomax",
			de: "Dyna-Gierschlund",
			es: "Maxidame Dame",
			pt: "Quero Max",
			it: "Dynadammi Dammi"
		},

		damage: 160,

		effect: {
			en: "Draw 3 cards.",
			fr: "Piochez 3 cartes.",
			de: "Ziehe 3 Karten.",
			es: "Roba 3 cartas.",
			pt: "Compre 3 cartas.",
			it: "Pesca tre carte."
		}
	}],

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 582954,
		tcgplayer: 253317
	}
}

export default card
