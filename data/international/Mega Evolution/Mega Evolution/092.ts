import { Card } from "models/database/card"
import Set from "../Mega Evolution"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Grafaiai",
		'fr-fr': "Tag-Tag",
		'de-de': "Affiti",
		'it-it': "Grafaiai",
		'es-es': "Grafaiai",
		'pt-br': "Grafaiai",
		'es-mx': "Grafaiai"
	},

	illustrator: "Dsuke",
	rarity: "Common",
	category: "Pokemon",
	hp: 100,
	types: ["Darkness"],
	evolveFrom: {
		'en-us': "Shroodle",
		'fr-fr': "Gribouraigne",
		'de-de': "Sproxi",
		'it-it': "Shroodle",
		'es-es': "Shroodle",
		'pt-br': "Shroodle",
		'es-mx': "Shroodle"
	},
	stage: "Stage1",
	dexId: [945],

	attacks: [{
		cost: ["Darkness", "Colorless"],

		name: {
			'en-us': "Miraculous Paint",
			'fr-fr': "Peinture Miraculeuse",
			'de-de': "Wunderfarbe",
			'it-it': "Pittura Miracolosa",
			'es-es': "Pintura Milagrosa",
			'pt-br': "Tinta Miraculosa",
			'es-mx': "Pintura Milagrosa"
		},

		effect: {
			'en-us': "Flip a coin. If heads, choose a Special Condition. Your opponent's Active Pokémon is now affected by that Special Condition.",
			'fr-fr': "Lancez une pièce. Si c'est face, choisissez un État Spécial. Le Pokémon Actif de votre adversaire est maintenant affecté par cet État Spécial.",
			'de-de': "Wirf 1 Münze. Wähle bei Kopf 1 Speziellen Zustand. Das Aktive Pokémon deines Gegners ist jetzt von jenem Speziellen Zustand betroffen.",
			'it-it': "Lancia una moneta. Se esce testa, scegli una condizione speciale. Il Pokémon attivo del tuo avversario viene influenzato da quella condizione speciale.",
			'es-es': "Lanza 1 moneda. Si sale cara, elige una Condición Especial. El Pokémon Activo de tu rival pasa a estar afectado por esa Condición Especial.",
			'pt-br': "Jogue uma moeda. Se sair cara, escolha uma Condição Especial. O Pokémon Ativo do seu oponente agora está afetado por aquela Condição Especial.",
			'es-mx': "Lanza 1 moneda. Si sale cara, elige 1 Condición Especial. El Pokémon Activo de tu rival ahora se ve afectado por esa Condición Especial."
		},

		damage: 90
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "I",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 851163,
				tcgplayer: 654431
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 851163,
				tcgplayer: 654431
			}
		},
	],
}

export default card
