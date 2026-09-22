import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	description: {
		en: "Able to understand human speech and very intelligent, it loves to swim in the sea with people on its back."
	},

	name: {
		en: "Lapras",
		fr: "Lokhlass",
		de: "Lapras",
		es: "Lapras",
		it: "Lapras",
		'es-mx': "Lapras"
	},

	illustrator: "Masa",
	rarity: "Common",
	category: "Pokemon",
	dexId: [131],
	hp: 130,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Ferry Across",
			fr: "Navette Maritime",
			de: "Fährfahrt",
			es: "Travesía en Ferry",
			it: "Dorsotrasporto",
			'es-mx': "Nadotransporte"
		},

		effect: {
			en: "Search your deck for a Supporter card, reveal it, and put it into your hand. Then, shuffle your deck.",
			fr: "Cherchez dans votre deck une carte Supporter, montrez-la, puis ajoutez-la à votre main. Mélangez ensuite votre deck.",
			de: "Durchsuche dein Deck nach 1 Unterstützerkarte, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck.",
			es: "Busca en tu baraja 1 carta de Partidario, enséñala y ponla en tu mano. Después, baraja las cartas de tu baraja.",
			it: "Cerca nel tuo mazzo una carta Aiuto, mostrala e aggiungila alle carte che hai in mano. Poi rimischia il tuo mazzo.",
			'es-mx': "Busca en tu mazo 1 carta de Partidario, muéstrala y ponla en tu mano. Después, baraja tu mazo."
		},

		cost: ["Colorless"]
	}, {
		name: {
			en: "Ice Beam",
			fr: "Laser Glace",
			de: "Eisstrahl",
			es: "Rayo Hielo",
			it: "Geloraggio",
			'es-mx': "Rayo de Hielo"
		},

		effect: {
			en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
			de: "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt paralysiert.",
			es: "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
			it: "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato.",
			'es-mx': "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival ahora está Paralizado."
		},

		damage: 80,
		cost: ["Water", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "J",
	variants: [
		{
			type: "normal",
			stamp: ["30th-anniversary"],
			thirdParty: {
				cardmarket: 907623,
				tcgplayer: 716450
			}
		}
	],
}

export default card
