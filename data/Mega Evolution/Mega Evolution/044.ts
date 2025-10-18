import { Card } from "../../../interfaces"
import Set from "../Mega Evolution"

const card: Card = {
	set: Set,

	name: {
		en: "Eiscue",
		fr: "Bekaglaçon",
		de: "Kubuin",
		it: "Eiscue",
		es: "Eiscue",
		pt: "Eiscue",
		'es-mx': "Eiscue"
	},

	illustrator: "Akira Komayama",
	rarity: "Common",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],
	stage: "Basic",
	dexId: [875],

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Freezing Headbutt",
			fr: "Coup d'Boule Gelant",
			de: "Frostige Kopfnuss",
			it: "Bottintesta Congelante",
			es: "Cabezazo Paralizante",
			pt: "Cabeçada Congelante",
			'es-mx': "Cabezazo Gélido"
		},

		effect: {
			en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
			de: "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt paralysiert.",
			it: "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato.",
			es: "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
			pt: "Jogue uma moeda. Se sair cara, o Pokémon Ativo do seu oponente agora estará Paralisado.",
			'es-mx': "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival ahora está Paralizado."
		},

		damage: 20
	}, {
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			en: "Tackle",
			fr: "Charge",
			de: "Tackle",
			it: "Azione",
			es: "Placaje",
			pt: "Investida",
			'es-mx': "Tacleada"
		},

		damage: 90
	}],

	retreat: 1,
	regulationMark: "I",

	thirdParty: {
		tcgplayer: 654383
	}
}

export default card