import { Card } from "models/database/card"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		'en-us': "N's Zekrom",
		'fr-fr': "Zekrom de N",
		'es-es': "Zekrom de N",
		'es-mx': "Zekrom de N",
		'de-de': "Ns Zekrom",
		'it-it': "Zekrom di N",
		'pt-br': "Zekrom do N"
	},

	illustrator: "AKIRA EGAWA",
	rarity: "Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Dragon"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Shred",
			'fr-fr': "Déchiquetage",
			'es-es': "Hacer Trizas",
			'es-mx': "Despedazar",
			'de-de': "Zerfetzer",
			'it-it': "Tritatutto",
			'pt-br': "Triturar"
		},

		effect: {
			'en-us': "This attack's damage isn't affected by any effects on your opponent's Active Pokémon.",
			'fr-fr': "Les dégâts de cette attaque ne sont affectés par aucun effet en action sur le Pokémon Actif de votre adversaire.",
			'es-es': "El daño de este ataque no se ve afectado por ningún efecto en el Pokémon Activo de tu rival.",
			'es-mx': "El daño de este ataque no se ve afectado por ningún efecto en el Pokémon Activo de tu rival.",
			'de-de': "Der Schaden dieser Attacke wird durch Effekte auf dem Aktiven Pokémon deines Gegners nicht verändert.",
			'it-it': "I danni di questo attacco non sono influenzati da alcun effetto presente sul Pokémon attivo del tuo avversario.",
			'pt-br': "O dano deste ataque não é afetado por quaisquer efeitos no Pokémon Ativo do seu oponente."
		},

		damage: 70
	}, {
		cost: ["Fire", "Lightning", "Lightning", "Colorless"],

		name: {
			'en-us': "Rampaging Thunder",
			'fr-fr': "Tonnerre Saccageur",
			'es-es': "Furia Trueno",
			'es-mx': "Trueno Arrasador",
			'de-de': "Wütender Donner",
			'it-it': "Tuono Impazzito",
			'pt-br': "Trovão Voraz"
		},

		effect: {
			'en-us': "During your next turn, this Pokémon can't use attacks.",
			'fr-fr': "Pendant votre prochain tour, ce Pokémon ne peut pas utiliser d'attaques.",
			'es-es': "Durante tu próximo turno, este Pokémon no puede usar ataques.",
			'es-mx': "Durante tu próximo turno, este Pokémon no puede usar ataques.",
			'de-de': "Während deines nächsten Zuges kann dieses Pokémon keine Attacken einsetzen.",
			'it-it': "Durante il tuo prossimo turno, questo Pokémon non può usare attacchi.",
			'pt-br': "Durante o seu próximo turno, este Pokémon não poderá usar ataques."
		},

		damage: 250
	}],

	retreat: 2,
	regulationMark: "I",

	description: {
		'en-us': "When the interior part of its tail spins like a motor, Zekrom can generate many bolts of lightning to blast its surroundings.",
	},

	variants: [
	{
		type: "holo",
		thirdParty: {
			cardmarket: 869766,
			tcgplayer: 675967
		}
	},
	{
		type: "normal",
		stamp: ["pokemon-center"],
		thirdParty: {
			cardmarket: 894179,
			tcgplayer: 704446
		}
	},
	{
		type: "holo",
		stamp: ["pokemon-center"],
		thirdParty: {
			cardmarket: 894178,
			tcgplayer: 704447
		}
	},
	{
		type: "reverse",
		foil: "pokeball",
		thirdParty: {
			cardmarket: 870378,
			tcgplayer: 676973
		}
	},
	{
		type: "reverse",
		foil: "energy",
		thirdParty: {
			cardmarket: 870377,
			tcgplayer: 677113
		}
	},
],
}

export default card
