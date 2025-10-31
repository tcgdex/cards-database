import { Card } from "../../../interfaces"
import Set from "../Mega Evolution"

const card: Card = {
	set: Set,

	name: {
		en: "Grafaiai",
		fr: "Tag-Tag",
		de: "Affiti",
		it: "Grafaiai",
		es: "Grafaiai",
		pt: "Grafaiai",
		'es-mx': "Grafaiai"
	},

	illustrator: "Dsuke",
	rarity: "Common",
	category: "Pokemon",
	hp: 100,
	types: ["Darkness"],
	stage: "Stage1",
	dexId: [945],

	attacks: [{
		cost: ["Darkness", "Colorless"],

		name: {
			en: "Miraculous Paint",
			fr: "Peinture Miraculeuse",
			de: "Wunderfarbe",
			it: "Pittura Miracolosa",
			es: "Pintura Milagrosa",
			pt: "Tinta Miraculosa",
			'es-mx': "Pintura Milagrosa"
		},

		effect: {
			en: "Flip a coin. If heads, choose a Special Condition. Your opponent's Active Pokémon is now affected by that Special Condition.",
			fr: "Lancez une pièce. Si c'est face, choisissez un État Spécial. Le Pokémon Actif de votre adversaire est maintenant affecté par cet État Spécial.",
			de: "Wirf 1 Münze. Wähle bei Kopf 1 Speziellen Zustand. Das Aktive Pokémon deines Gegners ist jetzt von jenem Speziellen Zustand betroffen.",
			it: "Lancia una moneta. Se esce testa, scegli una condizione speciale. Il Pokémon attivo del tuo avversario viene influenzato da quella condizione speciale.",
			es: "Lanza 1 moneda. Si sale cara, elige una Condición Especial. El Pokémon Activo de tu rival pasa a estar afectado por esa Condición Especial.",
			pt: "Jogue uma moeda. Se sair cara, escolha uma Condição Especial. O Pokémon Ativo do seu oponente agora está afetado por aquela Condição Especial.",
			'es-mx': "Lanza 1 moneda. Si sale cara, elige 1 Condición Especial. El Pokémon Activo de tu rival ahora se ve afectado por esa Condición Especial."
		},

		damage: 90
	}],

	retreat: 1,
	regulationMark: "I",

	thirdParty: {
		tcgplayer: 654431,
		cardmarket: 851163
	}
}

export default card