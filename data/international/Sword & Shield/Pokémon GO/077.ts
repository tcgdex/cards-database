import { Card } from "models/database/card"
import Set from "../Pokémon GO"

const card: Card = {
	dexId: [289],
	set: Set,

	name: {
		'en-us': "Slaking V",
		'fr-fr': "Monaflèmit V",
		'es-es': "Slaking V",
		'it-it': "Slaking V",
		'pt-br': "Slaking V",
		'de-de': "Letarking V"
	},

	illustrator: "Saki Hayashiro",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 230,
	types: ["Colorless"],
	stage: "Basic",
	suffix: "V",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Kinda Lazy",
			'fr-fr': "Tire-au-Flanc",
			'es-es': "Remolón",
			'it-it': "Pigritudine",
			'pt-br': "Preguicento",
			'de-de': "Faulpelz"
		},

		effect: {
			'en-us': "If you have exactly 2, 4, or 6 Prize cards remaining, this Pokémon can't attack.",
			'fr-fr': "S'il vous reste exactement 2, 4 ou 6 cartes Récompense, ce Pokémon ne peut pas attaquer.",
			'es-es': "Si te quedan exactamente 2, 4 o 6 cartas de Premio, este Pokémon no puede atacar.",
			'it-it': "Se hai esattamente due, quattro o sei carte Premio rimanenti, questo Pokémon non può attaccare.",
			'pt-br': "Se você tiver exatamente 2, 4 ou 6 cartas de Prêmio restantes, este Pokémon não poderá atacar.",
			'de-de': "Wenn du genau 2, 4 oder 6 verbleibende Preiskarten hast, kann dieses Pokémon nicht angreifen."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Heavy Impact",
			'fr-fr': "Gros Impact",
			'es-es': "Impacto Pesado",
			'it-it': "Impatto Pesante",
			'pt-br': "Impacto Pesado",
			'de-de': "Schwerer Einschlag"
		},

		damage: 260
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "F",


	

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 665688,
				tcgplayer: 277008
			}
		},
	],
}

export default card
