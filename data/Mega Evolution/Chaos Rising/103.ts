import { Card } from "../../../interfaces"
import Set from "../Chaos Rising"

const card: Card = {
	set: Set,

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 886495,
				tcgplayer: 693469
			}
		},
	],

	name: {
		en: "Cobalion ex",
		fr: "Cobaltium-ex",
		es: "Cobalion ex",
		'es-mx': "Cobalion ex",
		de: "Kobalium-ex",
		it: "Cobalion-ex",
		pt: "Cobalion ex"
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	dexId: [638],
	hp: 210,
	types: ["Metal"],
	stage: "Basic",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			en: "Metal Road",
			fr: "Route Métal",
			es: "Camino Metálico",
			'es-mx': "Camino de Metal",
			de: "Metallpfad",
			it: "Strada di Metallo",
			pt: "Estrada de Metal"
		},

		effect: {
			en: "Once during your turn, when this Pokémon moves from your Bench to the Active Spot, you may use this Ability. Move any amount of {M} Energy from your other Pokémon to this Pokémon.",
			fr: "Une fois pendant votre tour, lorsque ce Pokémon se déplace de votre Banc vers le Poste Actif, vous pouvez utiliser ce talent. Déplacez autant d'Énergies {M} que vous le voulez de vos autres Pokémon vers celui-ci.",
			es: "Una vez durante tu turno, cuando este Pokémon se mueve de tu Banca al Puesto Activo, puedes usar esta habilidad. Mueve cualquier cantidad de Energías {M} de tus otros Pokémon a este Pokémon.",
			'es-mx': "Una vez durante tu turno, cuando este Pokémon se mueve de tu Banca al Puesto Activo, puedes usar esta Habilidad. Mueve cualquier cantidad de Energías {M} de tus otros Pokémon a este Pokémon.",
			de: "Einmal während deines Zuges, wenn dieses Pokémon von deiner Bank in die Aktive Position wechselt, kannst du diese Fähigkeit einsetzen. Verschiebe beliebig viele {M}-Energien von deinen anderen Pokémon auf dieses Pokémon.",
			it: "Una sola volta durante il tuo turno, quando questo Pokémon si sposta dalla tua panchina in posizione attiva, puoi usare questa abilità. Sposta un numero qualsiasi di Energie {M} dai tuoi altri Pokémon a questo Pokémon.",
			pt: "Uma vez durante o seu turno, quando este Pokémon for movido do seu Banco para o Campo Ativo, você poderá usar esta Habilidade. Mova qualquer quantidade de Energia {M} dos seus outros Pokémon para este Pokémon."
		}
	}],

	attacks: [{
		name: {
			en: "Power Tackle",
			fr: "Tacle Puissant",
			es: "Placaje Poderoso",
			'es-mx': "Tacleada Poderosa",
			de: "Kraft-Tackle",
			it: "Forzazione",
			pt: "Investida Poderosa"
		},

		cost: ["Metal", "Metal", "Colorless"],
		damage: 200,

		effect: {
			en: "During your next turn, this Pokémon can't use attacks.",
			fr: "Pendant votre prochain tour, ce Pokémon ne peut pas utiliser d'attaques.",
			es: "Durante tu próximo turno, este Pokémon no puede usar ataques.",
			'es-mx': "Durante tu próximo turno, este Pokémon no puede usar ataques.",
			de: "Während deines nächsten Zuges kann dieses Pokémon keine Attacken einsetzen.",
			it: "Durante il tuo prossimo turno, questo Pokémon non può usare attacchi.",
			pt: "Durante o seu próximo turno, este Pokémon não poderá usar ataques."
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
}

export default card
