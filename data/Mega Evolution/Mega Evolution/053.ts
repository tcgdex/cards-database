import { Card } from "../../../interfaces"
import Set from "../Mega Evolution"

const card: Card = {
	set: Set,

	name: {
		en: "Heliolisk",
		fr: "Iguolta",
		de: "Elezard",
		it: "Heliolisk",
		es: "Heliolisk",
		pt: "Heliolisk",
		'es-mx': "Heliolisk"
	},

	illustrator: "Nakamura Ippan",
	rarity: "Common",
	category: "Pokemon",
	hp: 120,
	types: ["Lightning"],
	stage: "Stage1",
	dexId: [695],

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Dazzle Blast",
			fr: "Explosion de Lumière",
			de: "Blendende Explosion",
			it: "Accecobomba",
			es: "Destello Deslumbrante",
			pt: "Explosão Fascinante",
			'es-mx': "Explosión Deslumbrante"
		},

		effect: {
			en: "Your opponent's Active Pokémon is now Confused.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Confus.",
			de: "Das Aktive Pokémon deines Gegners ist jetzt verwirrt.",
			it: "Il Pokémon attivo del tuo avversario viene confuso.",
			es: "El Pokémon Activo de tu rival pasa a estar Confundido.",
			pt: "O Pokémon Ativo do seu oponente agora está Confuso.",
			'es-mx': "El Pokémon Activo de tu rival ahora está Confundido."
		},

		damage: 20
	}, {
		cost: ["Lightning", "Colorless"],

		name: {
			en: "Head Bolt",
			fr: "Éclair Frontal",
			de: "Kopf-Blitz",
			it: "Zuccalampo",
			es: "Rayo de Cabeza",
			pt: "Raio de Cabeça",
			'es-mx': "Rayo Capital"
		},

		damage: 70
	}],

	retreat: 1,
	regulationMark: "I",

	thirdParty: {
		tcgplayer: 654392
	}
}

export default card