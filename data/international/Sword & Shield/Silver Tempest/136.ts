import { Card } from "models/database/card"
import Set from "../Silver Tempest"

const card: Card = {
	dexId: [895],
	set: Set,

	name: {
		'en-us': "Regidrago VSTAR",
		'fr-fr': "Regidrago VSTAR",
		'es-es': "Regidrago V-ASTRO",
		'it-it': "Regidrago V ASTRO",
		'pt-br': "Regidrago V-ASTRO",
		'de-de': "Regidrago VSTAR"
	},

	illustrator: "PLANETA Yamashita",
	rarity: "Holo Rare VSTAR",
	category: "Pokemon",
	hp: 280,
	types: ["Dragon"],

	evolveFrom: {
		'en-us': "Regidrago V",
		'fr-fr': "Regidrago-V",
		'es-es': "Regidrago V",
		'it-it': "Regidrago-V",
		'pt-br': "Regidrago V",
		'de-de': "Regidrago-V"
	},

	stage: "VSTAR",
	suffix: "V",

	attacks: [{
		cost: ["Grass", "Grass", "Fire"],

		name: {
			'en-us': "Apex Dragon",
			'fr-fr': "Dragon Apex",
			'es-es': "Dragón Ápex",
			'it-it': "Drago Apex",
			'pt-br': "Dragão Superpredador",
			'de-de': "Apex-Drache"
		},

		effect: {
			'en-us': "Choose an attack from a Dragon Pokémon in your discard pile and use it as this attack.",
			'fr-fr': "Choisissez une attaque d'un Pokémon Dragon de votre pile de défausse et utilisez-la en tant que cette attaque.",
			'es-es': "Elige 1 ataque de 1 de los Pokémon Dragon de tu pila de descartes y úsalo para este ataque.",
			'it-it': "Scegli un attacco di un Pokémon Dragon nella tua pila degli scarti e usalo al posto di questo attacco.",
			'pt-br': "Escolha um ataque de um Pokémon Dragon da sua pilha de descarte e use-o como este ataque.",
			'de-de': "Wähle 1 Attacke eines Dragon-Pokémon in deinem Ablagestapel und setze sie als diese Attacke ein."
		}
	}],

	retreat: 3,
	regulationMark: "F",


	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 682183,
				tcgplayer: 451395
			}
		},
	],
}

export default card
