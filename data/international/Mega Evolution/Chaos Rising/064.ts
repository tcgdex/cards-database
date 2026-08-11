import { Card } from "models/database/card"
import Set from "../Chaos Rising"

const card: Card = {
	set: Set,


	name: {
		'en-us': "Cobalion ex",
		'fr-fr': "Cobaltium-ex",
		'es-es': "Cobalion ex",
		'es-mx': "Cobalion ex",
		'de-de': "Kobalium-ex",
		'it-it': "Cobalion-ex",
		'pt-br': "Cobalion ex"
	},

	illustrator: "5ban Graphics",
	rarity: "Double rare",
	category: "Pokemon",
	dexId: [638],
	hp: 210,
	types: ["Metal"],
	stage: "Basic",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Metal Road",
			'fr-fr': "Route Métal",
			'es-es': "Camino Metálico",
			'es-mx': "Camino de Metal",
			'de-de': "Metallpfad",
			'it-it': "Strada di Metallo",
			'pt-br': "Estrada de Metal"
		},

		effect: {
			'en-us': "Once during your turn, when this Pokémon moves from your Bench to the Active Spot, you may use this Ability. Move any amount of {M} Energy from your other Pokémon to this Pokémon.",
			'fr-fr': "Une fois pendant votre tour, lorsque ce Pokémon se déplace de votre Banc vers le Poste Actif, vous pouvez utiliser ce talent. Déplacez autant d'Énergies {M} que vous le voulez de vos autres Pokémon vers celui-ci.",
			'es-es': "Una vez durante tu turno, cuando este Pokémon se mueve de tu Banca al Puesto Activo, puedes usar esta habilidad. Mueve cualquier cantidad de Energías {M} de tus otros Pokémon a este Pokémon.",
			'es-mx': "Una vez durante tu turno, cuando este Pokémon se mueve de tu Banca al Puesto Activo, puedes usar esta Habilidad. Mueve cualquier cantidad de Energías {M} de tus otros Pokémon a este Pokémon.",
			'de-de': "Einmal während deines Zuges, wenn dieses Pokémon von deiner Bank in die Aktive Position wechselt, kannst du diese Fähigkeit einsetzen. Verschiebe beliebig viele {M}-Energien von deinen anderen Pokémon auf dieses Pokémon.",
			'it-it': "Una sola volta durante il tuo turno, quando questo Pokémon si sposta dalla tua panchina in posizione attiva, puoi usare questa abilità. Sposta un numero qualsiasi di Energie {M} dai tuoi altri Pokémon a questo Pokémon.",
			'pt-br': "Uma vez durante o seu turno, quando este Pokémon for movido do seu Banco para o Campo Ativo, você poderá usar esta Habilidade. Mova qualquer quantidade de Energia {M} dos seus outros Pokémon para este Pokémon."
		}
	}],

	attacks: [{
		name: {
			'en-us': "Power Tackle",
			'fr-fr': "Tacle Puissant",
			'es-es': "Placaje Poderoso",
			'es-mx': "Tacleada Poderosa",
			'de-de': "Kraft-Tackle",
			'it-it': "Forzazione",
			'pt-br': "Investida Poderosa"
		},

		cost: ["Metal", "Metal", "Colorless"],
		damage: 200,

		effect: {
			'en-us': "During your next turn, this Pokémon can't use attacks.",
			'fr-fr': "Pendant votre prochain tour, ce Pokémon ne peut pas utiliser d'attaques.",
			'es-es': "Durante tu próximo turno, este Pokémon no puede usar ataques.",
			'es-mx': "Durante tu próximo turno, este Pokémon no puede usar ataques.",
			'de-de': "Während deines nächsten Zuges kann dieses Pokémon keine Attacken einsetzen.",
			'it-it': "Durante il tuo prossimo turno, questo Pokémon non può usare attacchi.",
			'pt-br': "Durante o seu próximo turno, este Pokémon não poderá usar ataques."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "J",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 886456,
				tcgplayer: 693468
			}
		},
	],
}

export default card
