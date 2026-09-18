import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	name: {
		en: "Mewtwo ex",
		fr: "Mewtwo-ex",
		de: "Mewtu-ex",
		es: "Mewtwo ex",
		it: "Mewtwo-ex",
		'es-mx': "Mewtwo ex"
	},

	illustrator: "Yano Keiji",
	rarity: "Special illustration rare",
	category: "Pokemon",
	dexId: [150],
	hp: 230,
	types: ["Psychic"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		name: {
			en: "Photon Bullets",
			fr: "Projectiles Photons",
			de: "Photonenkugeln",
			es: "Balas Fotónicas",
			it: "Dardi Fotonici",
			'es-mx': "Balas Fotónicas"
		},

		effect: {
			en: "This attack does 50 damage to each of your opponent's Pokémon <em>ex</em>. <em>(Don't apply Weakness and Resistance for Benched Pokémon.)</em>",
			fr: "Cette attaque inflige 50 dégâts à chacun des Pokémon-<em>ex</em> de votre adversaire. <em>(N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)</em>",
			de: "Diese Attacke fügt jedem Pokémon-<em>ex</em> deines Gegners 50 Schadenspunkte zu. <em>(Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)</em>",
			es: "Este ataque hace 50 puntos de daño a cada uno de los Pokémon <em>ex</em> de tu rival. <em>(No apliques Debilidad y Resistencia a los Pokémon en Banca)</em>.",
			it: "Questo attacco infligge 50 danni a ciascuno dei Pokémon-<em>ex</em> del tuo avversario. <em>Non applicare debolezza e resistenza ai Pokémon in panchina</em>.",
			'es-mx': "Este ataque hace 50 puntos de daño a cada uno de los Pokémon <em>ex</em> de tu rival. <em>(No apliques Debilidad y Resistencia a los Pokémon en Banca).</em>"
		},

		cost: ["Psychic", "Psychic"]
	}, {
		name: {
			en: "Psychic Powers",
			fr: "Pouvoirs Psychiques",
			de: "Psychokräfte",
			es: "Poderes Psíquicos",
			it: "Psicopoteri",
			'es-mx': "Poderes Psíquicos"
		},

		effect: {
			en: "During your next turn, this Pokémon can't use attacks.",
			fr: "Pendant votre prochain tour, ce Pokémon ne peut pas utiliser d'attaques.",
			de: "Während deines nächsten Zuges kann dieses Pokémon keine Attacken einsetzen.",
			es: "Durante tu próximo turno, este Pokémon no puede usar ataques.",
			it: "Durante il tuo prossimo turno, questo Pokémon non può usare attacchi.",
			'es-mx': "Durante tu próximo turno, este Pokémon no puede usar ataques."
		},

		damage: 230,
		cost: ["Psychic", "Psychic", "Psychic"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "J",
	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 908353
			}
		}
	],
}

export default card